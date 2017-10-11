(ns gin.app.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(defonce app-state (r/atom {:socket {:connected false}
                            :state  {:messages []}}))

(defn update-state!
  [update-fn]
  (swap! app-state update-in [:state] update-fn))

(defn input-evt->text
  [evt]
  (-> evt .-target .-value))

(defn handle-ws-message
  [msg]
  (update-state! #(update-in % [:messages] conj msg)))

(defn send-ws-message
  [msg]
  (let [ws   (get-in @app-state [:socket :val])
        data (.stringify (.-JSON js/window) (clj->js {:msg msg}))]
    (.send ws data)))

(def websocket-handler-dispatch
  {"onopen"    #(println "open")
   "onclose"   #(println "close")
   "onerror"   (fn [err] (println "error:" err))
   "onmessage" (fn [msg]
                 (let [parsed-data (js->clj (.parse (.-JSON js/window) (.-data msg)))]
                   (handle-ws-message parsed-data)))})

(defn init-websocket
  [url]
  (when-not (true? (get-in @app-state [:socked :connected]))
    (let [ws (js/WebSocket. url)]
      (doseq [[action handler] websocket-handler-dispatch]
        (aset ws action handler))
      ws)))

(defn main-component
  []
  [:button
   {:on-click (fn [_]
                (send-ws-message {:its-a "thing"}))}
   "click me"])

(defn main
  []
  (let [ws (init-websocket "ws://localhost:9091")]
    (swap! app-state assoc-in [:socket :val] ws)
    (r/render [main-component] (.getElementById js/document "app"))))

(defn on-js-reload
  []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (main))

(main)
