(ns spotify-client-playground.server.api.search
  (:require [kinematic.dsl                                    :as dsl]
            [spotify-client-playground.server.web-helpers     :as web-helpers]
            [spotify-client-playground.server.spotify-adapter :as adapter]))

(dsl/defapi :api ["search"])

(defn handle-search
  [req]
  (let [search-term (-> req web-helpers/parse-query-string :term)
        result-set  (adapter/search-all search-term)]
    {:search-term search-term
     :result-set  result-set}))

(dsl/api-get
 (handle-search request))

