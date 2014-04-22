(ns cascalog-playground.test.fixtures)

(def fixture-base-schema-definition-map
  {[:boom.api.card-activation.received 1] [[:bin "class java.lang.String"] [:call-from-mobile "class java.lang.String"] [:card-digits-entered "class java.lang.Long"] [:card-id "class java.lang.String"] [:cardholder-validated "class java.lang.Boolean"] [:client-customer-id "class java.lang.String"] [:client-rid "class java.lang.String"]]
   })

(def fixture-analyzed-event-file
  {[:boom.api.card-activation.received 1] [[[:activation-channel "class java.lang.String"] [:ani-number "class java.lang.String"] [:api-version "class java.lang.String"] [:bin "class java.lang.String"] [:call-from-mobile "class java.lang.String"] [:card-digits-entered "class java.lang.Long"] [:card-id "class java.lang.String"] [:cardholder-validated "class java.lang.Boolean"] [:client-customer-id "class java.lang.String"] [:client-rid "class java.lang.String"] [:country-code ""] [:date-of-birth ""] [:dnis-id "class java.lang.String"] [:duration-of-fdr-api-response "class java.lang.Long"] [:event-name "class java.lang.String"] [:event-version "class java.lang.String"] [:hostname "class java.lang.String"] [:ivr-phone-number "class java.lang.String"] [:ivr-session-id "class java.lang.String"] [:last-name "class java.lang.String"] [:pan-validated "class java.lang.Boolean"] [:postal-code ""] [:processor-activation-response "class java.lang.Long"] [:processor-activation-response-code "class java.lang.String"] [:service-name "class java.lang.String"] [:service-version "class java.lang.String"] [:ssn-last-four ""] [:state "class java.lang.String"] [:time-call-initiated "class java.lang.String"] [:time-stamp-of-api-call "class java.lang.String"] [:timestamp "class java.lang.String"] [:token-validation-point "class java.lang.Long"] [:uuid "class java.lang.String"] [:validation-phone-number ""]]]
   [:txn.item.step.completed 1] [[[:answers "class clojure.lang.PersistentArrayMap"] [:answers-by-step "class clojure.lang.PersistentArrayMap"] [:campaign-rid ""] [:client-rid "class java.lang.String"] [:event-name "class java.lang.String"] [:event-version "class java.lang.String"] [:hostname "class java.lang.String"] [:pod-rid "class java.lang.String"] [:program-rid ""] [:service-name "class java.lang.String"] [:service-version "class java.lang.String"] [:step-completed "class java.lang.Long"] [:timestamp "class java.lang.String"] [:txn-item "class clojure.lang.PersistentArrayMap"] [:txn-item-rid "class java.lang.String"] [:txn-menu-rid "class java.lang.String"] [:uuid "class java.lang.String"]]]
   [:wire.twoway.chat.assigned 1] [[[:agent-info "class clojure.lang.PersistentArrayMap"] [:consumer-info "class clojure.lang.PersistentArrayMap"] [:counter-party-info "class clojure.lang.PersistentArrayMap"] [:event-name "class java.lang.String"] [:event-version "class java.lang.String"] [:hostname "class java.lang.String"] [:queue-id "class java.lang.Long"] [:room-jid "class java.lang.String"] [:service-name "class java.lang.String"] [:service-version "class java.lang.String"] [:system ""] [:timestamp "class java.lang.String"] [:uuid "class java.lang.String"]]]
   [:wire.twoway.agent.reminded 1] [[[:agent-pod-rid "class java.lang.String"] [:client-rid "class java.lang.String"] [:consumer-pod-rid "class java.lang.String"] [:counter-party-name "class java.lang.String"] [:counter-party-place-id ""] [:event-name "class java.lang.String"] [:event-version "class java.lang.String"] [:hostname "class java.lang.String"] [:service-name "class java.lang.String"] [:service-version "class java.lang.String"] [:timestamp "class java.lang.String"] [:uuid "class java.lang.String"]]]
   [:pods.sms.consent.updated.no 1] [[[:campaign-rid "class java.lang.String"] [:client-customer-id "class java.lang.String"] [:client-rid "class java.lang.String"] [:event-name "class java.lang.String"] [:event-version "class java.lang.Long"] [:mobile-number "class java.lang.String"] [:pod-rid "class java.lang.String"] [:program-rid "class java.lang.String"] [:timestamp "class java.lang.String"] [:tracking-id "class java.lang.String"] [:uuid "class java.lang.String"]]]})
