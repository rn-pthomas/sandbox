(ns om-playground.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om-playground.state :as state]
            [om-playground.util  :as util]
            [om.core             :as om   :include-macros true]
            [om.dom              :as dom  :include-macros true]
            [clojure.data        :as data]
            [clojure.string      :as string]
            [cljs.core.async     :as async]))

(enable-console-print!)

(defn middle-name
  [{:keys [middle middle-initial]}]
  (cond middle         (str " " middle)
        middle-initial (str " " middle-initial ".")))

(defn display-name
  [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))

(defn parse-contact
  [contact-str]
  (let [[first middle last :as parts] (string/split contact-str #"\s+")
        [first last middle]           (if (nil? last)
                                        [first middle]
                                        [first last middle])
        middle                        (when middle (string/replace middle "." ""))
        c                             (if middle
                                        (count middle)
                                        0)]
    (when (>= (count parts) 2)
      (cond-> {:first first :last last}
              (== c 1) (assoc :middle-initial middle)
              (>= c 2) (assoc :middle middle)))))

(defn add-contact
  [app owner]
  (when-let [new-contact (-> (om/get-node owner "new-contact")
                        .-value
                        parse-contact)]
    (om/transact! app :contacts #(conj % new-contact))
    (om/set-state! owner :text "")))

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

(defn handle-change
  [e owner {:keys [text]}]
  (let [value (.. e -target -value)]
    (if-not (re-find #"[0-9]" value)
      (om/set-state! owner :text value)
      (om/set-state! owner :text text))))

(defn render-root
  [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:delete (async/chan)
       :text   ""})

    om/IWillMount
    (will-mount [_]
      (let [delete (om/get-state owner :delete)]
        (go (loop []
              (let [contact (async/<! delete)]
                (om/transact!
                 app
                 :contacts
                 (fn [xs]
                   (vec (remove #(= contact %) xs))))
                (recur))))))

    om/IRenderState
    (render-state [this state]
      (dom/div nil
               (dom/h2 nil "Contact list")
               (apply dom/ul nil
                      (om/build-all contact-view (:contacts app)
                                    {:init-state state}))
               (dom/div nil
                        (dom/input
                         #js {:type     "text"
                              :ref      "new-contact"
                              :value    (:text state)
                              :onChange #(handle-change % owner state)})
                        (dom/button #js {:onClick #(add-contact app owner)} "Add contact"))))))

(om/root render-root
         state/app-state
         {:target js/document.body})
