(defproject ws-playground "0.1.0-SNAPSHOT"
  :description  "experiments with web sockets"
  :url          "http://github.com/pat-thomas/sandbox"
  :license      {:name "Eclipse Public License"
                 :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :main         ws-playground.server
  :dependencies [[org.clojure/clojure   "1.5.1"]
                 [http-kit              "2.1.16"]
                 [compojure             "1.1.5"]
                 [org.clojure/tools.nrepl "0.2.3"]
                 [org.clojure/data.json "0.2.4"]
                 [overtone              "0.9.1"]])
