(ns reagent-playground.debugger-cmp
  (:require [reagent-playground.session :as session]))

(defn component
  []
  [:div
   [:p (str "highlighted: " (session/get :highlighted))]])
