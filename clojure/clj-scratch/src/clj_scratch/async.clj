(ns clj-scratch.async
  (use [clojure.core.async]))

(let [c (chan)]
  (go
   (Thread/sleep (rand-int 1000))
   (>! c "success!"))

  (<!!
   (go
    (let [[result source] (alts! [c (timeout 500)])]
      (if (= source c)
        (println "got a value")
        (println "timeout"))))))
