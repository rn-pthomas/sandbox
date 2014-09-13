(ns spotify-client-playground.app.macros)

(def lookup-table
  {'did-mount          {:lifecycle-method 'om.core/IDidMount
                        :arg-list         '[this]}
   'did-update         {:lifecycle-method 'om.core/IDidUpdate
                        :arg-list         '[this prev-props prev-state]}
   'display-name       {:lifecycle-method 'om.core/IDisplayName
                        :arg-list         '[this]}
   'init-state         {:lifecycle-method 'om.core/IInitState
                        :arg-list         '[this]}
   'render             {:lifecycle-method 'om.core/IRender
                        :arg-list         '[this]}
   'render-state       {:lifecycle-method 'om.core/IRenderState
                        :arg-list         '[this state]}
   'should-update      {:lifecycle-method 'om.core/IShouldUpdate
                        :arg-list         '[this next-props next-state]}
   'will-mount         {:lifecycle-method 'om.core/IWillMount
                        :arg-list         '[this]}
   'will-receive-props {:lifecycle-method 'om.core/IWillReceiveProps
                        :arg-list         '[this next-state]}
   'will-unmount       {:lifecycle-method 'om.core/IWillUnmount
                        :arg-list         '[this]}
   'will-update        {:lifecycle-method 'om.core/IWillUpdate
                        :arg-list         '[this next-props next-state]}})

(defn make-friendly-display-name
  [component-name]
  (let [capitalize-first-letter (fn [s]
                                  (apply str (concat (seq (.toUpperCase (.substring s 0 1)))
                                                     (rest s))))]
    (apply str (interpose " " (map capitalize-first-letter (clojure.string/split (str component-name) #"-"))))))

(defn generate-display-name-method
  [component-name]
  `(om.core/IDisplayName
    (display-name
     [this]
     (or (:react-name opts) ~(make-friendly-display-name component-name)))))

(defn body->valid-reify-expr
  [component-name body]
  (let [reify-lifecycle-methods (map (fn [expr]
                                       (let [impl-fn-name (first expr)]
                                         (get-in lookup-table [impl-fn-name :lifecycle-method])))
                                     body)
        body-with-auto-exprs    (map (fn [expr]
                                       (let [impl-fn-name (first expr)]
                                         (concat (list (first expr) (get-in lookup-table [impl-fn-name :arg-list]))
                                                 (rest expr))))
                                     body)
        friendly-display-name   (make-friendly-display-name component-name)
        display-name-method     `(om.core/IDisplayName
                                  (~'display-name
                                   ~'[this]
                                   (or (:react-name ~'opts) ~friendly-display-name)))
        reify-body              (concat display-name-method (interleave reify-lifecycle-methods body-with-auto-exprs))]
    `(reify
       ~@reify-body)))

(defmacro defcomponent
  [component-name & body]
  `(defn ~component-name
     [~'data ~'owner ~'opts]
     ~(body->valid-reify-expr component-name body)))
