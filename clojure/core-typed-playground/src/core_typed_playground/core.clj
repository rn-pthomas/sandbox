(ns core-typed-playground.core
  (:refer-clojure :exclude [defn])
  (:require [clojure.core.typed :as t :refer [ann cf check-ns defalias defn]]))

(defmacro defandreturn
  [thing]
  `(do (def ~thing ~thing)
       ~thing))

;; always type check on compile
(let [make-readable-type-error (fn [ex]
                                 (let [errors (->> ex .getData :errors (map #(.getData %)))
                                       friendly-errors (->> errors (map (fn [error]
                                                                          (format "Form: %s, Found error at line %s, column %s"
                                                                                  (-> error :form)
                                                                                  (-> error :env :line)
                                                                                  (-> error :env :column)))))]
                                   (defandreturn friendly-errors)))
      friendly-check-ns        (fn []
                                 (try (check-ns)
                                      (catch Exception e
                                        (make-readable-type-error e))
                                      (finally :ok)))]
  (friendly-check-ns))

