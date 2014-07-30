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

(defn student-view
  [student owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil (display-name student)))))

(defn professor-view
  [professor owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil
              (dom/div nil (display-name professor))
              (dom/label nil "Classes")
              (apply dom/ul nil
                     (map #(dom/li nil %) (:classes professor)))))))

(defmulti entry-view
  (fn [person _]
    (:type person)))

(defmethod entry-view :student
  [person owner]
  (student-view person owner))

(defmethod entry-view :professor
  [person owner]
  (professor-view person owner))

(defn people
  [app]
  (->> (:people app)
       (mapv (fn [x]
               (if (:classes x)
                 (update-in x [:classes]
                            (fn [cs]
                              (mapv (:classes app) cs)))
                 x)))))

(defn registry-view
  [app owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (dom/div #js {:id "registry"}
               (dom/h2 nil "Registry")
               (apply dom/ul nil
                      (om/build-all entry-view (people app)))))))

(defn classes-view
  [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "classes"}
               (dom/h2 nil "Classes")
               (apply dom/ul nil
                      (map #(dom/li nil %)
                           (vals (:classes app))))))))

(om/root registry-view
         state/app-state
         {:target (. js/document (getElementById "registry"))})

(om/root classes-view
         state/app-state
         {:target (. js/document (getElementById "classes"))})
