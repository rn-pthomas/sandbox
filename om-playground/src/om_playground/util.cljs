(ns om-playground.util)

(enable-console-print!)

(defn log
  [msg]
  (.log js/console msg))

(defn set-timeout
  [impl ms]
  (.setInterval js/window impl ms))
