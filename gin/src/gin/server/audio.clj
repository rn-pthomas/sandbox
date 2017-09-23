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

(defn buffer-n-messages
  "Use blocking take to take n messages off of channel c, and once done, applies function f to that vec of messages."
  [ch n f]
  (println (format "buffer-n-messages: waiting for %s messages" n))
  (loop [acc     []
         counter 0]
    (if (>= counter n)
      (f acc)
      (let [new-message (a/<!! ch)]
        (println "buffer-n-messages: read message.")
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
                       2
                       (fn [messages]
                         (swap! sample-store conj messages)
                         (let [sample-to-play        (rand-nth (take-last 2 @sample-store))
                               ;;(rand-nth @sample-store)
                               all-bytes             (mapcat (fn [[num-bytes-read audio-bytes-vec frame-size]]
                                                               audio-bytes-vec)
                                                             sample-to-play)
                               all-bytes-read        (apply + (map (fn [[num-bytes-read audio-bytes-vec frame-size]]
                                                                     num-bytes-read)
                                                                   sample-to-play))
                               num-bytes-to-allocate (* byte-array-size (count sample-to-play))
                               processed-bytes       #_(rand-nth [(byte-array num-bytes-to-allocate all-bytes)
                                                                  (reverse-target-data-bytes num-bytes-to-allocate all-bytes)])
                               (byte-array num-bytes-to-allocate all-bytes)
                               reversed-bytes (reverse-target-data-bytes num-bytes-to-allocate all-bytes)]
                           (dotimes [_ 2]
                             (.write source-line processed-bytes 0 all-bytes-read)
                             (.write source-line reversed-bytes  0 all-bytes-read)
                             (.write source-line reversed-bytes  0 all-bytes-read)))))))

(defn get-mixers
  []
  (let [mixer-objs (AudioSystem/getMixerInfo)]
    (map (fn [mixer-obj]
           {:name        (.getName mixer-obj)
            :description (.getDescription mixer-obj)
            :version     (.getVersion mixer-obj)
            :vendor      (.getVendor mixer-obj)
            :obj         mixer-obj})
         mixer-objs)))

(defn get-mobile-pre-device
  []
  (->> (get-mixers)
       (filter #(= (:name %) "MobilePre"))
       first))

(comment
  (let [audio-format     (create-audio-format {:sample-rate 44100})
        target-info      (->info audio-format TargetDataLine)
        mobile-pre-mixer (:obj (get-mobile-pre-device))
        target-line (AudioSystem/getTargetDataLine audio-format mobile-pre-mixer)
        ;;target-line (.getLine mobile-pre-mixer target-info)
        ]
    ;;(.getMixerInfo mobile-pre-mixer)
    ;;target-line
    target-line)
  (let [audio-format     (create-audio-format {:sample-rate 44100})
        target-info      (->info audio-format TargetDataLine)]
    (map (fn [{:keys [obj]}]
           (try
             (let [target-line (AudioSystem/getTargetDataLine audio-format obj)]
               target-line)
             (catch Exception ex
               :didnt-work)))
         (get-mixers)))
  )

(defn input-type->target-line
  [^clojure.lang.Keyword input-type audio-format]
  (let [target-info (->info audio-format TargetDataLine)]
    (condp = input-type
      :mic       (AudioSystem/getLine target-info)
      :interface (AudioSystem/getTargetDataLine audio-format (:obj (get-mobile-pre-device)))
      ;; else
      (throw (Exception. (format "Couldn't look up TargetDataLine for input type %s" (name input-type)))))))

(defn input-type->source-line
  [^clojure.lang.Keyword input-type audio-format target-info]
  (let [target-info (->info audio-format SourceDataLine)]
    (condp = input-type
      :mic       (AudioSystem/getLine target-info)
      :interface (AudioSystem/getSourceDataLine audio-format (:obj (get-mobile-pre-device)))
      ;; else
      (throw (Exception. (format "Couldn't look up SourceDataLine for input type %s" (name input-type)))))))

(defn open-and-start
  [line]
  (.open line)
  (.start line)
  line)

(defn cleanup
  [{:keys [threads lines]}]
  (doseq [thread threads]
    (.stop thread))
  (doseq [line lines]
    (.stop line)
    (.close line)))

(defn stream!
  [{:keys [ms init-ms input-type]}]
  (let [audio-format     (create-audio-format {:sample-rate 44100 :channels 2})
        target-line      (input-type->target-line input-type audio-format)
        source-line      (input-type->source-line input-type audio-format)
        _                (open-and-start target-line)
        _                (open-and-start source-line)
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
    
    (cleanup {:threads [recording-thread playback-thread]
              :lines   [target-line source-line]})
    (println (format "Done. Captured %s samples" (count @sample-store)))
    :done))

(defn seconds->ms
  [seconds]
  (* 1000 seconds))

(comment
  ;; this is how you start playback...
  (stream! {:filename   "foo.wav"
            :ms         (seconds->ms 30)
            :init-ms    5000
            :input-type "microphone"})
)
