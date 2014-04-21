(ns cascalog-playground.schema)

(defn schema-equals?
  [schema-one schema-two]
  (= (sort schema-one)
     (sort schema-two)))

(defn in?
  [sequence elm]
  (some #(= elm %) sequence))

(defn matching-events
  [target-event-type target-event-version analyzed-event-file]
  (-> (filter (fn [evt]
                (let [[[evt-type evt-version] evt-schema] evt]
                  (and (= evt-type target-event-type)
                       (= evt-version target-event-version))))
              analyzed-event-file)
      first
      second))

(defn add-new-schema-types
  "Given a base schema and an event containing a distinct event schema,
   appends any new fields in that schema to the right of the base schema."
  [base-schema event-schema]
  (reduce (fn [acc schema-col]
            (if (in? base-schema schema-col)
              acc
              (conj acc schema-col)))
          (vec base-schema)
          (vec event-schema)))

(defn normalize-schema-definitions
  [target-event-type target-event-version analyzed-event-file base-schema-arg]
  (let [evt-schemas (matching-events target-event-type target-event-version analyzed-event-file)]
    (loop [accum              base-schema-arg
           [schema & schemas] evt-schemas]
      (if-not (empty? schemas)
        (recur (add-new-schema-types accum schema) schemas)
        accum))))

(defn normalize-all-schema-definitions
  "Given an analyzed event file and a map of base schema definitions,
   produces a map of [evt-type evt-version] to [normalized-schema-definition]
   according to the map of base schema definitions"
  [analyzed-event-file base-schema-definition-map]
  (def analyzed-event-file analyzed-event-file)
  (def base-schema-definition-map base-schema-definition-map)
  (let [target-events (keys base-schema-definition-map)]
    (reduce (fn [acc evt]
              (let [[[evt-type evt-version] evt-schema] evt
                    k [evt-type evt-version]]
                (if (contains? analyzed-event-file k)
                  (assoc acc k :yup) ;; actually implement this part...
                  acc)))
            {}
            base-schema-definition-map)))

(comment
  thing
  (contains? {[:foo :boo] :something} [:foo :boo])
  )
