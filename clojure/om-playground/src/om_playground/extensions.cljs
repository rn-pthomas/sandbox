(ns om-playground.extensions)

(extend-type string
  ICloneable
  (-clone [s]
    (js/String. s)))

(extend-type js/String
  ICloneable
  (-clone [s]
    (js/String. s))
  
  om/IValue
  (-value [s]
    (str s)))
