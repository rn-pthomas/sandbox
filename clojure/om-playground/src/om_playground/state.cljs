(ns om-playground.state)

(def app-state
  (atom {:contacts
         [{:first "Ben" :last "Bitdiddle" :email "benb@mit.edu"}
          {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu"}
          {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
          {:first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
          {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu"}
          {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}]}))

#_(def app-state
  (atom
   {:list ["Lion" "Zebra" "Buffalo" "Antelope"]
    :text "Hello world!"
    :info {:key-presses {:num 0
                         :log ""}}}))
