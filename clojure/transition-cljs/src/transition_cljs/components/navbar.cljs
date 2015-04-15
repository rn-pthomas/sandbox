(ns transition-cljs.components.navbar
  (:require [transition-cljs.components.dropdown :as dropdown]
            [om.core                             :as om]
            [om.dom                              :as dom]
            [transition-cljs.runner              :as runner])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defcomponent navbar
  (render
   (dom/div
    #js {:id "navbar"}
    (dom/ul
     nil
     (om/build dropdown/dropdown data {:opts {:text       "Suite"
                                              :collection (sort (:test-suite data))}})
     (om/build dropdown/dropdown data {:opts {:text "Log"}})
     (dom/li nil "Settings")
     (dom/li nil "Hide")
     (dom/li
      #js {:onClick #(runner/run-suite data (sort (:test-suite data)))}
      "Run Suite")))))
