(ns project-euler.problem-2)

(def fib-seq (lazy-cat [0 1] (map + (rest fib-seq) fib-seq)))
(defn fibonacci [n] (take n fib-seq))

(defn desired-index [n]
  (if (> (last (fibonacci n)) 4000000) (inc (count (fibonacci (dec n))))
    (desired-index (inc n))))

(reduce + (filter (fn [x] (= 0 (mod x 2))) (fibonacci (desired-index 1)))) ;; 4613732
