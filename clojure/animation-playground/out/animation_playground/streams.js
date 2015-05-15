// Compiled by ClojureScript 0.0-3211 {}
goog.provide('animation_playground.streams');
goog.require('cljs.core');
goog.require('cljs.core.async');
animation_playground.streams.make_stream = (function animation_playground$streams$make_stream(handler_fn,initial_state){
var ch = cljs.core.async.chan.call(null,(1));
var c__7211__auto___7459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7211__auto___7459,ch){
return (function (){
var f__7212__auto__ = (function (){var switch__7190__auto__ = ((function (c__7211__auto___7459,ch){
return (function (state_7446){
var state_val_7447 = (state_7446[(1)]);
if((state_val_7447 === (4))){
var inst_7437 = (state_7446[(7)]);
var inst_7440 = (state_7446[(2)]);
var inst_7441 = handler_fn.call(null,inst_7437);
var inst_7437__$1 = inst_7441;
var state_7446__$1 = (function (){var statearr_7448 = state_7446;
(statearr_7448[(7)] = inst_7437__$1);

(statearr_7448[(8)] = inst_7440);

return statearr_7448;
})();
var statearr_7449_7460 = state_7446__$1;
(statearr_7449_7460[(2)] = null);

(statearr_7449_7460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7447 === (3))){
var inst_7444 = (state_7446[(2)]);
var state_7446__$1 = state_7446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7446__$1,inst_7444);
} else {
if((state_val_7447 === (2))){
var inst_7437 = (state_7446[(7)]);
var state_7446__$1 = state_7446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7446__$1,(4),ch,inst_7437);
} else {
if((state_val_7447 === (1))){
var inst_7437 = initial_state;
var state_7446__$1 = (function (){var statearr_7450 = state_7446;
(statearr_7450[(7)] = inst_7437);

return statearr_7450;
})();
var statearr_7451_7461 = state_7446__$1;
(statearr_7451_7461[(2)] = null);

(statearr_7451_7461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7211__auto___7459,ch))
;
return ((function (switch__7190__auto__,c__7211__auto___7459,ch){
return (function() {
var animation_playground$streams$make_stream_$_state_machine__7191__auto__ = null;
var animation_playground$streams$make_stream_$_state_machine__7191__auto____0 = (function (){
var statearr_7455 = [null,null,null,null,null,null,null,null,null];
(statearr_7455[(0)] = animation_playground$streams$make_stream_$_state_machine__7191__auto__);

(statearr_7455[(1)] = (1));

return statearr_7455;
});
var animation_playground$streams$make_stream_$_state_machine__7191__auto____1 = (function (state_7446){
while(true){
var ret_value__7192__auto__ = (function (){try{while(true){
var result__7193__auto__ = switch__7190__auto__.call(null,state_7446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7193__auto__;
}
break;
}
}catch (e7456){if((e7456 instanceof Object)){
var ex__7194__auto__ = e7456;
var statearr_7457_7462 = state_7446;
(statearr_7457_7462[(5)] = ex__7194__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7463 = state_7446;
state_7446 = G__7463;
continue;
} else {
return ret_value__7192__auto__;
}
break;
}
});
animation_playground$streams$make_stream_$_state_machine__7191__auto__ = function(state_7446){
switch(arguments.length){
case 0:
return animation_playground$streams$make_stream_$_state_machine__7191__auto____0.call(this);
case 1:
return animation_playground$streams$make_stream_$_state_machine__7191__auto____1.call(this,state_7446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
animation_playground$streams$make_stream_$_state_machine__7191__auto__.cljs$core$IFn$_invoke$arity$0 = animation_playground$streams$make_stream_$_state_machine__7191__auto____0;
animation_playground$streams$make_stream_$_state_machine__7191__auto__.cljs$core$IFn$_invoke$arity$1 = animation_playground$streams$make_stream_$_state_machine__7191__auto____1;
return animation_playground$streams$make_stream_$_state_machine__7191__auto__;
})()
;})(switch__7190__auto__,c__7211__auto___7459,ch))
})();
var state__7213__auto__ = (function (){var statearr_7458 = f__7212__auto__.call(null);
(statearr_7458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7211__auto___7459);

return statearr_7458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7213__auto__);
});})(c__7211__auto___7459,ch))
);


return ch;
});
animation_playground.streams.compose_stream = (function animation_playground$streams$compose_stream(handler_fn,input_stream){
var ch = cljs.core.async.chan.call(null,(1));
var c__7211__auto___7524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7211__auto___7524,ch){
return (function (){
var f__7212__auto__ = (function (){var switch__7190__auto__ = ((function (c__7211__auto___7524,ch){
return (function (state_7508){
var state_val_7509 = (state_7508[(1)]);
if((state_val_7509 === (8))){
var inst_7497 = (state_7508[(2)]);
var inst_7498 = handler_fn.call(null,inst_7497);
var state_7508__$1 = state_7508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7508__$1,(7),ch,inst_7498);
} else {
if((state_val_7509 === (7))){
var inst_7500 = (state_7508[(2)]);
var state_7508__$1 = (function (){var statearr_7510 = state_7508;
(statearr_7510[(7)] = inst_7500);

return statearr_7510;
})();
var statearr_7511_7525 = state_7508__$1;
(statearr_7511_7525[(2)] = null);

(statearr_7511_7525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7509 === (6))){
var inst_7504 = (state_7508[(2)]);
var state_7508__$1 = state_7508;
var statearr_7512_7526 = state_7508__$1;
(statearr_7512_7526[(2)] = inst_7504);

(statearr_7512_7526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7509 === (5))){
var state_7508__$1 = state_7508;
var statearr_7513_7527 = state_7508__$1;
(statearr_7513_7527[(2)] = null);

(statearr_7513_7527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7509 === (4))){
var state_7508__$1 = state_7508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7508__$1,(8),input_stream);
} else {
if((state_val_7509 === (3))){
var inst_7506 = (state_7508[(2)]);
var state_7508__$1 = state_7508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7508__$1,inst_7506);
} else {
if((state_val_7509 === (2))){
var state_7508__$1 = state_7508;
var statearr_7514_7528 = state_7508__$1;
(statearr_7514_7528[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7509 === (1))){
var state_7508__$1 = state_7508;
var statearr_7516_7529 = state_7508__$1;
(statearr_7516_7529[(2)] = null);

(statearr_7516_7529[(1)] = (2));


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
});})(c__7211__auto___7524,ch))
;
return ((function (switch__7190__auto__,c__7211__auto___7524,ch){
return (function() {
var animation_playground$streams$compose_stream_$_state_machine__7191__auto__ = null;
var animation_playground$streams$compose_stream_$_state_machine__7191__auto____0 = (function (){
var statearr_7520 = [null,null,null,null,null,null,null,null];
(statearr_7520[(0)] = animation_playground$streams$compose_stream_$_state_machine__7191__auto__);

(statearr_7520[(1)] = (1));

return statearr_7520;
});
var animation_playground$streams$compose_stream_$_state_machine__7191__auto____1 = (function (state_7508){
while(true){
var ret_value__7192__auto__ = (function (){try{while(true){
var result__7193__auto__ = switch__7190__auto__.call(null,state_7508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7193__auto__;
}
break;
}
}catch (e7521){if((e7521 instanceof Object)){
var ex__7194__auto__ = e7521;
var statearr_7522_7530 = state_7508;
(statearr_7522_7530[(5)] = ex__7194__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7531 = state_7508;
state_7508 = G__7531;
continue;
} else {
return ret_value__7192__auto__;
}
break;
}
});
animation_playground$streams$compose_stream_$_state_machine__7191__auto__ = function(state_7508){
switch(arguments.length){
case 0:
return animation_playground$streams$compose_stream_$_state_machine__7191__auto____0.call(this);
case 1:
return animation_playground$streams$compose_stream_$_state_machine__7191__auto____1.call(this,state_7508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
animation_playground$streams$compose_stream_$_state_machine__7191__auto__.cljs$core$IFn$_invoke$arity$0 = animation_playground$streams$compose_stream_$_state_machine__7191__auto____0;
animation_playground$streams$compose_stream_$_state_machine__7191__auto__.cljs$core$IFn$_invoke$arity$1 = animation_playground$streams$compose_stream_$_state_machine__7191__auto____1;
return animation_playground$streams$compose_stream_$_state_machine__7191__auto__;
})()
;})(switch__7190__auto__,c__7211__auto___7524,ch))
})();
var state__7213__auto__ = (function (){var statearr_7523 = f__7212__auto__.call(null);
(statearr_7523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7211__auto___7524);

return statearr_7523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7213__auto__);
});})(c__7211__auto___7524,ch))
);


return ch;
});
animation_playground.streams.consume_stream_async = (function animation_playground$streams$consume_stream_async(stream,len,handler_fn){
var n__5218__auto___7558 = len;
var __7559 = (0);
while(true){
if((__7559 < n__5218__auto___7558)){
var c__7211__auto___7560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7559,c__7211__auto___7560,n__5218__auto___7558){
return (function (){
var f__7212__auto__ = (function (){var switch__7190__auto__ = ((function (__7559,c__7211__auto___7560,n__5218__auto___7558){
return (function (state_7549){
var state_val_7550 = (state_7549[(1)]);
if((state_val_7550 === (2))){
var inst_7546 = (state_7549[(2)]);
var inst_7547 = handler_fn.call(null,inst_7546);
var state_7549__$1 = state_7549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7549__$1,inst_7547);
} else {
if((state_val_7550 === (1))){
var state_7549__$1 = state_7549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7549__$1,(2),stream);
} else {
return null;
}
}
});})(__7559,c__7211__auto___7560,n__5218__auto___7558))
;
return ((function (__7559,switch__7190__auto__,c__7211__auto___7560,n__5218__auto___7558){
return (function() {
var animation_playground$streams$consume_stream_async_$_state_machine__7191__auto__ = null;
var animation_playground$streams$consume_stream_async_$_state_machine__7191__auto____0 = (function (){
var statearr_7554 = [null,null,null,null,null,null,null];
(statearr_7554[(0)] = animation_playground$streams$consume_stream_async_$_state_machine__7191__auto__);

(statearr_7554[(1)] = (1));

return statearr_7554;
});
var animation_playground$streams$consume_stream_async_$_state_machine__7191__auto____1 = (function (state_7549){
while(true){
var ret_value__7192__auto__ = (function (){try{while(true){
var result__7193__auto__ = switch__7190__auto__.call(null,state_7549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7193__auto__;
}
break;
}
}catch (e7555){if((e7555 instanceof Object)){
var ex__7194__auto__ = e7555;
var statearr_7556_7561 = state_7549;
(statearr_7556_7561[(5)] = ex__7194__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7562 = state_7549;
state_7549 = G__7562;
continue;
} else {
return ret_value__7192__auto__;
}
break;
}
});
animation_playground$streams$consume_stream_async_$_state_machine__7191__auto__ = function(state_7549){
switch(arguments.length){
case 0:
return animation_playground$streams$consume_stream_async_$_state_machine__7191__auto____0.call(this);
case 1:
return animation_playground$streams$consume_stream_async_$_state_machine__7191__auto____1.call(this,state_7549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
animation_playground$streams$consume_stream_async_$_state_machine__7191__auto__.cljs$core$IFn$_invoke$arity$0 = animation_playground$streams$consume_stream_async_$_state_machine__7191__auto____0;
animation_playground$streams$consume_stream_async_$_state_machine__7191__auto__.cljs$core$IFn$_invoke$arity$1 = animation_playground$streams$consume_stream_async_$_state_machine__7191__auto____1;
return animation_playground$streams$consume_stream_async_$_state_machine__7191__auto__;
})()
;})(__7559,switch__7190__auto__,c__7211__auto___7560,n__5218__auto___7558))
})();
var state__7213__auto__ = (function (){var statearr_7557 = f__7212__auto__.call(null);
(statearr_7557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7211__auto___7560);

return statearr_7557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7213__auto__);
});})(__7559,c__7211__auto___7560,n__5218__auto___7558))
);


var G__7563 = (__7559 + (1));
__7559 = G__7563;
continue;
} else {
}
break;
}

return new cljs.core.Keyword(null,"done","done",-889844188);
});

//# sourceMappingURL=streams.js.map