(ns spotify-client-playground.app.core
  (:require [spotify-client-playground.app.api :as api]
            [goog.dom                          :as gdom]
            [om.core                           :as om  :include-macros true]
            [om.dom                            :as dom :include-macros true])
  (:require-macros [spotify-client-playground.app.macros :refer [defcomponent]]))

(enable-console-print!)

(def app-state (atom {:search {:type "artists"}}))

(defn handle-change
  [e data edit-key owner]
  (om/transact! data edit-key (fn [_]
                                (.. e -target -value))))

(defcomponent search-filter-dropdown
  (render-state
   (dom/h1 "Select search type")
   (dom/select #js {:id          "search-filter-dropdown"
                    :placeholder "artists"
                    :onChange    (fn [e]
                                   (handle-change e data :type owner))}
               (dom/option nil "artists")
               (dom/option nil "tracks")
               (dom/option nil "albums"))))

(defn- make-friendly-search-result-string
  [search-type search-result]
  (case search-type
               "artists"
               (get search-result "name")

               "albums"
               (get search-result "name")

               "tracks"
               (let [track-name  (get search-result "name")
                     album-name  (get-in search-result ["album" "name"])
                     artist-name (-> search-result (get "artists") first (get "name"))]
                 (str artist-name " - " track-name " (" album-name ")"))

               ;;default
               "n/a"))

(defcomponent search-results-list-item
  (render
   (dom/div nil
            (dom/li #js {:className "result-list-item"}
                    (make-friendly-search-result-string (:type data) (:search-result data)))
            (dom/button #js {:onClick (fn [e]
                                        (println "clicked detail button!"))}
                        "Detail"))))

(defcomponent search-results-list
  (render-state
   (let [search-type (:type data)]
     (dom/div nil
              (apply dom/ul
                     #js {:id "result-list"}
                     (mapv (fn [search-result]
                             (om/build search-results-list-item {:search-result search-result
                                                                 :type          search-type}))
                           (get-in data [:results search-type "items"])))
              (om/build search-filter-dropdown data)))))

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
              (om/build search-results-list (:search data))))))

(defn initialize-app!
  []
  (let [target (gdom/getElement "app-container")]
    (om/root main-app
             app-state
             {:target target
              :opts   {}})))

(initialize-app!)
