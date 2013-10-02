(ns clj-scratch.core
  (:use [quil.core]))

(defn loop-state-until-done [fn-name wait initial-seed exit-pred]
  (loop [i initial-seed]
    (if-not (exit-pred i)
      (do (fn-name i)
          (Thread/sleep wait)
          (recur (inc i)))
      i)))



;;scratch...
(defn side-effecty-function [n]
  (println (format "doing stuff => %d" n)))

(defn exit-pred [n]
  (> n 10))

(comment
  (loop-state-until-done side-effecty-function 80 -20 exit-pred)
  )
