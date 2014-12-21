(ns om-playground.components.app
  (:require [om.core             :as om  :include-macros true]
            [om.dom              :as dom :include-macros true]
            [om-playground.state :as state :refer [app-state]]
            [om-playground.util            :refer [log set-timeout]])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defcomponent column
  (render
   (dom/div #js {:className       (if (= (:highlighted data) [(:data-row-num opts) (:data-column-num opts)])
                                    "column highlighted"
                                    "column")
                 :data-row-num    (:data-row-num opts)
                 :data-column-num (:data-column-num opts)})))

(defcomponent row
  (render
   (apply dom/div nil (map (fn [column-number]
                             (om/build column data {:opts {:data-column-num column-number
                                                           :data-row-num    (:data-row-num opts)}}))
                           (range 8)))))

(defcomponent app-container
  "Just a container for the rows and columns."
  (will-mount
   (set-timeout (fn []
                  (om/transact! data :highlighted state/next-box-position))
                200))
  (render
   (apply dom/div nil (map (fn [row-number]
                             (om/build row data {:opts {:data-row-num row-number}}))
                           (range 8)))))
