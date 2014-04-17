(ns ws-sandbox.server.server
  (:require [org.httpkit.server         :as http]
            [clojure.tools.nrepl.server :as nrepl]))

(defonce nrepl-server (nrepl/start-server :port 4080))

(defn handler [request]
  (http/with-channel request channel
    (http/on-close channel (fn [status] (println "channel closed: status")))))

(defn start-server [port]
  (println "ok"))

(defn -main [& args]
  (do (println "Booting server...")
      (start-server 8080)
      (nrepl-server)
      (println "...server booted. Nrepl listening on port 4000")))
