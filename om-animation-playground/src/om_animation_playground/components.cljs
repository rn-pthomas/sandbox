(ns om-animation-playground.components
  (:require [om.core                       :as om  :include-macros true]
            [om.dom                        :as dom :include-macros true]
            [om-animation-playground.model :as model])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defn calc-class-name
  [state {:keys [row-num column-num]}]
  (if (and (= 0 (mod (:tick state) column-num))
           (= 0 (mod (:tick state) row-num)))
    "grid-cell highlighted"
    "grid-cell"))

(defcomponent grid-cell
  [row-num column-num]
  (render
   (dom/div
    #js {:className (calc-class-name data opts)})))

(defcomponent grid-row
  [row-num num-columns]
  (render
   (apply
    dom/div
    #js {:className "grid-row"}
    (map (fn [column-num]
           (om/build grid-cell data {:opts {:row-num    row-num
                                            :column-num column-num}}))
         (range num-columns)))))

(def height 9)
(def width 9)

(defcomponent grid
  (render
   (apply
    dom/div
    nil
    (map (fn [row-num]
           (om/build grid-row data {:opts {:num-columns height
                                           :row-num     row-num}}))
         (range width)))))

(defcomponent app
  (render
   (let [{:keys [tick]} data]
     ;;(dom/div nil (str (multiples tick)))
     (dom/div nil))))
