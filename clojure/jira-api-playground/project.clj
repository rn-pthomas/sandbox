(defproject jira-api-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :plugins [[lein-cljsbuild "1.0.3"]]
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [pat-thomas/clj-utils      "0.1.0"]]
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler     {:output-to     "target/js/main.js"
                                       :optimizations :simple
                                       :target        :nodejs
                                       :pretty-print  true}}]})
