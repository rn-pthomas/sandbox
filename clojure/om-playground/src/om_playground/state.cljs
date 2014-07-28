(ns om-playground.state)

(def app-state
  (atom
   {:list ["Lion" "Zebra" "Buffalo" "Antelope"]
    :text "Hello world!"
    :info {:key-presses {:num 0
                         :log ""}}}))
