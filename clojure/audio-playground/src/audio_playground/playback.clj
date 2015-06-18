(ns audio-playground.playback
  (:import [javax.sound.sampled AudioInputStream AudioSystem Clip]))

(defn file->clip
  [^String filepath]
  (let [file (java.io.File. filepath)]
    (when (.exists file)
      (let [clip               (AudioSystem/getClip)
            audio-input-stream (AudioSystem/getAudioInputStream (.. file toURI toURL))]
        (do
          (.open clip audio-input-stream)
          clip)))))

(defn play
  [^Clip clip]
  (doto clip
    (.setFramePosition 0)
    (.loop 0)
    (.start)))

(defn play-loop
  [^Clip clip]
  (.loop clip Clip/LOOP_CONTINUOUSLY))

(defn stop
  [^Clip clip]
  (.stop clip))
