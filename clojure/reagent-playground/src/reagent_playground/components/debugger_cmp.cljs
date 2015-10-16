(ns reagent-playground.components.debugger-cmp
  (:require [reagent-playground.session :as session]
            [cljs.core.async            :as async])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

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
                      "Show app state")
        base-cmp [:input {:type     "button"
                          :value    button-text
                          :on-click #(session/toggle [:components :debugger :app-state-enabled])}]]
    (if enabled
      (-> [:div base-cmp]
          (conj (make-debugger-line :loop-running))
          (conj (make-debugger-line :animation-state))
          (conj (make-debugger-line :highlighted)))
      [:div base-cmp])))

(defn btn
  [{:keys [text on-click]}]
  [:div [:input {:type     "button"
                 :value    text
                 :on-click on-click}]])

(defn component
  [& debug-keys]
  [:div
   (btn {:text     "Toggle animation visible"
         :on-click #(session/toggle [:components :animation :visible])})
   (btn {:text     "Toggle-loop-running"
         :on-click #(session/toggle [:loop-running])})
   (btn {:text     "Step"
         :on-click #(session/update-in! [:channels :animation] (fn [anim-chan]
                                                                 (go
                                                                   (async/>! anim-chan :step))))})
   (app-state)])
