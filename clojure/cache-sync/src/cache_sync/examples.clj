(ns cache-sync.examples
  (:require [cache-sync.core  :as caching]
            [taoensso.carmine :as redis]))

(caching/set-cache-lookup-fn!
 (fn [path]
   (let [path (if (vector? path)
                (map str path)
                (str path))]
     (redis/wcar
      nil
      (redis/get path)))))

(caching/set-cache-busting-fn!
 (fn [path data]
   (let [path (if (vector? path)
                (map str path)
                (str path))]
     (redis/wcar
      nil
      (redis/set path data)))))

(comment
  (caching/with-cache-busting
    [:foo :bar]
    :this-will-be-the-new-value)
  
  (caching/with-cache-lookup
    [:foo :bar]
    :couldnt-get-it)
  )
