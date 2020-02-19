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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.assoc.call(null,initial_circle_state,new cljs.core.Keyword(null,"size","size",1098693007),(50)),new cljs.core.Keyword(null,"m","m",1632677161),cljs.core.assoc.call(null,initial_circle_state,new cljs.core.Keyword(null,"size","size",1098693007),(70)),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.assoc.call(null,initial_circle_state,new cljs.core.Keyword(null,"size","size",1098693007),(90))], null)], null);
});
feathers.core.modify_angle_with_randomness = (function feathers$core$modify_angle_with_randomness(state,randomness_int){
return (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + ((cljs.core.rand_int.call(null,randomness_int) + (1)) * 0.1));
});
feathers.core.update_circle = (function feathers$core$update_circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1881 = arguments.length;
var i__4731__auto___1882 = (0);
while(true){
if((i__4731__auto___1882 < len__4730__auto___1881)){
args__4736__auto__.push((arguments[i__4731__auto___1882]));

var G__1883 = (i__4731__auto___1882 + (1));
i__4731__auto___1882 = G__1883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return feathers.core.update_circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

feathers.core.update_circle.cljs$core$IFn$_invoke$arity$variadic = (function (circle,p__1877){
var vec__1878 = p__1877;
var randomness_factor = cljs.core.nth.call(null,vec__1878,(0),null);
var randomness_factor__$1 = (function (){var or__4131__auto__ = randomness_factor;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
return cljs.core.update.call(null,cljs.core.update.call(null,circle,new cljs.core.Keyword(null,"color","color",1011675173),((function (randomness_factor__$1,vec__1878,randomness_factor){
return (function (c){
var randomness_n = (0.1 * cljs.core.rand_int.call(null,randomness_factor__$1));
return (cljs.core.mod.call(null,(c + 0.2),(255)) + randomness_n);
});})(randomness_factor__$1,vec__1878,randomness_factor))
),new cljs.core.Keyword(null,"angle","angle",1622094254),((function (randomness_factor__$1,vec__1878,randomness_factor){
return (function (a){
var randomness_n = (0.001 * cljs.core.rand_int.call(null,randomness_factor__$1));
return ((a + 0.05) + randomness_n);
});})(randomness_factor__$1,vec__1878,randomness_factor))
);
});

feathers.core.update_circle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
feathers.core.update_circle.cljs$lang$applyTo = (function (seq1875){
var G__1876 = cljs.core.first.call(null,seq1875);
var seq1875__$1 = cljs.core.next.call(null,seq1875);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1876,seq1875__$1);
});

feathers.core.update_state = (function feathers$core$update_state(state){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.Keyword(null,"s","s",1705939918)], null),feathers.core.update_circle,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.Keyword(null,"m","m",1632677161)], null),feathers.core.update_circle,(2)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.Keyword(null,"l","l",1395893423)], null),feathers.core.update_circle,(3));
});
feathers.core.draw_state = (function feathers$core$draw_state(state){
var circles = new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state);
var ordered_circles = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(circles),new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(circles),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(circles)], null);
var seq__1884 = cljs.core.seq.call(null,ordered_circles);
var chunk__1885 = null;
var count__1886 = (0);
var i__1887 = (0);
while(true){
if((i__1887 < count__1886)){
var map__1892 = cljs.core._nth.call(null,chunk__1885,i__1887);
var map__1892__$1 = (((((!((map__1892 == null))))?(((((map__1892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1892):map__1892);
var circle = map__1892__$1;
var color = cljs.core.get.call(null,map__1892__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__1892__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var size = cljs.core.get.call(null,map__1892__$1,new cljs.core.Keyword(null,"size","size",1098693007));
cljs.core.println.call(null,circle);

quil.core.fill.call(null,color,(255),(255));

var x_1896 = ((150) * quil.core.cos.call(null,angle));
var y_1897 = ((150) * quil.core.sin.call(null,angle));
var tr__1729__auto___1898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1729__auto___1898);

cljs.core.println.call(null,circle);

quil.core.rect.call(null,x_1896,y_1897,size,size);
}finally {quil.core.pop_matrix.call(null);
}

var G__1899 = seq__1884;
var G__1900 = chunk__1885;
var G__1901 = count__1886;
var G__1902 = (i__1887 + (1));
seq__1884 = G__1899;
chunk__1885 = G__1900;
count__1886 = G__1901;
i__1887 = G__1902;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__1884);
if(temp__5735__auto__){
var seq__1884__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1884__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1884__$1);
var G__1903 = cljs.core.chunk_rest.call(null,seq__1884__$1);
var G__1904 = c__4550__auto__;
var G__1905 = cljs.core.count.call(null,c__4550__auto__);
var G__1906 = (0);
seq__1884 = G__1903;
chunk__1885 = G__1904;
count__1886 = G__1905;
i__1887 = G__1906;
continue;
} else {
var map__1894 = cljs.core.first.call(null,seq__1884__$1);
var map__1894__$1 = (((((!((map__1894 == null))))?(((((map__1894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1894):map__1894);
var circle = map__1894__$1;
var color = cljs.core.get.call(null,map__1894__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__1894__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var size = cljs.core.get.call(null,map__1894__$1,new cljs.core.Keyword(null,"size","size",1098693007));
cljs.core.println.call(null,circle);

quil.core.fill.call(null,color,(255),(255));

var x_1907 = ((150) * quil.core.cos.call(null,angle));
var y_1908 = ((150) * quil.core.sin.call(null,angle));
var tr__1729__auto___1909 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1729__auto___1909);

cljs.core.println.call(null,circle);

quil.core.rect.call(null,x_1907,y_1908,size,size);
}finally {quil.core.pop_matrix.call(null);
}

var G__1910 = cljs.core.next.call(null,seq__1884__$1);
var G__1911 = null;
var G__1912 = (0);
var G__1913 = (0);
seq__1884 = G__1910;
chunk__1885 = G__1911;
count__1886 = G__1912;
i__1887 = G__1913;
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
var G__1914__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.update_state,args);
};
var G__1914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1915__i = 0, G__1915__a = new Array(arguments.length -  0);
while (G__1915__i < G__1915__a.length) {G__1915__a[G__1915__i] = arguments[G__1915__i + 0]; ++G__1915__i;}
  args = new cljs.core.IndexedSeq(G__1915__a,0,null);
} 
return G__1914__delegate.call(this,args);};
G__1914.cljs$lang$maxFixedArity = 0;
G__1914.cljs$lang$applyTo = (function (arglist__1916){
var args = cljs.core.seq(arglist__1916);
return G__1914__delegate(args);
});
G__1914.cljs$core$IFn$_invoke$arity$variadic = G__1914__delegate;
return G__1914;
})()
:feathers.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,feathers.core.setup))?(function() { 
var G__1917__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.setup,args);
};
var G__1917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1918__i = 0, G__1918__a = new Array(arguments.length -  0);
while (G__1918__i < G__1918__a.length) {G__1918__a[G__1918__i] = arguments[G__1918__i + 0]; ++G__1918__i;}
  args = new cljs.core.IndexedSeq(G__1918__a,0,null);
} 
return G__1917__delegate.call(this,args);};
G__1917.cljs$lang$maxFixedArity = 0;
G__1917.cljs$lang$applyTo = (function (arglist__1919){
var args = cljs.core.seq(arglist__1919);
return G__1917__delegate(args);
});
G__1917.cljs$core$IFn$_invoke$arity$variadic = G__1917__delegate;
return G__1917;
})()
:feathers.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,feathers.core.draw_state))?(function() { 
var G__1920__delegate = function (args){
return cljs.core.apply.call(null,feathers.core.draw_state,args);
};
var G__1920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1921__i = 0, G__1921__a = new Array(arguments.length -  0);
while (G__1921__i < G__1921__a.length) {G__1921__a[G__1921__i] = arguments[G__1921__i + 0]; ++G__1921__i;}
  args = new cljs.core.IndexedSeq(G__1921__a,0,null);
} 
return G__1920__delegate.call(this,args);};
G__1920.cljs$lang$maxFixedArity = 0;
G__1920.cljs$lang$applyTo = (function (arglist__1922){
var args = cljs.core.seq(arglist__1922);
return G__1920__delegate(args);
});
G__1920.cljs$core$IFn$_invoke$arity$variadic = G__1920__delegate;
return G__1920;
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
