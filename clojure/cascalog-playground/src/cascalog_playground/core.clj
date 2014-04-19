(ns cascalog-playground.core
  (:require [cascalog-playground.file-utils :as file-utils]
            [cascalog.playground            :as cascalog-playground]
            [cascalog.api                   :refer :all]))

(defn normalize-schema-definition
  [line]
  )

(defn analyze-event
  [line accum]
  (let [[event-type event-version event-schema] (map read-string (split-on-tab line))
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

(comment

  ;;counts distinct versions of schemas
  (let [fname "data/part-00000"]
    (->> fname
         file-utils/all-lines
         file-utils/line-seq->events-seq
         (reduce (fn [acc [en ev es]]
                   (update-in acc [[en ev]] #(inc (or % 0))))
                 {})))

  ;;keys [event-type event-version] to event-schema
  (let [fname "data/part-00000"]
    (->> fname
         file-utils/all-lines
         file-utils/line-seq->events-seq
         (reduce (fn [acc [en ev es]]
                   (update-in acc [[en ev]] conj es))
                 {})))

  )
