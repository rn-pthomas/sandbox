// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('feathers.circles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('feathers.helpers');
feathers.circles.default$ = (function feathers$circles$default(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7627 = arguments.length;
var i__4731__auto___7628 = (0);
while(true){
if((i__4731__auto___7628 < len__4730__auto___7627)){
args__4736__auto__.push((arguments[i__4731__auto___7628]));

var G__7629 = (i__4731__auto___7628 + (1));
i__4731__auto___7628 = G__7629;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return feathers.circles.default$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

feathers.circles.default$.cljs$core$IFn$_invoke$arity$variadic = (function (p__7623){
var vec__7624 = p__7623;
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7624,(0),null);
var base = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(0),cljs.core.cst$kw$angle,(0)], null);
if(cljs.core.truth_(size)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,cljs.core.cst$kw$size,size);
} else {
return base;
}
});

feathers.circles.default$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
feathers.circles.default$.cljs$lang$applyTo = (function (seq7622){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7622));
});

