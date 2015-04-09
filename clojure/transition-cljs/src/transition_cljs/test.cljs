(ns transition-cljs.test
  (:require [transition-cljs.util :as util]))

(defn basic-functionality-test
  []
  (util/load-script "foo.js"))

