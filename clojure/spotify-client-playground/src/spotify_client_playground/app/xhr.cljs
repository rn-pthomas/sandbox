(ns spotify-client-playground.app.xhr
  (:require [goog.events :as events])
  (:import [goog.net XhrIo]
           goog.net.EventType))

(def ^:private http-methods
  {:get    "GET"
   :put    "PUT"
   :post   "POST"
   :delete "DELETE"})

(def api-base "api/")

(defn do-xhr
  [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
                   (fn [e]
                     (on-complete (.getResponseText xhr))))
    (. xhr
       (send (str api-base url)
             (http-methods method)
             (when data
               (pr-str data))
             #js {"Content-Type" "application/json"}))))

