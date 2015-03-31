(ns core-async-playground.core
  (:require [clojure.core.async :as async :refer [go chan <! >! alts! timeout]]
            [core-async-playground.sounds :as sounds]))

(defn seed-values
  [timeout-value & words]
  (let [acc (chan)]
    (doseq [word words]
      (go
        (>! acc word)
        (<! (timeout (rand-int timeout-value)))))
    acc))

(defn handle-sound
  [sound]
  (condp = sound
    "kick" (sounds/kick)
    "snare" (sounds/snare)
    "hat" (sounds/snap)
    "tom" (sounds/tom)))

(defn main
  [wait]
  (let [evts           (apply (partial seed-values 1000) (->> ["kick" "snare" "hat" "tom"] (repeat 12) flatten))
        possible-waits [(/ wait 2.0) (/ wait 3.0)]]
    (go
      (while true
        (when-let [evt (<! evts)]
          (do
            (println evt)
            (handle-sound evt)))
        (<! (timeout wait))))
    (go
      (while true
        (when-let [evt (<! evts)]
          (println (format "        %s" evt))
          (handle-sound evt))
        (<! (timeout (rand-nth possible-waits))))))
  :running)

(main 700)
