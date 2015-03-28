(ns audio-playground.core
  (:require [overtone.live :as o]))

(def bd-buf (o/load-sample "/Users/pthomas/Dropbox/sounds/no_love_bd.wav"))

(defmacro with-cache-coordination
  [cache-name & body]
  )

(comment
  (with-cache-coordination :app-cache
    )
  )
