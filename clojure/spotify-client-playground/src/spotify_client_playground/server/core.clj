(ns spotify-client-playground.server.core
  (:require [compojure.core                                   :as compojure]
            [compojure.route                                  :as route]
            [org.httpkit.server                               :as http-kit]
            [spotify-client-playground.server.spotify-adapter :as adapter]
            [spotify-client-playground.server.web-helpers     :as web-helpers]
            [clojure.tools.nrepl.server                       :as nrepl]
            [cider.nrepl                                      :as cider]
            [clojure.data.json                                :as json]))

(def nrepl-server (atom nil))

(defn start-nrepl-server
  [server-atom port]
  (reset! nrepl-server (nrepl/start-server :port port :handler cider/cider-nrepl-handler))
  (println (format "nrepl server listening on port %s" port))
  :nrepl-server-started)

(defn handle-search
  [req]
  (let [search-term (-> req web-helpers/parse-query-string :term)
        result-set  (adapter/search-all search-term)]
    (json/write-str {:search-term search-term
                     :result-set  result-set})))

(compojure/defroutes app
  (compojure/GET "/ping"   [] (json/json-str {:status "OK"
                                              :msg    "pong"}))
  (compojure/GET "/search" [] handle-search))

(defn run-server [port]
  (do (println (format "web server listening on port %s" port))
      (http-kit/run-server #'app {:port port})))

(defn run-app
  []
  (let [nrepl-server-port 3141
        app-server-port   6788]
    (do (start-nrepl-server nrepl-server nrepl-server-port)
        (run-server app-server-port))))

(comment
  (run-app)
  )
