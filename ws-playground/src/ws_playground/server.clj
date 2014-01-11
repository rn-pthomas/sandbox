(ns ws-sandbox.server
  (:require [compojure.handler  :refer [site]]
            [compojure.core     :refer [defroutes GET POST PUT DELETE]]
            [org.httpkit.server :refer [run-server]]))

(defn do-something []
  (println "looks like we did something"))

(defroutes api-routes
  (GET "/" do-something))

(defonce server (atom nil))

(defn server-handler [port]
  (run-server (site #'api-routes {:port port})))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn start-server []
  (reset! server (server-handler 8080)))

(defn restart-server []
  (do (stop-server)
      (start-server)))

(comment
  (start-server)
  (restart-server)
  )
