(ns spotify-client-playground.server.web-helpers
  (:require [clojure.data.json :as json]))

(defn ->query-string
  [search-term]
  (->> (clojure.string/split search-term #" ")
       (interpose "+")
       (apply str)))

(defn parse-query-string
  [{:keys [query-string] :as req}]
  (let [split-params (partition 2 (clojure.string/split query-string #"="))]
    (reduce (fn [acc [k v]]
              (assoc acc (keyword k) v))
            {}
            split-params)))

(defn read-json-resp
  [resp]
  (-> resp :body (json/read-str :key-fn keyword)))
