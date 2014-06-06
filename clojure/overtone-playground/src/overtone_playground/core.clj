(ns overtone-playground.core
  (:require [aleph.http        :as http]
            [lamina.core       :as lamina]
            [clojure.data.json :as json]))

(def ws-url "ws://literature.uncontext.com:80")

(defn ws-client
  []
  (http/websocket-client {:url ws-url}))

(defn echo
  [message]
  (let [channel (lamina/wait-for-result (ws-client))]
    (lamina/enqueue channel message)
    (let [echo (lamina/wait-for-result (lamina/read-channel channel))]
      (lamina/close channel)
      echo)))
