(ns spotify-client-playground.app.api
  (:require [spotify-client-playground.app.xhr         :as xhr]
            [spotify-client-playground.app.web-helpers :as web-helpers]))

(defn ping-server-health
  []
  (xhr/do-xhr {:method      :get
               :url         "ping"
               :on-complete (fn [resp]
                              (when (= resp "ping")
                                (println "server is up and running")))}))

(defn spotify-search-xhr
  [search-term on-complete]
  (let [search-url (str "search?term=" search-term)]
    (xhr/do-xhr {:method      :get
                 :url         search-url
                 :on-complete (fn [resp]
                                (let [parsed-resp (web-helpers/parse-json-resp resp)]
                                  (on-complete parsed-resp)))})))

