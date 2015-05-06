(ns quil-playground.core
  (:require [quil.core          :as q]
            [spawn.core         :as s]
            [clojure.core.async :as a]))

(defn move-randomly-within-bounds
  [{:keys [upper interval]}]
  (let [interval (or interval 1)]
    (fn [n]
      (cond
        (<= n 0)
        (+ n interval)

        (>= n upper)
        (- n interval)

        :else
        ((rand-nth [+ -]) n interval)))))

(s/defstream color-stream (move-randomly-within-bounds {:upper 255 :interval 3}) 200)
(s/defstream x-movement (move-randomly-within-bounds {:upper 500 :interval 10}) 10)
(s/defstream y-movement (move-randomly-within-bounds {:upper 500 :interval 10}) 10)

(defn setup
  []
  (q/smooth)
  (q/frame-rate 30)
  (q/background 200))

(defn draw
  []
  (let [color (a/<!! color-stream)
        diam  18
        x     (a/<!! x-movement)
        y     (a/<!! y-movement)]
    (q/stroke color)
    (q/fill color)
    (q/ellipse x y diam diam)))

(q/defsketch example
  :title "grey circles"
  :setup setup
  :draw draw
  :size [500 500])
