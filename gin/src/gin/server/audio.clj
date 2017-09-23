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

(defn input-type->target-line
  [^clojure.lang.Keyword input-type audio-format]
  (let [target-info (->info audio-format TargetDataLine)]
    (condp = input-type
      :mic       (AudioSystem/getLine target-info)
      :interface (AudioSystem/getTargetDataLine audio-format (:obj (get-mobile-pre-device)))
      ;; else
      (throw (Exception. (format "Couldn't look up TargetDataLine for input type %s" (name input-type)))))))

(defn input-type->source-line
  [^clojure.lang.Keyword input-type audio-format]
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

(defn recording-thread-handler
  [{:keys [sample-chan data-bytes target-line source-line byte-array-size sample-store]}]
  (println "recording-thread-handler started")
  (let [audio-stream (AudioInputStream. target-line)
        frame-size   (.getFrameLength audio-stream)]
    (loop [num-bytes-read (.read audio-stream data-bytes)]
      (let [data-bytes-vec (vec data-bytes)]
        (do
          (a/>!! sample-chan {:num-bytes-read num-bytes-read
                              :data-bytes-vec data-bytes-vec
                              :frame-size     frame-size})
          (recur (.read audio-stream data-bytes)))))))

(defn sample-thread-handler
  "Reads from sample-chan, buffers samples, applies processing, stores in clip store."
  [{:keys [sample-chan data-bytes target-line source-line byte-array-size sample-store sample-buffer-size clip-chan clip-store]
    :or   {sample-buffer-size 1}}]
  (println "sample-thread-handler started")
  (while true
    (buffer-n-messages
     sample-chan
     sample-buffer-size
     (fn [messages]
       (let [{:keys [all-bytes all-bytes-read]} (reduce (fn [acc {:keys [num-bytes-read audio-bytes-vec frame-size]}]
                                                          (-> acc
                                                              (update-in [:all-bytes] #(concat % audio-bytes-vec))
                                                              (update-in [:all-bytes-read] (partial + num-bytes-read))))
                                                        {:all-bytes      []
                                                         :all-bytes-read 0}
                                                        messages)
             num-bytes-to-allocate              byte-array-size
             non-processed-bytes                (byte-array num-bytes-to-allocate all-bytes)
             reversed-bytes                     (reverse-target-data-bytes num-bytes-to-allocate all-bytes)]
         (swap! clip-store conj {:forward        non-processed-bytes
                                 :reversed       reversed-bytes
                                 :all-bytes-read all-bytes-read})
         ;; TODO: figure out what clip to play and put on clip-chan. For now just randomly sample from last two elements of clip-store
         (a/>!! clip-chan (rand-nth (take-last 2 @clip-store))))))))

(defn playback-thread-handler
  [{:keys [sample-chan data-bytes target-line source-line byte-array-size sample-store sample-buffer-size clip-chan clip-store]
    :or   {sample-buffer-size 1}}]
  (println "playback-thread-handler started")
  (while true
    (let [{:keys [forward reversed all-bytes-read]} (a/<!! clip-chan)]
      ;;(println "forward:" forward)
      ;;(println "reversed:" reversed)
      ;;(println "all-bytes-read:" all-bytes-read)
      (.write source-line forward  0 all-bytes-read)
      (.write source-line reversed 0 all-bytes-read))))

(defn stream!
  [{:keys [ms init-ms input-type]}]
  (let [audio-format        (create-audio-format {:sample-rate 44100 :channels 2})
        target-line         (input-type->target-line input-type audio-format)
        source-line         (input-type->source-line input-type audio-format)
        _                   (open-and-start target-line)
        _                   (open-and-start source-line)
        byte-array-size     (/ (.getBufferSize target-line) 5)
        data-bytes          (byte-array byte-array-size)
        audio-chan          (a/chan 2000)
        sample-chan         (a/chan 2000)
        clip-chan           (a/chan 2000)
        sample-store        (atom [])
        clip-store          (atom [])
        thread-params       {:target-line     target-line
                             :source-line     source-line
                             :data-bytes      data-bytes
                             :byte-array-size byte-array-size
                             :clip-chan       clip-chan
                             :sample-chan     sample-chan
                             :clip-store      clip-store
                             :sample-store    sample-store}
        recording-thread    (Thread. #(recording-thread-handler thread-params))
        sample->clip-thread (Thread. #(sample-thread-handler    thread-params))
        playback-thread     (Thread. #(playback-thread-handler  thread-params))]
    (.start recording-thread)
    (.start sample->clip-thread)
    (Thread/sleep init-ms) ;; capture/process audio data before starting playback for less playback latency
    
    (.start playback-thread)
    (Thread/sleep (+ init-ms ms))
    
    (cleanup {:threads [recording-thread sample->clip-thread playback-thread]
              :lines   [target-line source-line]})
    (println (format "Done. Captured %s clips" (count @clip-store)))
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
