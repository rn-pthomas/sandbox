(ns ws-sandbox.socket
  (:require [org.httpkit.server :as http :refer [with-channel on-close on-receive send!]]
            [clojure.data.json  :as json]))

(defn handler [request]
  (with-channel request channel
    (on-close   channel (fn [status] (println "channel closed:" status)))
    (on-receive channel (fn [data] ;; echo it back
                          (let [parsed-data (json/read-str data
                                                           :key-fn keyword)]
                            (send! channel data))))))
