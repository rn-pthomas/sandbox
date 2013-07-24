(ns clj-scratch.core
  (:require [clojure.core.async :refer :all]
            [clojure.data.json  :as json]
            [clojure.java.io    :as io]
            [clj-scratch.util   :refer :all])
  (:gen-class))

(defn get-lines [fname]
  (with-open [r (io/reader fname)]
    (doall (line-seq r))))
(def test-data (get-lines "./data/test_data.json"))

(string-to-keyword-map (first test-data))

(defn count-occurences-of
  [el coll key]
  (count (filter (fn [x]
                   (= el x))
                 (map key coll))))

(comment
  (def test-maps
  [{:a "cat"   :b "frog"}
   {:a "horse" :b "cat"}
   {:a "cat"   :b "horse"}
   {:a "dog"   :b "horse"}])
  (count-occurences-of "horse" test-maps :b)
  )

;; ASYNC stuff
(defn async-test []
  (doseq [i (range 10)]
    (go
     (Thread/sleep (rand-int 1000))
     (println i)))

  (Thread/sleep 2000))

(defn async-test-2 []
  (let [c (chan)]
    (doseq [i (range 10)]
      (go
       (Thread/sleep (rand-int 1000))
       (>! c i)))

    (<!!
     (go
      (doseq [_ (range 10)]
        (do (println (<! c))
            (println "yo dood")))))))

(doseq )
