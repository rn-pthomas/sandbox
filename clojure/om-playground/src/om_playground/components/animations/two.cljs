(ns om-playground.components.animations.two
  (:require [om.core :as om]
            [om.dom  :as dom])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defcomponent me
  (render
   (dom/div nil "animation two")))

