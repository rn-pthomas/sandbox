(ns spotify-client-playground.server.nrepl
  (:require [clojure.tools.nrepl.server :as nrepl]
            [cider.nrepl                :as cider]))

(def nrepl-server (atom nil))

(defn start-nrepl-server
  [server-atom port]
  (reset! nrepl-server (nrepl/start-server :port port :handler cider/cider-nrepl-handler))
  (println (format "nrepl server listening on port %s" port))
  :nrepl-server-started)
