;; The sum of the first ten natural numbers is 1^2 + 2^2 + ... + 10^2 = 385.
;; The square of the sum of the first ten natural numbers is (1^2 + 2^2 + ... + 10^2)^2 = 55^2 = 3025.
;; Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
;; Find the difference between the sum of the squares of the first one hundred natural numbers and the the square of the sum.

(ns project-euler.problem-6)

(let [the-sum            (reduce + (map inc (range 100)))
      the-sum-of-squares (reduce + (map (fn [x] (* x x)) (map inc (range 100))))]
  (- (* the-sum the-sum)
     the-sum-of-squares)) ;; 25164150
