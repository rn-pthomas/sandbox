(ns clj-scratch.core
  (:use [quil.core]))

(defn loop-until-done
  "Recursively calls a function until a predicate is met. All side effects should take place within the body of the function passed in."
  [fn-name wait initial-seed exit-pred]
  (loop [i       initial-seed
         counter 0]
    (if-not (exit-pred i)
      (do (Thread/sleep wait)
          (recur (fn-name i)
                 (inc counter)))
      {:result  i
       :counter counter})))
