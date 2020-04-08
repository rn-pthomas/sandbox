(ns feathers.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [feathers.circles :as c]))

(enable-console-print!)

(def initial-state
  {:circle-config
   {:num  4
    :size {:smallest 60
           :step     50}}
   :circles {:last-drawn 0}})


(defn setup []
  (q/frame-rate 20)
  (q/color-mode :hsb)
  (q/no-stroke)
  ;; setup function returns initial state. It contains
  ;; circle color and position.
  (let [initial-circle-state (:circles initial-state)
        num-circles          (:num initial-circle-state)
        smallest-size        (get-in initial-circle-state [:size :smallest])
        step-size            (get-in initial-circle-state [:size :step])]
    (assoc-in state
              [:circles :coll]
              (for [size (range smallest-size
                                (dec (+ smallest-size (* num-circles step-size)))
                                step-size)]
                (c/default size)))))

(defn update-state
  [state]
  (-> state
      (update :circles
              (fn [circles]
                (map-indexed
                 (fn [idx circle]
                   (c/apply-anim-updates circle (* (inc idx) 2)))
                 circles)))
      (c/track-last-drawn)))

(defn draw-last-circle
  [state]
  (q/with-translation [(/ (* 1.0 (q/width)) 2)
                       (/ (* 1.0 (q/height)) 2)]
    (println state)
    (let [{:keys [color angle size] :as circle-to-draw} (nth (:circles state) (:last-drawn state))]
      (q/fill color 255 255)
      (let [x (* 120 (q/cos angle))
            y (* 120 (q/sin angle))]
        ;; Move origin point to the center of the sketch.
        (q/ellipse x y size size)))))

(defn draw-state
  [state]
  ;; Clear the sketch by filling it with light-grey color.
  ;;(q/background 0)
  ;; Set circle color.
  ;;  (q/stroke 255)
  (q/with-translation [(/ (* 1.0 (q/width)) 2)
                       (/ (* 1.0 (q/height)) 2)]
    (draw-last-circle state)))

(defn mouse-pressed
  [state event]
  (println state)
  (println event)
  state)

(defn ^:export run-sketch []
  (q/defsketch feathers
    :host "feathers"
    :size [500 500]
    ;; setup function called only once, during sketch initialization.
    :setup setup
    ;; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    :mouse-pressed mouse-pressed
    ;; This sketch uses functional-mode middleware.
    ;; Check quil wiki for more info about middlewares and particularly
    ;; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
