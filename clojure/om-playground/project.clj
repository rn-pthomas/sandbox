(defproject om-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [om                        "0.5.3"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "om-playground"
              :source-paths ["src"]
              :compiler {
                :output-to "om_playground.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
