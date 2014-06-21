(ns schema-playground.core
  (:require [clojure.data.json :as json]
            [schema.core       :as schema]))

(def env-config (json/read-str (slurp "/etc/config.json") :key-fn keyword))

(def environment (atom nil))

(defmacro register-environment!
  "Takes a function that, when evaluated, should return the name
   of the current environment."
  [form]
  `(reset! environment ~form))

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

(comment
  
  (do (register-environment! (-> "/etc/config.json"
                                 slurp
                                 (json/read-str :key-fn keyword)
                                 :name))
      
      (register-validation-environments! "development" "staging")
      
      (let [Data {:a {:b schema/Str
                      :c schema/Int}
                  :d [{:e schema/Keyword
                       :f [schema/Num]}]}]
        (validate-per-env
         Data
         {:a {:b "abc"
              :c 123}
          :d [{:e :bc
               :f [12.2 13 100]}
              {:e :bc
               :f [-1]}]})))
)
