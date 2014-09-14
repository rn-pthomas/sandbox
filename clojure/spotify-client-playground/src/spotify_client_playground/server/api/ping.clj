(ns spotify-client-playground.server.api.ping
  (:require [kinematic.dsl :as dsl]))

(dsl/defapi :api ["ping"])

(dsl/api-get
 {:status "OK"
  :msg    "pong"})

