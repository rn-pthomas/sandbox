(ns cascalog-playground.scratch
  (:require [cascalog-playground.core       :as core]
            [cascalog-playground.schema     :as schema]
            [cascalog-playground.file-utils :as file-utils]))

(comment

  (let [filename             (first (file-utils/all-sample-files))
        analyzed-event-file  (core/analyze-event-file filename)
        base-schema          (->> analyzed-event-file
                                  first
                                  second
                                  first
                                  (drop 3)
                                  (take 6))
        target-event-type    :boom.api.card-activation.received
        target-event-version 1]
    (schema/matching-events target-event-type target-event-version analyzed-event-file))

  
  (let [filename             (first (file-utils/all-sample-files))
        analyzed-event-file  (core/analyze-event-file filename)
        base-schema          (->> analyzed-event-file
                                  first
                                  second
                                  first
                                  (drop 3)
                                  (take 6))
        target-event-type    :boom.api.card-activation.received
        target-event-version 1]
    (schema/normalize-schema-definitions target-event-type target-event-version analyzed-event-file base-schema))


  (let [filename (nth (file-utils/all-sample-files) 3)]
   (schema/normalize-all-schema-definitions (core/analyze-event-file filename) {[:pods.engagement 4] []
                                                                                [:wire.twoway.chat.entered 1] []}))
  
{[:wire.twoway.chat.entered 1] :yup, [:pods.engagement 4] :yup}
  
  )
