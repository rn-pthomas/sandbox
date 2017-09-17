(ns gin.server.core
  (:require [clojure.java.io :as io])
  (:import [javax.sound.sampled AudioFormat AudioFormat$Encoding AudioInputStream AudioFileFormat AudioFileFormat$Type AudioSystem DataLine DataLine$Info TargetDataLine]))

(defn create-audio-format
  []
  (let [format          AudioFormat$Encoding/PCM_SIGNED
        sample-rate     48000
        bits-per-sample 16
        channels        2
        frame-size      4
        frame-rate      sample-rate
        little-endian   false]
    (AudioFormat. format sample-rate bits-per-sample channels frame-size frame-rate little-endian)))

(defn ->info
  [^AudioFormat format]
  (DataLine$Info. TargetDataLine format))

(defn record!
  [{:keys [filename ms]}]
  (let [format           (create-audio-format)
        info             (->info format)
        target-line      (AudioSystem/getLine info)
        _                (.open target-line)
        _                (.start target-line)
        recording-thread (Thread.
                          (fn []
                            (let [audio-stream (AudioInputStream. target-line)
                                  audio-file   (io/file filename)]
                              (AudioSystem/write audio-stream AudioFileFormat$Type/WAVE audio-file))))]
    (.start recording-thread)
    (Thread/sleep ms)
    (.stop target-line)
    (.close target-line)
    :done))

(comment
  (record! {:filename "foo.wav" :ms 5000})
  )
