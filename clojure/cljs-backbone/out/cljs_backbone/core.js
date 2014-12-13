// Compiled by ClojureScript 0.0-2411
goog.provide('cljs_backbone.core');
goog.require('cljs.core');
goog.require('cljs_backbone.routes');
goog.require('cljs_backbone.routes');
goog.require('cljs_backbone.routes');
cljs.core.enable_console_print_BANG_.call(null);
cljs_backbone.core.init = (function init(){
return cljs_backbone.routes.initialize_routers_BANG_.call(null);
});
cljs_backbone.core.app_router = Backbone.Router.extend(new cljs.core.PersistentArrayMap(null, 1, ["routes",cljs.core.deref.call(null,cljs_backbone.routes.router_dispatch)], null));
cljs_backbone.core.foo_route = (function foo_route(){
return console.log("it worked!");
});
cljs_backbone.routes.register_route_BANG_.call(null,"foo",cljs_backbone.core.foo_route);
cljs_backbone.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1418316297403