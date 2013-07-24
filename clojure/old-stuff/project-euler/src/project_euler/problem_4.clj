;; A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit
;; numbers is 9009 = 91 * 99. Find the largest palindrome made from the product of two 3-digit numbers.
(ns project-euler.problem-4)

(apply max (filter (fn [s] (= (str s) (clojure.string/reverse (str s)))) (for [x1 (range 100 1000)
                                                                              x2 (range 100 1000)]
                                                                          (* x1 x2))))
