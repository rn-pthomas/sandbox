(ns om-animation-playground.core
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(enable-console-print!)

(def app-state (atom {}))

(defcomponent app
  (render
   (dom/div nil "hello")))

(defn init!
  []
  (om/root
   app
   app-state
   {:target (. js/document (getElementById "my-app"))}))

(init!)
