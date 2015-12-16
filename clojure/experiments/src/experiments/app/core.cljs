(ns experiments.app.core
  (:require [experiments.app.xhr :as xhr]
            [reagent.core        :as reagent]))

(enable-console-print!)

(def app-state (reagent/atom {:socket {:connected false}}))

(defn main-component
  []
  [:div
   [:button
    {:on-click (fn [_]
                 (xhr/make-xhr {:method      "post"
                                :url         "ping"
                                :on-complete (fn [resp]
                                               resp)}))}
    "ping"]
   #_[:button {:on-click (fn [_]
                           (let [xhr (XhrIo.)]
                             (events/listen xhr goog.net.EventType.COMPLETE
                                            (fn [e]
                                              (println (.getResponseText xhr))))
                             (. xhr
                                (send "http://localhost:3141/api" (pr-str {:foo "bar"})
                                      #js {"Content-Type" "application/json"})))
                           (swap! app-state update-in [:socket :connected] not))}
      (if (get-in @app-state [:socket :connected])
        "disconnect from socket"
        "connect to socket")]
   [:h1 "hey"]])

(defn main
  []
  (reagent/render-component [main-component] (.-body js/document)))

(main)

