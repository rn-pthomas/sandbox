(ns om-drum-machine.core
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [om-drum-machine.state :as state])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(enable-console-print!)

(defcomponent drum-machine
  (render
   (apply dom/ul nil
          (mapv (partial dom/li nil) (:drum-list data)))))

(defn init-app!
  []
  (om/root drum-machine
           @state/app-state
           {:target (. js/document (getElementById "main-app"))}))

(init-app!)
