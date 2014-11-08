(ns clj-playground.http
  (:require [org.httpkit.client :as http]
            [clojure.data.json  :as json]
            [clojure.java.io    :refer :all]))

(def base-api-url "https://api.discogs.com/")

(defn parse-json-resp
  [resp]
  (-> resp deref :body (json/read-str :key-fn keyword)))

(defn format-with-keys
  [format-str m & ks]
  (let [ks-from-map (reduce (fn [acc k]
                              (conj acc (k m)))
                            []
                            ks)]
    (apply (partial format format-str) ks-from-map)))

(defn get-all-pages
  [folder-resp]
  (loop [accum        []
         current-resp folder-resp]
    (if-let [next-page-url (-> current-resp :pagination :urls :next)]
      (recur (conj accum current-resp) (-> next-page-url http/get parse-json-resp))
      (conj accum current-resp))))

(defn folder-resp->releases
  [folder-resp]
  (let [raw-releases (->> folder-resp get-all-pages (map :releases) (mapcat #(map :basic_information %)))]
    (map (fn [release]
           (-> release
               (select-keys [:title :artists :year])
               (update-in [:artists] (fn [artist-rec]
                                       (->> artist-rec first :name)))
               (clojure.set/rename-keys {:artists :artist})))
         raw-releases)))

(defn get-user
  [username]
  (->> "/collection/folders"
       (str base-api-url "users/" username)
       http/get
       parse-json-resp
       :folders
       (mapv :resource_url)
       (mapv (fn [folder-url]
               (-> folder-url
                   (str "/releases?per_page=100")
                   http/get
                   parse-json-resp
                   folder-resp->releases)))
       flatten
       (sort-by :year)
       (mapv (fn fix-year [release]
               (update-in release [:year] #(if (= % 0)
                                             "Unknown year"
                                             %))))))

(defn friendly-format-collection
  [collection]
  (mapv (fn format-release [release]
          (format-with-keys "[%s] %s - %s" release :year :artist :title))
        collection))

(comment
  (def my-collection (friendly-format-collection (get-user "OatRhombus")))
  (with-open [wrtr (writer "./shuffled_collection.txt")]
    (doseq [line (shuffle my-collection)]
      (.write wrtr (str line "\n"))))
  )
