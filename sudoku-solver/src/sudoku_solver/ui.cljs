(ns sudoku-solver.ui
  (:require [sudoku-solver.logic :as logic]))

(def factor 56)

(defn make-style
  [x y]
  {:top  (* y factor)
   :left (* x factor)})

(defn cell
  [state x y]
  (let [{:keys [num locked?]} (-> @state
                                  :grid
                                  (get-in [y x]))
        css-class             (if locked?
                                :input.cell.locked
                                :input.cell)]
    [css-class {:type      "text"
                :maxLength 1
                :value     num
                :style     (make-style x y)
                :data-x    x
                :data-y    y
                :on-change (fn [evt]
                             #_(let [text-val (-> evt .-target .-value)]
                                 (if (empty? text-val)
                                   (track-update {:x x :y y :num nil})
                                   (let [val    (js/parseInt text-val)
                                         params {:x x :y y :num val}]
                                     (if (not (number-valid? params))
                                       (println "number not valid" params)
                                       (track-update params))))))}]))

(defn app-grid
  [state]
  [:div
   (for [y (range logic/dimension)
         x (range logic/dimension)]
     (cell state x y))])

(defn app-container
  [state]
  (let [grid (:grid @state)]
    [:div
     (app-grid state)
     [:input#step-btn {:type     "button"
                       :value    "Step"
                       :style    (make-style 9 9)
                       :on-click (fn [_]
                                   (swap! state (fn [existing-state]
                                                  (let [current-grid (:grid existing-state)]
                                                    (-> existing-state
                                                        (update-in [:history] conj current-grid)
                                                        (update-in [:grid] logic/step))))))}]]))
