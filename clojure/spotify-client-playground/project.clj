(defproject spotify-client-playground "0.1.0-SNAPSHOT"
  :description  "FIXME: write description"
  :url          "http://example.com/FIXME"
  :license      {:name "Eclipse Public License"
                 :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main         spotify-client-playground.server.core/run-app
  :dependencies [[org.clojure/clojure        "1.6.0"]
                 [ring/ring-core             "1.3.1"]
                 [com.relaynetwork/kinematic "1.3.8"]
                 [http-kit                   "2.1.16"]
                 [org.clojure/tools.nrepl    "0.2.3"]
                 
                 [org.clojure/clojurescript  "0.0-2311"]
                 [org.clojure/core.async     "0.1.267.0-0d7780-alpha"]
                 [com.cognitect/transit-cljs "0.8.188"]
                 [om                         "0.7.3"]
                 [om-sync                    "0.1.1"]
                 [secretary                  "1.2.0"]]
  :plugins      [[lein-cljsbuild "1.0.3"]]
  :source-paths ["src"]
  :cljsbuild    {:builds [{:id           "spotify_client"
                           :source-paths ["src/spotify_client_playground/app"]
                           :compiler     {:output-to     "resources/public/js/compiled/spotify_client_playground.js"
                                          :output-dir    "resources/public/js/compiled/out"
                                          :optimizations :none
                                          :source-map    true}}]})
