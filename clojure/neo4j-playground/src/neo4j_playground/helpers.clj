(ns neo4j-playground.helpers
  (:require [clojurewerkz.neocons.rest.cypher :as cypher]))

(defn gen-cypher-query
  [index return-vals]
  (let [base-query (format "START x=node({%s}) RETURN " (name index))
        return-str (clojure.string/join "," (map (fn [t]
                                                   (str "x." (name t)))
                                                 return-vals))]
    (str base-query return-str)))

(defmacro cypher-query
  [db-conn index return-vals & nodes]
  `(cypher/tquery ~db-conn ~(gen-cypher-query index return-vals) {:ids (map :id ~(vec nodes))}))
