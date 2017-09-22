(ns gin.server.cli
  (:require [clojure.tools.cli :as c]
            [gin.server.audio  :as audio]))

(def cli-options
  [["-m" "--ms MILLISECONDS" "Millseconds to run program"
    :default 5
    :parse-fn #(Integer/parseInt %)]
   ["-o" "--output-file OUTPUT FILE" "File to save to"]])

(defn record
  [& args]
  (let [{:keys [options]}        (c/parse-opts args cli-options)
        {:keys [ms output-file]} options]
    (println (format "Recording for %s ms to file %s" ms output-file))
    (audio/record! {:ms       ms
                    :filename output-file})))

(defn stream
  [& args]
  (let [{:keys [options]}        (c/parse-opts args cli-options)
        {:keys [ms output-file]} options]
    (println (format "Recording for %s ms to file %s" ms output-file))
    (audio/record-chopped! {:ms       ms
                            :filename output-file})))
