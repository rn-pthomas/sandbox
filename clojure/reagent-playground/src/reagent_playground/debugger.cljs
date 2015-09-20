(ns reagent-playground.debugger-cmp)

(defn component
  [state]
  [:div
   [:p (str "highlighted: " (:highlighted @state))]])
