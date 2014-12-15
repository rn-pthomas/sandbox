(ns config-serialization.file-spec
  (:require [config-serialization.file-spec.helpers :refer :all]))

;;(def validators (atom {})) ;; I forget why I typed this...

;; A file spec should do the following:
;; Support serialization to/from the database.

(defvalidator validate-db-schemas :db-schemas
  (not (string? config)))

(defn validate
  [config file-spec]
  (reduce (fn [accum validator]
            (validator accum))
          {}
          [validate-db-schemas]))
