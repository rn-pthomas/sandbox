(defproject om-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.clojure/clojurescript "0.0-2496"]
                 [om                        "0.8.0-beta3"]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :source-paths ["src"]
  :cljsbuild {:builds       [{:id "om-playground"
                              :source-paths ["src"]
                              :compiler     {:output-to     "om_playground.js"
                                             :output-dir    "out"
                                             :optimizations :none
                                             :source-map    true}}]})
