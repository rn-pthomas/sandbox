// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('feathers.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_();
feathers.core.setup = (function feathers$core$setup(){
quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

var initial_circle_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(0),cljs.core.cst$kw$angle,(0)], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$circles,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$s,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_circle_state,cljs.core.cst$kw$size,(50)),cljs.core.cst$kw$m,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_circle_state,cljs.core.cst$kw$size,(80)),cljs.core.cst$kw$l,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_circle_state,cljs.core.cst$kw$size,(100))], null)], null);
});
feathers.core.modify_angle_with_randomness = (function feathers$core$modify_angle_with_randomness(state,randomness_int){
return (cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(state) + ((cljs.core.rand_int(randomness_int) + (1)) * 0.1));
});
