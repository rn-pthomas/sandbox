(ns ws-sandbox.overtone.sounds
  (:require [overtone.live :refer :all]))

(definst basic-sin
  [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin attack sustain release) 1 1 0 1 FREE)
     (sin-osc freq)
     vol))
