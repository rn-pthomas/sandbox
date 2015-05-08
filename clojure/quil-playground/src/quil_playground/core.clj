(ns quil-playground.core
  (:require [quil.core          :as q]
            [spawn.core         :as s]
            [clojure.core.async :as a]))

(def height 600)
(def width 900)

(defn move-randomly-within-bounds
  [{:keys [upper lower interval]}]
  (let [interval (or interval 1)
        lower    (or lower 0)]
    (fn [n]
      (cond
        (<= n lower)
        (+ n interval)

        (>= n upper)
        (- n interval)

        :else
        ((rand-nth [+ -]) n interval)))))

(s/defstream color-stream (move-randomly-within-bounds {:upper 255 :interval 3}) 200)
(s/defstream bg-color-stream (move-randomly-within-bounds {:upper 255 :interval 1}) 200)
(s/defstream x-movement (move-randomly-within-bounds {:upper width :interval 15}) 10 100)
(s/defstream y-movement (move-randomly-within-bounds {:upper height :interval 16}) 10 100)
(s/defstream diam-stream (move-randomly-within-bounds {:upper 50 :lower 20 :interval 2}) 40 100)

(defn setup
  []
  (q/smooth)
  (q/frame-rate 20)
  (q/background 200))

(defn draw
  []
  (let [color    (a/<!! color-stream)
        diam     (a/<!! diam-stream)
        x        (a/<!! x-movement)
        y        (a/<!! y-movement)]
    (q/stroke color)
    (q/fill color)
    (q/ellipse x y diam diam)))

(q/defsketch example
  :title "grey circles"
  :setup setup
  :draw draw
  :size [width height])
