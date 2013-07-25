(ns clj-scratch.macros)

(defmacro unless
  [pred & body]
  `(when-not ~pred
     ~@body))

(defmacro if*
  [pred & body]
  (when (= (count (filter (fn [x#] (or (= x# :then) (= x# :else))) body)) 2)
    (let [else-cases (rest (drop-while (fn [case] (not= case :else)) body))
          if-cases   (take-while (fn [case]
                                   (not= case :else))
                                 (rest
                                  (drop-while (fn [case] (not= case :then)) body)))]
      `(if ~pred
         (do ~@if-cases)
         (do ~@else-cases)))))


(comment

  )
