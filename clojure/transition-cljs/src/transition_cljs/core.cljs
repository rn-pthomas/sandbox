(ns transition-cljs.core
  (:require [transition-cljs.components.navbar :as navbar]  
            [transition-cljs.loader            :as loader]
            [transition-cljs.runner            :as runner]
            [om.core                           :as om]
            [om.dom                            :as dom]
            [cljs.core.async                   :as async :refer [timeout]])
  (:require-macros [om-utils.core :refer [defcomponent]]
                   [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def app-state
  (atom {}))

(defcomponent debugger-row
  [display-name display-value]
  (render
   (println opts)
   (println data)
   (dom/div nil (str display-name " " display-value))))

(defcomponent current-test-debugger
  (render
   (when-let [{:keys [test-name fixtures helpers states]} (:content (:current-test data))]
     (dom/div
      nil
      (om/build debugger-row data {:opts {:display-name  "Test name"
                                          :display-value test-name}})
      (om/build debugger-row data {:opts {:display-name  "Fixtures"
                                          :display-value fixtures}})
      (om/build debugger-row data {:opts {:display-name  "Helpers"
                                          :display-value helpers}})
      (om/build debugger-row data {:opts {:display-name  "States"
                                          :display-value states}})))))

(defcomponent app
  (render
   (dom/div
    nil
    (om/build navbar/navbar data)
    (om/build current-test-debugger data))))

(defn debug-app-state
  [& ks]
  (get-in @app-state (map keyword ks)))

(defn main
  []
  (let [test-ch (loader/load-suite)]
    (go
      (while true
        (let [test (<! test-ch)]
          (swap! app-state
                 update-in [:test-suite] (fn [test-suite]
                                           (conj test-suite test)))))))  
  (om/root
   app
   app-state
   {:target (. js/document (getElementById "app-container"))}))

(main)
