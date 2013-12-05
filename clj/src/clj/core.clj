(ns clj.core
  (:use [clojure.core.typed]))

(ann x Long)
(ann y Number)
(ann z Long)
(def y 10)
(def z 10)
(def z "10")
