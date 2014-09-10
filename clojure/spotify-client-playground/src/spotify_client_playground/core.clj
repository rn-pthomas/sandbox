(ns spotify-client-playground.core
  (:require [compojure.core                            :as compojure]
            [compojure.route                           :as route]
            [org.httpkit.server                        :as http-kit]
            [spotify-client-playground.spotify-adapter :as adapter]
            [clojure.tools.nrepl.server                :as nrepl]
            [cider.nrepl                               :as cider]
            [clojure.data.json                         :as json]))

(def nrepl-server (atom nil))

(defn start-nrepl-server
  [server-atom port]
  (reset! nrepl-server (nrepl/start-server :port port :handler cider/cider-nrepl-handler))
  (println (format "nrepl server listening on port %s" port))
  :nrepl-server-started)

(defn parse-query-string
  [query-string]
  (let [split-params (partition 2 (clojure.string/split query-string #"="))]
    (reduce (fn [acc [k v]]
              (assoc acc (keyword k) v))
            {}
            split-params)))

(defn handle-search
  [req]
  (let [search-term (-> req :query-string parse-query-string :term)
        result-set  (adapter/search search-term)]
    (json/write-str {:search-term search-term
                     :result-set  result-set})))

(compojure/defroutes app
  (compojure/GET  "/ping"   [] "ping")
  (compojure/GET  "/search" [] handle-search))

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
