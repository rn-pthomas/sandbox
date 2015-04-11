(ns transition-cljs.loader
  (:require [cljs.core.async :as async :refer [chan close! <! >!]]
            [transition-cljs.xhr :as xhr])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(defn process-test
  [^String test-name ^String test-content]
  {:name    test-name
   :content test-content})

(defn load-suite
  [^clojure.lang.Atom state]
  (let [results (chan)]
    (go
      (let [tests (<! (xhr/GET "test-suite.cljs"))]
        (doseq [test tests]
          (>! results test))))
    (go
      (while true
        (let [test-name (<! results)
              test-resp (<! (xhr/GET (str "./examples/tests/" test-name ".cljs")))]
          (swap! state update-in [:test-suite] (fn [test-suite]
                                                 (conj test-suite (process-test test-name test-resp)))))))))
