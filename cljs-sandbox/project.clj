(defproject cljs-sandbox "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure       "1.5.1"]
                 [org.clojure/clojurescript "0.0-2127"]
                 [om                        "0.1.5"]]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "cljs-sandbox"
              :source-paths ["src"]
              :compiler {
                :output-to "cljs_sandbox.js"
                :output-dir "out"
                :optimizations :none
                :source-map "cljs_sandbox.js.map"}}]})
