(ns spotify-client-playground.app.api
  (:require [spotify-client-playground.app.xhr         :as xhr]
            [spotify-client-playground.app.web-helpers :as web-helpers])
  (:require-macros [spotify-client-playground.app.macros :refer [defxhr]]))

(defxhr ping-server-health :get "ping"
  []
  {"OK" #(println "server is up and running")
   "*"  #(println "something went wrong")})

(defxhr session-get :get "session"
  []
  {"OK" #(println "session was ok")
   "*"  #(println "session was bad")})

(defn login-user
  [{:keys [username password on-complete]}]
  (xhr/do-xhr {:method      :post
               :url         "session"
               :data        {:username username
                             :password password}
               :on-complete (fn [resp]
                              (let [parsed-resp (web-helpers/parse-json-resp resp)]
                                (on-complete parsed-resp)))}))

(defn spotify-search-xhr
  [search-term on-complete]
  (let [search-url (str "search?term=" search-term)]
    (xhr/do-xhr {:method      :get
                 :url         search-url
                 :on-complete (fn [resp]
                                (let [parsed-resp (web-helpers/parse-json-resp resp)]
                                  (on-complete parsed-resp)))})))

