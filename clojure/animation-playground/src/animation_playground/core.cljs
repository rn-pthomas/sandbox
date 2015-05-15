(ns animation-playground.core
  (:require [reagent.core                 :as reagent]
            [cljs.core.async              :as a]
            [animation-playground.streams :as streams])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defn reload-hook
  [& files]
  (println files))

(def app-state
  (reagent/atom
   {:channels {:walker (streams/make-stream (fn [n]
                                              ((rand-nth [+ -]) n 1))
                                            1)}
    :state    {:counter 2}}))

(defn simple-component
  []
  [:div
   [:p "I am a component!"]
   [:p (get-in @app-state [:state :counter])]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])

(defn render-simple
  []
  (let [walker-chan (get-in @app-state [:channels :walker])]
    (go
      (while true
        (a/<! (a/timeout 200))
        (let [val (a/<! walker-chan)]
          (swap! app-state update-in [:state :counter] (fn [_]
                                                         val))))))
  (reagent/render-component [simple-component] (.-body js/document)))

(render-simple)


