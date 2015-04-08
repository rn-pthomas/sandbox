(defproject transition-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler     {:output-to     "transition_cljs.js"
                                       :output-dir    "out"
                                       :optimizations :none
                                       :source-map    true
                                       ;;:pretty-print  true
                                       }}]}
  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.omcljs/om             "0.8.8"]
                 [om-utils                  "0.4.0"]
                 [org.clojure/clojurescript "0.0-3126"]])
