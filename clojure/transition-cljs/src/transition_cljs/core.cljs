(ns transition-cljs.core
  (:require [om.core :as om]
            [om.dom  :as dom])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defcomponent app
  (render
   (dom/div nil "Hello")))

(defn main
  []
  (om/root
   app
   (atom {})
   {:target (. js/document (getElementById "app-container"))}))

(main)
