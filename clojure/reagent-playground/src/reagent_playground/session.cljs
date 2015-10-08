(ns reagent-playground.session
  (:require [reagent.core :as reagent])
  (:refer-clojure :exclude [get swap! get-in]))

(defn make-initial-animation-state
  [size]
  (-> 
   (reduce (fn [acc [x y]]
             (assoc-in acc [x y] {:highlighted false}))
           {}
           (for [x (range size)
                 y (range size)]
             [x y]))
   (assoc-in [0 0] {:highlighted true})))

(defonce state
  (let [size 21]
    (reagent/atom
     {:text            "Hello world!!!"
      :size            size
      :highlighted     [0 0]
      :animation-state (make-initial-animation-state size)
      :loop-running    false})))

(defn get
  [k & [default]]
  (clojure.core/get @state k default))

(defn get-in
  [ks & [default]]
  (clojure.core/get-in @state ks default))

(defn put!
  [k v]
  (clojure.core/swap! state assoc k v))

(defn swap!
  [k f & args]
  (apply (partial clojure.core/swap! k f) args))

(defn update-in!
  [ks f & args]
  (swap! state #(apply (partial clojure.core/update-in % ks f) args)))
