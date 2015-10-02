(ns reagent-playground.animation
  (:require [cljs.core.async            :as async]
            [reagent-playground.session :as session])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

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

(defn animation-loop-handler
  []
  (let [highlighted (move (session/get :highlighted) (dec (session/get :size)))
        [x y]       highlighted]
    (session/update-in! [:animation-state x y :highlighted] not)
    (session/put! :highlighted highlighted)))

(defn animation-loop
  []
  (go-loop []
    (async/<! (async/timeout 500))
    (animation-loop-handler)
    (recur)))

(defn start-animation-loop!
  []
  (when-not (session/get :loop-running)
    (do
      (animation-loop)
      (session/put! :loop-running true))))

