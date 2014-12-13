(ns cljs-backbone.core
  (:require [cljs-backbone.routes :as routes :refer [register-route!]])
  (:require-macros [cljs-backbone.macros :refer [defrouter defmodel defview]]))

(enable-console-print!)

(defn init
  []
  (routes/initialize-routers!))

(def app-router 
  (.extend Backbone.Router
           {"routes" (deref routes/router-dispatch)}))

(defn foo-route
  []
  (.log js/console "it worked!"))

(register-route! "foo" foo-route)

(init)


