(ns core-typed-playground.core
  (:require [clojure.core.typed :refer [ann check-ns]]))

(defn add-two
  [number]
  (+ number 2))

(ann add-two [Number -> Number])

(comment
  (check-ns)
  (add-two 1)
  )
