(ns schema-playground.examples
  (:require [schema.core            :as schema]
            [schema-playground.core :refer [register-environment! register-validation-environments! validate-per-env]]))

(register-environment! "development")
(register-validation-environments! "development" "staging")

(def Data {:a {:b schema/Str}})

(defn foo
  [thing]
  (validate-per-env Data thing)
  thing)

(comment

  (foo {:a {:b "c"}})
  (foo {:a {:b "c" :c "d"}})
  
)

