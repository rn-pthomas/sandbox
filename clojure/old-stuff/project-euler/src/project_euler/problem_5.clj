(ns project-euler.problem-5)

;; 2520 is the smallest number that can be divided evenly by each of the numbers from 1 to 10 without any remainder.
;; What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

(defn divisible-up-to? [upper-bound n]
  (loop [i 2]
    (if-not (= (mod n i) 0)
      false
      (if (= i upper-bound)
        true
        (recur (inc i))))))

(loop [i 2520]
  (if (divisible-up-to? 20 i) i
      (recur (+ i 20))))
