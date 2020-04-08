(ns feathers.circles
  (:require [feathers.helpers :as h]))

(defn default
  [& [size]]
  (let [base {:color 200
              :angle 0}]
    (if size
      (assoc base :size size)
      base)))

(defn update-position
  [self randomness-factor]
  (update self
          :angle
          (fn [a]
            (+ a 0.05 (h/randomness 0.01 randomness-factor)))))

(defn update-color
  [self randomness-factor]
  (update self
          :color
          (fn [c]
            (+ (mod (+ c 0.3) 255)
               (h/randomness 0.1 randomness-factor)))))

(defn apply-anim-updates
  [self & [randomness-factor]]
  (-> self
      (update-color randomness-factor)
      (update-position randomness-factor)))

(defn track-last-drawn
  [state]
  (let [{:keys [last-drawn num]} (:circles state)]
    (if (>= last-drawn num)
      (assoc-in state [:circles :last-drawn] 0)
      (update-in state [:circles :last-drawn] inc))))
