(ns jira-api-playground.node-wrapper
  (:require [cljs.nodejs :as node]))

(def http (node/require "http"))

(def spotify-base-url "https://api.spotify.com/v1/search")

(defn http-get
  [search-type search-term]
  (let [search-url (str spotify-base-url)]
    ))
