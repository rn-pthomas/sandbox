// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
goog.require('cljs.core.constants');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$decor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),cljs.core.cst$kw$safe_DASH_draw_DASH_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set(features);
if(cljs.core.truth_((function (){var G__6883 = cljs.core.cst$kw$no_DASH_safe_DASH_draw;
return (features__$1.cljs$core$IFn$_invoke$arity$1 ? features__$1.cljs$core$IFn$_invoke$arity$1(G__6883) : features__$1.call(null,G__6883));
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now."], 0));
} else {
}

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(features__$1,cljs.core.cst$kw$no_DASH_safe_DASH_draw);
});
/**
 * Checks `options` map for deprecated options, removes them and
 *   prints messages explaining how to fix them.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$features], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4523__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__6884(s__6885){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__6885__$1 = s__6885;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6885__$1);
if(temp__5735__auto__){
var s__6885__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6885__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__6885__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__6887 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__6886 = (0);
while(true){
if((i__6886 < size__4522__auto__)){
var vec__6888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__6886);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6888,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6888,(1),null);
cljs.core.chunk_append(b__6887,(function (){var temp__5733__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__6891 = temp__5733__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6891,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6891,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__6900 = (i__6886 + (1));
i__6886 = G__6900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6887),quil$middlewares$deprecated_options$deprecated_options_$_iter__6884(cljs.core.chunk_rest(s__6885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6887),null);
}
} else {
var vec__6894 = cljs.core.first(s__6885__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6894,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6894,(1),null);
return cljs.core.cons((function (){var temp__5733__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__6897 = temp__5733__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6897,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6897,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__6884(cljs.core.rest(s__6885__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__4523__auto__(options__$1);
})()));
});
