(ns transition-cljs.components.dropdown
  (:require [om.core :as om]
            [om.dom  :as dom]
            [cljs.core.async :as async :refer [chan]])
  (:require-macros [om-utils.core :refer [defcomponent]]
                   [cljs.core.async.macros :refer [go]]))

(defcomponent dropdown-list
  [collection]
  (render
   (apply dom/div
          nil
          (mapv (fn [el]
                  (dom/div nil (:name el)))
                collection))))

(defcomponent dropdown
  [text collection]
  (init-state
   {:events           (async/chan)
    :dropdown-enabled false})
  (will-mount
   (go
     (while true
       (let [evt (<! (om/get-state owner :events))]
         (condp evt =
           :dropdown-toggled (om/update-state! owner :dropdown-enabled not))))))
  (render-state
   (let [events-chan (om/get-state owner :events)]
     (dom/li
      #js {:className "dropdown"
           :onClick   #(go (>! events-chan :dropdown-toggled))}
      (if (true? (om/get-state owner :dropdown-enabled))
        (dom/div
         nil
         text
         (om/build dropdown-list data {:opts {:collection collection}}))
        text)))))


