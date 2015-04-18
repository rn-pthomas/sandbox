(ns om-playground.core
  (:require [om-playground.state :as state]
            [om.core             :as om]
            [om.dom              :as dom]
            [cljs.core.async     :as async :refer [chan timeout <! >!]])
  (:require-macros [om-utils.core :refer [defcomponent]]
                   [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defcomponent btn
  [event-chan source]
  (render
   (let [class-name (if (= (get-in data [:current-event :source]) source)
                      "btn highlighted"
                      "btn")]
     (dom/button
      #js {:className class-name
           :onClick   (fn [e]
                        (go
                          (>! event-chan {:event  e
                                          :source source})))}))))

(defn build-button
  [data event-chan source]
  (om/build btn data {:opts {:event-chan event-chan
                             :source     source}}))

(defcomponent app
  (will-mount
   (let [event-chan (om/get-state owner :event-chan)
         rate       1000]
     (go
       (while true
         (om/update! data :current-event (<! event-chan))))))
  (init-state
   {:event-chan (chan)})
  (render
   (let [event-chan (om/get-state owner :event-chan)]
     (dom/div
      nil
      (dom/div
       nil
       (build-button data event-chan :btn-1)
       (build-button data event-chan :btn-2))
      (dom/div
       nil
       (build-button data event-chan :btn-3)
       (build-button data event-chan :btn-4))))))

(om/root
 app
 state/app-state
 {:target (. js/document (getElementById "app-container"))})
