(ns transition-cljs.util
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(defn load-script
  [^String url]
  (println :implement-load-script))
