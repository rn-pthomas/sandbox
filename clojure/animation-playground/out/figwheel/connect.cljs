(ns figwheel.connect (:require [animation-playground.core] [figwheel.client]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload animation-playground.core/reload-hook, :build-id "animation-playground"})

