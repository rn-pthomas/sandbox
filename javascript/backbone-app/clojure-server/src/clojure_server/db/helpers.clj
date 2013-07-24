(ns clojure-server.db.helpers
  (:require [clojure.java.jdbc :as sql]))

(defonce url (System/getenv "DATABASE_URL"))

(defn get-all
  [table]
  (let [query (str "select * from " table ";")]
    (println "Executing query =>" query)
    (sql/with-connection url
      (sql/with-query-results results
        [query]
        (into [] results)))))

(defn get-by-id
  [table id]
  (let [query (str "select * from " table " where id = " id ";")]
    (println "Executing query =>" query)
    (sql/with-connection url
      (sql/with-query-results results
        [query]
        (into [] results)))))

(defn post-req
  [& params-map]
  (let [query]))

(defn get-all-like
  [table params]
  (let [column (:column params)
        query  (:query params)
        sql-query (str "select * from " table " where " column " like '%" query "%';")]
    (println "Executing query =>" sql-query)
    (sql/with-connection url
      (sql/with-query-results results
        [sql-query]
        (into [] results)))))

(defn construct-query [& args]
  )

(replace "")
