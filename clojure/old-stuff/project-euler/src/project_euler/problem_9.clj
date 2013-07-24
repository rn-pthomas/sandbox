(ns project-euler.problem-9)

;; A Pythagorean triplet is a set of three natural numbers, a < b < c, for which a^2 + b^2 = c^2.
;; For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2
;; There exists exactly one Pythagorean triplet for which a + b + c = 1000
;; Find the product abc.

(def triplets (repeat 3 (range 1000)))

(shuffle [1 2 3 4 5 6 7 8 9])
[3 5 2 8 1 6 4 9 7]
[2 4 1 6 7 9 3 5 8]
[3 2 7 1 5 4 8 6 9]
[5 2 9 1 4 6 8 7 3]
[5 1 2 9 3 4 8 6 7]
[6 9 1 2 3 5 7 8 4]
[2 5 6 7 9 1 3 8 4]
[4 6 1 8 3 7 2 5 9]
[7 6 1 5 8 4 3 9 2]
[2 7 1 5 3 6 4 8 9]
[1 7 3 9 4 8 5 2 6]
[8 9 7 4 6 5 1 2 3]
[6 9 4 5 8 3 2 1 7]
[7 8 9 5 2 4 3 6 1]
[5 7 2 6 1 4 3 8 9]
[6 9 7 8 3 2 5 4 1]
