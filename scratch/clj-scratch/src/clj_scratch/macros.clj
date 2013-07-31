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

(defmacro def-watched
  [name & value]
  `(do
     (def ~name ~@value)
     (add-watch (var ~name)
                :re-bind
                (fn [~'key ~'r old# new#]
                  (println old# " -> " new#)))))

;;--------------------------------------------------------------------
;; Examples from "The Joy of Clojure"
(defmacro domain
  [name & body]
  `{:tag     :domain
    :attrs   {:name (str '~name)}
    :content [~@body]})

(declare handle-things)

(defmacro grouping
  [name & body]
  `{:tag     :grouping
    :attrs   {:name (str ~'name)}
    :content [~@(handle-things body)]})

(declare grok-attrs grok-props)

(defn handle-things
  [things]
  (for [t things]
    {:tag     :thing
     :attrs   (grok-attrs (take-while (comp not vector?) t))
     :content (if-let [c (grok-props (drop-while (comp not vector?) t))]
                [c]
                [])}))

(defn grok-attrs
  [attrs]
  (into {:name (str (first attrs))}
        (for [a (rest attrs)]
          (cond
           (list? a) [:isa (str (second a))]
           (string? a) [:comment a]))))

(defn grok-props
  [props]
  (when props
    {:tag     :properties
     :attrs   nil
     :content (apply vector (for [p props]
                              {:tag     :property
                               :attrs   {:name (str (first p))}
                               :content nil}))}))





;;---------------------------------------------------------------------
(comment



  )
