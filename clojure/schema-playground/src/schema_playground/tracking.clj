(ns schema-playground.tracking
  (:require [schema.core :as schema]))

(def schema-error-registry
  "schema -> observed errors"
  (atom {}))

(defn get-existing-error-source
  [error-source]
  (-> schema-error-registry deref (get error-source)))

(defn remove-schema
  [error-map]
  (dissoc error-map :schema))

(defn initialize-error-source!
  [{:keys [schema value error] :as params}]
  (swap! schema-error-registry assoc schema [(remove-schema params)]))

(defn track-error
  [{:keys [schema value error] :as params}]
  (if-let [existing-error-source (get-existing-error-source schema)]
    (swap! schema-error-registry assoc schema (conj existing-error-source (remove-schema params)))
    (initialize-error-source! params)))

(defn validate-with-tracking
  [validation-schema data]
  (try (schema/validate validation-schema data)
       (catch java.lang.Exception e
         (track-error (.getData e)))))

(comment
  (let [Data {:a {:b schema/Str}}
        foo  {:b "not valid"}]
    (validate-with-tracking Data foo))
  )

