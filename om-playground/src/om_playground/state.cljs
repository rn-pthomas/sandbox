(ns om-playground.state
  (:require [om-playground.models.box :as box]))

(def app-state
  {:highlighted (box/initial-box-position)})
