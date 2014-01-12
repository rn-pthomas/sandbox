(ns ws-sandbox.overtone.handlers
  (:require [ws-sandbox.overtone.sounds :as sounds]
            [overtone.live              :refer [midi->hz]]))

(def notes [48 50 51 53 55 56 58 60])

(defn offset-by-octave [note octave]
  (+ (* octave 12) note))

(defn synth-handler
  "data should be map. at present, data will only contain a note frequency, i.e. {:note 72}"
  [data]
  (let [pitch-idx     (:pitchIdx data)
        octave-offset (:octave data)
        note          (midi->hz (offset-by-octave (nth notes pitch-idx) octave-offset))]
    (def note note)
    (do (sounds/basic-sin note)
        "success!")))
