// Compiled by ClojureScript 0.0-2411
goog.provide('cljs_backbone.routes');
goog.require('cljs.core');
cljs_backbone.routes.router_dispatch = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs_backbone.routes.register_route_BANG_ = (function register_route_BANG_(handler_name,handler_impl){
console.log([cljs.core.str("registering route: "),cljs.core.str(handler_name)].join(''));

return cljs.core.swap_BANG_.call(null,cljs_backbone.routes.router_dispatch,cljs.core.assoc,handler_name,handler_impl);
});
cljs_backbone.routes.initialize_routers_BANG_ = (function initialize_routers_BANG_(){
return console.log("initialize-routers!");
});

//# sourceMappingURL=routes.js.map?rel=1418317158078