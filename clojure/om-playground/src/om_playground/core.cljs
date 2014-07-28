(ns om-playground.core
  (:require [om.core            :as om   :include-macros true]
            [om.dom             :as dom  :include-macros true]
            [om-playground.util :refer [log]]
            [sablono.core       :as html :refer-macros [html]]))

(enable-console-print!)

(def app-state
  (atom
   {:text "Hello world!"
    :info {:key-presses {:num 0
                         :log ""}}}))

(defn on-change
  [target]
  (log ":on-change")
  (swap! app-state update-in [:info :key-presses :num] inc))

(defn on-key-down
  [target]
  (swap! app-state update-in [:info :key-presses :log] conj "foof")
  )

(om/root
 (fn [state owner]
   ;;(dom/h1 )
   (reify
     om.core/IRender
     (render [_]
       (dom/h1 nil (get-in state [:info :key-presses :num])))))
  app-state
  {:target js/document.body})
