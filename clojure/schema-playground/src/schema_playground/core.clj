(ns schema-playground.core
  (:require [clojure.data.json :as json]
            [schema.core       :as schema]))

(def environment (atom nil))

(defn register-environment!
  "Takes a function that, when evaluated, should return the name of the current
   environment. Resets the 'environment' atom to the return value of that function."
  [env]
  (reset! environment env))

(def validation-environments (atom #{}))

(defn register-validation-environments!
  "Defines list of environments where Schema validation forms will be compiled."
  [& envs]
  (reset! validation-environments (set envs)))

(defmacro validate-per-env
  "If compilation environment is in supported validation environments, expands code
   to validate with provided schema. Otherwise, doesn't expand to anything."
  [validation-schema value]
  (when (contains? @validation-environments @environment)
    `(schema/validate
      ~validation-schema
      ~value)))
