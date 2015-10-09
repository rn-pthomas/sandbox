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
  [anim-state {:keys [highlighted size]}]
  (let [{:keys [vertical horizontal diag-down]} (session/get :mirroring-directions)
        highlighted                             (session/get :highlighted)]
    (reduce (fn [direction]
              (if direction
                (toggle-highlighted anim-state (mirror direction highlighted size))
                anim-state))
            anim-state
            [vertical horizontal diag-down])))

(defn animation-loop-handler
  []
  (let [size        (session/get :size)
        highlighted (move (session/get :highlighted) (dec size))]
    (session/put! :highlighted highlighted)
    (session/update-in!
     [:animation-state]
     #(apply-mirroring % {:highlighted highlighted
                          :size        size}))))

(defn animation-loop
  []
  (let [animation-chan (session/get-in [:channels :animation])
        timeout        (session/get :timeout)]
    (go-loop []
      (println "waiting to read from animation-chan...")
      (async/<! animation-chan)
      (animation-loop-handler)
      (recur))
    (go-loop []
      (async/<! (async/timeout timeout))
      (when (session/get :loop-running)
        (async/>! animation-chan :step))
      (recur))))

(defn start-animation-loop!
  []
  (when-not (session/get :loop-running)
    (do
      (animation-loop)
      (session/put! :loop-running true))))
