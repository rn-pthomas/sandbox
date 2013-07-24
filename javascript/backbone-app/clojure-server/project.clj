(defproject clojure-server "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [compojure "1.1.5"]
                 [org.clojure/java.jdbc "0.3.0-alpha4"]
                 [postgresql "9.1-901.jdbc4"]
                 [org.clojure/data.json "0.2.2"]]
  :plugins [[lein-ring "0.8.5"]]
  :ring {:handler clojure-server.handler/app}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.5"]]}})
