(ns graphql.core)

(defmacro defroot
  "Defines an entity that can be used as a root in a GraphQL query."
  [root-name]
  `(def ~(with-meta root-name {:entity true}) :defined))

(defn validate!
  "Validates GraphQL"
  [graphql]
  graphql)
