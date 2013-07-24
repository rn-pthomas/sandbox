(ns mpc-integration-test.core
  (use [overtone.live]))

(comment
  (-> (connected-midi-devices) first :overtone.studio.midi/full-device-key rest)
  ;; ("AKAI professional LLC" "LPD8" "LPD8" 0)
  (event-debug-on)
  (event-debug-off)
 )
