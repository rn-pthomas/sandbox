(ns om-playground.state
  (:require [om-playground.streams :as streams]
            [cljs.core.async :refer [chan]]))

(defonce app-state
  (atom {:channels {:anim (streams/make-stream inc 1)}}))
