(ns neo4j-playground.trees)

(defn walk-tree
  "Depth first"
  [node visitor]
  (visitor node)
  (when-let [children (:children node)]
    (map (fn [child]
           (walk-tree child visitor))
         children)))

(comment
  (let [tree {:data :foo
              :children [{:data :bar
                          :children [{:data :quux}]}
                         {:data :baz}]}]
    (walk-tree tree #(println (:data %))))
  )
