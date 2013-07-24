(ns quil-sandbox.core
  (:use quil.core
        [clojure.repl :only (doc)]))

(defn setup []
  (smooth)
  (frame-rate 10)
  (background 200))

(defn draw-again []
  (let [size (+ 50 (rand 120))]
    (stroke 100)
    (stroke-weight 4)
    (arc (/ (width) 2)
         (/ (height) 2)
         size
         size
         0
         20)))

(defn draw []
  (stroke (rand 255))
  (stroke-weight (rand 10))
  (fill (rand 255))
  (let [diam (rand 100)
        x    (rand (width))
        y    (rand (height))]
    (arc x y x y (double (/ y 2)) (double (/ x 2)))))

(defsketch example
  :title "Oh so many grey circles"
  :setup setup
  :draw draw-again
  :size [323 200])


(comment

  (doc arc)
  (doc show-cats)
  (show-cats)
  (show-fns )

  )


(defn accumulator
  []
  (let [x (atom 0)]
    (fn []
      (swap! x inc))))

(def my-accumulator (accumulator))
(my-accumulator) ;; 2
(def your-accumulator (accumulator))
(your-accumulator)



(repeat 10 (my-accumulator)) ;; (5 5 5 5 5 5 5 5 5 5)
(6 6 6 6 6 6 6 6 6 6)
