(ns ws-sandbox.app.core
  (:require [ws-sandbox.app.view  :as view]
            [ws-sandbox.app.state :as state]
            [ws-sandbox.app.util  :refer [log]]))

(def websocket (atom nil))

(defn send-to-websocket [msg]
  (.send @websocket msg))

(defn establish-websocket []
  (reset! websocket (js/WebSocket. "ws://localhost:8081/websocket"))
  (doall (map #(aset @websocket (first %) (second %))
              [["onopen"    (fn []  (log "OPEN"))]
               ["onclose"   (fn []  (log "CLOSE"))]
               ["onerror"   (fn [e] (log (str "ERROR:" e)))]
               ["onmessage" (fn [msg]
                              (state/handle-socket-msg (.-data msg)))]])))

(view/initialize-view)
