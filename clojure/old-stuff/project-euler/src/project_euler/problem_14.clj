(ns project-euler.problem-14)

(defn next-collatz-number [n]
  (if (even? n)
    (/ n 2)
    (inc (* 3 n))))

(defn collatz-sequence [initial]
  (loop [n initial
         accum [initial]]
    (if (= 1 n)
      accum
      (let [next-number (next-collatz-number n)]
        (recur next-number (conj accum next-number))))))




(comment
  (def counter (apply max (map count (map collatz-sequence (range 1 1000000 2)))))

  (loop [i 1]
    (if (= counter (count (collatz-sequence i)))
      i
      (recur (inc i))))


  )
