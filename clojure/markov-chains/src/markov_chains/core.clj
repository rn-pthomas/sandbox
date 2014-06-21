(ns markov-chains.core
  (:import [javax.sound.midi MidiEvent MidiSystem Sequence Sequencer]))

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

  (let [text "He is a boy. She is a girl. He is young. She is younger."]
    (let [maps (for [line (clojure.string/split text #"\.")
                     m    (let [l     (str line ".") 
                                words (cons :start (clojure.string/split l #"\s+"))]
                            (for [p (partition 2 1 (remove #(= "" %) words))]
                              {(first p) [(second p)]}))]
                 m)]
      (apply merge-with concat maps)
      maps))
  
  ;; http://diegobasch.com/fun-with-markov-chains-and-clojure
)
