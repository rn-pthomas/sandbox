(ns transition-cljs.test
  (:require [transition-cljs.util :as util]))

(defn do-test
  [& assertions]
  (let [failures (->> assertions
                      (partition 2)
                      (filter (fn [[assertion-name assertion]]
                                (not (and assertion assertion-name)))))]
    (if (empty? failures)
      (println "success")
      (throw (js/Error. (str "The following tests failed: " (map first failures)))))))

(defn basic-functionality-test
  []
  (do-test
   :load-suite (util/load-suite)))

