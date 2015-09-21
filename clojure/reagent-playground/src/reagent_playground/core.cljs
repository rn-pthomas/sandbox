(ns reagent-playground.core
  (:require [reagent.core                    :as reagent]
            [reagent-playground.session      :as session]
            [reagent-playground.animation    :as animation]
            [reagent-playground.debugger-cmp :as debugger]))

(enable-console-print!)

(defn on-js-reload
  [& files]
  (println files))

(defn app
  []
  [:div
   (animation/component)
   ;;(debugger/component)
   ])

(defn main
  []
  (reagent/render-component
   [app]
   (. js/document (getElementById "app"))))

(main)
