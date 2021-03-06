(ns cascalog-playground.core
  (:require [cascalog-playground.file-utils :as file-utils]
            [cascalog-playground.schema     :as schema]
            [cascalog.playground            :as cascalog-playground]
            [cascalog.api                   :refer :all]))

(defn analyze-event
  [line accum]
  (let [[event-type event-version event-schema] (map read-string (file-utils/split-on-tab line))
        event-type (keyword event-type)]
    (assoc accum [event-type event-version] (conj (event-type accum) event-schema))))

(defn analyze-event-file
  [filename]
  (->> filename
       file-utils/all-lines
       file-utils/line-seq->events-seq
       (reduce (fn [acc [en ev es]]
                 (update-in acc [[en ev]] conj es))
               {})))

(defn count-schemas
  "Counts distinct versions of schemas"
  [filename]
  (->> filename
       file-utils/all-lines
       file-utils/line-seq->events-seq
       (reduce (fn [acc [en ev es]]
                 (update-in acc [[en ev]] #(inc (or % 0))))
               {})))

(defn normalize-all-schema-definitions-for-file
  [filename]
  (->> filename
       analyze-event-file
       schema/normalize-all-schema-definitions))

(defn analyze-event-files
  "Given a list of filenames, will produce normalized schema
   definitions for all events in the files"
  [filenames]
  (let [analyzed-files (map analyze-event-file filenames)]))

(comment
  
  ;;analyze-event-files
  (let [filenames (file-utils/all-sample-files)]
    (let [analyzed-files (map analyze-event-file filenames)]
      (map keys analyzed-files)))
  
    )








