(ns reagent-playground.session
  (:require [reagent.core :as reagent])
  (:refer-clojure :exclude [get swap!]))

(defonce state (reagent/atom {:text         "Hello world!!!"
                              :size         8
                              :highlighted  [0 0]
                              :loop-running false}))

(defn get
  [k & [default]]
  (clojure.core/get @state k default))

(defn put!
  [k v]
  (clojure.core/swap! state assoc k v))

(defn swap!
  [k f & args]
  (apply (partial clojure.core/swap! k f) args))

(defn update-in!
  [ks f & args]
  (swap! state #(apply (partial update-in % ks f) args)))
