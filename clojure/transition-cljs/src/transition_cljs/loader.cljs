(ns transition-cljs.loader
  (:require [cljs.core.async     :as async :refer [chan close! <! >!]]
            [transition-cljs.xhr :as xhr])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(defn parse-test
  [test-name test-content]
  (if-not (= (first test-content) 'deftest)
    (throw (js/Error. (str "not a valid test: " test-name)))
    test-content))

(defn process-test
  [^String test-name ^String test-content]
  {:name    test-name
   :content (parse-test test-name test-content)})

(defn fetch-test
  [^String test-name]
  (let [ch (chan 1)]
    (go
      (>! ch (<! (xhr/GET (str "./examples/tests/" test-name ".cljs"))))
      (close! ch))
    ch))

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
              test-resp (<! (fetch-test test-name))]
          (swap! state update-in [:test-suite] (fn [test-suite]
                                                 (conj test-suite (process-test test-name test-resp)))))))))
