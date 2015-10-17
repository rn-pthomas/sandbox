(ns reagent-playground.models.animation)

(defn mirror
  ([mirror-type [x y] height width]
   (let [middle-height (/ height 2)
         middle-width  (/ width 2)]
     ;;(println mirror-type)
     (condp = mirror-type
       :horizontal
       [(- width x) y]

       :vertical
       [x (- height y)]

       :diag-down
       [(dec (- width x)) (dec (- height y))]

       (println "error..."))))
  ([mirror-type [x y] size]
   (mirror mirror-type [x y] size size)))

(defn move
  [[x y] upper]
  (let [idx     (rand-int (count [x y]))
        move-fn (fn [i]
                  (cond
                    (= i 0)
                    (inc i)

                    (>= i upper)
                    (dec i)
                    
                    :else
                    ((rand-nth [inc dec]) i)))]
    (update-in [x y] [idx] move-fn)))

(defn toggle-highlighted
  [animation-state [x y]]
  (update-in animation-state [x y :highlighted] not))

(defn apply-mirroring
  [anim-state {:keys [highlighted size mirroring-directions]}]
  (reduce (fn [acc direction]
            (if direction
              (let [mirrored (mirror direction highlighted size)]
                (toggle-highlighted acc mirrored))
              acc))
          anim-state
          mirroring-directions))

