(ns transition-cljs.core
  (:require [transition-cljs.components.navbar :as navbar]
            [transition-cljs.test              :as test]
            [transition-cljs.loader            :as loader]
            [om.core                           :as om]
            [om.dom                            :as dom])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(enable-console-print!)

(def app-state
  (atom {}))

(defcomponent debugger
  (render
   (apply dom/div
          nil
          (map (fn [{:keys [name content]}]
                 (dom/div nil (str name " => " content)))
               (sort (:test-suite data))))))

(defcomponent app
  (render
   (dom/div
    nil
    (om/build debugger data)
    ;;(om/build navbar/navbar data)
    )))

(defn main
  []
  ;;(swap! app-state assoc :test-suite (util/load-suite))
  (loader/load-suite app-state)
  (om/root
   app
   app-state
   {:target (. js/document (getElementById "app-container"))}))

(main)
