(ns feathers.helpers)

(defn randomness
  [multiplier randomness-factor]
  (* multiplier (rand-int randomness-factor)))
