(ns cascalog-playground.scratch
  (:require [cascalog-playground.core       :as core]
            [cascalog-playground.schema     :as schema]
            [cascalog-playground.file-utils :as file-utils]))

(comment
  
  (let [filename (first (file-utils/all-sample-files))]
    (->> filename
         analyze-event-file
         (schema/matching-events :boom.api.card-activation.received 1)))

  )
