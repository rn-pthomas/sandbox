(ns cascalog-playground.file-utils
  (:require [clojure.java.io    :as io]
            [clojure.java.shell :as shell]))

(def file-glob "part*")

(defn split-on-tab
  [line]
  (clojure.string/split line #"\t" 3))

(defn all-sample-files
  []
  (let [base-data-path "data"]
    (map #(str base-data-path "/" %)
         (-> (shell/sh "ls" "data" file-glob)
             :out
             (clojure.string/split #"\n")
             rest))))

(defn all-lines
  [filename]
  (with-open [rdr (io/reader filename)]
    (doall (line-seq rdr))))

(defn line-seq->events-seq
  [s]
  (map #(let [[event-type event-version event-schema] (map read-string (split-on-tab %))
              event-type (keyword event-type)]
          [event-type event-version event-schema])
       s))
