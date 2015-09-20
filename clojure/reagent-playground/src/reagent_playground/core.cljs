(ns ^:figwheel-always
  reagent-playground.core
  (:require [reagent.core    :as reagent :refer [atom]]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(defn on-js-reload
  [& files]
  (println files))

(defonce app-state (atom {:text "Hello world!!!"
                          :size 8
                          :loop-running false}))

(defn animation-loop
  []
  (let [anim-ch (async/timeout 500)]
    (swap! app-state (assoc :loop-running true))
    (go-loop []
      (async/<! anim-ch)
      (println "hey there...")
      (let [size (:size @app-state)
            highlighted [(rand-int size) (rand-int size)]]
        (swap! app-state assoc-in [:highlighted] highlighted))
      (recur))))

(defn debugger
  []
  [:div
   [:p (str "highlighted: " (:highlighted @app-state))]])

(defn app
  []
  [:div
   (let [size (:size @app-state)
         rows (for [x (range size)
                    y (range size)]
                [:div.column
                 [:div.box]])])
   (debugger)])

(defn main
  []
  (do
    (when-not (:loop-running @app-state)
      (animation-loop))
    (reagent/render-component
     [app]
     (. js/document (getElementById "app")))))

(main)
