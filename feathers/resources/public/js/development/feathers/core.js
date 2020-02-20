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
var num_circles = (5);
var smallest_size = (30);
var step_size = (20);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circles","circles",-1947060917),(function (){var iter__4523__auto__ = ((function (initial_circle_state,num_circles,smallest_size,step_size){
return (function feathers$core$setup_$_iter__8718(s__8719){
return (new cljs.core.LazySeq(null,((function (initial_circle_state,num_circles,smallest_size,step_size){
return (function (){
var s__8719__$1 = s__8719;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__8719__$1);
if(temp__5735__auto__){
var s__8719__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8719__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__8719__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__8721 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__8720 = (0);
while(true){
if((i__8720 < size__4522__auto__)){
var size = cljs.core._nth.call(null,c__4521__auto__,i__8720);
cljs.core.chunk_append.call(null,b__8721,cljs.core.assoc.call(null,initial_circle_state,new cljs.core.Keyword(null,"size","size",1098693007),size));

var G__8722 = (i__8720 + (1));
i__8720 = G__8722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8721),feathers$core$setup_$_iter__8718.call(null,cljs.core.chunk_rest.call(null,s__8719__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8721),null);
}
} else {
var size = cljs.core.first.call(null,s__8719__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,initial_circle_state,new cljs.core.Keyword(null,"size","size",1098693007),size),feathers$core$setup_$_iter__8718.call(null,cljs.core.rest.call(null,s__8719__$2)));
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
var len__4730__auto___8729 = arguments.length;
var i__4731__auto___8730 = (0);
while(true){
if((i__4731__auto___8730 < len__4730__auto___8729)){
args__4736__auto__.push((arguments[i__4731__auto___8730]));

var G__8731 = (i__4731__auto___8730 + (1));
i__4731__auto___8730 = G__8731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return feathers.core.update_circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

feathers.core.update_circle.cljs$core$IFn$_invoke$arity$variadic = (function (circle,p__8725){
var vec__8726 = p__8725;
var randomness_factor = cljs.core.nth.call(null,vec__8726,(0),null);
var randomness_factor__$1 = (function (){var or__4131__auto__ = randomness_factor;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
return cljs.core.update.call(null,cljs.core.update.call(null,circle,new cljs.core.Keyword(null,"color","color",1011675173),((function (randomness_factor__$1,vec__8726,randomness_factor){
return (function (c){
var randomness_n = (0.1 * cljs.core.rand_int.call(null,randomness_factor__$1));
return (cljs.core.mod.call(null,(c + 0.2),(255)) + randomness_n);
});})(randomness_factor__$1,vec__8726,randomness_factor))
),new cljs.core.Keyword(null,"angle","angle",1622094254),((function (randomness_factor__$1,vec__8726,randomness_factor){
return (function (a){
var randomness_n = (0.001 * cljs.core.rand_int.call(null,randomness_factor__$1));
return ((a + 0.05) + randomness_n);
});})(randomness_factor__$1,vec__8726,randomness_factor))
);
});

feathers.core.update_circle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
feathers.core.update_circle.cljs$lang$applyTo = (function (seq8723){
var G__8724 = cljs.core.first.call(null,seq8723);
var seq8723__$1 = cljs.core.next.call(null,seq8723);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8724,seq8723__$1);
});

feathers.core.update_state = (function feathers$core$update_state(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917)], null),(function (circles){
return cljs.core.map_indexed.call(null,(function (idx,circle){
return feathers.core.update_circle.call(null,circle,(idx + (1)));
}),circles);
}));
});
feathers.core.draw_state = (function feathers$core$draw_state(state){
var seq__8732 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state));
var chunk__8733 = null;
var count__8734 = (0);
var i__8735 = (0);
while(true){
if((i__8735 < count__8734)){
var map__8740 = cljs.core._nth.call(null,chunk__8733,i__8735);
var map__8740__$1 = (((((!((map__8740 == null))))?(((((map__8740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8740):map__8740);
var circle = map__8740__$1;
var color = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var size = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.fill.call(null,color,(255),(255),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(20),(50)], null)));

var x_8744 = ((120) * quil.core.cos.call(null,angle));
var y_8745 = ((120) * quil.core.sin.call(null,angle));
var tr__1729__auto___8746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1729__auto___8746);

cljs.core.println.call(null,circle);

var new_size_8747 = (size + (60));
quil.core.ellipse.call(null,x_8744,y_8745,new_size_8747,new_size_8747);
}finally {quil.core.pop_matrix.call(null);
}

var G__8748 = seq__8732;
var G__8749 = chunk__8733;
var G__8750 = count__8734;
var G__8751 = (i__8735 + (1));
seq__8732 = G__8748;
chunk__8733 = G__8749;
count__8734 = G__8750;
i__8735 = G__8751;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8732);
if(temp__5735__auto__){
var seq__8732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8732__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__8732__$1);
var G__8752 = cljs.core.chunk_rest.call(null,seq__8732__$1);
var G__8753 = c__4550__auto__;
var G__8754 = cljs.core.count.call(null,c__4550__auto__);
var G__8755 = (0);
seq__8732 = G__8752;
chunk__8733 = G__8753;
count__8734 = G__8754;
i__8735 = G__8755;
continue;
} else {
var map__8742 = cljs.core.first.call(null,seq__8732__$1);
var map__8742__$1 = (((((!((map__8742 == null))))?(((((map__8742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8742):map__8742);
var circle = map__8742__$1;
var color = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var size = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.fill.call(null,color,(255),(255),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(20),(50)], null)));

var x_8756 = ((120) * quil.core.cos.call(null,angle));
var y_8757 = ((120) * quil.core.sin.call(null,angle));
var tr__1729__auto___8758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1729__auto___8758);

cljs.core.println.call(null,circle);

var new_size_8759 = (size + (60));
quil.core.ellipse.call(null,x_8756,y_8757,new_size_8759,new_size_8759);
}finally {quil.core.pop_matrix.call(null);
}

var G__8760 = cljs.core.next.call(null,seq__8732__$1);
var G__8761 = null;
var G__8762 = (0);
var G__8763 = (0);
seq__8732 = G__8760;
chunk__8733 = G__8761;
count__8734 = G__8762;
i__8735 = G__8763;
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
var G__8764__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.update_state,args);
};
var G__8764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8765__i = 0, G__8765__a = new Array(arguments.length -  0);
while (G__8765__i < G__8765__a.length) {G__8765__a[G__8765__i] = arguments[G__8765__i + 0]; ++G__8765__i;}
  args = new cljs.core.IndexedSeq(G__8765__a,0,null);
} 
return G__8764__delegate.call(this,args);};
G__8764.cljs$lang$maxFixedArity = 0;
G__8764.cljs$lang$applyTo = (function (arglist__8766){
var args = cljs.core.seq(arglist__8766);
return G__8764__delegate(args);
});
G__8764.cljs$core$IFn$_invoke$arity$variadic = G__8764__delegate;
return G__8764;
})()
:feathers.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,feathers.core.setup))?(function() { 
var G__8767__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.setup,args);
};
var G__8767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8768__i = 0, G__8768__a = new Array(arguments.length -  0);
while (G__8768__i < G__8768__a.length) {G__8768__a[G__8768__i] = arguments[G__8768__i + 0]; ++G__8768__i;}
  args = new cljs.core.IndexedSeq(G__8768__a,0,null);
} 
return G__8767__delegate.call(this,args);};
G__8767.cljs$lang$maxFixedArity = 0;
G__8767.cljs$lang$applyTo = (function (arglist__8769){
var args = cljs.core.seq(arglist__8769);
return G__8767__delegate(args);
});
G__8767.cljs$core$IFn$_invoke$arity$variadic = G__8767__delegate;
return G__8767;
})()
:feathers.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,feathers.core.draw_state))?(function() { 
var G__8770__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.draw_state,args);
};
var G__8770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8771__i = 0, G__8771__a = new Array(arguments.length -  0);
while (G__8771__i < G__8771__a.length) {G__8771__a[G__8771__i] = arguments[G__8771__i + 0]; ++G__8771__i;}
  args = new cljs.core.IndexedSeq(G__8771__a,0,null);
} 
return G__8770__delegate.call(this,args);};
G__8770.cljs$lang$maxFixedArity = 0;
G__8770.cljs$lang$applyTo = (function (arglist__8772){
var args = cljs.core.seq(arglist__8772);
return G__8770__delegate(args);
});
G__8770.cljs$core$IFn$_invoke$arity$variadic = G__8770__delegate;
return G__8770;
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
