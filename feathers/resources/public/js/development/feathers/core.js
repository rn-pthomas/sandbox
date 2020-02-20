// Compiled by ClojureScript 1.10.520 {}
goog.provide('feathers.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_.call(null);
feathers.core.setup = (function feathers$core$setup(){
quil.core.frame_rate.call(null,(20));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.no_stroke.call(null);

var initial_circle_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
var num_circles = (15);
var smallest_size = (20);
var step_size = (12);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circles","circles",-1947060917),(function (){var iter__4523__auto__ = ((function (initial_circle_state,num_circles,smallest_size,step_size){
return (function feathers$core$setup_$_iter__10428(s__10429){
return (new cljs.core.LazySeq(null,((function (initial_circle_state,num_circles,smallest_size,step_size){
return (function (){
var s__10429__$1 = s__10429;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__10429__$1);
if(temp__5735__auto__){
var s__10429__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10429__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10429__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10431 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10430 = (0);
while(true){
if((i__10430 < size__4522__auto__)){
var size = cljs.core._nth.call(null,c__4521__auto__,i__10430);
cljs.core.chunk_append.call(null,b__10431,cljs.core.assoc.call(null,initial_circle_state,new cljs.core.Keyword(null,"size","size",1098693007),size));

var G__10432 = (i__10430 + (1));
i__10430 = G__10432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10431),feathers$core$setup_$_iter__10428.call(null,cljs.core.chunk_rest.call(null,s__10429__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10431),null);
}
} else {
var size = cljs.core.first.call(null,s__10429__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,initial_circle_state,new cljs.core.Keyword(null,"size","size",1098693007),size),feathers$core$setup_$_iter__10428.call(null,cljs.core.rest.call(null,s__10429__$2)));
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
return iter__4523__auto__.call(null,cljs.core.range.call(null,smallest_size,((smallest_size + (num_circles * step_size)) + (1)),step_size));
})()], null);
});
feathers.core.modify_angle_with_randomness = (function feathers$core$modify_angle_with_randomness(state,randomness_int){
return (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + ((cljs.core.rand_int.call(null,randomness_int) + (1)) * 0.1));
});
feathers.core.update_circle = (function feathers$core$update_circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10439 = arguments.length;
var i__4731__auto___10440 = (0);
while(true){
if((i__4731__auto___10440 < len__4730__auto___10439)){
args__4736__auto__.push((arguments[i__4731__auto___10440]));

var G__10441 = (i__4731__auto___10440 + (1));
i__4731__auto___10440 = G__10441;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return feathers.core.update_circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

feathers.core.update_circle.cljs$core$IFn$_invoke$arity$variadic = (function (circle,p__10435){
var vec__10436 = p__10435;
var randomness_factor = cljs.core.nth.call(null,vec__10436,(0),null);
var randomness_factor__$1 = (function (){var or__4131__auto__ = randomness_factor;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
return cljs.core.update.call(null,cljs.core.update.call(null,circle,new cljs.core.Keyword(null,"color","color",1011675173),((function (randomness_factor__$1,vec__10436,randomness_factor){
return (function (c){
var randomness_n = (0.1 * cljs.core.rand_int.call(null,randomness_factor__$1));
return (cljs.core.mod.call(null,(c + 0.2),(255)) + randomness_n);
});})(randomness_factor__$1,vec__10436,randomness_factor))
),new cljs.core.Keyword(null,"angle","angle",1622094254),((function (randomness_factor__$1,vec__10436,randomness_factor){
return (function (a){
var randomness_n = (0.001 * cljs.core.rand_int.call(null,randomness_factor__$1));
return ((a + 0.05) + randomness_n);
});})(randomness_factor__$1,vec__10436,randomness_factor))
);
});

feathers.core.update_circle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
feathers.core.update_circle.cljs$lang$applyTo = (function (seq10433){
var G__10434 = cljs.core.first.call(null,seq10433);
var seq10433__$1 = cljs.core.next.call(null,seq10433);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10434,seq10433__$1);
});

feathers.core.update_state = (function feathers$core$update_state(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917)], null),(function (circles){
return cljs.core.map_indexed.call(null,(function (idx,circle){
return feathers.core.update_circle.call(null,circle,(idx + (1)));
}),circles);
}));
});
feathers.core.draw_state = (function feathers$core$draw_state(state){
var seq__10442 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state));
var chunk__10443 = null;
var count__10444 = (0);
var i__10445 = (0);
while(true){
if((i__10445 < count__10444)){
var map__10450 = cljs.core._nth.call(null,chunk__10443,i__10445);
var map__10450__$1 = (((((!((map__10450 == null))))?(((((map__10450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10450):map__10450);
var circle = map__10450__$1;
var color = cljs.core.get.call(null,map__10450__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__10450__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var size = cljs.core.get.call(null,map__10450__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.fill.call(null,color,(255),(255));

var x_10454 = ((120) * quil.core.cos.call(null,angle));
var y_10455 = ((120) * quil.core.sin.call(null,angle));
var tr__1729__auto___10456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1729__auto___10456);

cljs.core.println.call(null,circle);

var new_size_10457 = (size + (0));
quil.core.ellipse.call(null,x_10454,y_10455,new_size_10457,new_size_10457);
}finally {quil.core.pop_matrix.call(null);
}

var G__10458 = seq__10442;
var G__10459 = chunk__10443;
var G__10460 = count__10444;
var G__10461 = (i__10445 + (1));
seq__10442 = G__10458;
chunk__10443 = G__10459;
count__10444 = G__10460;
i__10445 = G__10461;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10442);
if(temp__5735__auto__){
var seq__10442__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10442__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10442__$1);
var G__10462 = cljs.core.chunk_rest.call(null,seq__10442__$1);
var G__10463 = c__4550__auto__;
var G__10464 = cljs.core.count.call(null,c__4550__auto__);
var G__10465 = (0);
seq__10442 = G__10462;
chunk__10443 = G__10463;
count__10444 = G__10464;
i__10445 = G__10465;
continue;
} else {
var map__10452 = cljs.core.first.call(null,seq__10442__$1);
var map__10452__$1 = (((((!((map__10452 == null))))?(((((map__10452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10452):map__10452);
var circle = map__10452__$1;
var color = cljs.core.get.call(null,map__10452__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__10452__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var size = cljs.core.get.call(null,map__10452__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.fill.call(null,color,(255),(255));

var x_10466 = ((120) * quil.core.cos.call(null,angle));
var y_10467 = ((120) * quil.core.sin.call(null,angle));
var tr__1729__auto___10468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1729__auto___10468);

cljs.core.println.call(null,circle);

var new_size_10469 = (size + (0));
quil.core.ellipse.call(null,x_10466,y_10467,new_size_10469,new_size_10469);
}finally {quil.core.pop_matrix.call(null);
}

var G__10470 = cljs.core.next.call(null,seq__10442__$1);
var G__10471 = null;
var G__10472 = (0);
var G__10473 = (0);
seq__10442 = G__10470;
chunk__10443 = G__10471;
count__10444 = G__10472;
i__10445 = G__10473;
continue;
}
} else {
return null;
}
}
break;
}
});
feathers.core.run_sketch = (function feathers$core$run_sketch(){
feathers.core.feathers = (function feathers$core$run_sketch_$_feathers(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"feathers",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,feathers.core.update_state))?(function() { 
var G__10474__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.update_state,args);
};
var G__10474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10475__i = 0, G__10475__a = new Array(arguments.length -  0);
while (G__10475__i < G__10475__a.length) {G__10475__a[G__10475__i] = arguments[G__10475__i + 0]; ++G__10475__i;}
  args = new cljs.core.IndexedSeq(G__10475__a,0,null);
} 
return G__10474__delegate.call(this,args);};
G__10474.cljs$lang$maxFixedArity = 0;
G__10474.cljs$lang$applyTo = (function (arglist__10476){
var args = cljs.core.seq(arglist__10476);
return G__10474__delegate(args);
});
G__10474.cljs$core$IFn$_invoke$arity$variadic = G__10474__delegate;
return G__10474;
})()
:feathers.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,feathers.core.setup))?(function() { 
var G__10477__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.setup,args);
};
var G__10477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10478__i = 0, G__10478__a = new Array(arguments.length -  0);
while (G__10478__i < G__10478__a.length) {G__10478__a[G__10478__i] = arguments[G__10478__i + 0]; ++G__10478__i;}
  args = new cljs.core.IndexedSeq(G__10478__a,0,null);
} 
return G__10477__delegate.call(this,args);};
G__10477.cljs$lang$maxFixedArity = 0;
G__10477.cljs$lang$applyTo = (function (arglist__10479){
var args = cljs.core.seq(arglist__10479);
return G__10477__delegate(args);
});
G__10477.cljs$core$IFn$_invoke$arity$variadic = G__10477__delegate;
return G__10477;
})()
:feathers.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,feathers.core.draw_state))?(function() { 
var G__10480__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.draw_state,args);
};
var G__10480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10481__i = 0, G__10481__a = new Array(arguments.length -  0);
while (G__10481__i < G__10481__a.length) {G__10481__a[G__10481__i] = arguments[G__10481__i + 0]; ++G__10481__i;}
  args = new cljs.core.IndexedSeq(G__10481__a,0,null);
} 
return G__10480__delegate.call(this,args);};
G__10480.cljs$lang$maxFixedArity = 0;
G__10480.cljs$lang$applyTo = (function (arglist__10482){
var args = cljs.core.seq(arglist__10482);
return G__10480__delegate(args);
});
G__10480.cljs$core$IFn$_invoke$arity$variadic = G__10480__delegate;
return G__10480;
})()
:feathers.core.draw_state));
});
goog.exportSymbol('feathers.core.feathers', feathers.core.feathers);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1323__1324__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__1323__1324__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),feathers.core.feathers,new cljs.core.Keyword(null,"host-id","host-id",742376279),"feathers"], null));
}
});
goog.exportSymbol('feathers.core.run_sketch', feathers.core.run_sketch);

//# sourceMappingURL=core.js.map
