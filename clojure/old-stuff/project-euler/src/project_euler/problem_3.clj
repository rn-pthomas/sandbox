(ns project-euler.project-3)

(defn factors [num]
  (filter (fn [x] (= 0 (mod num x))) (range 1 (inc num))))

(defn primes [num]
  (filter (fn [x] (= (count (factors x)) 2))
          (concat [2] (range 1 (inc num) 2))))

(defn prime? [num]
  (= (count (factors num)) 2))

(defn prime-factors [num]
  (let [fs (factors num)]
   (filter (fn [x] (and (prime? x)
                       (some #(= % x) fs)))
           fs)))

(last (prime-factors 600851475143)) ;;
