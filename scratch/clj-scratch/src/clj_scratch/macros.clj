(ns clj-scratch.macros)

(defmacro unless
  [pred & body]
  `(when-not ~pred
     ~@body))

(defn if-cases [body]
  (take-while (fn [case] (not= case :else))
   (rest
    (drop-while (fn [case] (not= case :then)) body))))
(defn else-cases [body]
  (rest (drop-while (fn [case] (not= case :else)) body)))

(defmacro if*
  [pred & body]
  `(when (= (count (filter (fn [x#] (or (= x# :then) (= x# :else))) ~@body)) 2)
     (if ~`(eval ~pred)
       (do
         ~(if-cases body)
         )
       (do
         ~(else-cases body)
         ))))




(comment

  ;; NB> Implement this macro.
  (unless (= 3 2)
          (println "they were not equal"))

  ;; NB> Implement this macro.
  (if* some-pred
       :then
       (do something)
       (do something else)
       (do another thing)
       :else
       (do some stuff)
       (do more stuff)
       (do some more stuff))

  (macroexpand-1 '(if* (= 1 1)
                      [:then
                       (println "one")
                       (println "two")
                       :else
                       (println "three")
                       (println "four")
                       ]))
  (clojure.core/when (clojure.core/= (clojure.core/count (clojure.core/filter (clojure.core/fn [x__82947__auto__] (clojure.core/or (clojure.core/= x__82947__auto__ :then) (clojure.core/= x__82947__auto__ :else))) [:then (println "one") (println "two") :else (println "three") (println "four")])) 2) (if (clojure.core/eval (= 1 1)) (do ()) (do ())))

  )
