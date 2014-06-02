(ns clj-playground.core
  (:require [clojure.walk :as walk]))

(defmulti parse-item
  (fn [form ctx]
    (cond (seq? form)                 :seq
          (integer? form)             :int
          (and (number? form)
               (not (integer? form))) :double
          (symbol? form)              :symbol
          (nil? form)                 :nil)))

(defmulti parse-sexpr
  (fn [[sym & rest] ctx]
    sym))

(defmethod parse-sexpr 'if
  [[_ test then else] ctx]
  {:type :if
   :test (parse-item test ctx)
   :then (parse-item then ctx)
   :else (parse-item else ctx)})

(defmethod parse-sexpr 'do
  [[_ & body] ctx]
  {:type :do
   :body (doall
          (map #(parse-item % ctx)
               body))})

(defmethod parse-sexpr :default
  [[f & body] ctx]
  {:type :call
   :fn   (parse-item f ctx)
   :args (vec
          (map #(parse-item % ctx)
               body))})

(defmethod parse-item :seq
  [form ctx]
  (parse-sexpr (macroexpand form) ctx))

(defn make-simple-parsed
  ([type]
     {:type type})
  ([type form]
     {:type  type
      :value form}))

(defmethod parse-item :int
  [form ctx]
  (make-simple-parsed :int form))

(defmethod parse-item :double
  [form ctx]
  (make-simple-parsed :double form))

(defmethod parse-item :symbol
  [form ctx]
  (make-simple-parsed :symbol form))

(defmethod parse-item :nil
  [form ctx]
  (make-simple-parsed :nil))

(defmacro to-ast
  [form]
  (parse-item form {}))

(comment
  (to-ast (+ (- 1 2) (* 3 (/ 7 2.3))))
  )
