(ns om-animation-playground.core
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(enable-console-print!)

(def app-state (atom {:tick 0}))

(defcomponent app
  (render
   (dom/div nil (:tick data))))

(defn app-loop-tick
  []
  (swap! app-state update-in [:tick] inc))

(defn init-app-loop
  []
  (.setInterval js/window #(app-loop-tick) 1000))

(defn init!
  []
  (om/root
   app
   app-state
   {:target (. js/document (getElementById "my-app"))})
  (init-app-loop))

(init!)
