(ns om-playground.core
  (:require [om-playground.state      :as state]
            [om-playground.components :as cmp]
            [om.core                  :as om]
            [om.dom                   :as dom]
            [om-playground.streams    :as streams]
            [cljs.core.async          :as async :refer [chan timeout <! >!]])
  (:require-macros [om-utils.core :refer [defcomponent]]
                   [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defn build-cell
  [data opts]
  (om/build cmp/cell data {:opts opts}))

(defn build-cell-grid
  [{:keys [width height data cell-opts] :as params}]
  (apply
   (partial dom/div nil)
   (for [y (range height)]
     (apply
      (partial dom/div nil)
      (for [x (range width)]
        (build-cell data (assoc cell-opts :x x :y y)))))))

(def grid
  {:height 7
   :width  9})

(defn gen-num-stream
  []
  (streams/make-stream
   (fn [n]
     (let [{:keys [height width]} grid]
       (cond
         (= n (dec height)) (- height 2)
         (= n 0)            1
         :else              ((rand-nth [+ -]) n 1))))
   1))

(defn consume-num-stream
  [num-stream ^clojure.lang.Keyword update-key data timeout-val]
  (go
    (while true
      (let [n (<! num-stream)]
        (om/update! data update-key n)
        (<! (timeout timeout-val))))))

(defcomponent app
  (init-state
   {:events          (chan)
    :num-stream-slow (gen-num-stream)
    :num-stream-fast (gen-num-stream)})
  (will-mount
   (let [num-stream-slow (om/get-state owner :num-stream-slow)
         num-stream-fast (om/get-state owner :num-stream-fast)]
     (consume-num-stream num-stream-slow :active-x-row data 1800)
     (consume-num-stream num-stream-fast :active-y-row data 900)))
  (render
   (let [events    (om/get-state owner :events)
         cell-opts {:events events}]
     (dom/div
      nil
      (build-cell-grid {:width     (:width grid)
                        :height    (:height grid)
                        :data      data
                        :cell-opts cell-opts})))))

(om/root
 app
 state/app-state
 {:target (. js/document (getElementById "app-container"))})
