(ns pub-sub-playground.core
  (:require [clojure.core.async       :as async]
            [pub-sub-playground.types :as t]
            [schema.core              :as s :refer [defn]])
  (:refer-clojure :exclude [defn]))

(s/set-fn-validation! true)

(defn recipient->subscriber
  [recipient :- t/Recipient]
  :- t/Subscriber)

(defn send-messages
  "sets up a publisher to represent the message being sent, and looks up a subscriber
   or creates one for each recipient"
  [recip-list :- [t/Recipient]]
  (let [subscribers (map )]))

(comment
  (s/validate Recipient [:foo])
  (send-messages [{}])
)
