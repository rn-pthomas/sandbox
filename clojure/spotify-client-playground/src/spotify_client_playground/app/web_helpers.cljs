(ns spotify-client-playground.app.web-helpers
  (:require [cognitect.transit :as transit]))

(def r (transit/reader :json))

(defn parse-json-resp
  [resp]
  (transit/read r resp))
