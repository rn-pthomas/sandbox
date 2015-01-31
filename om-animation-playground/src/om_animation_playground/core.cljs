(ns om-animation-playground.core
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true])
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

(defcomponent app
  (render
   (let [{:keys [tick]} data]
     (dom/div nil (str (multiples tick))))))

(defn app-loop-tick
  []
  (swap! app-state update-in [:tick] inc))

(defn init-app-loop
  [time]
  (.setInterval js/window #(app-loop-tick) time))

(defn init!
  []
  (om/root
   app
   app-state
   {:target (. js/document (getElementById "my-app"))})
  (init-app-loop 500))

(init!)
