(ns file-validation.core
  (:require [iota                  :as iota]
            [clojure.string        :as string]
            [clojure.core.reducers :as reducers]
            [schema.core           :as s]))

(defn split-line
  [line]
  (string/split line #"\t"))

(defn remove-header
  [lines]
  (drop 1 lines))

(def ValidAccountNumber (s/pred (fn [st]
                                  (and (string? st)
                                       (= (count st) 8)))
                                :valid-account-number?))

(def ValidPhoneNumber (s/pred (fn [n] 
                                (and (string? n)
                                     (= (count n) 11)))
                              :valid-phone-number?))

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
  (let [main-reducer (fn [split-lines] (reducers/reduce (fn [acc l]
                                                          (conj acc (accumulate-errors l)))
                                                        []
                                                        split-lines))]
    (->> lines
         remove-header
         (reducers/map #(split-line %))
         main-reducer)))

(comment
  (let [lines (iota/seq "fixtures/003.tab")
        results (process-file lines)]
    (not (empty? results)))

  )
