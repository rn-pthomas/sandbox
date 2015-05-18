(ns om-playground.core
  (:require [om-playground.state :as state]
            [om.core             :as om]
            [om.dom              :as dom]
            [om-playground.components.select :as select])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(enable-console-print!)

(defn reload-hook
  [& files]
  (println files))

(defcomponent app
  (render
   (dom/div
    nil
    (om/build select/me data))))

(om/root
 app
 state/app-state
 {:target (. js/document (getElementById "app-container"))})
