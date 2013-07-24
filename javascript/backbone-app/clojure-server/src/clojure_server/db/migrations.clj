(ns clojure-server.db.migrations
  (:require [clojure.java.jdbc :as sql]))

(comment
  (System/getenv "DATABASE_URL") ;; "postgresql://localhost:5432/books"

  ;; Lightweight migrations
  (sql/with-connection (System/getenv "DATABASE_URL") ;; UP
    (sql/create-table
     :books
     [:id :serial]
     [:title :text]
     [:author :text]
     [:release_date :integer]
     [:keywords :text]))

  (sql/with-connection (System/getenv "DATABASE_URL") ;; DOWN
    (sql/drop-table :books))


  ;; Throw in some sample data:
  (def sample-data
    [
     {:title       "JavaScript: The Good Parts"
      :author      "Douglas Crockford"
      :release_date 2008
      :keywords    "JavaScript Programming"}
     {:title       "The Little Book on CoffeeScript"
      :author      "Alex MacCaw"
      :release_date 2012
      :keywords    "CoffeeScript Programming"}
     {:title       "Scala for the Impatient"
      :author      "Coy S. Horstmann"
      :release_date 2012
      :keywords    "Scala Programming"}
     {:title       "American Psycho"
      :author      "Bret Easton Ellis"
      :release_date 2012
      :keywords    "Novel Splatter"}
     {:title       "Eloquent JavaScript"
      :author      "Marijn Haverbeke"
      :release_date 2011
      :keywords    "JavaScript Programming"}
     ])
  (sql/with-connection (System/getenv "DATABASE_URL")
    (doseq [x sample-data]
      (sql/insert-record :books x)))




  )
