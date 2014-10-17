(ns jira-api-playground.core
  (:require [cljs.nodejs :as node]))

(defn -main
  [& args]
  (println args))

(node/enable-util-print!)
(set! *main-cli-fn* -main)

