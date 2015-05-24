# cache-sync

Microframework for simple, synchronized caching.

##Example usage:
```clj
(ns my-project.core
  (:require [cache-sync.core :as caching :refer [with-cache-lookup with-cache-busting]))

(caching/set-cache-lookup-fn!
  (fn [path]
    (lookup-from-redis path)))

(caching/set-cache-busting-fn!
  (fn [path data]
    (store-in-redis path data)))

(defn lookup-user
  [user-id]
  (with-cache-lookup 
    ["users" user-id]
    (lookup-user-from-db user-id)))

(defn update-user-settings
  [user-id settings]
  (with-cache-busting 
    ["users" user-id "settings"]
    (update-user-settings-in-db user-id settings)))
```
