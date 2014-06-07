(ns overtone-playground.sounds
  (:require [overtone-playground.core :as core]
            [clojure.data.json        :as json]
            [overtone.live :refer :all]))

(definst basic-saw
  [freq 440 length 1.2]
  (* (saw freq)
     (line:kr 0 0.4 length FREE)))

(comment
  (def loop-running (atom true))

  (loop []
    (when-not @loop-running
      (let [res (json/read-json (core/echo "echo me!"))
            {:keys [a b c d e]} res]
        (do (basic-saw (* 100 (:f e)) 0.2)
            (recur)))))

  (reset! loop-running false)
 )
