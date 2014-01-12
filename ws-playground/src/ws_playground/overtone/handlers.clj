(ns ws-sandbox.overtone.handlers
  (:require [ws-sandbox.overtone.sounds :as sounds]
            [overtone.live              :refer [midi->hz]]))

(defn synth-handler
  "data should be map. at present, data will only contain a note frequency, i.e. {:note 72}"
  [data]
  (let [pitch (-> data :pitch Integer/parseInt midi->hz)]
    (sounds/basic-sin pitch)))

