(defproject om-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [org.clojure/core.async    "0.1.267.0-0d7780-alpha"]
                 [om                        "0.6.5"]
                 [om-sync                   "0.1.1"]
                 [sablono                   "0.3.4"]
                 [om-utils                  "0.4.0"]]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.2.9"]]
  :source-paths ["src"]
  :cljsbuild {:builds       [{:id           "om-playground"
                              :source-paths ["src"]
                              :figwheel {:on-jsload "om-playground.core/reload-hook"}
                              :compiler     {:output-to     "om_playground.js"
                                             :output-dir    "out"
                                             :optimizations :none
                                             :source-map    true}}]})
