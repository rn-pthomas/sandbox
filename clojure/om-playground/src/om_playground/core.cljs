(ns om-playground.core
  (:require [om.core             :as om   :include-macros true]
            [om.dom              :as dom  :include-macros true]
            [om-playground.state :as state]
            [om-playground.util  :refer [log]]
            [sablono.core        :as html :refer-macros [html]]))

(enable-console-print!)

(defn render-root
  [state owner]
  (apply dom/ul nil
         (map (fn [text]
                (dom/li nil text))
              (:list state))))

(om/root render-root
         state/app-state
         {:target js/document.body})
