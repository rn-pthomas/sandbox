(ns clojure-server.controllers.books
  (:require [clojure-server.db.helpers :as db]))

(defn get-all
  []
  (db/get-all "books"))

(defn get-by-id
  [id]
  (db/get-by-id "books" id))

(defn get-all-by-title
  [title-query]
  (db/get-all-like "books" {:column "title" :query title-query}))
