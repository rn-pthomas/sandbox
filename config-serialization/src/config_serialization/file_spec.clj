(ns config-serialization.file-spec
  (:require [config-serialization.file-spec.helpers :refer :all]))

(def file-spec
  {})

(defvalidator validate-db-schemas
  :db-schemas
  (def config config)
  (every (fn [db-schema]
           (not (string? db-schema)))
         config))

(comment
  (let [config    {:db-schemas "this won't work"
                   :client     {:configuration {:is :here}}}
        file-spec {:db-schemas {:users [:messages :accounts]}}]
    (validate-db-schemas config file-spec))
  )

(defvalidator validate-client-config-keys
  :client :configuration
  (not (nil? config)))

(defn validate
  [config file-spec]
  (reduce (fn [accum validator]
            (validator accum file-spec))
          config
          [validate-db-schemas validate-client-config-keys]))

(comment
  (validate-db-schemas {:db-schemas "this won't work"} {:db-schemas []})
  (validate-client-config-keys {:client {:configuration {:is :here}}})
  (let [config    {:db-schemas "this won't work"
                   :client     {:configuration {:is :here}}}
        file-spec {:db-schemas {:users [:messages :accounts]}}]
    (validate config file-spec))
  )
