// Compiled by ClojureScript 1.9.473 {}
goog.provide('quil_cljs_playground.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_.call(null);
quil_cljs_playground.core.setup = (function quil_cljs_playground$core$setup(){
quil.core.frame_rate.call(null,(40));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
quil_cljs_playground.core.update_state = (function quil_cljs_playground$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
quil_cljs_playground.core.draw_state = (function quil_cljs_playground$core$draw_state(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__9318__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__9318__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
quil_cljs_playground.core.quil_cljs_playground = (function quil_cljs_playground$core$quil_cljs_playground(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"quil-cljs-playground",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,quil_cljs_playground.core.update_state))?(function() { 
var G__9550__delegate = function (args){
return cljs.core.apply.call(null,quil_cljs_playground.core.update_state,args);
};
var G__9550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9551__i = 0, G__9551__a = new Array(arguments.length -  0);
while (G__9551__i < G__9551__a.length) {G__9551__a[G__9551__i] = arguments[G__9551__i + 0]; ++G__9551__i;}
  args = new cljs.core.IndexedSeq(G__9551__a,0);
} 
return G__9550__delegate.call(this,args);};
G__9550.cljs$lang$maxFixedArity = 0;
G__9550.cljs$lang$applyTo = (function (arglist__9552){
var args = cljs.core.seq(arglist__9552);
return G__9550__delegate(args);
});
G__9550.cljs$core$IFn$_invoke$arity$variadic = G__9550__delegate;
return G__9550;
})()
:quil_cljs_playground.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,quil_cljs_playground.core.setup))?(function() { 
var G__9553__delegate = function (args){
return cljs.core.apply.call(null,quil_cljs_playground.core.setup,args);
};
var G__9553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9554__i = 0, G__9554__a = new Array(arguments.length -  0);
while (G__9554__i < G__9554__a.length) {G__9554__a[G__9554__i] = arguments[G__9554__i + 0]; ++G__9554__i;}
  args = new cljs.core.IndexedSeq(G__9554__a,0);
} 
return G__9553__delegate.call(this,args);};
G__9553.cljs$lang$maxFixedArity = 0;
G__9553.cljs$lang$applyTo = (function (arglist__9555){
var args = cljs.core.seq(arglist__9555);
return G__9553__delegate(args);
});
G__9553.cljs$core$IFn$_invoke$arity$variadic = G__9553__delegate;
return G__9553;
})()
:quil_cljs_playground.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,quil_cljs_playground.core.draw_state))?(function() { 
var G__9556__delegate = function (args){
return cljs.core.apply.call(null,quil_cljs_playground.core.draw_state,args);
};
var G__9556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9557__i = 0, G__9557__a = new Array(arguments.length -  0);
while (G__9557__i < G__9557__a.length) {G__9557__a[G__9557__i] = arguments[G__9557__i + 0]; ++G__9557__i;}
  args = new cljs.core.IndexedSeq(G__9557__a,0);
} 
return G__9556__delegate.call(this,args);};
G__9556.cljs$lang$maxFixedArity = 0;
G__9556.cljs$lang$applyTo = (function (arglist__9558){
var args = cljs.core.seq(arglist__9558);
return G__9556__delegate(args);
});
G__9556.cljs$core$IFn$_invoke$arity$variadic = G__9556__delegate;
return G__9556;
})()
:quil_cljs_playground.core.draw_state));
});
goog.exportSymbol('quil_cljs_playground.core.quil_cljs_playground', quil_cljs_playground.core.quil_cljs_playground);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8147__8148__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8147__8148__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),quil_cljs_playground.core.quil_cljs_playground,new cljs.core.Keyword(null,"host-id","host-id",742376279),"quil-cljs-playground"], null));
}

//# sourceMappingURL=core.js.map