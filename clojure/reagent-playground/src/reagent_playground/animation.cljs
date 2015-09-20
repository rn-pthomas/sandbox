(ns reagent-playground.animation
  (:require [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn animation-loop
  [state]
  (go-loop []
    (async/<! (async/timeout 500))
    (println "hey there...")
    (let [size        (:size @state)
          highlighted [(rand-int size) (rand-int size)]]
      (swap! state assoc-in [:highlighted] highlighted))
    (recur)))

(defn row
  [highlighted-x highlighted-y])

(defn component
  [state]
  (when-not (:loop-running @state)
    (do
      (animation-loop state)
      (swap! state assoc :loop-running true)))
  (let [size                          (:size @state)
        [highlighted-x highlighted-y] (:highlighted @state)
        _ (println highlighted-y)
        rows                          (for [x (range size)]
                                        (if (= highlighted-x x)
                                          [:div.box.highlighted]
                                          [:div.box]))
        columns                       (for [y (range size)]
                                        (if (= highlighted-y y)
                                          [:div.column.highlighted rows]
                                          [:div.column rows]))]
    columns))

