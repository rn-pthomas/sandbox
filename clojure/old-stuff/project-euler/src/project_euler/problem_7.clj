(ns project-euler.problem-7)
;; By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
;; What is the 10001st prime number?

(defn prime? [n]
  (.isProbablePrime (BigInteger/valueOf n) 5))

(last (take 10003 (filter prime? (take-nth 2 (range 1 Integer/MAX_VALUE)))))
