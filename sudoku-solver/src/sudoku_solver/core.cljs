(ns sudoku-solver.core
  (:require [reagent.core :as r]
            [sudoku-solver.ui :as ui]
            [sudoku-solver.logic :as logic]))

(enable-console-print!)

(defn mk-grid
  []
  (vec
   (for [y (range logic/dimension)]
     (mapv (fn [x]
             ;; x and y are included only for debugging
             {:x       x
              :y       y
              :num     nil
              :locked? false})
           (range logic/dimension)))))

(defn mk-test-puzzle
  []
  (let [grid (mk-grid)]
    (-> grid
        (logic/track-update-locked {:x 5 :y 1 :num 3})
        (logic/track-update-locked {:x 7 :y 1 :num 8})
        (logic/track-update-locked {:x 8 :y 1 :num 5})
        (logic/track-update-locked {:x 2 :y 2 :num 1})
        (logic/track-update-locked {:x 4 :y 2 :num 2})
        
        (logic/track-update-locked {:x 3 :y 3 :num 5})
        (logic/track-update-locked {:x 5 :y 3 :num 7})
        (logic/track-update-locked {:x 2 :y 4 :num 4})
        (logic/track-update-locked {:x 6 :y 4 :num 1})
        (logic/track-update-locked {:x 1 :y 5 :num 9})
        
        (logic/track-update-locked {:x 0 :y 6 :num 5})
        (logic/track-update-locked {:x 7 :y 6 :num 7})
        (logic/track-update-locked {:x 8 :y 6 :num 3})
        (logic/track-update-locked {:x 2 :y 7 :num 2})
        (logic/track-update-locked {:x 4 :y 7 :num 1})
        (logic/track-update-locked {:x 4 :y 8 :num 4})
        (logic/track-update-locked {:x 8 :y 8 :num 1}))))

(defn mk-initial-state
  []
  {:grid    (mk-grid)
   :history []})

(defonce app-state
  (r/atom (mk-initial-state)))

(defn reset-app-state!
  []
  (reset! app-state (mk-initial-state)))

(defn main
  []
  (r/render-component [(partial ui/app-container app-state)]
                      (. js/document (getElementById "app"))))

(defn load-test-puzzle
  "https://en.wikipedia.org/wiki/File:Sudoku_puzzle_hard_for_brute_force.svg"
  []
  (swap! app-state assoc :grid (mk-test-puzzle)))

(main)
