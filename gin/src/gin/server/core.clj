(ns gin.server.core
  (:require [clojure.java.io :as io])
  (:import [javax.sound.sampled AudioFormat AudioFormat$Encoding AudioInputStream AudioFileFormat AudioFileFormat$Type AudioSystem DataLine DataLine$Info SourceDataLine TargetDataLine]
           [java.io ByteArrayOutputStream]))

(defn create-audio-format
  [& [{:keys [format sample-rate bits-per-sample channels frame-size frame-rate little-endian]
       :or {format          AudioFormat$Encoding/PCM_SIGNED
            sample-rate     48000
            bits-per-sample 16
            channels        2
            frame-size      4
            frame-rate      sample-rate
            little-endian   false}}]]
  (AudioFormat. format sample-rate bits-per-sample channels frame-size frame-rate little-endian))

(defn ->info
  [^AudioFormat audio-format ^Class clazz]
  (DataLine$Info. clazz audio-format))

(defn record!
  [{:keys [filename ms]}]
  (let [format           (create-audio-format)
        info             (->info format TargetDataLine)
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

(defn stream-audio!
  [& [{:keys [ms]}]]
  (let [audio-format (create-audio-format {:sample-rate 44100})
        target-info  (->info audio-format TargetDataLine)
        source-info  (->info audio-format SourceDataLine)
        target-line  (AudioSystem/getLine target-info)
        _            (.open target-line audio-format)
        _            (.start target-line)
        source-line  (AudioSystem/getLine source-info)
        _            (.open source-line audio-format)
        _            (.start source-line)
        target-data  (byte-array (/ (.getBufferSize target-line) 5))]
    (loop [num-bytes-read (.read target-line target-data 0 (alength target-data))]
      (if (= num-bytes-read -1)
        :done
        (do
          (.write source-line target-data 0 num-bytes-read)
          (recur (.read target-line target-data 0 (alength target-data))))))))

(comment
  (record! {:filename "foo.wav" :ms 5000})
  (stream-audio!)
  )
