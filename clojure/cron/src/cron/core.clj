(ns cron.core
  (:require [postal.core :as postal]))

(defn async-get
  [url result-chan]
  (http/get url #(go (>! result-chan %))))

(defn make-http-reqs
  []
  (let [urls [{:name :boot-and-saddle
               :url "http://www.bootandsaddlephilly.com/listing"}
              {:name :union-transfer
               :url "http://www.utphilly.com/listing"}
              {:name :r5
               :url "http://r5productions.com/listing"}
              {:name :johnny-brendas
               :url "http://johnnybrendas.com/listing"}]]
    (let [c   (chan)
          res (atom {})]
      (doseq [{:keys [name url]} urls]
        (async-get url c)
        (swap! res assoc name (tagsoup/parse-string (:body (<!! c)))))
      @res)))

(defn notify-via-email
  [content]
  (let [date-time (org.joda.time.DateTime.)
        date-str  (format "%s.%s.%s" (.getYear date-time) (.getMonthOfYear date-time) (.getDayOfMonth date-time))]
    (postal/send-message {:from    "pt.notifications@pat.thomas"
                          :to      ["patthomassoftware@gmail.com"]
                          :subject (format "%s automatic notification" date-str)
                          :body    (or content "test")})))

(comment
  (notify-via-email nil)
  )

(comment
  (def foo (make-http-reqs))
  (first (:r5 foo))
  (locate-listings :r5)
  (tagsoup/parse-string (:body (:r5 foo)))
  )

