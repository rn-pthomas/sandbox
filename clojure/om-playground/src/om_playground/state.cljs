(ns om-playground.state
  (:require [cljs.core.async :refer [chan]]))

(def app-state
  (atom {:channels {:rebuild-cell-ch (chan)}}))
