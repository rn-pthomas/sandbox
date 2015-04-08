(ns transition-cljs.components.dropdown
  (:require [om.core :as om]
            [om.dom  :as dom])
  (:require-macros [om-utils.core :refer [defcomponent]]))

(defn render-collection
  [collection])

(defcomponent dropdown
  [text collection]
  (render
   (dom/li
    #js {:className   "dropdown"
         :onMouseOver (fn [_]
                        (println data))}
    text)))


