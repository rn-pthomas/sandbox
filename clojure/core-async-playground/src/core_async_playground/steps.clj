(ns core-async-playground.steps
  (:require [clojure.core.async :as a]))

(defn step
  [])

(defmacro defmachine
  [&]
  :implement-me)

(defrecord Transition [dest-state-name exit-pred])
(defrecord State [state-name handler dest-states])

(defmacro state
  [state-name handler & dest-states]
  `(State. ~(keyword state-name)
           (fn [& _#]
             ~@handler)
           ~(mapv (fn [[dest-state-name# exit-pred#]]
                    (Transition. (keyword dest-state-name#)
                                 `(fn []
                                    ~exit-pred#)))
                  dest-states)))

(comment
  ;;how to model a state in a state machine?

  (let [transition-ch (a/chan 1)
        states        [(state foo
                         (println "yeah yeah")
                         (barf (= 1 (rand-int 10)))
                         (end (= 1 (rand-int 20))))
                       (state barf
                         (println "woot woot")
                         (end (= 1 (rand-int 20))))
                       (state end
                         (println "it worked"))]]
    #_(a/go-loop [{:keys [state-name handler dest-states] :as state} states]
        (doseq [{:keys [dest-state-name exit-pred]}]
          (when exit-pred
            (>! transition-ch ))))
    (doseq [state states]
      ((:handler state) :foof)))
  )

(comment
  (defmachine
    (state :start
      ))
  )

