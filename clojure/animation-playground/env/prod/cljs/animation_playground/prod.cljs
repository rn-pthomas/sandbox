(ns animation-playground.prod
  (:require [animation-playground.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
