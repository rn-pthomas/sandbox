(ns clj-twilio-sandbox.http
  (:require [org.httpkit.client :as http-kit]))

(defonce account-sid   "AC7e07e77adddbfbfb1442489211da87c2")
(defonce auth-token    "ed491c052e6476b3f1f8935979e34e10")
(defonce twilio-number "14843834607")

(defn twilio-post [url twiml]
  (let [options {:body twiml}
        {:keys [status error body opts]} @(http-kit/post url options)]
    (if error
      error
      {:status status
       :body body})))
