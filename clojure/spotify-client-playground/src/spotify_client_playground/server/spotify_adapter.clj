(ns spotify-client-playground.server.spotify-adapter
  (:require [org.httpkit.client :as http]
            [clojure.data.json  :as json]))

(defn ->query-string
  [search-term]
  (->> (clojure.string/split search-term #" ")
       (interpose "+")
       (apply str)))

(defn search
  [search-term]
  (let [resp @(http/get (format "https://api.spotify.com/v1/search?query=%s&type=artist" (->query-string search-term)))]
    (-> resp :body (json/read-str :key-fn keyword))))
