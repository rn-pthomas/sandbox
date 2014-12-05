(ns schema-playground.generative
  (:require [schema.core :as s]))

(def type-dispatch
  {java.lang.String  s/Str
   java.lang.Integer s/Num
   java.lang.Double  s/Num})

(defn map->type-map
  [m]
  (let [type-vec (reduce (fn [acc [k v]]
                           (conj acc k (or (get type-dispatch (type v))
                                 (type v))))
                         
                         []
                         m)]
    (if (> (count type-vec) 2)
      (partition 2 type-vec)
      type-vec)))

(defn gen-type-vec
  [maps]
  (->> maps
       (map map->type-map)
       flatten
       (partition 2)))

(defn gen-type-map
  [type-vec]
  (reduce (fn [acc [k t]]
            (let [existing (get acc k)]
              (if (= existing t)
                acc
                (update-in acc [k] conj t))))
          {}
          type-vec))

(defn generate-schema
  "Given a schema of (possibly) heterogenous maps, generates
  a valid Schema that will match all of them."
  [& maps]
  (let [type-vec (gen-type-vec maps)
        type-map (gen-type-map type-vec)]
    (reduce (fn [acc [k v]]
              (assoc acc k (if (= (count v) 1)
                             (first v)
                             v)))
            {}
            type-map)))

(comment
  (s/either [java.lang.String java.lang.Long])
  (s/maybe java.lang.String)
  (generate-schema {:foo :bar} {:foo 1 :baz "something"})
  {:baz (java.lang.String), :foo (java.lang.Long clojure.lang.Keyword)}
  (((:foo clojure.lang.Keyword))
   ((:foo java.lang.Long) (:baz java.lang.String)))

 )


