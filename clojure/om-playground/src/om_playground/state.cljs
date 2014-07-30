(ns om-playground.state)

(def app-state
  (atom
   {:people
    [{:type :student :first "Ben" :last "Bitdiddle" :email "benb@mit.edu"}
     {:type :student :first "Alyssa" :middle-initial "P" :last "Hacker"
      :email "aphacker@mit.edu"}
     {:type :professor :first "Gerald" :middle "Jay" :last "Sussman"
      :email "metacirc@mit.edu" :classes [:6001 :6946]}
     {:type :student :first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
     {:type :student :first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
     {:type :professor :first "Hal" :last "Abelson" :email "evalapply@mit.edu"
      :classes [:6001]}]
    :classes {:6001 "The Structure and Interpretation of Computer Programs"
              :6946 "The Structure and Interpretation of Classical Mechanics"
              :1086 "Linear Algebra"}}))

(def other-app-state
  (atom
   {:list ["Lion" "Zebra" "Buffalo" "Antelope"]
    :text "Hello world!"
    :info {:key-presses {:num 0
                         :log ""}}}))
