(ns gin.server.processing
  (:require [clojure.java.io :as io]
            [clojure.core.async :as a])
  (:import [javax.sound.sampled AudioFormat AudioFormat$Encoding AudioInputStream AudioFileFormat AudioFileFormat$Type AudioSystem DataLine DataLine$Info Mixer SourceDataLine TargetDataLine]
           [java.io ByteArrayOutputStream]))

