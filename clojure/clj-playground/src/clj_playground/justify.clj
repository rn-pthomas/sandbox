(ns clj-playground.justify)

(defn find-justification-level
  [justification-char lines]
  (let [locator (partial find-in-string justification-char)]
    (->> lines
         (map locator)
         (apply max))))

(defn find-in-string
  [target-char line]
  (loop [counter 0
         [char & chars] (reverse (seq line))]
    (cond (not char)
          0

          (= target-char char)
          (dec (- (count line)
                  counter))

          :else
          (recur (inc counter) chars))))

(defn justify-line
  [line justification-level]
  )

(defn justify
  [lines]
  (map justify-line lines))

(defmacro defmapper
  [name impl]
  `(defn ~name
     [anon#]
     (map ~impl anon#)))

(defmapper)

(comment
  (let [lines ["foo=" "bar    =" "baz ="]]
    (find-justification-level \= lines))

  (nth "abc" 2)
  (find-in-string \d "abc")
  
)


