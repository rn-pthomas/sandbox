(ns core-async-playground.core
  (:require [clojure.core.async :as async :refer [go chan <! >!]]))

(def test-chan (chan))

(defn respond-to-event
  [evt]
  (println {:evt evt}))

(defn do-stuff
  []
  (go (while true
        (respond-to-event (<! test-chan)))))

(comment
  (do-stuff)
  (async/put! test-chan 10)
  (async/put! test-chan 12)
  )
