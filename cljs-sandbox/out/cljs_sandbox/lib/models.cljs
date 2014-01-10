(ns cljs-sandbox.lib.models
  (:require-macros [cljs-sandbox.lib.model-macros :as model-macros]))

(.log js/console "woot")

(model-macros/defmodel foo [:one :two :three])
