(ns ws-playground.dev
  (:require [clojure.tools.nrepl        :as nrepl]
            [clojure.tools.nrepl.server :refer [start-server stop-server]]))

(defonce nrepl-port 4000)

(defonce repl-server (start-server :port nrepl-port))
