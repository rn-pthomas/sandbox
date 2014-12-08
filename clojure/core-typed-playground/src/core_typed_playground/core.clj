(ns core-typed-playground.core
  (:require [clojure.core.typed :as t :refer [ann cf check-ns defalias]]
            [core-typed-playground.util :refer :all]))

(defalias User
  (t/HMap :mandatory {:id       t/Int
                      :username t/Str}
          :optional {:email t/Str}))

(defn foo
  [a b]
  (+ a b))

(t/defn get-username
  [user :- User] :- t/Str
  (:username user))

(t/defn make-random-user
  [user-id :- t/Int email :- String] :- User
  {:id       user-id
   :username "some-username-with-email"
   :email    email})

(comment
  ;; always type check on compile
  (check-ns)
  )

(type-check)
