(ns om-playground.models.box)

(def upper-limit 8) ;; constant

(defn randomly-move-within-bounds
  [position]
  (condp = position
    0
    (inc position)
    
    (dec upper-limit)
    (dec position)

    ;;within-bounds
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

(defn log-new-position
  [x y [new-x new-y]]
  (println (str "[" x " " y "] => [" new-x " " new-y "]")))

(defn next-box-position
  [[x y]]
  (let [new-position ((rand-nth [move-box-vertically move-box-horizontally]) [x y])]
    (log-new-position x y new-position)
    new-position))
