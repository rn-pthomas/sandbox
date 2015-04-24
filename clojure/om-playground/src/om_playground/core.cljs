(ns om-playground.core
  (:require [om-playground.state :as state]
            [om-playground.components :as cmp]
            [om.core             :as om]
            [om.dom              :as dom]
            [cljs.core.async     :as async :refer [chan timeout <! >!]])
  (:require-macros [om-utils.core :refer [defcomponent]]
                   [cljs.core.async.macros :refer [go]]
                   [om-playground.macros :refer [timed-async-loop]]))

(enable-console-print!)

(defn build-cell
  [data opts]
  (om/build cmp/cell data {:opts opts}))

(defn build-cells
  [num data opts]
  (apply (partial dom/div nil)
         (for [_ (range num)]
           (build-cell data opts))))

(defcomponent app
  (init-state
   {:ch (chan)})
  (will-mount
   (timed-async-loop 500 (om/get-state owner :ch)))
  (render
   (let [ch        (om/get-state owner :ch)
         cell-opts {:ch ch}]
     (dom/div
      nil
      (build-cells 2 data cell-opts)
      (build-cells 2 data cell-opts)))))

(om/root
 app
 state/app-state
 {:target (. js/document (getElementById "app-container"))})
