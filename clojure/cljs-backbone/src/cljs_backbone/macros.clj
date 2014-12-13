(ns cljs-backbone.macros)

(defmacro defview
  [view-name & body])

(defmacro defmodel
  [model-name & body])

(defmacro defrouter
  [router-name & body]
  `(def ~router-name
     (.extend Backbone.Router {:routes ~@body})))


