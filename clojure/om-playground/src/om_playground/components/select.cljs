(ns om-playground.components.select
  (:require [om.core :as om]
            [om.dom  :as dom])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defcomponent btn
  [name text]
  (render
   (dom/button
    #js {:onClick (fn [_]
                    (om/update! data :active-animation name))}
    text)))

(defcomponent me
  [name]
  (render
   (dom/div
    nil
    (om/build btn data {:opts {:name :one
                               :text "One"}})
    (om/build btn data {:opts {:name :two
                               :text "Two"}})
    (om/build btn data {:opts {:name :three
                               :text "Three"}}))))

