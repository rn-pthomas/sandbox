(ns spotify-playground.core
  (:require [org.httpkit.client :as client]
            [clojure.data.json  :as json]))

(def base-request-url "https://api.spotify.com/v1")

(defn spotify-req
  [{:keys [req-types resource-types search-types]}]
  (let [req-types-set      (set req-types)
        resource-types-set (set resource-types)
        search-types-set   (set search-types)]
    (reduce (fn [acc req-type]
              (cond (contains? resource-types-set req-type)
                    (str acc "/" (name req-type) "/%s")


                    (contains? search-types-set req-type)
                    (str acc "/" (name req-type) "?")

                    :default
                    (str acc "/" (name req-type))))
            base-request-url
            req-types)))

(comment
  (spotify-req {:req-types      [:artists :albums]
                :resource-types [:artists]})

  )

(defmacro defreq
  [req-name req-type]
  
  (let [base-req (str (spotify-req req-type) "%s")]
    `(defn ~req-name
       [term#]
       (let [resp# @(client/get (format ~base-req term#))]
         (when-let [body# (-> resp# :body (json/read-str :key-fn keyword))]
           (reduce (fn [acc# [k# v#]]
                     (assoc acc# k#
                            (select-keys v# [:items :limit :offset :total])))
                   {}
                   body#))))))

(defreq arist-search :artist)

(defreq search :search)

(comment
  (-> "https://api.spotify.com/v1/search?q=miles&type=artist" client/get deref)
  (search "?q=miles&type=artist")
)


