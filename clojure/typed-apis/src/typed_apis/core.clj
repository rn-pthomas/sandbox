(ns typed-apis.core
  (:require [clojure.core.typed :as t]
            [cheshire.core      :as json]
            [org.httpkit.server :as http-server]))


(defn parse-route-params
  [route]
  (->> (clojure.string/split route #"\/")
       (filter #(.startsWith % ":"))
       (mapv #(apply str (drop 1 %)))
       (mapv keyword)))

(defmacro defapi
  [route route-params-type-map]
  `(def api {:route                 ~route
             :route-params-type-map ~route-params-type-map}))

(comment
  (defapi "user/:user-id/settings"
    {:user-id t/Int})
  )

(defn handler
  [request]
  (def request request)
  {:status  200
   :headers {"Content-Type" "application/json"}
   :body    (json/generate-string {:hello "world"})})

(comment
  (http-server/run-server #'handler {:port 3000})
  )
