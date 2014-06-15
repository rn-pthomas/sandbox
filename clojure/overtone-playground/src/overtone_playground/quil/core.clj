(ns overtone-playground.quil.core
  (:require [quil.core                :as quil]
            [quil.helpers.seqs        :as seqs]
            [quil.helpers.calc        :as calc]
            [overtone-playground.core :as core]))

(defn setup
  []
  (quil/smooth)
  (quil/frame-rate 1)
  (quil/background 200))

(defn x
  []
  (quil/random (quil/width)))

(defn y
  []
  (quil/random (quil/height)))

(defn draw-example
  []
  (let [diam (quil/random 100)]
    (quil/stroke (quil/random 255))
    (quil/stroke-weight (quil/random 10))
    (quil/fill (quil/random 255))
    (quil/ellipse (x) (y) diam diam)))

(defn draw
  [ctx]
  (let [res (core/echo)
        {:keys [a b c d e]} res]))

(quil/defsketch example
  :title "Oh so many grey circles"
  :setup setup
  :draw  draw-example
  :size  [400 500])
