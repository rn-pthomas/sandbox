(ns reagent-playground.session
  (:require [reagent.core                        :as reagent]
            [cljs.core.async                     :as async]
            [reagent-playground.models.animation :as anim-model])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:refer-clojure :exclude [get swap! get-in]))

(defn make-initial-animation-state
  [size initial-highlighted mirroring-directions]
  (-> 
   (reduce (fn [acc [x y]]
             (assoc-in acc [x y] {:highlighted false}))
           {}
           (for [x (range size)
                 y (range size)]
             [x y]))
   (assoc-in initial-highlighted {:highlighted true})
   (anim-model/apply-mirroring {:size                 size
                                :highlighted          initial-highlighted
                                :mirroring-directions mirroring-directions})))

(defonce state
  (let [size                 10
        initial-highlighted  [(rand-int size) (rand-int size)]
        mirroring-directions [:horizontal :vertical :diag-down]]
    (reagent/atom
     {:size                 size
      :highlighted          initial-highlighted
      :timeout              500
      :components           {:animation {:visible true}}
      :animation-state      (make-initial-animation-state size initial-highlighted mirroring-directions)
      :mirroring-directions mirroring-directions
      :channels             {:animation (async/chan 1)}
      :loop-running         false})))

(defn get
  ([]
   @state)
  ([k & [default]]
   (clojure.core/get @state k default)))

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

(defn toggle
  [ks]
  (update-in! ks not))
