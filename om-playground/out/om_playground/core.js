// Compiled by ClojureScript 0.0-2496
goog.provide('om_playground.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om_playground.state');
goog.require('om_playground.components.app');
om_playground.core.init = (function init(){
return om.core.root.call(null,om_playground.components.app.app_container,om_playground.state.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app"),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentArrayMap.EMPTY], null));
});
om_playground.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1419118891117