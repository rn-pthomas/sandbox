(ns typing-playground.schemas
  (:require [clojure.core                  :as core]
            [clojure.walk                  :as walk]
            [typing-playground.typechecker :as typechecker]))

(def ^{:private true} type-registry (atom {}))
(def ^{:dynamic true} *current-type* nil)

(defn needs-keys
  [& ks]
  (reduce (fn [acc k]
            (assoc acc k nil))
          {}
          ks))

(defn compute-namespace-lookup-key
  ([]
   (-> *ns* .getName keyword))
  ([^clojure.lang.Symbol type-name]
   (-> *ns* .getName (str "/" type-name) keyword)))

(defmacro make-type
  [^clojure.lang.Symbol type-name ^java.util.Map type-map]
  (swap! type-registry
         assoc
         (compute-namespace-lookup-key type-name)
         (eval type-map)))

(defn typecheck-get
  [form]
  (let [[_ lookup-map lookup-key] form]
    (if (contains? *current-type* lookup-key)
      form
      (throw (java.lang.Exception. (format "The key %s does not exist in the type definition %s" lookup-key *current-type*))))))

(comment
  (do
    (make-type my-type {:foo (needs-keys :bar :baz :quux)})
    (macroexpand-1
     '(uses-type
       my-type
       (get {:foo :barf} :foo)
       (get {:foo :barf} :alsdfkj))))
  )

(defn typecheck-relevant-forms
  "Relevant forms are:
  (get some-map ...)
  (get-in some-map ...)
  (assoc some-map ...)
  (dissoc some-map ...)
  (:foo some-map)"
  [body]
  (println (format "current type is %s" *current-type*))
  (walk/postwalk
   (fn [form]
     (if-not (seq? form)
       form
       (cond
         (= (first form) 'get)
         (typecheck-get form)

         :else
         form)))
   body))

(defmacro uses-type
  [^clojure.lang.Symbol type-name & body]
  (def type-name type-name)
  (let [lookup-key (compute-namespace-lookup-key type-name)]
    (if-let [t (-> type-registry deref (core/get lookup-key))]
      (binding [*current-type* t]
        `(do
           ~@(typecheck-relevant-forms body)))
      (throw (java.lang.Exception. (format "Error: couldn't find type %s" type-name))))))

(defn has-type?
  [lookup-key-or-path]
  (def lookup-key-or-path lookup-key-or-path)
  (def ct *current-type*)
  (cond
    (keyword? lookup-key-or-path)
    (contains? *current-type* lookup-key-or-path)

    :else
    (throw (java.lang.Exception. "invalid"))))


