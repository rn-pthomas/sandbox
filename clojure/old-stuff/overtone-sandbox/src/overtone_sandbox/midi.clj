(ns overtone-sandbox.midi
  (:use overtone.live)
  (:use overtone-sandbox.util))

(definst sin-wave [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin-env attack sustain release) 1 1 0 1 FREE)
     (saw freq)
     vol))

(defn note-log [note vel]
  (println (str "note: " note))
  (println (str "vel:  " vel)))


(def kick  (sample (freesound-path 777)))
(def click (sample (freesound-path 406)))


(on-event [:midi :note-on]
          (fn [e]
            (let [note (:note e)
                  note (cond (= note 36) (do (kick)
                                             (Thread/sleep 50)
                                             (kick))
                             (= note 37) (click))
                  vel (:velocity e)]
              (do
                (eval note)
                (Thread/sleep 500)
                (eval note))))
          ::keyboard-handler)

(def beat-times [100 200 400])
(defn recurse-beat [accum]
  (if (= accum 0)
    (do (kick)
        (Thread/sleep (rand-index beat-times))
        (recurse-beat 1))
    ;;else
    (do (click)
        (Thread/sleep (rand-index beat-times))
        (recurse-beat 0))))

(defn shortening-kick [accum]
  (if (= 0 accum)
    (do (kick)
        (Thread/sleep 50)
        (shortening-kick 16))
    ;; else
    (do (kick)
        (Thread/sleep (* 20 accum))
        (shortening-kick (dec accum)))))

(defn shortening-kick [accum]
  (cond (= accum 0)
        (do (kick) (apply-at 1000 shortening-kick 15))
        :else
        (do (kick) (apply-at (* 20 accum) shortening-kick (dec accum)))))
(comment
  (kick)
  (shortening-kick 15)
  (stop)
  )

(defn recurse-kick [sound]
  (if (= sound 0)
      (do (kick)
          (Thread/sleep (+ 40 (rand-int 300)))
          (recurse-kick 1))
      ;; else
      (do (click)
          (Thread/sleep (+ 20 (rand-int 200)))
          (recurse-kick 0))))



(on-event [:midi :note-off]
          (fn [e]
            (let [note (:note e)
                  note (cond (= note 36) (click)
                             (= note 37) (kick))
                  vel (:velocity e)]
              (eval note)))
          ::keyboard-handler-2)


(on-event [:overtone :osc-msg-received]
          (fn [e]
            (println "oscillator message was received"))
          ::generic-handler)



(comment
  (stop)
  (connected-midi-devices)
  (event-debug-on)
  (event-debug-off)
  (sin-wave)
  (recurse-kick 0)
  (recurse-beat 0)
  )
