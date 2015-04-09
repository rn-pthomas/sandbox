(ns transition-cljs.util
  (:require [goog.net.XhrIo  :as xhr]
            [cljs.core.async :as async :refer [chan close! <! >!]]
            [cljs.reader     :as reader])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(defn GET
  [^String url]
  (let [ch (chan 1)]
    (xhr/send url
              (fn [event]
                (let [res (-> event .-target .getResponseText)]
                  (go (>! ch (reader/read-string res))
                      (close! ch)))))
    ch))

(defn load-test
  [^String test-name]
  (let [ch (chan 1)]
    (go (>! ch (<! (GET (str "./examples/tests/" test-name ".cljs"))))
        (close! ch))
    ch))

(defn load-tests
  [ch]
  (go
    (mapv (fn [test-name]
            (go
              (println (<! (load-test test-name)))))
          (<! ch))))

(defn load-suite
  []
  (load-tests (GET "test-suite.cljs")))
