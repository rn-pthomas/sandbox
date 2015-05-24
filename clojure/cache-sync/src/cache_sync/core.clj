(ns cache-sync.core)

(def cache-lookup-fn (atom nil))
(def cache-busting-fn (atom nil))

(defn set-cache-lookup-fn!
  [impl]
  (reset! cache-lookup-fn impl))

(defn set-cache-busting-fn!
  [impl]
  (reset! cache-busting-fn impl))

(defmacro with-cache-lookup
  [cache-args & body]
  (if (nil? @cache-lookup-fn)
    (throw (Exception. "No cache lookup function defined. Must be set with cache-sync.core/set-cache-lookup-fn!"))
    `(if-let [result-from-cache# (@cache-sync.core/cache-lookup-fn ~cache-args)]
       result-from-cache#
       ~@body)))

(defmacro with-cache-busting
  [cache-invalidation-args & body]
  (if (nil? @cache-busting-fn)
    (throw (Exception. "No cache busting function defined. Must be set with cache-sync.core/set-cache-busting-fn!"))
    `(let [result-to-cache# ~@body]
       (do
         (@cache-sync.core/cache-busting-fn ~cache-invalidation-args result-to-cache#)
         result-to-cache#))))
