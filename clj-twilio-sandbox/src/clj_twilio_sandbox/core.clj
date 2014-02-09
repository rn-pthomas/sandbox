(ns clj-twilio-sandbox.core
  (:require [clj-twilio-sandbox.twiml :as twiml]
            [clj-twilio-sandbox.http  :as http]
            [org.httpkit.server       :as server]
            [compojure.handler        :refer [site]]
            [compojure.core           :refer [defroutes GET]]))

(defn handle-twilio-get [req]
  (println req))

(defroutes app-routes
  (GET "/twilio-app" [] handle-twilio-get))

(defn -main [& args]
  (println "Booting server on port 8080...")
  (server/run-server (site #'app-routes) {:port 8080}))


