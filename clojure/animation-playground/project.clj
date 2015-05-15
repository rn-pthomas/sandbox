(defproject animation-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [org.clojure/core.async    "0.1.267.0-0d7780-alpha"]
                 [reagent             "0.5.0"]]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.3.1"]]
  :source-paths ["src"]
  :cljsbuild {:builds [{:id           "animation-playground"
                        :source-paths ["src"]
                        :figwheel     {:on-jsload "animation-playground.core/reload-hook"}
                        :compiler     {:output-to     "animation_playground.js"
                                       :output-dir    "out"
                                       :optimizations :none
                                       :source-map    true}}]})
