// Compiled by ClojureScript 0.0-2138
goog.provide('om_playground.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
om_playground.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),"Hello world!"], null));
om_playground.core.widget = (function widget(data,owner){if(typeof om_playground.core.t5527 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_playground.core.t5527 = (function (owner,data,widget,meta5528){
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta5528 = meta5528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_playground.core.t5527.cljs$lang$type = true;
om_playground.core.t5527.cljs$lang$ctorStr = "om-playground.core/t5527";
om_playground.core.t5527.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om-playground.core/t5527");
});
om_playground.core.t5527.prototype.om$core$IRender$ = true;
om_playground.core.t5527.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.data));
});
om_playground.core.t5527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5529){var self__ = this;
var _5529__$1 = this;return self__.meta5528;
});
om_playground.core.t5527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5529,meta5528__$1){var self__ = this;
var _5529__$1 = this;return (new om_playground.core.t5527(self__.owner,self__.data,self__.widget,meta5528__$1));
});
om_playground.core.__GT_t5527 = (function __GT_t5527(owner__$1,data__$1,widget__$1,meta5528){return (new om_playground.core.t5527(owner__$1,data__$1,widget__$1,meta5528));
});
}
return (new om_playground.core.t5527(owner,data,widget,null));
});
om.core.root.call(null,om_playground.core.widget,cljs.core.deref.call(null,om_playground.core.app_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("my-app")], null));

//# sourceMappingURL=core.js.map