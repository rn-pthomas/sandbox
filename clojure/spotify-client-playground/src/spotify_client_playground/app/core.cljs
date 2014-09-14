(ns spotify-client-playground.app.core
  (:require [spotify-client-playground.app.api               :as api]
            [spotify-client-playground.app.components.search :as search]
            [goog.dom                                        :as gdom]
            [om.core                                         :as om  :include-macros true]
            [om.dom                                          :as dom :include-macros true])
  (:require-macros [spotify-client-playground.app.macros :refer [defcomponent]]))

(enable-console-print!)

(def app-state (atom {:search {:type "artists"}}))

(defcomponent main-app
  (will-mount
   (api/ping-server-health))
  (render
   (dom/div nil
            (dom/input #js {:id "search-input"} nil)
            (dom/button #js {:onClick (fn [e]
                                        (let [search-term-val (.-value (.getElementById js/document "search-input"))]
                                          (api/spotify-search-xhr search-term-val
                                                                  (fn [resp]
                                                                    (swap! app-state assoc-in [:search :results] (get resp "result-set"))))))}
                        "Search")
            (when (get-in data [:search :results])
              (om/build search/search-results-list (:search data))))))

(defn initialize-app!
  []
  (let [target (gdom/getElement "app-container")]
    (om/root main-app
             app-state
             {:target target
              :opts   {}})))

(initialize-app!)
