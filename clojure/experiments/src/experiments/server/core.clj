(ns experiments.server.core
  (:require [org.httpkit.server :as server]
            [compojure.core     :as compojure]
            [compojure.route    :as route]))

(defn websocket-handler
  [request]
  (server/with-channel request channel
    (def request request)
    (def channel channel)
    (server/on-close channel (fn [status]
                               (println "channel closed: " status)))
    (server/on-receive channel (fn [data]
                                 (println (format "received data: %s" data))
                                 (server/send! channel data)))))

(compojure/defroutes app-routes
  (compojure/GET "/ping" [] "pong")
  (route/not-found "<p>Error, page not found.</p>"))

(defn main
  []
  (server/run-server #'websocket-handler {:port 9091})
  (server/run-server #'app-routes        {:port 9090}))

(comment
  (main)
  )
