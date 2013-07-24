(ns overtone-playground.core
  (:require [overtone.live :as overtone])
  (:use [clojure.core.async :exclude [pprint]]))

(def crazy-sound (sample (freesound-path 183099)))
(def hat (sample (freesound-path 28788)))
(def click (sample (freesound-path 43689)))
(def plastic-click (sample (freesound-path 63532)))

(defn splat-drums [sound times entropy]
  (doseq [i (range times)]
    (async/go
     (Thread/sleep (rand-int entropy))
     (sound))))

(defmacro random-drums [times entropy]
  (doseq))

(defn random-drums [sound times entropy]
  (doseq [i (range times)]
    (async/go
     (Thread/sleep (rand-int entropy))
     (eval (rand-nth ['(crazy-sound)
                      '(hat)
                      '(click)
                      '(plastic-click)]))
     #_(sound))))

(comment
 (do
   (doseq [i (range 16)]
     (async/go (splat-drums hat 20 (rand-int 200)))
     (Thread/sleep 250)
     (async/go (splat-drums click 20 (rand-int 230)))
     (Thread/sleep 250)
     (async/go (splat-drums crazy-sound 20 (rand-int 200)))
     (Thread/sleep 500)))

(random-drums plastic-click 100 4000)

 )
