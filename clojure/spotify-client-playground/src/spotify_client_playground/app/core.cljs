(ns spotify-client-playground.app.core
  (:require [spotify-client-playground.app.api :as api]
            [goog.dom                          :as gdom]
            [om.core                           :as om  :include-macros true]
            [om.dom                            :as dom :include-macros true]))

(enable-console-print!)

(def app-state (atom {:search {:type "artists"}}))

(defn handle-change
  [e data edit-key owner]
  (om/transact! data edit-key (fn [_]
                                (.. e -target -value))))

(defn search-filter-dropdown
  [data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Search Filter Dropdown"))
    
    om/IRenderState
    (render-state [_ opts]
      (dom/h1 "Select search type")
      (dom/select #js {:id          "search-filter-dropdown"
                       :placeholder "artists"
                       :onChange    (fn [e]
                                      (handle-change e data :type owner))}
                  (dom/option nil "artists")
                  (dom/option nil "tracks")
                  (dom/option nil "albums")))))

(defn search-results-list-item
  [search-result search-type]
  (let [js-options #js {:onClick   (fn [e]
                                     (println "clicked!"))
                        :className "result-list-item"}]
    (dom/div
     nil
     (dom/li js-options
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
     (dom/button #js {:onClick (fn [e] (println "clicked detail button!"))}
                 "Detail"))))

(defn search-results-list
  [data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Search Results List"))
    
    om/IRenderState
    (render-state [_ opts]
      (let [search-results                 (:results data)
            search-type                    (:type data)
            list-to-render                 (get-in search-results [search-type "items"])
            build-search-results-list-item (fn [item]
                                             (search-results-list-item item search-type))]
        (dom/div nil
                 (apply dom/ul
                        #js {:id "result-list"}
                        (mapv build-search-results-list-item list-to-render))
                 (om/build search-filter-dropdown data))))))

(defn main-app
  [app owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "App"))

    om/IWillMount
    (will-mount [_]
      (api/ping-server-health))

    om/IRender
    (render [this]
      (dom/div nil
               (dom/input #js {:id "search-input"} nil)
               (dom/button #js {:onClick (fn [e]
                                           (let [search-term-val (.-value (.getElementById js/document "search-input"))]
                                             (api/spotify-search-xhr search-term-val
                                                                     (fn [resp]
                                                                       (swap! app-state assoc-in [:search :results] (get resp "result-set"))))))}
                           "Search")
               (when (get-in app [:search :results])
                 (om/build search-results-list (:search app)))))))

(defn initialize-app!
  []
  (let [target (gdom/getElement "app-container")]
    (om/root main-app
             app-state
             {:target target
              :opts   {}})))

(initialize-app!)
