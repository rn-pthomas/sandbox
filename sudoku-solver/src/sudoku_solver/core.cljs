(ns sudoku-solver.core
    (:require [reagent.core :as r]))

(enable-console-print!)

(defonce height-and-width 9)

(defonce app-state
  (r/atom {:grid (reduce (fn [acc [x y]]
                         (assoc acc [x y] nil))
                       {}
                       (for [x (range height-and-width)
                             y (range height-and-width)]
                         [x y]))
           :history []
           :counter 0}))

(defonce coord-list
  (for [x (range height-and-width)
        y (range height-and-width)]
    [x y]))

(defn find-first-non-empty
  []
  (let [grid            (:grid @app-state)
        first-non-empty (->> coord-list
                             (filter (fn [[x y]]
                                       (not (nil? (get grid [x y])))))
                             first)
        [x y]           first-non-empty]
    (when first-non-empty
      {:x   x
       :y   y
       :num (get grid [x y])})))

(defn gather-column
  [{:keys [x]}]
  (let [grid (:grid @app-state)]
    (map (fn [n]
           {:x   x
            :y   n
            :val (get grid [x n])})
         (range height-and-width))))

(defn gather-row
  [{:keys [y]}]
  (let [grid (:grid @app-state)]
    (map (fn [n]
           {:x   n
            :y   y
            :val (get grid [n y])})
         (range height-and-width))))

(defn gather-box
  [{:keys [x y num]}]
  (let [grid          (:grid @app-state)
        sqrt          (Math/sqrt height-and-width)
        lower-bound-x (- x (mod x sqrt))
        lower-bound-y (- y (mod y sqrt))
        coords        (for [x (range lower-bound-x (+ lower-bound-x sqrt))
                            y (range lower-bound-y (+ lower-bound-y sqrt))]
                        [x y])]
    (map (fn [[x y]]
           {:x x
            :y y
            :val (get grid [x y])})
         coords)))

(defn number-not-valid?
  [{:keys [x y num] :as params}]
  (let [column   (gather-column params)
        row      (gather-row params)
        box      (gather-box params)
        all-vals (->> [(map :val column) (map :val row) (map :val box)]
                      flatten
                      distinct
                      (filter #(not (nil? %)))
                      set)]
    (contains? all-vals num)))

(defn step
  []
  (when-let [first-non-empty (find-first-non-empty)]
    (if (number-not-valid? first-non-empty)
      :increment-number-in-x-by-y
      :find-next-empty-cell-and-add-number)))

(defn make-style
  [x y]
  (let [factor 55]
    {:top  (* x factor)
     :left (* y factor)}))

(defn track-update
  [{:keys [x y val]}]
  (swap! app-state update-in [:grid [x y]] (fn [_]
                                             val)))

(defn cell
  [x y]
  [:input.cell {:type      "text"
                :maxLength 1
                :data-x    x
                :data-y    y
                :value     (get-in @app-state [:grid [x y]])
                :style     (make-style x y)
                :on-change (fn [evt]
                             (let [val (-> evt .-target .-value)]
                               (if (number-not-valid? {:x x :y y :num val})
                                 (println "number not valid" {:x x :y y :num val})
                                 (track-update {:x x :y y :val val}))))}])

(defn app-grid
  []
  [:div
   (for [x (range height-and-width)
         y (range height-and-width)]
     (cell x y))])

(defn app-container
  []
  @app-state ;; just to trigger rerendering
  (app-grid))

(defn main
  []
  (r/render-component [app-container]
                      (. js/document (getElementById "app"))))

(main)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;;(swap! app-state update-in [:__figwheel_counter] inc)
)
