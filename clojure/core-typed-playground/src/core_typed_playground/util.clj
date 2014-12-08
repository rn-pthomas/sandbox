(ns core-typed-playground.util
  (:require [clojure.core.typed :as t]))

(defmacro defexceptiontransform
  [fn-name & body]
  `(defn ~fn-name
     [~'exception]
     ~@body))

(defmacro deftransform
  [transform-name & body]
  `(do ~@(concat
          (map (fn [[fn-name# fn-body#]]
                 `(defn ~fn-name#
                    [~'$]
                    ~fn-body#))
               (partition 2 body))
          (list
           `(defn ~transform-name
              [~'$]
              ~(concat (list '-> '$)
                       (->> body
                            (partition 2)
                            (map first))))))))

(deftransform make-friendly-type-errors
  ->data
  (.getData $)

  ->errors
  (:errors $))

(defn type-check
  []
  (try (t/check-ns)
       (catch java.lang.Exception e
         (do (def e e)
             :didnt-type-check))))

(comment
  (type (-> e
           ->data
           ->errors))
  )


