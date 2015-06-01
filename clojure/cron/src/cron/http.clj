(ns cron.http
  (:require [clojure.core.async :as a :refer [go chan timeout <! >! <!! >!!]]
            [org.httpkit.client :as client]
            [pl.danieljanus.tagsoup :as tagsoup]))

(defn async-get
  [url result-chan]
  (client/get url #(go (>! result-chan %))))

(defn make-http-reqs
  [urls]
  (let [c   (chan)
        res (atom {})]
    (doseq [{:keys [name url]} urls]
      (async-get url c))
    (doseq [{:keys [name url]} urls]
      (swap! res assoc name (tagsoup/parse-string (:body (<!! c)))))
    @res))

(comment
  (let [urls [{:name :google :url "http://www.google.com"}
              {:name :reddit :url "http://www.reddit.com"}]]
    (make-http-reqs urls))
  )
