(ns transition-cljs.core
  (:require [transition-cljs.components.navbar :as navbar]
            [om.core :as om]
            [om.dom  :as dom])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(enable-console-print!)

(def app-state
  (atom {}))

(defn fetch-test-suite
  []
  ["some" "dummy" "data"])

(defcomponent app
  (render
   (dom/div
    nil
    (om/build navbar/navbar data))))

(defn main
  []
  (swap! app-state assoc :test-suite (fetch-test-suite))
  (om/root
   app
   app-state
   {:target (. js/document (getElementById "app-container"))}))

(main)
