(ns om-playground.core
  (:require [om-playground.state            :as state]
            [om-playground.components       :as cmp]
            [om.core                        :as om]
            [om.dom                         :as dom]
            [sablono.core                   :as html :refer-macros [html]]
            [om-playground.streams          :as streams]
            [om-playground.animation        :as anim]
            [cljs.core.async                :as async :refer [chan timeout <! >!]]
            [om-playground.controllers.core           :refer [notify]])
  (:require-macros [om-utils.core :refer [defcomponent]]
                   [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defn reload-hook
  [& files]
  (println files))

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
  {:height 28
   :width  28})

(defcomponent app
  (render
   (apply
    (partial dom/div nil)
    (for [y (range 16)]
      (apply
       (partial dom/div nil)
       (for [x (range 8)]
         (om/build cmp/plain-cell data {:opts {:x x
                                               :y y}})))))))

(om/root
 app
 state/app-state
 {:target (. js/document (getElementById "app-container"))})
