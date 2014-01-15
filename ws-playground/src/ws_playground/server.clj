(ns ws-playground.server
  (:require [compojure.handler     :refer [api]]
            [compojure.core        :refer [defroutes GET POST PUT DELETE]]
            [org.httpkit.server    :refer [run-server]]
            [ws-playground.socket  :as socket]
            [ws-playground.dev     :as dev]))

(defroutes api-routes
  (GET "/"      [] socket/handler)
  (GET "/ping/" [] "pong"))

(defonce server (atom nil))

(defn server-handler [port]
  (run-server (api #'api-routes) {:port port}))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn start-server []
  (reset! server (server-handler 8080)))

(defn restart-server []
  (do (stop-server)
      (start-server)))

(defn -main
  "Entry point for 'lein run'"
  []
  (do
    (println "Starting service...")
    (start-server)
    (println "...service started.")
    (println "Starting nrepl server...")
    dev/repl-server
    (println "...nrepl server open on port 4000.")))

(comment
  (start-server)
  (restart-server)
  )
