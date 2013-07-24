(ns clojure-server.scratch
  (require [clojure.java.jdbc     :as j]
           [clojure.java.jdbc.sql :as s]))

(clojure.string/replace "abc123" #"123" "foo")

(clojure.string/replace "foo ? bar ?")
(clojure.string/split "foo ? bar ?" #"\?") ;; ["foo " " bar "]
(map (fn [x] (str (clojure.string/trim x) "!")) ["foo " " bar "])


(defn replace-question-marks [query & params]
  (let [split-query (clojure.string/split query #"\?")]
    (map (fn [x]
           (str (clojure.string/trim x) "!"))
         split-query)))

(clojure.string/join (replace-question-marks "hey ? there?"))
