(ns om-playground.events
  (:require [om-playground.state :as state]
            [om-playground.util  :as util]))

(defn on-key-down
  [target]
  (swap! state/app-state update-in [:info :key-presses :log] conj "foof"))

(defn on-change
  [target]
  (util/log ":on-change")
  (swap! state/app-state update-in [:info :key-presses :num] inc))
