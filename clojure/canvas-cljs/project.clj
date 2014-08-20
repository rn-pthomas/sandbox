(defproject canvas-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.clojure/clojurescript "0.0-2197"]
                 [org.clojure/core.async    "0.1.267.0-0d7780-alpha"]
                 [om                        "0.6.5"]
                 [secretary                 "1.2.0"]
                 [sablono                   "0.2.6"]
                 [figwheel                  "0.1.4-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel  "0.1.4-SNAPSHOT"]]
  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src/"]
                        :compiler     {:output-to     "resources/public/js/compiled/main.js"
                                       :output-dir    "resources/public/js/compiled/out"
                                       :optimizations :none
                                       :source-map    true}}]})
