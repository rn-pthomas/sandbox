(ns reagent-playground.animation
  (:require [cljs.core.async            :as async]
            [reagent-playground.session :as session])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn mirror
  ([mirror-type [x y] height width]
   (let [middle-height (/ height 2)
         middle-width  (/ width 2)]
     (condp = mirror-type
       :horizontal
       [(- width x) y]

       :vertical
       [x (- height y)]

       :diag-down
       [(- width x) (- height y)]

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

(defn animation-loop-handler
  []
  (let [size        (session/get :size)
        highlighted (move (session/get :highlighted) (dec size))]
    (session/put! :highlighted highlighted)
    (session/update-in!
     [:animation-state]
     (fn [anim-state]
       (-> anim-state
           (toggle-highlighted highlighted)
           ;;(toggle-highlighted (mirror :vertical highlighted size))
           (toggle-highlighted (mirror :diag-down highlighted size))
           ;;(toggle-highlighted (mirror :horizontal highlighted size))
           )))))

(defn animation-loop
  []
  (go-loop []
    (async/<! (async/timeout 150))
    (when (session/get :loop-running)
      (animation-loop-handler))
    (recur)))

(defn start-animation-loop!
  []
  (when-not (session/get :loop-running)
    (do
      (animation-loop)
      (session/put! :loop-running true))))
