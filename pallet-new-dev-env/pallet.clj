;;; Pallet project configuration file

(require
 '[pallet-new-dev-env.groups.pallet-new-dev-env :refer [pallet-new-dev-env]])

(defproject pallet-new-dev-env
  :provider {:jclouds
             {:node-spec
              {:image {:os-family :ubuntu :os-version-matches "12.04"
                       :os-64-bit true}}}}

  :groups [pallet-new-dev-env])
