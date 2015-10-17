(ns reagent-playground.animation
  (:require [cljs.core.async            :as async]
            [reagent-playground.session :as session]
            [reagent-playground.models.animation :as anim-model])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn animation-loop-handler
  []
  (let [{:keys [size highlighted mirroring-directions]} (session/get)
        new-highlighted                                 (anim-model/move highlighted (dec size))
        [x y]                                           new-highlighted]
    (session/put! :highlighted new-highlighted)
    (session/update-in! [:animation-state x y :highlighted] not)
    (session/update-in!
     [:animation-state]
     #(anim-model/apply-mirroring % {:highlighted          new-highlighted
                                     :size                 size
                                     :mirroring-directions mirroring-directions}))))

(defn animation-loop
  []
  (let [animation-chan (session/get-in [:channels :animation])
        timeout        (session/get :timeout)]
    (go-loop [counter 1]
      (println "tick..." counter)
      (async/<! animation-chan)
      (animation-loop-handler)
      (recur (inc counter)))
    (go-loop []
      (async/<! (async/timeout timeout))
      (when (session/get :loop-running)
        (async/>! animation-chan :step))
      (recur))))

(defn start-animation-loop!
  []
  (when-not (session/get :loop-running)
    (do
      (animation-loop)
      (session/put! :loop-running true))))
