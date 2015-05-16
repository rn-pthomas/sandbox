(defproject om-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure       "1.7.0-beta2"]
                 [org.clojure/clojurescript "0.0-3269"]
                 [org.clojure/core.async    "0.1.267.0-0d7780-alpha"]
                 [org.omcljs/om             "0.8.8"]
                 [sablono                   "0.3.4"]
                 [om-utils                  "0.4.0"]]
  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.1"]]
  :source-paths ["src"]
  :cljsbuild {:builds [{:id           "om-playground"
                        :source-paths ["src"]
                        :figwheel     {:on-jsload "om-playground.core/reload-hook"}
                        :compiler     {:asset-path    "js/out"
                                       :output-to     "resources/public/js/om_playground.js"
                                       :output-dir    "resources/public/js/out"
                                       :optimizations :none
                                       :source-map    true}}]}
  :figwheel {:http-server-root "public"
             :css-dirs         ["resources/public/css"]})
