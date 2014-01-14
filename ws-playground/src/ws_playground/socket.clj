(ns ws-playground.socket
  (:require [org.httpkit.server              :as http :refer [with-channel on-close on-receive send!]]
            [clojure.data.json               :as json]
            [ws-playground.overtone.handlers :as overtone-handlers]))

(defn handler [request]
  (with-channel request channel
    (on-close   channel (fn [status] (println "channel closed:" status)))
    (on-receive channel (fn [data] ;; echo it back
                          (let [parsed-data (json/read-str data :key-fn keyword)
                                resp        (overtone-handlers/synth-handler parsed-data)]
                            (send! channel resp))))))
