(ns event-stream-processor.core)

(def registry (atom {}))

(def config (atom {}))

(defn init
  [{:keys [processor-lookup-strategy processor-before-chain processor-after-chain]}]
  (let [before-chain    (apply comp (reverse processor-before-chain))
        after-chain     (apply comp (reverse processor-after-chain))
        processor-chain (fn [event-processor]
                          (fn [event]
                            (-> event before-chain event-processor after-chain)))]
    (swap! config (fn [m]
                    (assoc m
                           :processor-lookup-strategy processor-lookup-strategy
                           :processor-chain processor-chain)))))

(defn register-processor
  [key-path handler-fn]
  (swap! registry assoc-in key-path handler-fn))

(defn get-processor
  [event]
  (when-let [processor-lookup-strategy-fn (:processor-lookup-strategy @config)]
    (let [key-path (processor-lookup-strategy-fn event)]
      (get-in @registry key-path))))

(defn process-event
  [event]
  (when-let [processor (get-processor event)]
    (let [processor-fn-with-chain ((:processor-chain @config) processor)]
      (processor-fn-with-chain event))))

(defn process-events
  [events]
  (map process-event events))

(comment
  (do
    (init {:processor-lookup-strategy (fn [event]
                                        [(:event-name event) (:event-version event)])
           :processor-before-chain    [(fn [event]
                                         (assoc event :processed-before true))]
           :processor-after-chain     [(fn [event]
                                         (-> event
                                             (assoc :processed-after true)
                                             (update-in [:event-version] inc)))]})
    (register-processor ["foo" 1] (fn [thing]
                                    thing))
    (register-processor ["foo" 2] (fn [thing]
                                    thing)))
  (process-events [{:event-name    "foo"
                    :event-version 2}
                   {:event-name    "derp"
                    :event-version 10}])
  )
