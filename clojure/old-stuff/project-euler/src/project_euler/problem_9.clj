(ns project-euler.problem-9)

;; A Pythagorean triplet is a set of three natural numbers, a < b < c, for which a^2 + b^2 = c^2.
;; For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2
;; There exists exactly one Pythagorean triplet for which a + b + c = 1000
;; Find the product abc.

(defn pythagorean-triplet? [a b c]
  (if-not (and (< a b) (< b c))
    false
    (= (+ (* a a) (* b b)) (* c c))))

(def triplets (for [a (reverse (range 1000))
                    b (reverse (range 1000))
                    c (reverse (range 1000))]
                [a b c]))

(comment



 )
