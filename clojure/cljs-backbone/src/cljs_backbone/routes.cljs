(ns cljs-backbone.routes)

(def router-dispatch (atom {}))

(defn register-route!
  [handler-name handler-impl]
  (.log js/console (str "registering route: " handler-name))
  (swap! router-dispatch assoc handler-name handler-impl))

(defn initialize-routers!
  []
  ;;(.start Backbone.history)
  (.log js/console "initialize-routers!"))


