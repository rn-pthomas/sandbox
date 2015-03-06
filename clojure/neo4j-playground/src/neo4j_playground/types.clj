(ns neo4j-playground.types
  (:refer-clojure :exclude [defn])
  (:require [clojure.core.typed :as t :refer [ann cf check-ns defalias defn]]))

(defalias Person (t/HMap :mandatory {:first-name t/Str
                                     :last-name  t/Str}))

(defn make-person
  [first-name :- t/Str last-name :- t/Str] :- Person
  {:first-name first-name
   :last-name  last-name})

;;(cf {:a 1} (t/HMap :mandatory {:a t/Num}))

;; always type check on compile
(check-ns)
