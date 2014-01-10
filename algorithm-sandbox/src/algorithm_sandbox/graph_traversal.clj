(ns algorithm-sandbox.graph-traversal)

(defn drop-from-coll
  "Given an index idx and a list l, drop the element at idx."
  [idx l]
  (let [[start finish] (split-at idx l)]
    (concat start (drop 1 finish))))

(defn move-to-head
  "Given an index idx and a list l, move the element at idx to the front of l."
  [idx l]
  (cons (nth l idx)
        (drop-from-coll idx l)))

(defn local-traversal [node-group]
  (let [[root-node other-nodes] node-group]
    (for [other-node other-nodes]
      [root-node other-node])))

(defn continue-traversal
  "Given two vectors, with the first one containing a node and a connected node, and the second containing vectors of similar traversals, will return any possible traversal that can continue."
  [lead-traversal node-groups]
  (let [[root-node dest-node] lead-traversal]
    (reduce (fn [acc node-group]
              (let [[ng-root-node ng-dest-node] node-group]
                (if (= dest-node ng-root-node)
                  (->> ng-dest-node
                       (conj lead-traversal)
                       (conj acc))
                  acc)))
            []
            node-groups)))

(defn graph-traversals [& node-groups]
  (let [local-traversals (map local-traversal node-groups)]))

(comment
  (let [lead-traversal        [:a :b]
        node-groups           [[:b :c]
                               [:b :d]
                               [:c :d]]]
    (continue-traversal lead-traversal node-groups))
  )
