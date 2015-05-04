(ns om-playground.controllers.handlers)

(defmacro defhandler
  [^clojure.lang.Symbol handler-name impl]
  `(swap! controller-dispatch
          assoc
          ~(keyword handler-name)
          (fn [~'{:keys [data owner opts] :as params}]
            ~impl)))
