(ns clj-scratch.core
  (:require [quil.core :as quil]))

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

(defmacro defmachine
  "Builds a simple state machine."
  [name wait & body]
  `(defn ~name []
     "you still have to implement me!"))


(comment

  ;; NB> This is the code I want to write.
  (defmachine some-cool-machine 100
    (state some-state)
    (state another-state)
    (state the-last-state))

  (some-cool-machine)

  )
