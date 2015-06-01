(ns mux.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(def util (nodejs/require "util"))

(defn -main []
  (.spawn (nodejs/require "child_process")))

(set! *main-cli-fn* -main)
