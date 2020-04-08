// Compiled by ClojureScript 1.10.520 {}
goog.provide('feathers.circles');
goog.require('cljs.core');
goog.require('feathers.helpers');
feathers.circles.default$ = (function feathers$circles$default(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33525 = arguments.length;
var i__4731__auto___33526 = (0);
while(true){
if((i__4731__auto___33526 < len__4730__auto___33525)){
args__4736__auto__.push((arguments[i__4731__auto___33526]));

var G__33527 = (i__4731__auto___33526 + (1));
i__4731__auto___33526 = G__33527;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return feathers.circles.default$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

feathers.circles.default$.cljs$core$IFn$_invoke$arity$variadic = (function (p__33521){
var vec__33522 = p__33521;
var size = cljs.core.nth.call(null,vec__33522,(0),null);
var base = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(200),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
if(cljs.core.truth_(size)){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"size","size",1098693007),size);
} else {
return base;
}
});

feathers.circles.default$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
feathers.circles.default$.cljs$lang$applyTo = (function (seq33520){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33520));
});

feathers.circles.update_position = (function feathers$circles$update_position(self,randomness_factor){
return cljs.core.update.call(null,self,new cljs.core.Keyword(null,"angle","angle",1622094254),(function (a){
return ((a + 0.05) + feathers.helpers.randomness.call(null,0.01,randomness_factor));
}));
});
feathers.circles.update_color = (function feathers$circles$update_color(self,randomness_factor){
return cljs.core.update.call(null,self,new cljs.core.Keyword(null,"color","color",1011675173),(function (c){
return (cljs.core.mod.call(null,(c + 0.3),(255)) + feathers.helpers.randomness.call(null,0.1,randomness_factor));
}));
});
feathers.circles.apply_anim_updates = (function feathers$circles$apply_anim_updates(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33534 = arguments.length;
var i__4731__auto___33535 = (0);
while(true){
if((i__4731__auto___33535 < len__4730__auto___33534)){
args__4736__auto__.push((arguments[i__4731__auto___33535]));

var G__33536 = (i__4731__auto___33535 + (1));
i__4731__auto___33535 = G__33536;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return feathers.circles.apply_anim_updates.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

feathers.circles.apply_anim_updates.cljs$core$IFn$_invoke$arity$variadic = (function (self,p__33530){
var vec__33531 = p__33530;
var randomness_factor = cljs.core.nth.call(null,vec__33531,(0),null);
return feathers.circles.update_position.call(null,feathers.circles.update_color.call(null,self,randomness_factor),randomness_factor);
});

feathers.circles.apply_anim_updates.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
feathers.circles.apply_anim_updates.cljs$lang$applyTo = (function (seq33528){
var G__33529 = cljs.core.first.call(null,seq33528);
var seq33528__$1 = cljs.core.next.call(null,seq33528);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33529,seq33528__$1);
});

feathers.circles.track_last_drawn = (function feathers$circles$track_last_drawn(state){
var map__33537 = new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state);
var map__33537__$1 = (((((!((map__33537 == null))))?(((((map__33537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33537):map__33537);
var last_drawn = cljs.core.get.call(null,map__33537__$1,new cljs.core.Keyword(null,"last-drawn","last-drawn",1483372157));
var num = cljs.core.get.call(null,map__33537__$1,new cljs.core.Keyword(null,"num","num",1985240673));
if((last_drawn >= num)){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.Keyword(null,"last-drawn","last-drawn",1483372157)], null),(0));
} else {
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.Keyword(null,"last-drawn","last-drawn",1483372157)], null),cljs.core.inc);
}
});

//# sourceMappingURL=circles.js.map?rel=1582642525615
