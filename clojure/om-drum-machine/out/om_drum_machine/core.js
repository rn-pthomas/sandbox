// Compiled by ClojureScript 0.0-2322
goog.provide('om_drum_machine.core');
goog.require('cljs.core');
goog.require('om_drum_machine.state');
goog.require('om_drum_machine.state');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om_drum_machine.core.drum_machine = (function drum_machine(data,owner,opts){if(typeof om_drum_machine.core.t6071 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_drum_machine.core.t6071 = (function (opts,owner,data,drum_machine,meta6072){
this.opts = opts;
this.owner = owner;
this.data = data;
this.drum_machine = drum_machine;
this.meta6072 = meta6072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_drum_machine.core.t6071.cljs$lang$type = true;
om_drum_machine.core.t6071.cljs$lang$ctorStr = "om-drum-machine.core/t6071";
om_drum_machine.core.t6071.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"om-drum-machine.core/t6071");
});
om_drum_machine.core.t6071.prototype.om$core$IRender$ = true;
om_drum_machine.core.t6071.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.mapv.call(null,cljs.core.partial.call(null,om.dom.li,null),new cljs.core.Keyword(null,"drum-list","drum-list",-234245265).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
om_drum_machine.core.t6071.prototype.om$core$IDisplayName$ = true;
om_drum_machine.core.t6071.prototype.om$core$IDisplayName$display_name$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var or__3558__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "Drum Machine";
}
});
om_drum_machine.core.t6071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6073){var self__ = this;
var _6073__$1 = this;return self__.meta6072;
});
om_drum_machine.core.t6071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6073,meta6072__$1){var self__ = this;
var _6073__$1 = this;return (new om_drum_machine.core.t6071(self__.opts,self__.owner,self__.data,self__.drum_machine,meta6072__$1));
});
om_drum_machine.core.__GT_t6071 = (function __GT_t6071(opts__$1,owner__$1,data__$1,drum_machine__$1,meta6072){return (new om_drum_machine.core.t6071(opts__$1,owner__$1,data__$1,drum_machine__$1,meta6072));
});
}
return (new om_drum_machine.core.t6071(opts,owner,data,drum_machine,null));
});
om_drum_machine.core.init_app_BANG_ = (function init_app_BANG_(){return om.core.root.call(null,om_drum_machine.core.drum_machine,cljs.core.deref.call(null,om_drum_machine.state.app_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main-app")], null));
});
om_drum_machine.core.init_app_BANG_.call(null);

//# sourceMappingURL=core.js.map