(ns sudoku-solver.scratch)

(def dimension 9)

(defn mk-grid
  []
  (vec
   (for [y (range dimension)]
     (mapv (fn [x]
             ;; x and y are included only for debugging
             {:x       x
              :y       y
              :num     nil
              :locked? false})
           (range dimension)))))

(defn mk-test-puzzle
  []
  (let [grid (mk-grid)]
    (-> grid
        (track-update-locked {:x 5 :y 1 :num 3})
        (track-update-locked {:x 7 :y 1 :num 8})
        (track-update-locked {:x 8 :y 1 :num 5})
        (track-update-locked {:x 2 :y 2 :num 1})
        (track-update-locked {:x 4 :y 2 :num 2})
        
        (track-update-locked {:x 3 :y 3 :num 5})
        (track-update-locked {:x 5 :y 3 :num 7})
        (track-update-locked {:x 2 :y 4 :num 4})
        (track-update-locked {:x 6 :y 4 :num 1})
        (track-update-locked {:x 1 :y 5 :num 9})
        
        (track-update-locked {:x 0 :y 6 :num 5})
        (track-update-locked {:x 7 :y 6 :num 7})
        (track-update-locked {:x 8 :y 6 :num 3})
        (track-update-locked {:x 2 :y 7 :num 2})
        (track-update-locked {:x 4 :y 7 :num 1})
        (track-update-locked {:x 4 :y 8 :num 4})
        (track-update-locked {:x 8 :y 8 :num 1}))))

(defn mk-initial-state
  []
  {:grid    (mk-grid)
   :history []})

(defn track-update
  [grid {:keys [x y num]}]
  (update-in grid [y x] (fn [cell]
                          (assoc cell :num num))))

(defn track-update-locked
  [grid {:keys [x y num]}]
  (update-in grid [y x] (fn [cell]
                          (assoc cell :num num :locked? true))))

(defn find-first-empty
  [grid]
  (->> grid
       flatten
       (filter (fn [{:keys [num locked?]}]
                 (and (not locked?)
                      (nil? num))))
       first))

(defn gather-row
  [grid x y]
  (get grid x))

(defn gather-column
  [grid x y]
  (vec
   (for [n (range dimension)]
     (get-in grid [n x]))))

(defn gather-box
  [grid x y]
  (let [sqrt          (int (Math/sqrt dimension))
        lower-bound-x (- x (mod x sqrt))
        lower-bound-y (- y (mod y sqrt))]
    (vec
     (for [x-coord (take sqrt (iterate inc lower-bound-x))
           y-coord (take sqrt (iterate inc lower-bound-y))]
       (get-in grid [x-coord y-coord])))))

(defn mk-candidates
  [x y]
  (map (fn [i]
         {:x x :y y :num i})
       (range 1 (inc dimension))))

(defn number-valid?
  [grid {:keys [x y num]}]
  (let [do-gather  (fn [gather-fn]
                     (gather-fn grid x y))
        column     (do-gather gather-column)
        row        (do-gather gather-row)
        box        (do-gather gather-box)
        values-set (->> [column row box]
                        flatten
                        (map :num)
                        (filter identity)
                        set)]
    (not (contains? values-set num))))

(defn move-left
  [x y]
  (cond
    (and (= x 0) (= y 0))
    [0 0]

    (= x 0)
    [9 (dec y)]

    :else
    [(dec x) y]))

(defn backtrack
  [grid {:keys [x y] :as params}]
  (let [[first-new-x first-new-y] (move-left x y)
        max-iters                 500]
    (loop [iter     0
           new-x    first-new-x
           new-y    first-new-y
           new-grid (track-update grid {:x x :y y :num nil})]
      (println (format  "backtracking... x = %s , y = %s" new-x new-y))
      (when (>= iter max-iters)
        (throw (Exception. (format  "backtrack: max-iters (%s) exceeded" max-iters))))
      (let [current-val                (get-in new-grid [x y] :num)
            candidates                 (mk-candidates new-x new-y)
            number-valid-for-new-grid? (partial number-valid? new-grid)
            valid-candidate            (->> candidates
                                            (filter number-valid-for-new-grid?)
                                            second)]
        (if valid-candidate
          (track-update new-grid {:x new-x :y new-y :num (:num valid-candidate)})
          (let [[next-x next-y] (move-left new-x new-y)]
            (println [next-x next-y])
            (recur (inc iter) next-y next-y (track-update grid {:x new-x :y new-y :num nil}))))))))

(defn step
  [grid]
  (when-let [first-empty (find-first-empty grid)]
    (let [{:keys [x y]}          first-empty
          number-valid-for-grid? (partial number-valid? grid)
          candidates             (mk-candidates x y)
          valid-candidate        (->> candidates
                                      (filter number-valid-for-grid?)
                                      first)]
      (if valid-candidate
        (track-update grid {:x x :y y :num (:num valid-candidate)})
        (backtrack grid first-empty)))))

(defn step-n-times
  [grid n]
  (loop [new-grid grid
         i        0]
    (if (>= i n)
      new-grid
      (do
        (println "stepping...")
        (println new-grid)
        (recur (step new-grid) (inc i))))))

(comment
  (take 3 (step-n-times (mk-test-puzzle) 16))
  (->> (step-n-times (mk-test-puzzle) 16)
       find-first-empty
       #_(take 3)
       #_(mapv (fn [row]
              (mapv (fn [cell]
                     (dissoc cell :x :y))
                    row))))
  {:x 1, :y 2, :num nil, :locked? false}
  [[{:num 2, :locked? false} {:num 4, :locked? false} {:num 3, :locked? false} {:num 1, :locked? false} {:num 3, :locked? false} {:num 1, :locked? false} {:num 4, :locked? false} {:num 3, :locked? false} {:num 6, :locked? false}]
   [{:num 7, :locked? false} {:num 6, :locked? false} {:num 5, :locked? false} {:num 2, :locked? false} {:num 5, :locked? false} {:num 3, :locked? true} {:num 6, :locked? false} {:num 8, :locked? true} {:num 5, :locked? true}]
   [{:num 8, :locked? false} {:num nil, :locked? false} {:num 1, :locked? true} {:num nil, :locked? false} {:num 2, :locked? true} {:num nil, :locked? false} {:num nil, :locked? false} {:num nil, :locked? false} {:num nil, :locked? false}]]
  

  ([{:x 0, :y 0, :num 2, :locked? false} {:x 1, :y 0, :num 4, :locked? false} {:x 2, :y 0, :num 3, :locked? false} {:x 3, :y 0, :num 1, :locked? false} {:x 4, :y 0, :num 3, :locked? false} {:x 5, :y 0, :num 1, :locked? false} {:x 6, :y 0, :num 4, :locked? false} {:x 7, :y 0, :num 3, :locked? false} {:x 8, :y 0, :num 6, :locked? false}]
   [{:x 0, :y 1, :num 7, :locked? false} {:x 1, :y 1, :num 6, :locked? false} {:x 2, :y 1, :num 5, :locked? false} {:x 3, :y 1, :num 2, :locked? false} {:x 4, :y 1, :num 5, :locked? false} {:x 5, :y 1, :num 3, :locked? true} {:x 6, :y 1, :num 6, :locked? false} {:x 7, :y 1, :num 8, :locked? true} {:x 8, :y 1, :num 5, :locked? true}]
   [{:x 0, :y 2, :num 8, :locked? false} {:x 1, :y 2, :num nil, :locked? false} {:x 2, :y 2, :num 1, :locked? true} {:x 3, :y 2, :num nil, :locked? false} {:x 4, :y 2, :num 2, :locked? true} {:x 5, :y 2, :num nil, :locked? false} {:x 6, :y 2, :num nil, :locked? false} {:x 7, :y 2, :num nil, :locked? false} {:x 8, :y 2, :num nil, :locked? false}])

)