(ns schema-playground.bridge
  (:require [schema.core        :as s]
            [clojure.core.typed :as t]))

(def lookup
  {s/Str t/Str})

(defn schema->core-typed
  [schema-type]
  (or (get lookup schema-type) schema-type))

(comment
  (schema->core-typed :foof)
  )
