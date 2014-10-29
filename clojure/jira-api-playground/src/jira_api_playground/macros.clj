(ns jira-api-playground.macros)

(defmacro node-require
  [lib]
  `(def ~lib (cljs.nodejs/require ~(name lib))))
