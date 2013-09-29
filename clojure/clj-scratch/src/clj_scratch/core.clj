(ns clj-scratch.core
  (:use [quil.core]))

(defn loop-state-until-done [fn-name wait initial-seed exit-pred]
  (loop [i initial-seed]
    (if-not (exit-pred i)
      (do (fn-name i)
          (Thread/sleep wait)
          (recur (inc i)))
      i)))
