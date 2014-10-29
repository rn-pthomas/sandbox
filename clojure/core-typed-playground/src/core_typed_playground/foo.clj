(ns core-typed-playground.foo
  (:require [clojure.core.typed :as t :refer [ann cf check-ns defalias]]))

(t/defn baz
  [a :- Any
   b :- Any]
  {:foo a
   :bar b})

;; always type check on compile
;;(check-ns)

