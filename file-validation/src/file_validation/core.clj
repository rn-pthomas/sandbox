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

(defn count-dup-phone-numbers
  [lines]
  (let [phone-number-idx 1]
    (reducers/reduce (fn [acc line]
                       (track-dup acc phone-number-idx line))
                     {}
                     lines)))

(comment
  (let [lines (iota/seq "fixtures/001.tab")]
    (->> lines
         remove-header
         count-dup-phone-numbers))
)
