(ns quil-sandbox.garble)

;; Functions for adding randomness to sequences.

(defn average [coll]
  (double (/ (reduce + coll)
             (count coll))))

(defn jitter [randomness n]
  (+ (rand
      (rand-nth [(/ randomness 2) (- 0 (/ randomness 2))]))
     n))

(defn noisify [randomness coll]
  (if (not (coll? coll))
    (jitter randomness coll)
    (map (fn [n] (jitter randomness n)) coll)))



(comment


  )
