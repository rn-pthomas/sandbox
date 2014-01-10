(ns algorithm-sandbox.graph-traversal)

(defn local-traversal [node-group]
  (let [[root-node other-nodes] node-group]
    (for [other-node other-nodes]
      [root-node other-node])))

(defn graph-traversals [& node-groups]
  (map local-traversal node-groups))

(comment
  (graph-traversals
   [:a [:b :c]]
   [:b [:c :d]]
   [:c [:d :a]])
  )
