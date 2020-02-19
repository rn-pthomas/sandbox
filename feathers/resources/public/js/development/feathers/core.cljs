(ns feathers.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(enable-console-print!)

(defn setup []
  ;; Set frame rate to 30 frames per second.
  ;;(q/frame-rate 30)
  (q/frame-rate 20)
  ;; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/no-stroke)
  ;; setup function returns initial state. It contains
  ;; circle color and position.
  (let [initial-circle-state {:color 0 :angle 0}]
    {:circles {:s (assoc initial-circle-state :size 50)
               :m (assoc initial-circle-state :size 70)
               :l (assoc initial-circle-state :size 90)}}))

(defn modify-angle-with-randomness
  [state randomness-int]
  (+ (:angle state)
     (-> (rand-int randomness-int)
         inc
         (* 0.1))))

(defn update-circle
  [circle & [randomness-factor]]
  (let [randomness-factor (or randomness-factor 0)]
    (-> circle
        (update :color (fn [c]
                         (let [randomness-n (* 0.1 (rand-int randomness-factor))]
                           (+ (mod (+ c 0.2) 255)
                              randomness-n))))
        (update :angle (fn [a]
                         (let [randomness-n (* 0.001 (rand-int randomness-factor))]
                           (+ a 0.05 randomness-n))
                         ;;(+ a 0.05)
                         )))))

(defn update-state [state]
  (-> state
      (update-in [:circles :s] update-circle 1 )
      (update-in [:circles :m] update-circle 2)
      (update-in [:circles :l] update-circle 3 )))


(defn draw-state [state]
  ;; Clear the sketch by filling it with light-grey color.
  ;;(q/background 0)
  ;; Set circle color.
  (let [circles (:circles state)
        ordered-circles [
                         (:l circles)
                         (:m circles)
                         (:s circles)]]
    (doseq [{:keys [color angle size] :as circle} ordered-circles]
      (println circle)
      (q/fill color 255 255)
      ;; Calculate x and y coordinates of the circle.
      (let [x (* 150 (q/cos angle))
            y (* 150 (q/sin angle))]
        ;; Move origin point to the center of the sketch.
        (q/with-translation [(/ (q/width) 2)
                             (/ (q/height) 2)]
                                        ; Draw the circle.
          (println circle)
          ;;(q/ellipse x y size size)
          (q/rect x y size size))))))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch feathers
    :host "feathers"
    :size [500 500]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
