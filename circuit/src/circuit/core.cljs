(ns circuit.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(def dimension 25)
(def style-factor 22)

(defn mk-grid
  []
  (vec
   (for [y (range dimension)]
     (mapv (fn [x]
             ;; x and y are included only for debugging
             {:x       x
              :y       y
              :locked? false})
           (range dimension)))))

(defonce app-state
  (r/atom {:counter  0
           :running? false
           :grid     (mk-grid)}))

(defn make-style
  [x y]
  {:top  (* y style-factor)
   :left (* x style-factor)})

(defn cell
  [x y]
  (let [state-val @app-state
        counter   (:counter state-val)
        locked?   (contains? (:locked-cells state-val) [x y])
        frozen?   (contains? (:frozen-cells state-val) [x y])
        css-class (cond
                    frozen?
                    :div.cell.frozen
                    
                    locked?
                    :div.cell.locked

                    :else
                    :div.cell)]
    [css-class {:style    (make-style x y)
                :data-x   x
                :data-y   y
                :key      (str x "." y)
                :on-click (fn [_]
                            (swap! app-state update-in [:locked-cells] conj [x y]))}]))

(defn app-container
  []
  (let [{:keys [grid counter]} @app-state]
    [:div (doall
           (for [y (range dimension)
                 x (range dimension)]
             (cell x y)))]))

(defn move-up
  [x y]
  (if (= y 0)
    [x 1]
    [x (dec y)]))

(defn move-down
  [x y]
  (if (= y (dec dimension))
    [x (dec (dec dimension))]
    [x (inc y)]))

(defn move-left
  [x y]
  (if (= x 0)
    [1 y]
    [(dec x) y]))

(defn move-right
  [x y]
  (if (= x (dec dimension))
    [(dec (dec dimension)) y]
    [(inc x) y]))

(defn move-randomly
  [x y]
  (let [movement-fn (rand-nth [move-up move-down move-left move-right])]
    (movement-fn x y)))

(defn find-non-locked
  [{:keys [locked-cells frozen-cells] :as s}]
  (->> (for [x (range dimension)
             y (range dimension)]
         [x y])
       (filter (fn [[x y]]
                 (and
                  (not (contains? locked-cells [x y]))
                  (not (contains? frozen-cells [x y])))))))

(defn find-first-non-locked
  [{:keys [locked-cells frozen-cells] :as s}]
  (first (find-non-locked s)))

(defn detect-duplicates
  [& ls]
  (let [l (apply concat ls)]
    (for [[id freq] (frequencies l)
          :when     (> freq 1)]
      id)))

(defn has-duplicates?
  [& ls]
  (not (empty? (apply detect-duplicates ls))))

(defn spawn-locked
  [s]
  (let [available-cell (rand-nth (find-non-locked s))]
    (update-in s [:locked-cells] conj available-cell)))

(defn freeze-duplicates
  [{:keys [frozen-cells] :as s} moved-locked-cells]
  (let [duplicates (detect-duplicates moved-locked-cells frozen-cells)]
    (-> s
        (update-in [:frozen-cells] (fn [cs]
                                     (set (apply (partial conj cs) duplicates))))
        (update-in [:locked-cells] (fn [cs]
                                     (set (remove (set duplicates) cs)))))))

(defn move-locked-cells
  [{:keys [frozen-cells locked-cells] :as s}]
  (let [moved-locked-cells (map (fn [[x y]]
                                  (move-randomly x y))
                                locked-cells)
        new-app-state      (assoc s :locked-cells (set moved-locked-cells))
        new-app-state      (if (has-duplicates? moved-locked-cells frozen-cells)
                             (-> new-app-state
                                 spawn-locked
                                 (freeze-duplicates moved-locked-cells))
                             new-app-state)]
    (reset! app-state new-app-state)))

;; nb> currently there is a bug where detect-adjacent will only detect cells that are on top of each other, not next to each other
(defn detect-adjacent
  "cells are [x y] coordinates"
  [cells]
  (let [sorted-cell-pairs (concat (->> cells
                                       sort
                                       (partition 2 1))
                                  (->> cells
                                       (sort-by second)
                                       (partition 2 1)))
        _ (def sorted-cell-pairs sorted-cell-pairs)
        adjacent-pairs    (->> sorted-cell-pairs
                               (filter (fn [[[x1 y1] [x2 y2]]]
                                         (let [x-dist (Math/abs (- x1 x2))
                                               y-dist (Math/abs (- y1 y2))]
                                           (or (and (= x-dist 1) (= y-dist 0))
                                               (and (= x-dist 0) (= y-dist 1)))))))]
    (reduce (fn [acc [first-pair second-pair]]
              (-> acc (conj first-pair) (conj second-pair)))
            #{}
            adjacent-pairs)))

(defn freeze-candidates
  "If two cells are vertically or horizontally adjacent, freeze them and spawn a new one."
  [{:keys [locked-cells frozen-cells] :as s}]
  (let [all-interested-cells (set (concat locked-cells frozen-cells))
        adjacent-cells       (detect-adjacent all-interested-cells)]
    (-> s
        (update-in [:frozen-cells] (fn [cs]
                                     (set (apply (partial conj cs) adjacent-cells)))))))

(defn spawn-locked!
  []
  (let [available-cell (rand-nth (find-non-locked @app-state))]
    (swap! app-state update-in [:locked-cells] conj available-cell)))

(defn apply-updates
  [s]
  (-> s
      (assoc :running? true)
      freeze-candidates
      move-locked-cells))

(defn start-loop
  []
  (when-not (:running? @app-state)
    (.setInterval
     js/window
     (fn []
       (swap! app-state apply-updates))
     200)))

(defn main
  []
  (r/render-component [app-container]
                      (. js/document (getElementById "app")))
  (start-loop))

(main)


