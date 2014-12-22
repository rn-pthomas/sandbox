(ns om-playground.state)

(def upper-limit 8) ;; constant

(defn produce-random-highlights
  []
  (->> (for [x (range upper-limit)
             y (range upper-limit)]
         [x y])
       (reduce (fn [acc [x y]]
                 (if (rand-nth [true false])
                   (conj acc [x y])
                   acc))
               [])
       set))

(defn randomly-move-within-bounds
  [position]
  (case position
    0
    (inc position)

    upper-limit
    (dec position)

    ((rand-nth [inc dec]) position)))

(defn initial-box-position
  []
  [(rand-int upper-limit) (rand-int upper-limit)])

(defn move-box-vertically
  [[x y]]
  [x (randomly-move-within-bounds y)])

(defn move-box-horizontally
  [[x y]]
  [(randomly-move-within-bounds x) y])

(defn next-box-position
  [[x y]]
  (let [new-position ((rand-nth [move-box-vertically move-box-horizontally]) [x y])]
    (println (str "[" x " " y "] => " new-position))
    new-position))

(def app-state
  {:highlighted (initial-box-position)})
