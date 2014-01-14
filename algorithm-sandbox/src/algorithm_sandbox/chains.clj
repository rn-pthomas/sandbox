(ns algorithm-sandbox.chains)

(defn traverse-chain
  "Given a list of vectors, will randomly traverse. Optionally, will traverse forward and then backward."
  [& args]
  (if (= (last args) :backward)
    (concat (->> args drop-last (map rand-nth))
            (->> args drop-last drop-last reverse (map rand-nth)))
    (map rand-nth args)))

(comment
  (traverse-chain [1] [2 3] [4 5] :backward)
  )
