(ns om-playground.components.animations.container
  (:require [om.core                                   :as om]
            [om.dom                                    :as dom]
            [om-playground.components.animations.one   :as anim-one]
            [om-playground.components.animations.two   :as anim-two]
            [om-playground.components.animations.three :as anim-three])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(def dispatch
  {:one   anim-one/me
   :two   anim-two/me
   :three anim-three/me})

(defcomponent me
  (render
   (dom/div
    #js {:id "animation-container"}
    (if-let [active-animation (-> data :active-animation dispatch)]
      (om/build active-animation data)
      "no animation selected"))))
