(ns om-playground.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om-playground.state :as state]
            [om.core             :as om   :include-macros true]
            [om.dom              :as dom  :include-macros true]
            [cljs.core.async     :as async]))

(enable-console-print!)

(defn middle-name
  [{:keys [middle middle-initial]}]
  (cond middle         (str " " middle)
        middle-initial (str " " middle-initial ".")))

(defn display-name
  [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))

(defn contact-view
  [contact owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/li nil
              (dom/span nil (display-name contact))
              (dom/button #js {:onClick (fn [e]
                                          (async/put! delete @contact))}
                          "Delete")))))

(defn render-root
  [state owner]
  (reify
    om/IInitState
    (init-state [_]
      {:delete (async/chan)})

    om/IWillMount
    (will-mount [_]
      (let [delete (om/get-state owner :delete)]
        (go (loop []
              (let [contact (async/<! delete)]
                (om/transact!
                 state
                 :contacts
                 (fn [xs]
                   (vec (remove #(= contact %) xs))))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/div nil
               (dom/h2 nil "Contact list")
               (apply dom/ul nil
                      (om/build-all contact-view (:contacts state)
                                    {:init-state {:delete delete}}))))))

(om/root render-root
         state/app-state
         {:target js/document.body})
