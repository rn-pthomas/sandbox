(ns spotify-client-playground.app.core
  (:require [spotify-client-playground.app.xhr :as xhr]
            [spotify-client-playground.app.web-helpers :refer [parse-json-resp]]
            [cognitect.transit                 :as transit]
            [goog.dom                          :as gdom]
            [om.core                           :as om  :include-macros true]
            [om.dom                            :as dom :include-macros true]))

(enable-console-print!)

(def app-state (atom {}))

(defn spotify-search-xhr
  [search-term]
  (let [search-url (str "search?term=" search-term)]
    (xhr/do-xhr {:method      :get
                 :url         search-url
                 :on-complete (fn [resp]
                                (let [parsed-resp (parse-json-resp resp)]
                                  (swap! app-state assoc-in [:search :results] (get parsed-resp "result-set"))))})))

(defn search-results-list
  [search-results search-type key-from-item]
  (let [correct-path      [search-type search-type "items"]
        results-to-render (get-in search-results correct-path)
        list-to-render    (if key-from-item
                            (mapv (fn [item]
                                    (get item key-from-item))
                                  results-to-render)
                            results-to-render)]
    (apply dom/ul
          #js {:id "result-list"}
          (mapv (fn [res]
                  (dom/li #js {:onClick   (fn [e]
                                            (println "clicked!"))
                               :className "result-list-item"}
                          res))
                list-to-render))))

(defn main-app
  [app owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "App"))

    om/IRender
    (render [this]
      (dom/div nil
               (dom/input #js {:id "search-input"} nil)
               (dom/button #js {:onClick (fn [e]
                                           (let [search-term-val (.-value (.getElementById js/document "search-input"))]
                                             (spotify-search-xhr search-term-val)))}
                           "Search")
               (when-let [search-results (get-in app [:search :results])]
                 (search-results-list search-results "artists" "name"))))))

(let [target (gdom/getElement "app-container")]
  (om/root main-app
           app-state
           {:target target
            :opts   {}}))
