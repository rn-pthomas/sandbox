(ns experiments.app.xhr
  (:require [goog.events :as events]
            [schema.core :as s])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(def ^:private meths
  {:get    "GET"
   :post   "POST"
   :put    "PUT"
   :delete "DELETE"})

(def base-url "http://localhost:3141/api/")

(def XhrSchema {(s/required-key :method)      s/Str
                (s/required-key :url)         s/Str
                (s/required-key :on-complete) s/Any ;; is there a Schema type for function?
                (s/optional-key :data)        {s/Any s/Any}})

(s/defn make-xhr
  [xhr-schema :- XhrSchema]
  (let [{:keys [method data url on-complete]} xhr-schema
        xhr                                   (XhrIo.)]
    (events/listen
     xhr
     goog.net.EventType.COMPLETE
     (fn [e]
       (on-complete (.getResponseText xhr))))
    (. xhr
       (send (str base-url url) (get meths method) (when data (pr-str data))
             #js {"Content-Type" "application/json"}))))
