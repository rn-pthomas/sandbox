(ns spotify-client-playground.server.core
  (:require [org.httpkit.server                     :as http-kit]
            [kinematic.core                         :as kinematic]
            [kinematic.dsl                          :as dsl]
            [ring.middleware.session                :as session]
            [ring.middleware.session.cookie         :as cookie]
            [spotify-client-playground.server.nrepl :as nrepl]))

(dsl/defweb :api
  :mount-point "/"
  :app-ns-prefix :spotify-client-playground.server.api)

(defonce stop-server-fn (atom nil))

(defmacro app
  [& handler-forms]
  `(-> ~@(reverse handler-forms)))

(def web-app
  (app (session/wrap-session {:store       (cookie/cookie-store {:key "abcdefgh12345678"})
                              :cookie-name "spotify-client-playground-api"})
       (dsl/dyn-handler :api)))

(defn run-server [port]
  (do (println (format "web server listening on port %s" port))
      (reset! stop-server-fn (http-kit/run-server web-app
                                                  {:port port}))))

(defn run-app
  []
  (let [nrepl-server-port 3141
        app-server-port   6788]
    (do (nrepl/start-nrepl-server nrepl/nrepl-server nrepl-server-port)
        (run-server app-server-port))))

(comment
  (run-app)
  )
