(ns algorithm-sandbox.graph-traversal)

(defn drop-from-coll
  ^{:doc "Given an index idx and a list l, drop the element at idx."}
  [idx l]
  (let [[start finish] (split-at idx l)]
    (concat start (drop 1 finish))))

(drop-from-coll 2 [1 2 3 4 5])

(defn move-to-head
  ^{:doc "Given an index idx and a list l, move the element at idx to the front of l."}
  [idx l]
  (cons (nth l idx) (drop-from-coll idx l)))

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
