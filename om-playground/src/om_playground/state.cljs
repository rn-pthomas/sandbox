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

(defn initial-box-position
  []
  [(rand-int upper-limit) (rand-int upper-limit)])

(defn move-box-vertically
  [[x y]]
  (let [new-y (case y
                0
                (inc y)
                
                upper-limit
                (dec y)

                ((rand-nth [inc dec]) y))]
    [x new-y]))

(defn move-box-horizontally
  [[x y]]
  (let [new-x (case x
                0
                (inc x)

                upper-limit
                (dec x)

                ((rand-nth [inc dec]) x))]
    [new-x y]))

(defn next-box-position
  [[x y]]
  (let [new-position ((rand-nth [move-box-vertically move-box-horizontally]) [x y])]
    (println (str "[" x " " y "] => " new-position))
    new-position))

(def app-state
  {:highlighted (initial-box-position)})
