(ns jira-api-playground.core
  (:require [cljs.nodejs :as node])
  (:require-macros [jira-api-playground.macros :refer [node-require]]))

(node-require http)

(defn -main
  [& args]
  #_(let [req (.request http
                      {:hostname "http://www.google.com"
                       :port     80
                       :path     "/"
                       :method   "GET"}
                      (fn [res]
                        (doto res
                          (.setEncoding "utf8")
                          (.on "data" (fn [chunk]
                                        (println "BODY:" chunk))))))]
    (doto req
      (.on "error" (fn [e]
                     (println "problem with request:" (.-message e))))
      (.end))))

(node/enable-util-print!)
(set! *main-cli-fn* -main)

