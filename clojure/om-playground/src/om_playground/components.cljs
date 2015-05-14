(ns om-playground.components
  (:require [om.core      :as om]
            [sablono.core :as html :refer-macros [html]]
            [om-playground.controllers.core :refer [notify]])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defcomponent cell
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

(defn add-dead-cells
  [existing-dead-cells {:keys [x y]}]
  (let [new-cells [[(inc x) y]
                   [(dec x) y]
                   [x (inc y)]
                   [x (dec y)]]
        result (if (empty? existing-dead-cells)
                 #{{:x (inc x) :y y}
                   {:x (dec x) :y y}
                   {:x x :y (inc y)}
                   {:x x :y (dec y)}}
                 (conj existing-dead-cells new-cells))]
    result))

(defcomponent plain-cell
  (init-state
   {:dead false})
  (render-state
   (let [class (if (true? (om/get-state owner :dead))
                 "plain-cell.dead"
                 "plain-cell")]
     (html/html
      [(keyword (str "button." class)) {:onClick (fn [_]
                                                   (om/update-state! owner :dead not))}]))))
