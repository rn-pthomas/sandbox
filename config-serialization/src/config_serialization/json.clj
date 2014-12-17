(ns config-serialization.json
  (:require [cheshire.core    :as cheshire]
            [cheshire.factory :as factory]))

(def json-factory (factory/make-json-factory
                   {:allow-single-quotes true}))

(defn deserialize-json
  [json-str]
  (binding [factory/*json-factory* json-factory]
    (cheshire/decode json-str keyword)))


