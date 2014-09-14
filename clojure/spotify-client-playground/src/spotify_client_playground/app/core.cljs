(ns spotify-client-playground.app.core
  (:require [spotify-client-playground.app.api               :as api]
            [spotify-client-playground.app.components.search :as search]
            [spotify-client-playground.app.components.login  :as login]
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
   (let [build-component (fn [component]
                           (om/build component data))]
     (dom/div
      nil
      (build-component login/login-form)
      (build-component search/search-input-box)))))

(defn initialize-app!
  []
  (let [target (gdom/getElement "app-container")]
    (om/root main-app
             app-state
             {:target target
              :opts   {}})))

(initialize-app!)
