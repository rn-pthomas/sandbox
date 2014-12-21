(ns om-playground.core
  (:require [om-playground.components.app :as app]
            [om-playground.state          :as state]
            [om.core                      :as om]))

(defn init
  []
  (om/root
   app/app-container
   state/app-state
   {:target (. js/document (getElementById "my-app"))
    :opts   {}}))

(init)
