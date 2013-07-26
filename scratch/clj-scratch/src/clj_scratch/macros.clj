(ns clj-scratch.macros)

(defmacro unless
  [pred & body]
  `(when-not ~pred
     ~@body))

(defmacro if*
  [pred & body]
  (let [body (if (= :then (first body)) (rest body) body)
        [if-clauses _ else-clauses] (partition-by #(= :else %) body)]
    `(if ~pred
       (do ~@if-clauses)
       (do ~@else-clauses))))


(comment

  (if* (= 3 3)
       :then
       (println "you")
       (println "should")
       (println "see")
       (println "this")
       :else
       (println "you")
       (println "won't")
       (println "see")
       (println "this"))

  )
