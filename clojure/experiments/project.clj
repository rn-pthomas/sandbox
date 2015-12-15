(defproject experiments "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [;; client-side
                 [org.clojure/clojurescript "1.7.170"]
                 [reagent                   "0.5.1"]

                 ;; server-side
                 [org.clojure/clojure        "1.7.0"]
                 [http-kit                   "2.1.18"]
                 [org.clojure/core.async     "0.2.374"]
                 [org.clojure/tools.nrepl    "0.2.12"]
                 [org.clojure/java.jdbc      "0.3.5"]
                 [com.stuartsierra/component "0.2.3"]]
  :cljsbuild {:builds [{:source-paths ["src/experiments/app"]
                        :compiler     {:output-to     "public/js/experiments.js"
                                       :optimizations :whitespace
                                       :pretty-print  true}}]})
