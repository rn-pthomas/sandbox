(ns gin.server.core
  (:require [clojure.java.io :as io]
            [clojure.core.async :as a])
  (:import [javax.sound.sampled AudioFormat AudioFormat$Encoding AudioInputStream AudioFileFormat AudioFileFormat$Type AudioSystem DataLine DataLine$Info Mixer SourceDataLine TargetDataLine]
           [java.io ByteArrayOutputStream]))

(def stop (atom false))

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

(def analysis-chan (a/chan 20))

(defn reverse-target-data-bytes
  [target-data-bytes-array-size target-data-bytes & [{:keys [bytes-per-sample]
                                                      :or {bytes-per-sample 2}}]]
  (->> target-data-bytes
       (partition bytes-per-sample)
       reverse
       flatten
       vec
       (byte-array target-data-bytes-array-size)))

(defn apply-weirdness
  [the-byte-array-size the-byte-array]
  (->> the-byte-array
       ;;(partition (+ 3 (rand-int 10)))
       (partition (+ 2 (rand-int 7)))
       (map (fn [[fst & rst]]
              (conj (repeat (count rst) 0) fst)))
       flatten
       vec
       (byte-array the-byte-array-size)))

(defn apply-chopping
  [the-byte-array-size the-byte-array]
  (let [new-size   (/ (alength the-byte-array) 2)
        first-half (take new-size the-byte-array)]
    (->> (repeat 20 first-half)
         flatten
         vec
         (byte-array the-byte-array-size))))

(defn init-async-processes!
  [{:keys [source-line byte-array-size]}]
  (a/go
    (while true
      (let [[target-data num-bytes-read] (a/<!! analysis-chan)
            ;;chopped-data                 (apply-chopping byte-array-size target-data)
            reversed-data (reverse-target-data-bytes byte-array-size target-data)]
        (.write source-line reversed-data 0 num-bytes-read)))))

(defn stream-audio!
  [& [{:keys [ms]}]]
  (let [audio-format    (create-audio-format {:sample-rate 44100})
        target-info     (->info audio-format TargetDataLine)
        source-info     (->info audio-format SourceDataLine)
        target-line     (AudioSystem/getLine target-info)
        _               (.open target-line audio-format)
        _               (.start target-line)
        source-line     (AudioSystem/getLine source-info)
        _               (.open source-line audio-format)
        _               (.start source-line)
        byte-array-size (/ (.getBufferSize target-line) 5)
        target-data     (byte-array byte-array-size)]
    (println "streaming audio now")
    ;;(init-async-processes! {:source-line source-line :byte-array-size byte-array-size})
    (loop [num-bytes-read (.read target-line target-data 0 (alength target-data))]
      (if (or (true? @stop)
              (= num-bytes-read -1))
        :done
        (do
          (.write source-line (reverse-target-data-bytes byte-array-size target-data) 0 num-bytes-read)
          ;;(.write source-line (map inc target-data) 0 num-bytes-read)
          (a/go
            (a/>! analysis-chan [target-data num-bytes-read]))
          (recur (.read target-line target-data 0 (alength target-data))))))))

(comment
  (record! {:filename "foo.wav" :ms 5000})
  (Thread.
   (stream-audio!))
  (reset! stop false)
  )


