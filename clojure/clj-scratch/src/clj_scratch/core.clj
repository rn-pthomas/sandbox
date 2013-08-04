(ns clj-scratch.core)

(defmacro deftraceable [fn-name args & body]
  `(defn ~fn-name [~@args]
     (do (println "calling " ~fn-name)
      ~@body)))
