(ns om-playground.animation
  (:require [om-playground.state            :as state]
            [cljs.core.async                :refer [chan timeout <! >!]]
            [om-playground.controllers.core :refer [notify]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn rebuild-cells
  []
  (let [rebuild-cell-ch (-> state/app-state deref (get-in [:channels :rebuild-cell-ch]))]
    (go
      (while true
        (<! (timeout 1000))
        (notify :rebuild-cell (<! rebuild-cell-ch))))))
