(ns spotify-client-playground.app.core
  (:require [spotify-client-playground.app.xhr :as xhr]
            [spotify-client-playground.app.web-helpers :refer [parse-json-resp]]
            [cognitect.transit                 :as transit]
            [goog.dom                          :as gdom]
            [om.core                           :as om  :include-macros true]
            [om.dom                            :as dom :include-macros true]))

(enable-console-print!)

(def app-state (atom {:search {:type "artists"}}))

(defn spotify-search-xhr
  [search-term]
  (let [search-url (str "search?term=" search-term)]
    (xhr/do-xhr {:method      :get
                 :url         search-url
                 :on-complete (fn [resp]
                                (let [parsed-resp (parse-json-resp resp)]
                                  (swap! app-state assoc-in [:search :results] (get parsed-resp "result-set"))))})))

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
  [search-result]
  (dom/li #js {:onClick   (fn [e]
                            (println "clicked!"))
               :className "result-list-item"}
          search-result))

(defn search-results-list
  [data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Search Results List"))
    
    om/IRenderState
    (render-state [_ opts]
      (let [search-results (:results data)
            search-type    (:type data)
            list-to-render (mapv #(get % "name")
                                 (get-in search-results [search-type search-type "items"]))]
        (dom/div nil
                 (apply dom/ul
                        #js {:id "result-list"}
                        (mapv search-results-list-item list-to-render))
                 (om/build search-filter-dropdown data))))))

(defn main-app
  [app owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "App"))

    om/IWillMount
    (will-mount [_]
      (xhr/do-xhr {:method      :get
                   :url         "ping"
                   :on-complete (fn [resp]
                                  (when (= resp "ping")
                                    (println "server is up and running")))}))

    om/IRender
    (render [this]
      (dom/div nil
               (dom/input #js {:id "search-input"} nil)
               (dom/button #js {:onClick (fn [e]
                                           (let [search-term-val (.-value (.getElementById js/document "search-input"))]
                                             (spotify-search-xhr search-term-val)))}
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
