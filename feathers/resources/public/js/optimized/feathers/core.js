// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('feathers.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_();
feathers.core.setup = (function feathers$core$setup(){
quil.core.frame_rate((20));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.no_stroke();

var initial_circle_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(0),cljs.core.cst$kw$angle,(0)], null);
var num_circles = (5);
var smallest_size = (30);
var step_size = (20);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$circles,(function (){var iter__4523__auto__ = ((function (initial_circle_state,num_circles,smallest_size,step_size){
return (function feathers$core$setup_$_iter__8702(s__8703){
return (new cljs.core.LazySeq(null,((function (initial_circle_state,num_circles,smallest_size,step_size){
return (function (){
var s__8703__$1 = s__8703;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8703__$1);
if(temp__5735__auto__){
var s__8703__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8703__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8703__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8705 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8704 = (0);
while(true){
if((i__8704 < size__4522__auto__)){
var size = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8704);
cljs.core.chunk_append(b__8705,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_circle_state,cljs.core.cst$kw$size,size));

var G__8706 = (i__8704 + (1));
i__8704 = G__8706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8705),feathers$core$setup_$_iter__8702(cljs.core.chunk_rest(s__8703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8705),null);
}
} else {
var size = cljs.core.first(s__8703__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_circle_state,cljs.core.cst$kw$size,size),feathers$core$setup_$_iter__8702(cljs.core.rest(s__8703__$2)));
}
} else {
return null;
}
break;
}
});})(initial_circle_state,num_circles,smallest_size,step_size))
,null,null));
});})(initial_circle_state,num_circles,smallest_size,step_size))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(smallest_size,((smallest_size + (num_circles * step_size)) + (1)),step_size));
})()], null);
});
feathers.core.modify_angle_with_randomness = (function feathers$core$modify_angle_with_randomness(state,randomness_int){
return (cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(state) + ((cljs.core.rand_int(randomness_int) + (1)) * 0.1));
});
feathers.core.update_circle = (function feathers$core$update_circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8713 = arguments.length;
var i__4731__auto___8714 = (0);
while(true){
if((i__4731__auto___8714 < len__4730__auto___8713)){
args__4736__auto__.push((arguments[i__4731__auto___8714]));

var G__8715 = (i__4731__auto___8714 + (1));
i__4731__auto___8714 = G__8715;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return feathers.core.update_circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

feathers.core.update_circle.cljs$core$IFn$_invoke$arity$variadic = (function (circle,p__8709){
var vec__8710 = p__8709;
var randomness_factor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8710,(0),null);
var randomness_factor__$1 = (function (){var or__4131__auto__ = randomness_factor;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(circle,cljs.core.cst$kw$color,((function (randomness_factor__$1,vec__8710,randomness_factor){
return (function (c){
var randomness_n = (0.1 * cljs.core.rand_int(randomness_factor__$1));
return (cljs.core.mod((c + 0.2),(255)) + randomness_n);
});})(randomness_factor__$1,vec__8710,randomness_factor))
),cljs.core.cst$kw$angle,((function (randomness_factor__$1,vec__8710,randomness_factor){
return (function (a){
var randomness_n = (0.001 * cljs.core.rand_int(randomness_factor__$1));
return ((a + 0.05) + randomness_n);
});})(randomness_factor__$1,vec__8710,randomness_factor))
);
});

feathers.core.update_circle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
feathers.core.update_circle.cljs$lang$applyTo = (function (seq8707){
var G__8708 = cljs.core.first(seq8707);
var seq8707__$1 = cljs.core.next(seq8707);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8708,seq8707__$1);
});

