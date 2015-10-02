(ns reagent-playground.components.debugger-cmp
  (:require [reagent-playground.session :as session]))

(defn make-debugger-line
  [^Keyword debug-key]
  [:p (str (name debug-key) ": " (session/get debug-key))])

(defn component
  [& debug-keys]
  [:div
   (make-debugger-line :animation-state)
   (make-debugger-line :highlighted)])
