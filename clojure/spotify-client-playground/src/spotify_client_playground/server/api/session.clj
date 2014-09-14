(ns spotify-client-playground.server.api.session
  (:require [kinematic.dsl :as dsl]))

(dsl/defapi :api ["session"])

(dsl/api-get
 {:status "OK"
  :msg    "implement session handler"})

