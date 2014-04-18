(ns cascalog-playground.core
  (:require [clojure.java.io     :as io]
            [cascalog.api        :refer :all]
            [cascalog.playground :refer :all]))

(defn split-on-tab
  [line]
  (clojure.string/split line #"\t"))

(defn analyze-event
  [line accum]
  (let [[event-type event-version event-schema] (split-on-tab line)
        event-version (Integer/parseInt event-version)
        event-type    (keyword event-type)]
    (if (contains? accum event-type)
      (assoc accum event-type (conj (event-type accum) event-schema))
      (assoc accum event-type event-schema))))

(defn get-event-counts
  [analyzed-file]
  (for [event-type (keys analyzed-file)]
    [event-type (count (event-type analyzed-file))]))

(defn analyze-event-file
  [filename]
  (with-open [rdr (io/reader filename)]
    (loop [[line & lines] (line-seq rdr)
           accum {}]
      (if-not (empty? lines)
        (recur lines (analyze-event line accum))
        accum))))

(comment
  
  (let [analyzed-file (analyze-event-file "data/part-00000")]
    (get-event-counts analyzed-file))

  )
