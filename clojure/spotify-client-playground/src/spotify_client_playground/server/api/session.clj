(ns spotify-client-playground.server.api.session
  (:require [kinematic.dsl                                   :as dsl]
            [spotify-client-playground.server.models.session :refer :all]))

(dsl/defapi :api ["session"])

(dsl/api-get
 {:status "OK"
  :msg    "implement session handler"})

(dsl/api-post
 (def request request)
 (def body body)
 (if (not (nil? (session-user-id)))
   {:status  "Already Logged In"
    :user-id (session-user-id)}
   (let [{:keys [username password]} body
         session-info                {:user-id username}]
     {:status "OK"
      :msg    "you just logged in"})))

