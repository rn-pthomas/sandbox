(ns gin.server.audio
  (:require [clojure.java.io    :as io]
            [clojure.core.async :as a])
  (:import [javax.sound.sampled AudioFormat AudioFormat$Encoding AudioInputStream AudioFileFormat AudioFileFormat$Type AudioSystem DataLine DataLine$Info Mixer SourceDataLine TargetDataLine]
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

(defn reverse-target-data-bytes
  [target-data-bytes-array-size target-data-bytes & [{:keys [bytes-per-sample]
                                                      :or {bytes-per-sample 2}}]]
  ;;(spit "log.out" (vec target-data-bytes) :append true)
  (->> target-data-bytes
       (partition bytes-per-sample)
       reverse
       flatten
       vec
       (byte-array target-data-bytes-array-size)))

(defn apply-weirdness
  [the-byte-array-size the-byte-array]
  (->> the-byte-array
       (partition 12)
       ;;(partition (+ 2 (rand-int 7)))
       (map (fn [[fst & rst]]
              (conj (repeat (count rst) 0) fst)))
       flatten
       vec
       (byte-array the-byte-array-size)))

(comment
  (let [[byte-array-size data-bytes frame-size] here]
    (take 10 data-bytes))
)

(defn analyze-and-store-bytes
  [byte-array-size data-bytes frame-size & [{:keys [bytes-per-sample]
                                             :or {bytes-per-sample 2}}]]
  (reverse-target-data-bytes byte-array-size data-bytes))

(comment
  (->> data-bytes
       (partition 8)
       count
       )
  (take 10 data-bytes)
  :foof
)

(defn process-audio-stream
  [byte-array-size data-bytes frame-size]
  (if-let [analysis-result (analyze-and-store-bytes byte-array-size data-bytes frame-size)]
    analysis-result
    data-bytes))

(defn buffer-n-messages
  "Use blocking take to take n messages off of channel c, and once done, applies function f to that vec of messages."
  [ch n f]
  (println (format "buffer-n-messages: waiting for %s messages" n))
  (loop [acc     []
         counter 0]
    (if (>= counter n)
      (f acc)
      (let [new-message (a/<!! ch)]
        (recur (conj acc new-message) (inc counter))))))

(defn recording-thread-handler
  [audio-chan data-bytes target-line]
  (let [audio-stream (AudioInputStream. target-line)
        frame-size   (.getFrameLength audio-stream)]
    (loop [num-bytes-read (.read audio-stream data-bytes)]
      (let [data-bytes-vec (vec data-bytes)]
        (do
          (a/>!! audio-chan [num-bytes-read data-bytes-vec frame-size])
          (recur (.read audio-stream data-bytes)))))))

(defn playback-thread-handler
  [audio-chan sample-store source-line byte-array-size]
  (println "In playback thread...")
  (while true
    (buffer-n-messages audio-chan
                       ;;(rand-nth [10 5])
                       ;;(rand-nth [1 2 3 4])
                       ;;2
                       2
                       (fn [messages]
                         (swap! sample-store conj messages)
                         (let [sample-to-play        (rand-nth (take-last 10 @sample-store))
                               all-bytes             (mapcat (fn [[num-bytes-read audio-bytes-vec frame-size]]
                                                               audio-bytes-vec)
                                                             sample-to-play)
                               all-bytes-read        (apply + (map (fn [[num-bytes-read audio-bytes-vec frame-size]]
                                                                     num-bytes-read)
                                                                   sample-to-play))
                               num-bytes-to-allocate (* byte-array-size (count sample-to-play))
                               processed-bytes       (rand-nth [(byte-array num-bytes-to-allocate all-bytes)
                                                                (reverse-target-data-bytes num-bytes-to-allocate all-bytes)])]
                           (dotimes [_ (rand-nth [ 1 2 4])]
                             (.write source-line processed-bytes 0 all-bytes-read)))))))

(defn stream!
  [{:keys [filename ms init-ms]}]
  (let [audio-format     (create-audio-format {:sample-rate 44100})
        target-info      (->info audio-format TargetDataLine)
        source-info      (->info audio-format SourceDataLine)
        target-line      (AudioSystem/getLine target-info)
        _                (.open target-line)
        _                (.start target-line)
        source-line      (AudioSystem/getLine source-info)
        _                (.open source-line audio-format)
        _                (.start source-line)
        byte-array-size  (/ (.getBufferSize target-line) 5)
        data-bytes       (byte-array byte-array-size)
        audio-chan       (a/chan 2000)
        sample-store     (atom [])
        recording-thread (Thread. #(recording-thread-handler audio-chan data-bytes target-line))
        playback-thread  (Thread. #(playback-thread-handler  audio-chan sample-store source-line byte-array-size))]
    (.start recording-thread)
    (println "Capturing initial audio data...")
    (Thread/sleep init-ms) ;; capture audio data before starting playback for less playback latency
    (println "Starting playback...")
    (.start playback-thread)
    (Thread/sleep (+ init-ms ms))
    (.stop recording-thread)
    (.stop target-line)
    (.close target-line)
    (.stop playback-thread)
    (.stop source-line)
    (.close source-line)
    (def ss sample-store)
    (println (format "Done. Captured %s samples" (count @sample-store)))
    :done))

(defn seconds->ms
  [seconds]
  (* 1000 seconds))

(comment
  ;; this is how you start playback...
  (stream! {:filename "foo.wav"
            :ms       (seconds->ms 60)
            :init-ms  500})
)
