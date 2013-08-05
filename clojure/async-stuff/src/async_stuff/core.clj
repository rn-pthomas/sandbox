(ns async-stuff.core
  (require [clojure.core.async :refer :all]))

(defn fake-search [kind]
  (fn [c query]
    (go
     (<! timeout (rand-int 100))
     (>! c [kind query]))))
