(ns om-playground.components.animations.one
  (:require [om.core :as om]
            [om.dom  :as dom])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defcomponent me
  (render
   (dom/div
    nil
    "one")))


