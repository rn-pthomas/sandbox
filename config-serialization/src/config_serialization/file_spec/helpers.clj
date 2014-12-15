(ns config-serialization.file-spec.helpers
  (:require [config-serialization.json :as json]))

(defmacro defvalidator
  [validator-name config-key-or-key-path & [body]]
  `(defn ~validator-name
     [~'whole-config]
     (let [~'whole-config (if (string? ~'whole-config)
                            (json/deserialize-json ~'whole-config)
                            ~'whole-config)
           ~'config       ((if (vector? ~config-key-or-key-path)
                             get-in
                             get)
                           ~'whole-config ~config-key-or-key-path)
           ret#           ~body]
       (if (false? ret#)
         (-> ~'whole-config
             (update-in [:errors] #(conj % ~(-> validator-name str keyword))))
         ~'whole-config))))
