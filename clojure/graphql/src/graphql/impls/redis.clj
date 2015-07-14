(ns graphql.impls.redis
  (:require [graphql.core     :refer [defroot validate!]]
            [taoensso.carmine :as redis]))

(defn compile
  [graphql]
  (loop [acc               []
         [base & children] (apply vec graphql)]
    (def base base)
    (def children children)
    (throw (java.lang.Exception. "stop"))))

(defn execute
  [graphql]
  (let [compiled (compile graphql)]
    (redis/wcar {} )))

(comment
  
  (do
    (defroot user)
    (defroot account-settings)
    (compile
     {[:user 42] #{:name
                   :email
                   [:account-settings #{:privacy-level
                                        :is-verified}]}})
    )
  
  )
