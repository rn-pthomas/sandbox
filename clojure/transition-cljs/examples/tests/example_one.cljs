(deftest example-one
  (fixtures
   {:consumer {:first-name "Pat"
               :last-name  "Thomas"}})
  (helpers
   (assert-session-status
    []
    :do-something-to-assert-session-status)
   (assert-something-else
    [foo]
    :do-something-to-assert-session-status))
  (states
   (init (to do-something assert-session-status)
         (to fail-immediately bad-session))))





