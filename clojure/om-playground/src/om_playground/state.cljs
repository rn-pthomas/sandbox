(ns om-playground.state
  (:require [cljs.core.async :refer [chan]]))

(defonce app-state
  (atom {:channels {:rebuild-cell-ch (chan)}}))
