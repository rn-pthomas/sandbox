(ns overtone-playground.quil.core
  (:require [quil.core                :as quil]
            [quil.helpers.seqs        :as seqs]
            [quil.helpers.calc        :as calc]
            [overtone-playground.core :as core]))

(def background-color 200)

(defn draw-point
  [x y noise-factor]
  (let [grayscale-level (quil/random 255)]
    (quil/push-matrix)
    (quil/translate x y)
    ;;(quil/rotate (* noise-factor (quil/radians 360)))
    (quil/rotate (* noise-factor (quil/radians 270)))
    (quil/stroke 0 150)
    (quil/line 10 0 25 3)
    (quil/pop-matrix)))

(defn draw-all-points
  [x-start y-start step-size]
  (dorun
   (for [[x-idx x] (seqs/indexed-range-incl 0 (quil/width) step-size)
         [y-idx y] (seqs/indexed-range-incl 0 (quil/height) step-size)]
     (let [x-noise-shift (* x-idx 0.1)
           y-noise-shift (* y-idx 0.1)
           x-noise (+ x-start x-noise-shift)
           y-noise (+ y-start y-noise-shift)]
       (draw-point x y (quil/noise x-noise y-noise))))))

(defn starts-seq []
  (let [noise-steps (seqs/steps (quil/random 20) 0.01)
        noises      (map quil/noise noise-steps)
        noises      (calc/mul-add noises 0.5 -0.25)
        noise-tally (seqs/tally noises)]
    (map +
         (seqs/steps (quil/random 10) 0.01)
         noise-tally)))

(defn setup []
  (quil/smooth)
  (quil/background background-color)
  (quil/frame-rate 24)

  (let [x-starts   (starts-seq)
        y-starts   (starts-seq)
        starts-str (seqs/seq->stream (map list x-starts y-starts))]
    (quil/set-state! :starts-str starts-str)))

(defn draw []
  (quil/background background-color)
  (let [[x-start y-start] ((quil/state :starts-str))]
    (draw-all-points x-start y-start 20)))

(quil/defsketch gen-art-25
  :title "Animated Rotated Lines"
  :setup setup
  :draw draw
  :size [500 500])
