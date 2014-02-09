(ns clj-twilio-sandbox.twiml
  (:require [clojure.data.xml :as xml]))

(defn say [msg]
  (xml/emit-str
   (xml/element :Response {}
                (xml/element :Say {:voice "woman"} msg))))

