(ns transition-cljs.runner
  (:require [om.core :as om]))

(defn run-test
  [data {:keys [test-name states fixtures helpers] :as params}]
  (om/update! data :current-test params)
  (doseq [state states]
    (println state)))

(defn run-suite
  [data test-suite]
  (run-test data (first test-suite))
  #_(doseq [test test-suite]
      (run-test test)))
