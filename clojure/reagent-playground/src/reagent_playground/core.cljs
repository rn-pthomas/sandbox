(ns reagent-playground.core
  (:require [reagent.core                 :as reagent]
            [reagent-playground.animation :as animation]
            [reagent-playground.debugger-cmp :as debugger]))

(enable-console-print!)

(defn on-js-reload
  [& files]
  (println "js-reload...")
  (println files))

(defonce app-state (reagent/atom {:text         "Hello world!!!"
                                  :size         8
                                  :highlighted  [0 0]
                                  :loop-running false}))

(defn app
  []
  [:div
   (animation/component app-state)
   ;;(debugger/component app-state)
   ])

(defn main
  []
  (reagent/render-component
   [app]
   (. js/document (getElementById "app"))))

(main)
