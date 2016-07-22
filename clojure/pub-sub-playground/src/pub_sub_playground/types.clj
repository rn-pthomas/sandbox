(ns pub-sub-playground.types
  (:require [schema.core        :as s]
            [clojure.core.async :as async]))

(def Recipient {s/Any s/Any})

(def Subscriber {s/Any s/Any})
