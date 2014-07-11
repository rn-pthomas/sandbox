(ns clj-playground.polish-notation)

(defn apply-op
  [stack op]
  (if (number? op)
    (conj stack op)
    (conj (vec (drop-last 2 stack))
          (apply op (take-last 2 stack)))))

(defn apply-polish-notation
  [& ops]
  (reduce (fn [acc op]
            (apply-op acc op))
          []
          (vec ops)))

(comment
  (apply-polish-notation 10 4 3 + 2 * - 10 + 10 * 3 2 3 - - /)
  )
