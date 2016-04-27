(ns file-validation.core
  (:require [iota                  :as iota]
            [clojure.string        :as string]
            [clojure.core.reducers :as reducers]))

(defn split-line
  [line]
  (string/split line #"\t"))

(defn remove-header
  [lines]
  (drop 1 lines))

(defn track-dup
  [state idx line]
  (let [columns (split-line line)
        target  (nth columns idx)]
    (if-not (empty? (get state target))
      (update-in state [target] conj columns)
      (assoc state target [columns]))))

(defn make-track-dup-reducer
  [target-idx]
  (fn [lines]
    (reducers/reduce (fn [acc line]
                       (track-dup acc target-idx line))
                     {}
                     lines)))

(def indices
  {:account-number 0
   :phone-number   1})

(defmacro def-dup-reducer
  [fn-name index-key]
  `(def ~fn-name
     (make-track-dup-reducer ~(index-key indices))))

(def-dup-reducer count-dup-account-numbers :account-number)
(def-dup-reducer count-dup-phone-numbers :phone-number)

(def count-dups (comp count-dup-account-numbers
                      count-dup-phone-numbers))

(comment
  (let [lines (iota/seq "fixtures/001.tab")]
    (->> lines
         remove-header
         count-dup-phone-numbers))
)
