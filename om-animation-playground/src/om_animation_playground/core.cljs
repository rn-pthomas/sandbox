(ns om-animation-playground.core
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [om-animation-playground.components :refer [grid-cell grid-row grid app]])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(enable-console-print!)

(def app-state (atom {:tick 0}))

(defn multiples
  [upper-limit]
  (reduce (fn [acc n]
            (if (= (mod upper-limit n) 0)
              (conj acc n)
              acc))
          []
          (range 2 (inc upper-limit))))

(defn debug-app-state
  [& ks]
  (println (str ks " => " (get-in @app-state ks))))

(defn app-loop-tick
  []
  (println "tick...")
  (debug-app-state :tick)
  (swap! app-state update-in [:tick] inc))

(defn start-app-loop
  [time handler]
  (.setInterval js/window handler time))

(defn init!
  []
  (om/root
   grid
   app-state
   {:target (. js/document (getElementById "my-app"))})
  (start-app-loop 1000 app-loop-tick))

(init!)
