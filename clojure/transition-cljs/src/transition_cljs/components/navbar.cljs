(ns transition-cljs.components.navbar
  (:require [transition-cljs.components.dropdown :as dropdown]
            [om.core                             :as om]
            [om.dom                              :as dom])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defcomponent navbar
  (render
   (dom/div
    #js {:id "navbar"}
    (dom/ul
     nil
     (om/build dropdown/dropdown data {:opts {:text       "Suite"
                                              :collection (:test-suite data)}})
     (om/build dropdown/dropdown data {:opts {:text "Log"}})
     (dom/li nil "Settings")
     (dom/li nil "Hide")))))
