(ns rabbitmq-playground.core
  (:require [langohr.core      :as langohr]
            [langohr.channel   :as channel]
            [langohr.queue     :as queue]
            [langohr.consumers :as consumers]
            [langohr.basic     :as basic]
            [clojure.data.json :as json]))

(def ^{:const true}
  default-exchange-name "")

(defn message-handler
  [ch {:keys [content-type delivery-type delivery-tag type] :as meta} ^bytes payload]
  (let [payload (json/read-str (String. payload "UTF-8") :key-fn keyword)]
    (println (format "[consumer] Received a message: %s, delivery tag: %s, content type: %s, type: %s"
                     payload
                     delivery-tag
                     content-type
                     type))))

(defn initialize
  []
  (let [conn  (langohr/connect)
        ch    (channel/open conn)
        qname "langohr.examples.hello-world"]
    (println (format "[main] Connected. Channel id: %d" (.getChannelNumber ch)))
    (queue/declare ch qname :exclusive false :auto-delete true)
    (consumers/subscribe ch qname message-handler :auto-ack true)))

(defn shutdown
  []
  (let [conn  (langohr/connect)
        ch    (channel/open conn)
        qname "langohr.examples.hello-world"]
    (println "[main] Disconnecting...")
    (langohr/close ch)
    (langohr/close conn)))

(defn publish-message
  [message]
  (let [conn  (langohr/connect)
        ch    (channel/open conn)
        qname "langohr.examples.hello-world"]
    (basic/publish ch default-exchange-name qname (json/json-str message) :content-type "application/json" :type "greetings.hi")))

(comment
  (initialize)
  (publish-message {:msg "hello"})
)
