(defproject om-drum-machine "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async    "0.1.267.0-0d7780-alpha"]
                 [om                        "0.8.0-alpha2"]
                 [om-utils                  "0.2.0"]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :source-paths ["src"]
  :cljsbuild {:builds       [{:id "om-drum-machine"
              :source-paths ["src"]
              :compiler     {:output-to     "om_drum_machine.js"
                             :output-dir    "out"
                             :optimizations :none
                             :source-map    true}}]})
