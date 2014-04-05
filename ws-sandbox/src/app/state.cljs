(ns ws-sandbox.app.state)

(def dispatch-table
  {:update-text update-text})

(defn handle-socket-msg [data]
  ((:handler data) (dissoc data :handler)))

(defn update-text [text]
  (swap! app-state assoc :text text))

(def app-state (atom {:text "Hello world!"}
                     :synth {:sin {}
                             :saw}))
