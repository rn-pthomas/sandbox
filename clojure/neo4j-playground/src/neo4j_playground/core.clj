(ns neo4j-playground.core
  (:require [clojurewerkz.neocons.rest               :as neo]
            [clojurewerkz.neocons.rest.nodes         :as nodes]
            [clojurewerkz.neocons.rest.relationships :as rel]
            [clojurewerkz.neocons.rest.cypher        :as cypher]
            [neo4j-playground.helpers                :refer [cypher-query]]))

(def conn (neo/connect "http://localhost:7474/db/data/"))

(defn create-person
  [^String first-name ^String last-name]
  (nodes/create conn {:first_name first-name :last_name last-name}))

(defn create-edge
  [start-node end-node ^clojure.lang.Keyword edge-type]
  (rel/create conn start-node end-node edge-type))

(comment
  (let [person-one   (create-person "Pat" "Thomas")
        person-two   (create-person "Oat" "Rhombus")
        person-three (create-person "Bees" "Here")]
    (cypher-query conn :ids [:first_name :last_name] person-one person-two person-three))
  )
