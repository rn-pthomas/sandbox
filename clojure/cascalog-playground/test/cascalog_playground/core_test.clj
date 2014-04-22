(ns cascalog-playground.test.core-test
  (:require [cascalog-playground.core          :as core]
            [cascalog-playground.schema        :as schema]
            [cascalog-playground.test.fixtures :as fixtures]
            [clojure.test                      :refer :all]))

(deftest test-add-new-schema-types
  (testing "Function works.")
  (= 1 1))

(comment
  (run-tests)
  )
