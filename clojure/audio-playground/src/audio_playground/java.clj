(ns ^{:doc "Wrapper functions for interfacing with Java audio classes."}
  audio-playground.java
  (:require [overtone.live :as o]))

(defn play-sound
  [filename]
  (let [in           (FileInputStream. filename)
        audio-stream (AudioStream. in)]
    (.start AudioPlayer/player audio-stream)))

(comment
  (let [filepath "/Users/pthomas/Dropbox/sounds/no_love_bd.wav"]
    (play-sound filepath))
  )

(comment
  (o/load-sample)
  )
