(ns reagent-playground.components.animation-viz
  (:require [reagent-playground.session :as session]))

(defn column
  [x highlighted-x highlighted-y]
  [:div.column
   (for [y (range (session/get :size))]
     (if (true? (session/get-in [:animation-state x y :highlighted]))
       [:div.box.highlighted]
       [:div.box]))])

(defn component
  []
  [:div
   (let [[highlighted-x highlighted-y] (session/get :highlighted)]
     (for [x (range (session/get :size))]
       (column x highlighted-x highlighted-y)))])
