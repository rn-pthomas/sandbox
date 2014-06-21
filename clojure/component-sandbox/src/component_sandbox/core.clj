(ns component-sandbox.core
  (:require [com.stuartsierra.component :as component]))

(defrecord ClientConfig [client-rid]
  ;; Implement the Lifecycle protocol.
  component/Lifecycle

  )

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))
