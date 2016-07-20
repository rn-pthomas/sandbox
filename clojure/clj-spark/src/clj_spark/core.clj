(ns clj-spark.core
  (:require [flambo.conf :as conf]
            [flambo.api  :as f]))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))
