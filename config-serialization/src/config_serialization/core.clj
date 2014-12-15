(ns config-serialization.core
  (:require [config-serialization.json :as json]
            [clojure.data              :as data]))

(defn save-to-db
  [config]
  )

(defn json-diff
  [source-json target-json]
  (let [deserialized-source                     (json/deserialize-json source-json)
        deserialized-target                     (json/deserialize-json target-json)
        [only-in-source only-in-target in-both] (data/diff deserialized-source deserialized-target)]
    {:only-in-source only-in-source
     :only-in-target only-in-target
     :in-both        in-both}))

(comment
  (data/diff [1] [2 3])
  (data/diff {:a :b
              :c :d}
             {:c :d})
  (with-out-str
    (time
     (json-diff (slurp "./resources/examples/example_1.json")
                (slurp "./resources/examples/example_1.json"))))
  )
