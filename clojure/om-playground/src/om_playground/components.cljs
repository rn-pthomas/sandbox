(ns om-playground.components
  (:require [om.core         :as om]
            [om.dom          :as dom]
            [cljs.core.async :as async :refer [chan timeout <! >!]])
  (:require-macros [om-utils.core          :refer [defcomponent]]
                   [cljs.core.async.macros :refer [go]]))

(defcomponent cell
  [ch]
  (render
   (dom/button
    #js {:className "cell"
         :onClick   (fn [e]
                      (go 
                        (>! ch :cell)))})))

