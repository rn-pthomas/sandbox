(ns clj-twilio-sandbox.twiml
  (:require [clojure.data.xml :as xml]))

(defn response [opts]
  (xml/emit-str (xml/element :Response {} opts)))

(defn say [msg]
  (response (xml/element :Say {:voice "woman"} msg)))

(defn gather [timeout finish-on-key say-msg]
  (response (xml/element :Gather {:timeout timeout :finishOnKey finish-on-key}
                         (xml/element :Say {:voice "woman"} say-msg))))
