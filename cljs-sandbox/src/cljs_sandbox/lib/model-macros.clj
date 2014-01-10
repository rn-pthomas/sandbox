(ns cljs-sandbox.lib.model-macros)

(defmacro defmodel
  ^{:doc "Creates a two-way data bound model"}
  [model-name bind-attrs]
  `(def ~model-name "hmm"
     #_(reduce (fn [acc attr]
               (assoc acc attr (fn [x]
                                 (println x))))
             {}
             bind-attrs)))
