// Compiled by ClojureScript 0.0-3211 {}
goog.provide('animation_playground.core');
goog.require('cljs.core');
goog.require('animation_playground.streams');
goog.require('cljs.core.async');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
animation_playground.core.reload_hook = (function animation_playground$core$reload_hook(){
var argseq__5373__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return animation_playground.core.reload_hook.cljs$core$IFn$_invoke$arity$variadic(argseq__5373__auto__);
});

animation_playground.core.reload_hook.cljs$core$IFn$_invoke$arity$variadic = (function (files){
return cljs.core.println.call(null,files);
});

animation_playground.core.reload_hook.cljs$lang$maxFixedArity = (0);

animation_playground.core.reload_hook.cljs$lang$applyTo = (function (seq10688){
return animation_playground.core.reload_hook.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10688));
});
animation_playground.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"walker","walker",1033425720),animation_playground.streams.make_stream.call(null,(function (n){
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._PLUS_,cljs.core._], null)).call(null,n,(1));
}),(1))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter","counter",804008177),(2)], null)], null));
animation_playground.core.simple_component = (function animation_playground$core$simple_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get_in.call(null,cljs.core.deref.call(null,animation_playground.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"counter","counter",804008177)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
animation_playground.core.render_simple = (function animation_playground$core$render_simple(){
var walker_chan_10761 = cljs.core.get_in.call(null,cljs.core.deref.call(null,animation_playground.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"walker","walker",1033425720)], null));
var c__7211__auto___10762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7211__auto___10762,walker_chan_10761){
return (function (){
var f__7212__auto__ = (function (){var switch__7190__auto__ = ((function (c__7211__auto___10762,walker_chan_10761){
return (function (state_10744){
var state_val_10745 = (state_10744[(1)]);
if((state_val_10745 === (8))){
var inst_10731 = (state_10744[(2)]);
var inst_10732 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10733 = [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"counter","counter",804008177)];
var inst_10734 = (new cljs.core.PersistentVector(null,2,(5),inst_10732,inst_10733,null));
var inst_10735 = (function (){var val = inst_10731;
return ((function (val,inst_10731,inst_10732,inst_10733,inst_10734,state_val_10745,c__7211__auto___10762,walker_chan_10761){
return (function (_){
return val;
});
;})(val,inst_10731,inst_10732,inst_10733,inst_10734,state_val_10745,c__7211__auto___10762,walker_chan_10761))
})();
var inst_10736 = cljs.core.swap_BANG_.call(null,animation_playground.core.app_state,cljs.core.update_in,inst_10734,inst_10735);
var state_10744__$1 = (function (){var statearr_10746 = state_10744;
(statearr_10746[(7)] = inst_10736);

return statearr_10746;
})();
var statearr_10747_10763 = state_10744__$1;
(statearr_10747_10763[(2)] = null);

(statearr_10747_10763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10745 === (7))){
var inst_10729 = (state_10744[(2)]);
var state_10744__$1 = (function (){var statearr_10748 = state_10744;
(statearr_10748[(8)] = inst_10729);

return statearr_10748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10744__$1,(8),walker_chan_10761);
} else {
if((state_val_10745 === (6))){
var inst_10740 = (state_10744[(2)]);
var state_10744__$1 = state_10744;
var statearr_10749_10764 = state_10744__$1;
(statearr_10749_10764[(2)] = inst_10740);

(statearr_10749_10764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10745 === (5))){
var state_10744__$1 = state_10744;
var statearr_10750_10765 = state_10744__$1;
(statearr_10750_10765[(2)] = null);

(statearr_10750_10765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10745 === (4))){
var inst_10727 = cljs.core.async.timeout.call(null,(200));
var state_10744__$1 = state_10744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10744__$1,(7),inst_10727);
} else {
if((state_val_10745 === (3))){
var inst_10742 = (state_10744[(2)]);
var state_10744__$1 = state_10744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10744__$1,inst_10742);
} else {
if((state_val_10745 === (2))){
var state_10744__$1 = state_10744;
var statearr_10751_10766 = state_10744__$1;
(statearr_10751_10766[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10745 === (1))){
var state_10744__$1 = state_10744;
var statearr_10753_10767 = state_10744__$1;
(statearr_10753_10767[(2)] = null);

(statearr_10753_10767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__7211__auto___10762,walker_chan_10761))
;
return ((function (switch__7190__auto__,c__7211__auto___10762,walker_chan_10761){
return (function() {
var animation_playground$core$render_simple_$_state_machine__7191__auto__ = null;
var animation_playground$core$render_simple_$_state_machine__7191__auto____0 = (function (){
var statearr_10757 = [null,null,null,null,null,null,null,null,null];
(statearr_10757[(0)] = animation_playground$core$render_simple_$_state_machine__7191__auto__);

(statearr_10757[(1)] = (1));

return statearr_10757;
});
var animation_playground$core$render_simple_$_state_machine__7191__auto____1 = (function (state_10744){
while(true){
var ret_value__7192__auto__ = (function (){try{while(true){
var result__7193__auto__ = switch__7190__auto__.call(null,state_10744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7193__auto__;
}
break;
}
}catch (e10758){if((e10758 instanceof Object)){
var ex__7194__auto__ = e10758;
var statearr_10759_10768 = state_10744;
(statearr_10759_10768[(5)] = ex__7194__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10769 = state_10744;
state_10744 = G__10769;
continue;
} else {
return ret_value__7192__auto__;
}
break;
}
});
animation_playground$core$render_simple_$_state_machine__7191__auto__ = function(state_10744){
switch(arguments.length){
case 0:
return animation_playground$core$render_simple_$_state_machine__7191__auto____0.call(this);
case 1:
return animation_playground$core$render_simple_$_state_machine__7191__auto____1.call(this,state_10744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
animation_playground$core$render_simple_$_state_machine__7191__auto__.cljs$core$IFn$_invoke$arity$0 = animation_playground$core$render_simple_$_state_machine__7191__auto____0;
animation_playground$core$render_simple_$_state_machine__7191__auto__.cljs$core$IFn$_invoke$arity$1 = animation_playground$core$render_simple_$_state_machine__7191__auto____1;
return animation_playground$core$render_simple_$_state_machine__7191__auto__;
})()
;})(switch__7190__auto__,c__7211__auto___10762,walker_chan_10761))
})();
var state__7213__auto__ = (function (){var statearr_10760 = f__7212__auto__.call(null);
(statearr_10760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7211__auto___10762);

return statearr_10760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7213__auto__);
});})(c__7211__auto___10762,walker_chan_10761))
);


return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [animation_playground.core.simple_component], null),document.body);
});
animation_playground.core.render_simple.call(null);

//# sourceMappingURL=core.js.map