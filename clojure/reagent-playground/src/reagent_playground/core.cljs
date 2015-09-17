(ns ^:figwheel-always reagent-playground.core
    (:require
              [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defonce app-state (atom {:text "Hello world!!!"
                          :size 8}))

(defn app
  []
  (let [size (:size @app-state)
        rows (for [_ (range size)]
               [:div.box])]
    [:div (for [_ (range size)]
            [:div.column rows])]))

(reagent/render-component
 [app]
 (. js/document (getElementById "app")))


(defn on-js-reload
  [& files]
  (println files))
