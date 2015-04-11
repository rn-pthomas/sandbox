(ns transition-cljs.xhr
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
