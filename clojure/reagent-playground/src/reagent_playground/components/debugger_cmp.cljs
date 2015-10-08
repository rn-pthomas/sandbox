(ns reagent-playground.components.debugger-cmp
  (:require [reagent-playground.session :as session]))

(defn make-debugger-line
  [^Keyword debug-key]
  (let [component-key-path [:components :debugger debug-key :enabled]
        enabled            (session/get-in component-key-path)]
    [:div
     [:input.debugger-line {:type     "button"
                            :value    (str "toggle " debug-key)
                            :on-click #(session/toggle component-key-path)}]
     (when enabled
       [:p.debugger-line (str (name debug-key) ": " (session/get debug-key))])]))

(defn toggle-animation-loop
  []
  (session/update-in! [:loop-running] not))

(defn app-state
  []
  (let [enabled     (session/get-in [:components :debugger :app-state-enabled])
        button-text (if enabled
                      "Hide app state"
                      "Show app state")]
    [:div
     [:input {:type     "button"
              :value    button-text
              :on-click #(session/toggle [:components :debugger :app-state-enabled])}]
     (when enabled
       (make-debugger-line :animation-state)
       (make-debugger-line :highlighted))]))

(defn component
  [& debug-keys]
  [:div
   [:input {:type     "button"
            :value    "Toggle loop running"
            :on-click #(session/toggle [:loop-running])}]
   [:btn {:onClick #(println "foof")}]
   (app-state)])
