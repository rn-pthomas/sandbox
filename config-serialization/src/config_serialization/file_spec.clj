(ns config-serialization.file-spec
  (:require [config-serialization.file-spec.helpers :refer :all]))

;; A file spec should do the following:
;; Support serialization to/from the database.

(defvalidator validate-db-schemas
  :db-schemas
  (not (string? config)))

(defvalidator validate-client-config-keys
  :client :configuration
  (not (nil? config)))

(comment
  (validate-db-schemas {:db-schemas "this won't work"})
  (validate-client-config-keys {:client {:configuration {:is :here}}})
  )

(defn validate
  [config file-spec]
  (reduce (fn [accum validator]
            (validator accum))
          {}
          [validate-db-schemas]))
