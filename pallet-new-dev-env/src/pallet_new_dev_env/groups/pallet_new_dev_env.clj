(ns pallet-new-dev-env.groups.pallet-new-dev-env
    "Node defintions for pallet-new-dev-env"
    (:require
     [pallet.api :refer [group-spec server-spec node-spec plan-fn]]
     [pallet.crate.automated-admin-user :refer [automated-admin-user]]))

(def default-node-spec
  (node-spec
   :image {:os-family :ubuntu}
   :hardware {:min-cores 1}))

(def
  ^{:doc "Defines the type of node pallet-new-dev-env will run on"}
  base-server
  (server-spec
   :phases
   {:bootstrap (plan-fn (automated-admin-user))}))

(def
  ^{:doc "Define a server spec for pallet-new-dev-env"}
  pallet-new-dev-env-server
  (server-spec
   :phases
   {:configure (plan-fn
                 ;; Add your crate class here
                 )}))

(def
  ^{:doc "Defines a group spec that can be passed to converge or lift."}
  pallet-new-dev-env
  (group-spec
   "pallet-new-dev-env"
   :extends [base-server pallet-new-dev-env-server]
   :node-spec default-node-spec))
