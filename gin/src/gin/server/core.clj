(ns gin.server.core
  (:require [org.httpkit.server :as server]
            [cheshire.core      :as json]))

(defn on-receive-handler
  [data channel]
  (let [parsed-data (json/parse-string data keyword)
        resp-data   (json/generate-string parsed-data)]
    (server/send! channel resp-data)))

(defn websocket-handler
  [request]
  (server/with-channel request channel
    (server/on-close channel (fn [status]
                               (println "channel closed: " status)))
    (server/on-receive channel (fn [data]
                                 (on-receive-handler data channel)))))

(defn main
  []
  (server/run-server #'websocket-handler {:port 9091}))

(comment
  (main)
  )
