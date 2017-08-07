(ns sudoku-solver.core
    (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce app-state
  (atom {:grid    (for [x (range 9)
                        y (range 9)]
                    {:x   x
                     :y   y
                     :num nil})
         :history []}))

(defn make-style
  [x y]
  (let [factor 55]
    {:top  (* x factor)
     :left (* y factor)}))

(defn cell
  [x y]
  [:input.cell {:type      "text"
                :maxLength 1
                :data-x    x
                :data-y    y
                
                :style     (make-style x y)}])

(defn app-grid
  []
  [:div
   (for [x (range 9)
         y (range 9)]
     (cell x y))])

(defn app-container
  []
  (app-grid))

(defn main
  []
  (reagent/render-component [app-container]
                            (. js/document (getElementById "app"))))

(main)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
