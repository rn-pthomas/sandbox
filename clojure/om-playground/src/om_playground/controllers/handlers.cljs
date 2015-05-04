(ns om-playground.controllers.handlers
  (:require [cljs.core.async     :as async :refer [chan <! >! timeout]]
            [om-playground.state :as state]
            [om.core             :as om])
  (:require-macros [cljs.core.async.macros             :refer [go]]
                   [om-playground.controllers.handlers :refer [defhandler]]))

(def controller-dispatch (atom {}))

(defhandler kill-cell
  (let [{:keys [x y]} opts]
    (om/set-state! owner :dead true)
    (go
      (-> state/app-state
          deref
          (get-in [:channels :rebuild-cell-ch])
          (>! {:component owner})))))

(defhandler rebuild-cell
  (om/set-state! (:component params) :dead false))



