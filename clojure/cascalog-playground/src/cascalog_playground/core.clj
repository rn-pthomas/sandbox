(ns cascalog-playground.core
  (:require [clojure.java.io     :as io]
            [clojure.edn         :as edn]
            [cascalog.api        :refer :all]
            [cascalog.playground :refer :all]))

(defn split-on-tab
  [line]
  (clojure.string/split line #"\t" 3))

(defn normalize-schema-definition
  [line]
  )

(defn line-seq->events-seq
  [s]
  (map #(let [[event-type event-version event-schema] (map read-string (split-on-tab %))
              event-type (keyword event-type)]
          [event-type event-version event-schema])
       s))

(defn analyze-event
  [line accum]
  (let [[event-type event-version event-schema] (map read-string (split-on-tab line))
        event-type (keyword event-type)]
    (assoc accum [event-type event-version] (conj (event-type accum) event-schema))))

(defn get-event-counts
  [analyzed-file]
  (for [event-type (keys analyzed-file)]
    [event-type (count (event-type analyzed-file))]))

(defn analyze-event-file
  [filename]
  (->> filename
       all-lines
       line-seq->events-seq
       (reduce (fn [acc [en ev es]]
                 (update-in acc [[en ev]] conj es))
               {})))

(defn all-lines
  [filename]
  (with-open [rdr (io/reader filename)]
    (doall (line-seq rdr))))

(comment

  ;;counts distinct versions of schemas
  (let [fname "data/part-00000"]
    (->> fname
         all-lines
         line-seq->events-seq
         (reduce (fn [acc [en ev es]]
                   (update-in acc [[en ev]] #(inc (or % 0))))
                 {})))

  (let [fname "data/part-00000"]
    (->> fname
         all-lines
         line-seq->events-seq
         (reduce (fn [acc [en ev es]]
                   (update-in acc [[en ev]] conj es))
                 {})))

  )
