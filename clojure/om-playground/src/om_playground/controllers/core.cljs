(ns om-playground.controllers.core
  (:require [cljs.core.async :as a])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def controller-chan (a/chan))

(defn notify
  ([dispatch-key]
   (a/put! controller-chan [dispatch-key]))
  ([dispatch-key data]
   (a/put! controller-chan [dispatch-key data])))

(defn cell-clicked
  []
  (println :cell-clicked))

(def controller-dispatch
  {:cell-clicked #'cell-clicked})

(defn listen
  []
  (go
    (while true
      (let [[dispatch-key data] (<! controller-chan)
            impl                (get controller-dispatch dispatch-key)]
        (impl data)))))

(listen)
