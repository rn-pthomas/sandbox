(ns config-serialization.json
  (:require [cheshire.core    :as cheshire]
            [cheshire.factory :as factory]))

(def json-factory (factory/make-json-factory
                   {:allow-single-quotes true}))

(comment
  (binding [factory/*json-factory* json-factory]
    (cheshire/encode {"aaa" "aaa"
                      "ddd" "ddd"
                      "ccc" "ccc"
                      "bbb" "bbb"}))
  (sorted-map "aaa" "aaa"
              "ddd" "ddd"
              "ccc" "ccc"
              "bbb" "bbb")
  (binding [factory/*json-factory* json-factory]
    (with-out-str
      (time
       (->>  {"aaa" "aaa"
              "ddd" "ddd"
              "ccc" "ccc"
              "bbb" "bbb"}
             vec
             flatten
             (apply sorted-map)
             cheshire/encode))))
  )

(defn deserialize-json
  [json-str]
  (binding [factory/*json-factory* json-factory]
    (cheshire/decode json-str)))


