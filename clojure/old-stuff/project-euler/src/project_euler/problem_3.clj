(ns project-euler.project-3)

(defn prime? [n]
  (.isProbablePrime (BigInteger/valueOf n) 5))

(defn factor? [x y]
  (= 0 (rem x y)))

(defn largest-prime-factor [n]
  (loop [x (long (Math/ceil (Math/sqrt n)))]
    (if (or (= x 1) (and (prime? x) (factor? n x)))
      x
      (recur (dec x)))))
