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
  (:require-macros [om-utils.core          :refer [defcomponent]]
                   [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defn reload-hook
  [& files]
  (println files))

(defcomponent app
  (render
   (dom/div nil "foof")))

(om/root
 app
 state/app-state
 {:target (. js/document (getElementById "app-container"))})
