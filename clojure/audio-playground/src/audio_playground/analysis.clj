(ns audio-playground.analysis
  (:require [audio-playground.playback :as playback]))

(comment
  (playback/play (playback/file->clip "/Users/pthomas/Downloads/ticket_to_ride_rev.wav"))
  (playback/play-loop (playback/file->clip "/Users/pthomas/Downloads/ticket_to_ride_rev.wav"))
  )
