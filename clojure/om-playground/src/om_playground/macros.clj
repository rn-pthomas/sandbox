(ns om-playground.macros)

(defmacro timed-async-loop
  [wait & chans]
  `(let [ch# (cljs.core.async/chan)]
     (cljs.core.async.macros/go
       (while true
         (let [[v# c#] (cljs.core.async/alts! (conj (cljs.core.async/timeout ~wait) ~chans))]
           (when v#
             (cljs.core.async/>! ch# v#)))))
     (cljs.core.async.macros/go
       (while true
         (println (cljs.core.async/<! ch#))))))

(comment
  (macroexpand-1
   '(timed-async-loop 10 (chan 10)))
  (let [ch__3343__auto__ (cljs.core.async/chan)]
    (go
      (while true
        (let [[v__3344__auto__ c__3345__auto__] (alts! (conj (cljs.core.async/timeout 10) ((chan 10))))]
          (when v__3344__auto__ (cljs.core.async/>! ch__3343__auto__ v__3344__auto__)))))
    (cljs.core.async.macros/go (clojure.core/while true (clojure.core/println (cljs.core.async/<! ch__3343__auto__)))))
  )
