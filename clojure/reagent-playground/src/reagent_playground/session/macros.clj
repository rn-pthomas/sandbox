(ns reagent-playground.session.macros)

(defn- ->map-destructuring-form
  [map-destructuring-vec]
  (conj [] (hash-map :keys map-destructuring-vec)))

(defmacro deftransition
  [fn-name key-path map-destructuring-vec & body]
  `(defn ~fn-name
     ~(->map-destructuring-form map-destructuring-vec)
     (let [~'state (reagent-playground.session/get-in ~key-path)]
       (reagent-playground.session/assoc-in ~key-path ~@body))))
