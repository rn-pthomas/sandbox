(ns clj-scratch.macros)

(defmacro unless
  [pred & body]
  `(when-not ~pred
     ~@body))

(defmacro if*
  [pred & body])
