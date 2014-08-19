(ns core-async-playground.pub-sub
  (:require [clojure.core.async :as async]))

(def publisher (async/chan))
(def publication (async/pub publisher #(:topic %)))

(def subscriber-one (async/chan))
(def subscriber-two (async/chan))
(def subscriber-three (async/chan))

(async/sub publication :account-created subscriber-one)
(async/sub publication :account-created subscriber-two)
(async/sub publication :user-logged-in  subscriber-two)
(async/sub publication :change-page     subscriber-three)

(defn take-and-print
  [channel prefix]
  (async/go-loop []
    (println prefix ": " (async/<! channel))
    (recur)))

(take-and-print subscriber-one "subscriber-one")
(take-and-print subscriber-two "subscriber-two")
(take-and-print subscriber-three "subscriber-three")

(async/go (async/>! publisher {:topic :change-page
                               :dest "/#home"}))



