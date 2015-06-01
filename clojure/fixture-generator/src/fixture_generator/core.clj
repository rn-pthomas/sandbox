(ns fixture-generator.core)

(defn sqlize-value
  [value]
  (if (string? value)
    (format "'%s'" value)
    value))

(defn gen-delete-where-clause
  [locator]
  (let [locator-vec (vec locator)]
    (if (= (count locator-vec) 1)
      (let [[column value] (last locator-vec)]
        (str (name column) " = " (sqlize-value value)))
      (let [everything-but-last (reduce
                                 (fn [acc [column value]]
                                   (str acc (name column) " = " (sqlize-value value) " AND"))
                                 ""
                                 (drop-last locator-vec))
            last-part           (let [[column value] (last locator-vec)]
                                  (str (name column) " = " (sqlize-value value)))]
        (str everything-but-last " " last-part)))))

(defn ->delete-sql
  [{:keys [schema table locator]}]
  (format "DELETE FROM %s.%s WHERE %s;"
          (name schema)
          (name table)
          (gen-delete-where-clause locator)))

(defn ->insert-sql
  [{:keys [schema table insert-data]}]
  (let [insert-data-vec (vec insert-data)]
    (format "INSERT INTO %s.%s (%s) VALUES (%s);"
            (name schema)
            (name table)
            (clojure.string/join "," (map #(-> % first name)
                                          insert-data-vec))
            (clojure.string/join "," (map (fn [[column value]]
                                            (sqlize-value value))
                                          insert-data-vec)))))

(defn process-line
  [{:keys [schema table insert-data locator] :as line}]
  {:delete (->delete-sql line)
   :insert (->insert-sql line)})

(comment
  (process-line {:schema      "users"
                 :table       "accounts"
                 :insert-data {:email_address "patthomassoftware@gmail.com"}
                 :locator     {:user_id       123
                               :email_address "patthomassoftware@gmail.com"}})
  )

(defn main
  "filename must end in either .json or .edn"
  [filename]
  (println filename))
