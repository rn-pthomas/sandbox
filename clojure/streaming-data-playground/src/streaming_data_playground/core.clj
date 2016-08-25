(ns streaming-data-playground.core
  ;;(:require [kafka-clj.client :as kafka])
  (:require []))

(comment
  (def c (kafka/create-connector [{:host "localhost"
                                   :port 9092}]
                                 {:flush-on-write true}))

  (let [msg1kb (.getBytes (clojure.string/join "," (range 278)))]
    (doseq [i (range 100)]
      (kafka/send-msg c "data" msg1kb)))
  
  )
