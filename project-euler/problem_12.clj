(ns problem-12)

(def triangle-nums (map first (iterate (fn [[n m]] [(+ n m) (+ m 1)]) [1 2])))

(defn factor?
  [nom den]
  (zero? (rem nom den)))

(defn prime-factors
  [num]
  (let [sqrt (Math/sqrt num)]
    (loop [n num
           d 2
           r []]
      (cond (or (> d sqrt)
                (= n d))
            (conj r n)

            (factor? n d)
            (recur (/ n d) d (conj r d))

            :else
            (recur n (inc d) r)))))

(defn num-divisors
  [num]
  (let [freqs (reduce (fn [acc n]
                        (assoc acc n (inc (get acc n 0))))
                      {}
                      (prime-factors num))]
    (reduce (fn [acc n]
              (* acc (inc n)))
            1
            (vals freqs))))

(defn solve
  [divisors]
  (first (drop-while #(> divisors (num-divisors %)) triangle-nums)))

(solve 500)
