(ns markov-chains.core)

;; the following code was shamelessly ripped from:
;; http://diegobasch.com/fun-with-markov-chains-and-clojure

(defn markov-data
  [text]
  (let [maps
        (for [line (clojure.string/split text #"\.")
              m    (let [l     (str line ".")
                         words (cons :start (clojure.string/split l #"\s+"))]
                     (for [p (partition 2 1 (remove #(= "" %) words))]
                       {(first p) [(second p)]}))]
          m)]
    (apply merge-with concat maps)))

(defn sentence
  [data]
  (loop [ws  (data :start)
         acc []]
    (let [w    (rand-nth ws)
          nws  (data w)
          nacc (concat acc [w])]
      (if (= \. (last w))
        (clojure.string/join " " nacc)
        (recur nws nacc)))))

(comment
  (->> (for [w ["He" "She" "It"]
             x ["is" "was"]
             y ["a" "the"]
             z (map #(str % ".") ["girl" "boy" "cat" "crab" "twizzler"])]
         (apply str (interpose " " [w x y z])))
       (reduce (fn [acc word]
                 (str acc word " "))
               "")
       markov-data
       sentence)
  )
