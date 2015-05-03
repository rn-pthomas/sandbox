(ns om-playground.components
  (:require [om.core      :as om]
            [sablono.core :as html :refer-macros [html]]
            [om-playground.controllers.core :refer [notify]])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defn class-name
  [{:keys [active-x-row active-y-row active-x-cell active-y-cell]} {:keys [x y]}]
  (cond
    (= active-x-cell x)
    "cell"

    (= active-y-cell y)
    "cell"
    
    (= x active-x-row)
    "cell highlighted"

    (= y active-y-row)
    "cell highlighted"

    :else
    "cell"))

(defcomponent cell
  [events]
  (render
   (let [class (class-name data opts)]
     (html/html
      [(keyword (str "button." class)) {:on-click (fn [_]
                                                    (notify :cell-clicked))}]))))

