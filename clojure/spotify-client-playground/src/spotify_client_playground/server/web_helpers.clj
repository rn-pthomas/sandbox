(ns spotify-client-playground.server.web-helpers)

(defn parse-query-string
  [{:keys [query-string] :as req}]
  (let [split-params (partition 2 (clojure.string/split query-string #"="))]
    (reduce (fn [acc [k v]]
              (assoc acc (keyword k) v))
            {}
            split-params)))
