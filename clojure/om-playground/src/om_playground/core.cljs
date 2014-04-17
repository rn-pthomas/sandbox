(ns om-playground.core
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]))

(def app-state (atom {:text "Hello world!"}))

(defn widget
  [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/h1 nil (:text data)))))

(om/root widget @app-state
         {:target (. js/document (getElementById "my-app"))})
