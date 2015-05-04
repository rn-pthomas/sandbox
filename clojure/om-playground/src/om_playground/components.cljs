(ns om-playground.components
  (:require [om.core      :as om]
            [sablono.core :as html :refer-macros [html]]
            [om-playground.controllers.core :refer [notify]])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defcomponent cell
  []
  (init-state
   {:dead false})
  (render
   (let [class (if (om/get-state owner :dead)
                 "cell highlighted"
                 "cell")]
     (html/html
      [(keyword (str "button." class)) {:onMouseOver (fn [_]
                                                       (notify :kill-cell {:owner owner
                                                                           :opts  opts}))}]))))

