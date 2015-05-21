(ns om-playground.core
  (:require [om-playground.state :as state]
            [om.core             :as om]
            [om.dom              :as dom]
            [om-playground.components.animations.container :as anim-container]
            [om-playground.components.select :as select])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(enable-console-print!)

(defcomponent app
  (render
   (dom/div
    nil
    (om/build anim-container/me data)
    (om/build select/me data))))

(defn main
  []
  (om/root
   app
   state/app-state
   {:target (. js/document (getElementById "app-container"))}))

(main)

(defn reload-hook
  [& files]
  (println files)
  (main))
