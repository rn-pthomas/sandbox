(ns spotify-client-playground.app.macros)

(def lookup-table
  {'did-mount          'om.core/IDidMount
   'did-update         'om.core/IDidUpdate
   'display-name       'om.core/IDisplayName
   'init-state         'om.core/IInitState
   'render             'om.core/IRender
   'render-state       'om.core/IRenderState
   'should-update      'om.core/IShouldUpdate
   'will-mount         'om.core/IWillMount
   'will-receive-props 'om.core/IWillReceiveProps
   'will-unmount       'om.core/IWillUnmount
   'will-update        'om.core/IWillUpdate})

(defn body->valid-reify-expr
  [body]
  (let [reify-lifecycle-methods (map (fn [expr]
                                       (let [impl-fn-name (first expr)]
                                         (get lookup-table impl-fn-name)))
                                     body)
        reify-body              (interleave reify-lifecycle-methods body)]
    `(reify
       ~@reify-body)))

(defmacro defcomponent
  [component-name & body]
  `(defn ~component-name
     [~'data ~'owner ~'opts]
     ~(body->valid-reify-expr body)))
