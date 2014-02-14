(ns ws-sandbox.app.view
  (:require [om.core             :as om  :include-macros true]
            [om.dom              :as dom :include-macros true]
            [ws-sandbox.app.util :as util]))

(defn widget [data owner]
  (reify om/IRender
    (render [this]
      (dom/h1 nil (:text data)))))

(defn initialize-view []
  (util/log "initialize-view")
  (om/root {:text "Hello world!"} widget (. js/document (getElementById "my-app"))))

