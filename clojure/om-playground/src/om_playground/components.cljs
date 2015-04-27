(ns om-playground.components
  (:require [om.core         :as om]
            [om.dom          :as dom]
            [cljs.core.async :as async :refer [chan timeout <! >!]])
  (:require-macros [om-utils.core          :refer [defcomponent]]
                   [cljs.core.async.macros :refer [go]]))

(defn class-name
  [{:keys [active-x-row active-y-row]} {:keys [x y]}]
  (cond
    (and active-x-row
         (= x active-x-row))
    "cell highlighted"

    (and active-y-row
         (= y active-y-row))
    "cell highlighted"

    :else
    "cell"))

(defcomponent cell
  [events]
  (render
   (dom/button
    #js {:className (class-name data opts)
         :onClick   (fn [e]
                      (go 
                        (>! events :cell)))})))

