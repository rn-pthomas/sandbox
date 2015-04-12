(ns transition-cljs.core
  (:require [transition-cljs.components.navbar :as navbar]  
            [transition-cljs.loader            :as loader]
            [om.core                           :as om]
            [om.dom                            :as dom])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(enable-console-print!)

(def app-state
  (atom {}))

(defcomponent app
  (render
   (dom/div
    nil
    (om/build navbar/navbar data))))

(defn main
  []
  (loader/load-suite app-state)
  (om/root
   app
   app-state
   {:target (. js/document (getElementById "app-container"))}))


(main)
