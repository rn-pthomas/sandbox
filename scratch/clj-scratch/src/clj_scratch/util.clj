(ns clj-scratch.util
  (:require [clojure.data.json :as json]))

(defn string-to-keyword-map [m]
  (let [un-jsonified-map (json/read-str m)]
    (into {}
          (map (fn [x] {(keyword (first x)) (second x)})
               un-jsonified-map))))
