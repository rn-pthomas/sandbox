(ns neo4j-playground.types
  (:require [clojure.core.typed :as t]))

(t/defalias Person (t/HMap :mandatory {:first-name t/Str
                                       :last-name  t/Str}))

(t/defn make-person
  [first-name :- t/Str last-name :- t/Str] :- Person
  {:first-name first-name
   :last-name  last-name})

;; always type check on compile
(t/check-ns)
