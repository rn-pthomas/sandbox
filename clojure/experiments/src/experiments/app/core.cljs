(ns experiments.app.core
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(defn main-component
  []
  [:h1 "hey"])

(defn main
  []
  (reagent/render-component [main-component] (.-body js/document)))

(main)

