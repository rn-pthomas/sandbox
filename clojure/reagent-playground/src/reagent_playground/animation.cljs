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
  (println "hey there...")
  (let [highlighted (move (session/get :highlighted) (dec (session/get :size)))]
    (session/put! :highlighted highlighted)))

(defn animation-loop
  []
  (go-loop []
    (async/<! (async/timeout 500))
    (animation-loop-handler)
    (recur)))

(defn column
  [x highlighted-x highlighted-y]
  [:div.column
   (for [y (range (session/get :size))]
     (if (and (= highlighted-y y)
              (= highlighted-x x))
       [:div.box.highlighted]
       [:div.box]))])

(defn component
  []
  (when-not (session/get :loop-running)
    (do
      (animation-loop)
      (session/put! :loop-running true)))
  [:div
   (let [[highlighted-x highlighted-y] (session/get :highlighted)]
     (for [x (range (session/get :size))]
       (column x highlighted-x highlighted-y)))])

