(ns overtone-sandbox.util)

(defn rand-index [coll]
  (let [index (rand-int (count coll))]
    (nth coll index)))
