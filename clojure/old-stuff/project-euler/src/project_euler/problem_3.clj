(ns project-euler.project-3)

(defn prime? [num]
  (loop [i 3]
    (if (= (mod num i) 0)
      false
      (if (= i (- num 2))
        true
        (recur (+ i 2))))))

(defn largest-factor [num]
  (loop [i (dec num)]
    (if (= (mod num i) 0)
      i
      (recur (dec i)))))

(defn largest-prime-factor [num]
  (loop [i (largest-factor num)]
    (if (and (prime? i) (= #(mod num i) 0))
      i
      (recur (dec i)))))
