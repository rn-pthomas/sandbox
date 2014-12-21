(ns om-playground.state)

(defn produce-random-highlights
  [upper-limit]
  (let [upper-limit 8]
    (->> (for [x (range upper-limit)
               y (range upper-limit)]
           [x y])
         (reduce (fn [acc [x y]]
                   (if (rand-nth [true false])
                     (conj acc [x y])
                     acc))
                 [])
         set)))

(def app-state
  (let [upper-limit 8]
    {:highlighted (produce-random-highlights 8)}))
