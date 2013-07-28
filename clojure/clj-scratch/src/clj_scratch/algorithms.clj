(ns clj-scratch.algorithms
  "Various algorithms")

(defn quicksort [[pivot & xs]]
  (when pivot
    (let [smaller #(< % pivot)]
      (lazy-cat (quicksort (filter smaller xs))
                [pivot]
                (quicksort (remove smaller xs))))))
