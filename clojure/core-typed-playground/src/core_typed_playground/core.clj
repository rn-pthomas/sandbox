(ns core-typed-playground.core
  (:refer-clojure :exclude [defn])
  (:require [clojure.core.typed :as t :refer [ann cf check-ns defalias defn]]))

(defn takes-a-number-and-string
  [foo :- Number
   bar :- String]
  (str foo " is a number, and " bar " is a string"))

(takes-a-number-and-string 10 "chicken")

(defn takes-a-map
  [foo :- Integer]
  (- foo 10))

(defn bar
  [a :- Integer]
  (takes-a-map 20))

;; always type check on compile
(check-ns)
