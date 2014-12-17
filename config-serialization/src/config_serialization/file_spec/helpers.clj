(ns config-serialization.file-spec.helpers
  (:require [config-serialization.json :as json]))

(defn has-validation-errors?
  [validation-result]
  (-> validation-result
      :validation-errors
      empty?
      not))

(defmacro defvalidator
  [validator-name & body]
  (let [[config-key-path body] (split-with keyword? body)
        config-key-path        (vec config-key-path)
        body                   (first body)]
    `(defn ~validator-name
       [~'whole-config ~'spec]
       (let [~'whole-config (if (string? ~'whole-config)
                              (json/deserialize-json ~'whole-config)
                              ~'whole-config)
             ~'config       (get-in ~'whole-config ~config-key-path)
             ret#           ~body]
         (if (false? ret#)
           (-> ~'whole-config
               (update-in [:validation-errors]
                          (fn [error-accum#]
                            (assoc error-accum# ~(-> validator-name str keyword) ~config-key-path))))
           ~'whole-config)))))
