// Compiled by ClojureScript 1.10.520 {}
goog.provide('feathers.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('feathers.circles');
cljs.core.enable_console_print_BANG_.call(null);
feathers.core.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circle-config","circle-config",823157980),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num","num",1985240673),(4),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"smallest","smallest",-152623883),(60),new cljs.core.Keyword(null,"step","step",1288888124),(50)], null)], null),new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-drawn","last-drawn",1483372157),(0)], null)], null);
feathers.core.setup = (function feathers$core$setup(){
quil.core.frame_rate.call(null,(20));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.no_stroke.call(null);

var initial_circle_state = new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(feathers.core.initial_state);
var num_circles = new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(initial_circle_state);
var smallest_size = cljs.core.get_in.call(null,initial_circle_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smallest","smallest",-152623883)], null));
var step_size = cljs.core.get_in.call(null,initial_circle_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"step","step",1288888124)], null));
return cljs.core.assoc_in.call(null,feathers.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.Keyword(null,"coll","coll",1647737163)], null),(function (){var iter__4523__auto__ = ((function (initial_circle_state,num_circles,smallest_size,step_size){
return (function feathers$core$setup_$_iter__33541(s__33542){
return (new cljs.core.LazySeq(null,((function (initial_circle_state,num_circles,smallest_size,step_size){
return (function (){
var s__33542__$1 = s__33542;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33542__$1);
if(temp__5735__auto__){
var s__33542__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33542__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33542__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33544 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33543 = (0);
while(true){
if((i__33543 < size__4522__auto__)){
var size = cljs.core._nth.call(null,c__4521__auto__,i__33543);
cljs.core.chunk_append.call(null,b__33544,feathers.circles.default$.call(null,size));

var G__33545 = (i__33543 + (1));
i__33543 = G__33545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33544),feathers$core$setup_$_iter__33541.call(null,cljs.core.chunk_rest.call(null,s__33542__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33544),null);
}
} else {
var size = cljs.core.first.call(null,s__33542__$2);
return cljs.core.cons.call(null,feathers.circles.default$.call(null,size),feathers$core$setup_$_iter__33541.call(null,cljs.core.rest.call(null,s__33542__$2)));
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
return iter__4523__auto__.call(null,cljs.core.range.call(null,smallest_size,((smallest_size + (num_circles * step_size)) - (1)),step_size));
})());
});
feathers.core.update_state = (function feathers$core$update_state(state){
return feathers.circles.track_last_drawn.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"circles","circles",-1947060917),(function (circles){
return cljs.core.map_indexed.call(null,(function (idx,circle){
return feathers.circles.apply_anim_updates.call(null,circle,((idx + (1)) * (2)));
}),circles);
})));
});
feathers.core.draw_last_circle = (function feathers$core$draw_last_circle(state){
var tr__21251__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1.0 * quil.core.width.call(null)) / (2)),((1.0 * quil.core.height.call(null)) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto__);

cljs.core.println.call(null,state);

var map__33546 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"last-drawn","last-drawn",1483372157).cljs$core$IFn$_invoke$arity$1(state));
var map__33546__$1 = (((((!((map__33546 == null))))?(((((map__33546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33546):map__33546);
var circle_to_draw = map__33546__$1;
var color = cljs.core.get.call(null,map__33546__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__33546__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var size = cljs.core.get.call(null,map__33546__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.fill.call(null,color,(255),(255));

var x = ((120) * quil.core.cos.call(null,angle));
var y = ((120) * quil.core.sin.call(null,angle));
return quil.core.ellipse.call(null,x,y,size,size);
}finally {quil.core.pop_matrix.call(null);
}});
feathers.core.draw_state = (function feathers$core$draw_state(state){
var tr__21251__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1.0 * quil.core.width.call(null)) / (2)),((1.0 * quil.core.height.call(null)) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto__);

return feathers.core.draw_last_circle.call(null,state);
}finally {quil.core.pop_matrix.call(null);
}});
feathers.core.mouse_pressed = (function feathers$core$mouse_pressed(state,event){
cljs.core.println.call(null,state);

cljs.core.println.call(null,event);

return state;
});
feathers.core.run_sketch = (function feathers$core$run_sketch(){
feathers.core.feathers = (function feathers$core$run_sketch_$_feathers(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"feathers",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,feathers.core.update_state))?(function() { 
var G__33548__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.update_state,args);
};
var G__33548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33549__i = 0, G__33549__a = new Array(arguments.length -  0);
while (G__33549__i < G__33549__a.length) {G__33549__a[G__33549__i] = arguments[G__33549__i + 0]; ++G__33549__i;}
  args = new cljs.core.IndexedSeq(G__33549__a,0,null);
} 
return G__33548__delegate.call(this,args);};
G__33548.cljs$lang$maxFixedArity = 0;
G__33548.cljs$lang$applyTo = (function (arglist__33550){
var args = cljs.core.seq(arglist__33550);
return G__33548__delegate(args);
});
G__33548.cljs$core$IFn$_invoke$arity$variadic = G__33548__delegate;
return G__33548;
})()
:feathers.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,feathers.core.setup))?(function() { 
var G__33551__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.setup,args);
};
var G__33551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33552__i = 0, G__33552__a = new Array(arguments.length -  0);
while (G__33552__i < G__33552__a.length) {G__33552__a[G__33552__i] = arguments[G__33552__i + 0]; ++G__33552__i;}
  args = new cljs.core.IndexedSeq(G__33552__a,0,null);
} 
return G__33551__delegate.call(this,args);};
G__33551.cljs$lang$maxFixedArity = 0;
G__33551.cljs$lang$applyTo = (function (arglist__33553){
var args = cljs.core.seq(arglist__33553);
return G__33551__delegate(args);
});
G__33551.cljs$core$IFn$_invoke$arity$variadic = G__33551__delegate;
return G__33551;
})()
:feathers.core.setup),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),((cljs.core.fn_QMARK_.call(null,feathers.core.mouse_pressed))?(function() { 
var G__33554__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.mouse_pressed,args);
};
var G__33554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33555__i = 0, G__33555__a = new Array(arguments.length -  0);
while (G__33555__i < G__33555__a.length) {G__33555__a[G__33555__i] = arguments[G__33555__i + 0]; ++G__33555__i;}
  args = new cljs.core.IndexedSeq(G__33555__a,0,null);
} 
return G__33554__delegate.call(this,args);};
G__33554.cljs$lang$maxFixedArity = 0;
G__33554.cljs$lang$applyTo = (function (arglist__33556){
var args = cljs.core.seq(arglist__33556);
return G__33554__delegate(args);
});
G__33554.cljs$core$IFn$_invoke$arity$variadic = G__33554__delegate;
return G__33554;
})()
:feathers.core.mouse_pressed),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,feathers.core.draw_state))?(function() { 
var G__33557__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.draw_state,args);
};
var G__33557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33558__i = 0, G__33558__a = new Array(arguments.length -  0);
while (G__33558__i < G__33558__a.length) {G__33558__a[G__33558__i] = arguments[G__33558__i + 0]; ++G__33558__i;}
  args = new cljs.core.IndexedSeq(G__33558__a,0,null);
} 
return G__33557__delegate.call(this,args);};
G__33557.cljs$lang$maxFixedArity = 0;
G__33557.cljs$lang$applyTo = (function (arglist__33559){
var args = cljs.core.seq(arglist__33559);
return G__33557__delegate(args);
});
G__33557.cljs$core$IFn$_invoke$arity$variadic = G__33557__delegate;
return G__33557;
})()
:feathers.core.draw_state));
});
goog.exportSymbol('feathers.core.feathers', feathers.core.feathers);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20845__20846__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20845__20846__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),feathers.core.feathers,new cljs.core.Keyword(null,"host-id","host-id",742376279),"feathers"], null));
}
});
goog.exportSymbol('feathers.core.run_sketch', feathers.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1582642525679
