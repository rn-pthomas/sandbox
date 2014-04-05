(defproject ws-sandbox "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.0.2"]]
  :cljsbuild {:builds [{:source-paths ["src/app"]
                        :compiler {:output-to     "public/js/main.js"
                                   :optimizations :whitespace
                                   :pretty-print  true}}]}
  :dependencies [[org.clojure/clojure       "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [om                        "0.3.6"]
                 [http-kit                  "2.1.16"] 
                 [org.clojure/tools.nrepl   "0.2.3"]]
  :main ws-sandbox.server.server)
