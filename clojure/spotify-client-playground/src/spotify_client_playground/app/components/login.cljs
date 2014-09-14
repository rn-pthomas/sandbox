(ns spotify-client-playground.app.components.login
  (:require [spotify-client-playground.app.api :as api]
            [om.core                           :as om  :include-macros true]
            [om.dom                            :as dom :include-macros true])
  (:require-macros [spotify-client-playground.app.macros :refer [defcomponent]]))

(defcomponent login-form
  (will-mount
   (api/session-get))
  (render
   (dom/div
    #js {:id "login-form"}
    (dom/input #js {:id          "username"
                    :placeholder "Username"})
    (dom/input #js {:id          "password"
                    :placeholder "Password"
                    :type        "password"})
    (dom/button #js {:onClick (fn [e]
                                (api/login-user {:username "foo"
                                                 :password "bar"
                                                 :on-complete (fn [resp]
                                                                (println resp))}))}
                "Login"))))
