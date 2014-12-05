(ns loggly-playground.core
  (:require [clojure.data.json :as json])
  (:import [org.slf4j LoggerFactory MDC]
           [ch.qos.logback.classic Level Logger]
           [java.io StringWriter]))

(def logger (LoggerFactory/getLogger "pthomas"))

(defmacro define-loggers
  [logger & log-levels]
  `(do ~@(for [log-fn log-levels]
           `(defn ~log-fn
              [log-msg#]
              (~(symbol (str "." log-fn)) ~logger (print-str log-msg#))))))

(define-loggers logger
  info debug warn error)

(comment
  (dotimes [_ 10]
    (try (+ 1 "this won't work!")
         (catch Exception ex
           (error (.getMessage ex)))))
  (doseq [evt (for [_ (range 100)]
                ((fn make-evt []
                   (json/json-str {:evt-name "sample-event"
                                   :message  "Hello!"
                                   :evt-id   (rand-int 3000)}))))]
    (warn evt))
)
