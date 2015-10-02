(ns reagent-playground.core
  (:require [reagent.core                                :as reagent]
            [reagent-playground.session                  :as session]
            [reagent-playground.animation                :as animation]
            [reagent-playground.components.animation-viz :as animation-viz]
            [reagent-playground.components.debugger-cmp  :as debugger]))

(enable-console-print!)

(defn on-js-reload
  [& files]
  (println files))

(defn app
  []
  [:div
   (animation-viz/component)
   (debugger/component)
   ])

(defn main
  []
  (do
    (animation/start-animation-loop!)
    (reagent/render-component
     [app]
     (. js/document (getElementById "app")))))

(main)
