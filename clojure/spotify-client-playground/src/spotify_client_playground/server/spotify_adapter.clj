(ns spotify-client-playground.server.spotify-adapter
  (:require [org.httpkit.client                           :as http]
            [spotify-client-playground.server.web-helpers :as web-helpers]))

(def base-search-format-str "https://api.spotify.com/v1/search?query=%s&type=%s")

(defn base-search
  [search-term search-type]
  (let [resp @(http/get (format base-search-format-str (web-helpers/->query-string search-term) search-type))]
    (web-helpers/read-json-resp resp)))

(defmacro defsearch
  [search-type]
  (let [fn-name (symbol (str (str search-type) "-search"))]
    `(defn ~fn-name
       [search-term#]
       (base-search search-term# ~(str search-type)))))

(defsearch artist)
(defsearch track)
(defsearch album)

(comment
  (track-search "this is how we do it")
)
