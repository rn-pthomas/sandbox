(ns experiments.app.core
  (:require [experiments.app.xhr :as xhr]
            [reagent.core        :as reagent]))

(enable-console-print!)

(def app-state (reagent/atom {:socket {:connected false}
                              :dom    {:websocket-test-input ""}}))

(defn input-evt->text
  [evt]
  (-> evt .-target .-value))

(defn handle-ws-message
  [msg]
  (println "implement handle-ws-message:" msg))

(defn main-component
  []
  [:div
   [:div#websocket-test
    [:input {:type      "text"
             :value     (get-in @app-state [:dom :websocket-test-input])
             :on-change (fn [evt]
                          (swap! app-state assoc-in [:dom :websocket-test-input] (input-evt->text evt)))}]
    [:button {:on-click (fn [msg]
                          (send-ws-message msg))}
     "test websocket"]]
   [:button
    {:on-click (fn [_]
                 (xhr/make-xhr {:method      "post"
                                :url         "ping"
                                :on-complete (fn [resp]
                                               resp)}))}
    "ping"]
   [:h1 "hey"]])

(defn send-ws-message
  [msg]
  (let [ws   (get-in @app-state [:socket :val])
        data (.strigify (.-JSON js/window) (clj->js {:msg msg}))]
    (.send ws data)))

(defn init-websocket
  [url]
  (let [ws (js/WebSocket. url)]
    (map (fn [action handler]
           (aset ws action handler))
         [["onopen" (fn []
                      (println "open"))]
          ["onclose" (fn []
                       (println "close"))]
          ["onerror" (fn [err]
                       (println "error:" err))]
          ["onmessage" (fn [msg]
                         (let [data (.-data msg)
                               d    (.parse (.-JSON js/window) data)
                               m    (.-m d)]
                           (handle-ws-message m)))]])))

(defn main
  []
  (let [ws (init-websocket "ws://localhost:3141/api/ws")]
    (swap! app-state assoc-in [:socket :val] ws)
    (reagent/render-component [main-component] (.-body js/document))))

(main)

