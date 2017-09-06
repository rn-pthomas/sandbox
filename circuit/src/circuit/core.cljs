(ns circuit.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(def dimension 14)
(def style-factor 48)

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
        css-class (if locked?
                    :div.cell.locked
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

(defn find-first-non-locked
  [{:keys [locked-cells] :as s}]
  (->> (for [x (range dimension)
             y (range dimension)]
         [x y])
       (filter (fn [[x y]]
                 (not (contains? locked-cells [x y]))))
       first))

(defn has-duplicates?
  [l]
  (not (empty? (for [[id freq] (frequencies l)
                     :when     (> freq 1)]
                 id))))

(defn spawn-locked
  [s]
  (let [first-available-cell (find-first-non-locked s)]
    (update-in s [:locked-cells] conj first-available-cell)))

(defn move-locked-cells
  [{:keys [locked-cells] :as s}]
  (let [moved-locked-cells (map (fn [[x y]]
                                  (move-randomly x y))
                                locked-cells)
        new-app-state (assoc s :locked-cells (set moved-locked-cells))
        new-app-state (if (has-duplicates? moved-locked-cells)
                        (spawn-locked new-app-state)
                        new-app-state)]
    (reset! app-state new-app-state)))

(defn spawn-locked!
  []
  (let [first-available-cell (find-first-non-locked @app-state)]
    (swap! app-state update-in [:locked-cells] conj first-available-cell)))

(defn apply-updates
  [s]
  (-> s
      (assoc :running? true)
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


