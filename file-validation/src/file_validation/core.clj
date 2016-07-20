(ns file-validation.core
  (:require [iota                  :as iota]
            [clojure.string        :as string]
            [clojure.core.reducers :as r]
            [clojure.core.async    :as async]
            [schema.core           :as s]))

(defn split-line
  [line]
  (string/split line #"\t"))

(defn remove-header
  [lines]
  (drop 1 lines))

(comment
  (let [validator-name :valid-account-number?
        parts          ]
    )
)

(defmacro defvalidator
  [^clojure.lang.Keyword validator-name & body]
  (let [symbol-name (symbol (string/join "" (map #(string/capitalize %) (-> validator-name
                                                                            name
                                                                            (string/replace #"\?" "")
                                                                            (string/split #"-")))))]
    `(def ~symbol-name (s/pred (fn [~'it]
                                 ~@body)
                               ~validator-name))))

(defvalidator :valid-account-number?
  (and (string? it)
       (= (count it) 8)))

(defvalidator :valid-phone-number?
  (and (string? it)
       (= (count it) 11)))

(def indices
  {:account-number 0
   :phone-number   1})

(defn make-validator
  [^clojure.lang.Keyword column-name ^java.util.Map type-schema]
  (let [target-column-idx (get indices column-name)]
    (fn [columns]
      (let [target-column (nth columns target-column-idx)
            errors        (s/check type-schema target-column)
            valid?        (nil? errors)]
        [valid? (or errors columns)]))))

(def validator-chain
  [(make-validator :account-number ValidAccountNumber)
   (make-validator :phone-number ValidPhoneNumber)])

(defn accumulate-errors
  [line]
  (reduce (fn [acc validator-fn]
            (let [[valid? errors-or-line] (validator-fn (:line acc))]
              (if valid?
                acc
                (update-in acc [:errors] conj errors-or-line))))
          {:line   line
           :errors []}
          validator-chain))

(defn process-file
  [lines]
  (let [validation-reducer      (fn [split-lines]
                                  (r/fold
                                   (fn [acc l]
                                     (conj acc (accumulate-errors l)))
                                   []
                                   split-lines))
        chunks                  (->> lines
                                     remove-header
                                     (partition 1000))
        num-chunks              (count chunks)
        num-completed           (atom 0)
        num-lines               (count lines)
        validation-results-chan (async/chan)
        validation-results-atom (atom [])]
    (doseq [chunk chunks]
      (async/go
        (let [chunk-id           (str (java.util.UUID/randomUUID))
              num-lines-in-chunk (count chunk)]
          (async/>! validation-results-chan (validation-reducer (r/map #(split-line %)
                                                                       chunk)))
          (swap! num-completed + num-lines-in-chunk)
          (println (format "[%s] %s lines completed out of %s." chunk-id @num-completed num-lines))))
      (async/go
        (swap! validation-results-atom conj (async/<! validation-results-chan))))
    (loop []
      (if (>= @num-completed num-lines)
        @validation-results-atom
        (recur)))))

(comment
  (let [lines   (iota/vec "fixtures/003.tab")
        results (process-file lines)]
    (count results))
  )
