// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19775__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__19775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19776__i = 0, G__19776__a = new Array(arguments.length -  0);
while (G__19776__i < G__19776__a.length) {G__19776__a[G__19776__i] = arguments[G__19776__i + 0]; ++G__19776__i;}
  args = new cljs.core.IndexedSeq(G__19776__a,0);
} 
return G__19775__delegate.call(this,args);};
G__19775.cljs$lang$maxFixedArity = 0;
G__19775.cljs$lang$applyTo = (function (arglist__19777){
var args = cljs.core.seq(arglist__19777);
return G__19775__delegate(args);
});
G__19775.cljs$core$IFn$_invoke$arity$variadic = G__19775__delegate;
return G__19775;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__19778){
var map__19780 = p__19778;
var map__19780__$1 = ((cljs.core.seq_QMARK_.call(null,map__19780))?cljs.core.apply.call(null,cljs.core.hash_map,map__19780):map__19780);
var class$ = cljs.core.get.call(null,map__19780__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__19780__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__14542__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__14542__auto__)){
return or__14542__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__14530__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__14530__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__14530__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__16610__auto___19909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___19909,ch){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___19909,ch){
return (function (state_19883){
var state_val_19884 = (state_19883[(1)]);
if((state_val_19884 === (7))){
var inst_19879 = (state_19883[(2)]);
var state_19883__$1 = state_19883;
var statearr_19885_19910 = state_19883__$1;
(statearr_19885_19910[(2)] = inst_19879);

(statearr_19885_19910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (1))){
var state_19883__$1 = state_19883;
var statearr_19886_19911 = state_19883__$1;
(statearr_19886_19911[(2)] = null);

(statearr_19886_19911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (4))){
var inst_19847 = (state_19883[(7)]);
var inst_19847__$1 = (state_19883[(2)]);
var state_19883__$1 = (function (){var statearr_19887 = state_19883;
(statearr_19887[(7)] = inst_19847__$1);

return statearr_19887;
})();
if(cljs.core.truth_(inst_19847__$1)){
var statearr_19888_19912 = state_19883__$1;
(statearr_19888_19912[(1)] = (5));

} else {
var statearr_19889_19913 = state_19883__$1;
(statearr_19889_19913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (13))){
var state_19883__$1 = state_19883;
var statearr_19890_19914 = state_19883__$1;
(statearr_19890_19914[(2)] = null);

(statearr_19890_19914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (6))){
var state_19883__$1 = state_19883;
var statearr_19891_19915 = state_19883__$1;
(statearr_19891_19915[(2)] = null);

(statearr_19891_19915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (3))){
var inst_19881 = (state_19883[(2)]);
var state_19883__$1 = state_19883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19883__$1,inst_19881);
} else {
if((state_val_19884 === (12))){
var inst_19854 = (state_19883[(8)]);
var inst_19867 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_19854);
var inst_19868 = cljs.core.first.call(null,inst_19867);
var inst_19869 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_19868);
var inst_19870 = console.warn("Figwheel: Not loading code with warnings - ",inst_19869);
var state_19883__$1 = state_19883;
var statearr_19892_19916 = state_19883__$1;
(statearr_19892_19916[(2)] = inst_19870);

(statearr_19892_19916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (2))){
var state_19883__$1 = state_19883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19883__$1,(4),ch);
} else {
if((state_val_19884 === (11))){
var inst_19863 = (state_19883[(2)]);
var state_19883__$1 = state_19883;
var statearr_19893_19917 = state_19883__$1;
(statearr_19893_19917[(2)] = inst_19863);

(statearr_19893_19917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (9))){
var inst_19853 = (state_19883[(9)]);
var inst_19865 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_19853,opts);
var state_19883__$1 = state_19883;
if(cljs.core.truth_(inst_19865)){
var statearr_19894_19918 = state_19883__$1;
(statearr_19894_19918[(1)] = (12));

} else {
var statearr_19895_19919 = state_19883__$1;
(statearr_19895_19919[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (5))){
var inst_19853 = (state_19883[(9)]);
var inst_19847 = (state_19883[(7)]);
var inst_19849 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_19850 = (new cljs.core.PersistentArrayMap(null,2,inst_19849,null));
var inst_19851 = (new cljs.core.PersistentHashSet(null,inst_19850,null));
var inst_19852 = figwheel.client.focus_msgs.call(null,inst_19851,inst_19847);
var inst_19853__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_19852);
var inst_19854 = cljs.core.first.call(null,inst_19852);
var inst_19855 = figwheel.client.reload_file_state_QMARK_.call(null,inst_19853__$1,opts);
var state_19883__$1 = (function (){var statearr_19896 = state_19883;
(statearr_19896[(9)] = inst_19853__$1);

(statearr_19896[(8)] = inst_19854);

return statearr_19896;
})();
if(cljs.core.truth_(inst_19855)){
var statearr_19897_19920 = state_19883__$1;
(statearr_19897_19920[(1)] = (8));

} else {
var statearr_19898_19921 = state_19883__$1;
(statearr_19898_19921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (14))){
var inst_19873 = (state_19883[(2)]);
var state_19883__$1 = state_19883;
var statearr_19899_19922 = state_19883__$1;
(statearr_19899_19922[(2)] = inst_19873);

(statearr_19899_19922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (10))){
var inst_19875 = (state_19883[(2)]);
var state_19883__$1 = (function (){var statearr_19900 = state_19883;
(statearr_19900[(10)] = inst_19875);

return statearr_19900;
})();
var statearr_19901_19923 = state_19883__$1;
(statearr_19901_19923[(2)] = null);

(statearr_19901_19923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19884 === (8))){
var inst_19854 = (state_19883[(8)]);
var inst_19857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19858 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_19854);
var inst_19859 = cljs.core.async.timeout.call(null,(1000));
var inst_19860 = [inst_19858,inst_19859];
var inst_19861 = (new cljs.core.PersistentVector(null,2,(5),inst_19857,inst_19860,null));
var state_19883__$1 = state_19883;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19883__$1,(11),inst_19861);
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
}
}
}
}
}
}
});})(c__16610__auto___19909,ch))
;
return ((function (switch__16539__auto__,c__16610__auto___19909,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__16540__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__16540__auto____0 = (function (){
var statearr_19905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19905[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__16540__auto__);

(statearr_19905[(1)] = (1));

return statearr_19905;
});
var figwheel$client$file_reloader_plugin_$_state_machine__16540__auto____1 = (function (state_19883){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_19883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e19906){if((e19906 instanceof Object)){
var ex__16543__auto__ = e19906;
var statearr_19907_19924 = state_19883;
(statearr_19907_19924[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19925 = state_19883;
state_19883 = G__19925;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__16540__auto__ = function(state_19883){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__16540__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__16540__auto____1.call(this,state_19883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__16540__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__16540__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___19909,ch))
})();
var state__16612__auto__ = (function (){var statearr_19908 = f__16611__auto__.call(null);
(statearr_19908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___19909);

return statearr_19908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___19909,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__19926_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__19926_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_19933 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_19933){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_19931 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_19932 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_19931,_STAR_print_newline_STAR_19932,base_path_19933){
return (function() { 
var G__19934__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__19934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19935__i = 0, G__19935__a = new Array(arguments.length -  0);
while (G__19935__i < G__19935__a.length) {G__19935__a[G__19935__i] = arguments[G__19935__i + 0]; ++G__19935__i;}
  args = new cljs.core.IndexedSeq(G__19935__a,0);
} 
return G__19934__delegate.call(this,args);};
G__19934.cljs$lang$maxFixedArity = 0;
G__19934.cljs$lang$applyTo = (function (arglist__19936){
var args = cljs.core.seq(arglist__19936);
return G__19934__delegate(args);
});
G__19934.cljs$core$IFn$_invoke$arity$variadic = G__19934__delegate;
return G__19934;
})()
;})(_STAR_print_fn_STAR_19931,_STAR_print_newline_STAR_19932,base_path_19933))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19932;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19931;
}}catch (e19930){if((e19930 instanceof Error)){
var e = e19930;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_19933], null));
} else {
var e = e19930;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_19933))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__19937){
var map__19942 = p__19937;
var map__19942__$1 = ((cljs.core.seq_QMARK_.call(null,map__19942))?cljs.core.apply.call(null,cljs.core.hash_map,map__19942):map__19942);
var opts = map__19942__$1;
var build_id = cljs.core.get.call(null,map__19942__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__19942,map__19942__$1,opts,build_id){
return (function (p__19943){
var vec__19944 = p__19943;
var map__19945 = cljs.core.nth.call(null,vec__19944,(0),null);
var map__19945__$1 = ((cljs.core.seq_QMARK_.call(null,map__19945))?cljs.core.apply.call(null,cljs.core.hash_map,map__19945):map__19945);
var msg = map__19945__$1;
var msg_name = cljs.core.get.call(null,map__19945__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19944,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__19944,map__19945,map__19945__$1,msg,msg_name,_,map__19942,map__19942__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__19944,map__19945,map__19945__$1,msg,msg_name,_,map__19942,map__19942__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__19942,map__19942__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__19949){
var vec__19950 = p__19949;
var map__19951 = cljs.core.nth.call(null,vec__19950,(0),null);
var map__19951__$1 = ((cljs.core.seq_QMARK_.call(null,map__19951))?cljs.core.apply.call(null,cljs.core.hash_map,map__19951):map__19951);
var msg = map__19951__$1;
var msg_name = cljs.core.get.call(null,map__19951__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19950,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__19952){
var map__19960 = p__19952;
var map__19960__$1 = ((cljs.core.seq_QMARK_.call(null,map__19960))?cljs.core.apply.call(null,cljs.core.hash_map,map__19960):map__19960);
var on_compile_fail = cljs.core.get.call(null,map__19960__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__19960__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__19960,map__19960__$1,on_compile_fail,on_compile_warning){
return (function (p__19961){
var vec__19962 = p__19961;
var map__19963 = cljs.core.nth.call(null,vec__19962,(0),null);
var map__19963__$1 = ((cljs.core.seq_QMARK_.call(null,map__19963))?cljs.core.apply.call(null,cljs.core.hash_map,map__19963):map__19963);
var msg = map__19963__$1;
var msg_name = cljs.core.get.call(null,map__19963__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19962,(1));
var pred__19964 = cljs.core._EQ_;
var expr__19965 = msg_name;
if(cljs.core.truth_(pred__19964.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__19965))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__19964.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19965))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__19960,map__19960__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__16610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto__,msg_hist,msg_names,msg){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto__,msg_hist,msg_names,msg){
return (function (state_20166){
var state_val_20167 = (state_20166[(1)]);
if((state_val_20167 === (7))){
var inst_20100 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20168_20209 = state_20166__$1;
(statearr_20168_20209[(2)] = inst_20100);

(statearr_20168_20209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (20))){
var inst_20128 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_20166__$1 = state_20166;
if(cljs.core.truth_(inst_20128)){
var statearr_20169_20210 = state_20166__$1;
(statearr_20169_20210[(1)] = (22));

} else {
var statearr_20170_20211 = state_20166__$1;
(statearr_20170_20211[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (27))){
var inst_20140 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20141 = figwheel.client.heads_up.display_warning.call(null,inst_20140);
var state_20166__$1 = state_20166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20166__$1,(30),inst_20141);
} else {
if((state_val_20167 === (1))){
var inst_20088 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_20166__$1 = state_20166;
if(cljs.core.truth_(inst_20088)){
var statearr_20171_20212 = state_20166__$1;
(statearr_20171_20212[(1)] = (2));

} else {
var statearr_20172_20213 = state_20166__$1;
(statearr_20172_20213[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (24))){
var inst_20156 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20173_20214 = state_20166__$1;
(statearr_20173_20214[(2)] = inst_20156);

(statearr_20173_20214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (4))){
var inst_20164 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20166__$1,inst_20164);
} else {
if((state_val_20167 === (15))){
var inst_20116 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20117 = figwheel.client.format_messages.call(null,inst_20116);
var inst_20118 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20119 = figwheel.client.heads_up.display_error.call(null,inst_20117,inst_20118);
var state_20166__$1 = state_20166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20166__$1,(18),inst_20119);
} else {
if((state_val_20167 === (21))){
var inst_20158 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20174_20215 = state_20166__$1;
(statearr_20174_20215[(2)] = inst_20158);

(statearr_20174_20215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (31))){
var inst_20147 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20166__$1 = state_20166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20166__$1,(34),inst_20147);
} else {
if((state_val_20167 === (32))){
var state_20166__$1 = state_20166;
var statearr_20175_20216 = state_20166__$1;
(statearr_20175_20216[(2)] = null);

(statearr_20175_20216[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (33))){
var inst_20152 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20176_20217 = state_20166__$1;
(statearr_20176_20217[(2)] = inst_20152);

(statearr_20176_20217[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (13))){
var inst_20106 = (state_20166[(2)]);
var inst_20107 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20108 = figwheel.client.format_messages.call(null,inst_20107);
var inst_20109 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20110 = figwheel.client.heads_up.display_error.call(null,inst_20108,inst_20109);
var state_20166__$1 = (function (){var statearr_20177 = state_20166;
(statearr_20177[(7)] = inst_20106);

return statearr_20177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20166__$1,(14),inst_20110);
} else {
if((state_val_20167 === (22))){
var inst_20130 = figwheel.client.heads_up.clear.call(null);
var state_20166__$1 = state_20166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20166__$1,(25),inst_20130);
} else {
if((state_val_20167 === (29))){
var inst_20154 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20178_20218 = state_20166__$1;
(statearr_20178_20218[(2)] = inst_20154);

(statearr_20178_20218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (6))){
var inst_20096 = figwheel.client.heads_up.clear.call(null);
var state_20166__$1 = state_20166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20166__$1,(9),inst_20096);
} else {
if((state_val_20167 === (28))){
var inst_20145 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_20166__$1 = state_20166;
if(cljs.core.truth_(inst_20145)){
var statearr_20179_20219 = state_20166__$1;
(statearr_20179_20219[(1)] = (31));

} else {
var statearr_20180_20220 = state_20166__$1;
(statearr_20180_20220[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (25))){
var inst_20132 = (state_20166[(2)]);
var inst_20133 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20134 = figwheel.client.heads_up.display_warning.call(null,inst_20133);
var state_20166__$1 = (function (){var statearr_20181 = state_20166;
(statearr_20181[(8)] = inst_20132);

return statearr_20181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20166__$1,(26),inst_20134);
} else {
if((state_val_20167 === (34))){
var inst_20149 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20182_20221 = state_20166__$1;
(statearr_20182_20221[(2)] = inst_20149);

(statearr_20182_20221[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (17))){
var inst_20160 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20183_20222 = state_20166__$1;
(statearr_20183_20222[(2)] = inst_20160);

(statearr_20183_20222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (3))){
var inst_20102 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_20166__$1 = state_20166;
if(cljs.core.truth_(inst_20102)){
var statearr_20184_20223 = state_20166__$1;
(statearr_20184_20223[(1)] = (10));

} else {
var statearr_20185_20224 = state_20166__$1;
(statearr_20185_20224[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (12))){
var inst_20162 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20186_20225 = state_20166__$1;
(statearr_20186_20225[(2)] = inst_20162);

(statearr_20186_20225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (2))){
var inst_20090 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_20166__$1 = state_20166;
if(cljs.core.truth_(inst_20090)){
var statearr_20187_20226 = state_20166__$1;
(statearr_20187_20226[(1)] = (5));

} else {
var statearr_20188_20227 = state_20166__$1;
(statearr_20188_20227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (23))){
var inst_20138 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_20166__$1 = state_20166;
if(cljs.core.truth_(inst_20138)){
var statearr_20189_20228 = state_20166__$1;
(statearr_20189_20228[(1)] = (27));

} else {
var statearr_20190_20229 = state_20166__$1;
(statearr_20190_20229[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (19))){
var inst_20125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20126 = figwheel.client.heads_up.append_message.call(null,inst_20125);
var state_20166__$1 = state_20166;
var statearr_20191_20230 = state_20166__$1;
(statearr_20191_20230[(2)] = inst_20126);

(statearr_20191_20230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (11))){
var inst_20114 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_20166__$1 = state_20166;
if(cljs.core.truth_(inst_20114)){
var statearr_20192_20231 = state_20166__$1;
(statearr_20192_20231[(1)] = (15));

} else {
var statearr_20193_20232 = state_20166__$1;
(statearr_20193_20232[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (9))){
var inst_20098 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20194_20233 = state_20166__$1;
(statearr_20194_20233[(2)] = inst_20098);

(statearr_20194_20233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (5))){
var inst_20092 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20166__$1 = state_20166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20166__$1,(8),inst_20092);
} else {
if((state_val_20167 === (14))){
var inst_20112 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20195_20234 = state_20166__$1;
(statearr_20195_20234[(2)] = inst_20112);

(statearr_20195_20234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (26))){
var inst_20136 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20196_20235 = state_20166__$1;
(statearr_20196_20235[(2)] = inst_20136);

(statearr_20196_20235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (16))){
var inst_20123 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_20166__$1 = state_20166;
if(cljs.core.truth_(inst_20123)){
var statearr_20197_20236 = state_20166__$1;
(statearr_20197_20236[(1)] = (19));

} else {
var statearr_20198_20237 = state_20166__$1;
(statearr_20198_20237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (30))){
var inst_20143 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20199_20238 = state_20166__$1;
(statearr_20199_20238[(2)] = inst_20143);

(statearr_20199_20238[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (10))){
var inst_20104 = figwheel.client.heads_up.clear.call(null);
var state_20166__$1 = state_20166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20166__$1,(13),inst_20104);
} else {
if((state_val_20167 === (18))){
var inst_20121 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20200_20239 = state_20166__$1;
(statearr_20200_20239[(2)] = inst_20121);

(statearr_20200_20239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20167 === (8))){
var inst_20094 = (state_20166[(2)]);
var state_20166__$1 = state_20166;
var statearr_20201_20240 = state_20166__$1;
(statearr_20201_20240[(2)] = inst_20094);

(statearr_20201_20240[(1)] = (7));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16610__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__16539__auto__,c__16610__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto____0 = (function (){
var statearr_20205 = [null,null,null,null,null,null,null,null,null];
(statearr_20205[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto__);

(statearr_20205[(1)] = (1));

return statearr_20205;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto____1 = (function (state_20166){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_20166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e20206){if((e20206 instanceof Object)){
var ex__16543__auto__ = e20206;
var statearr_20207_20241 = state_20166;
(statearr_20207_20241[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20242 = state_20166;
state_20166 = G__20242;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto__ = function(state_20166){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto____1.call(this,state_20166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto__,msg_hist,msg_names,msg))
})();
var state__16612__auto__ = (function (){var statearr_20208 = f__16611__auto__.call(null);
(statearr_20208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_20208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto__,msg_hist,msg_names,msg))
);

return c__16610__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__16610__auto___20305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___20305,ch){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___20305,ch){
return (function (state_20288){
var state_val_20289 = (state_20288[(1)]);
if((state_val_20289 === (8))){
var inst_20280 = (state_20288[(2)]);
var state_20288__$1 = (function (){var statearr_20290 = state_20288;
(statearr_20290[(7)] = inst_20280);

return statearr_20290;
})();
var statearr_20291_20306 = state_20288__$1;
(statearr_20291_20306[(2)] = null);

(statearr_20291_20306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (7))){
var inst_20284 = (state_20288[(2)]);
var state_20288__$1 = state_20288;
var statearr_20292_20307 = state_20288__$1;
(statearr_20292_20307[(2)] = inst_20284);

(statearr_20292_20307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (6))){
var state_20288__$1 = state_20288;
var statearr_20293_20308 = state_20288__$1;
(statearr_20293_20308[(2)] = null);

(statearr_20293_20308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (5))){
var inst_20276 = (state_20288[(8)]);
var inst_20278 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_20276);
var state_20288__$1 = state_20288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20288__$1,(8),inst_20278);
} else {
if((state_val_20289 === (4))){
var inst_20276 = (state_20288[(8)]);
var inst_20276__$1 = (state_20288[(2)]);
var state_20288__$1 = (function (){var statearr_20294 = state_20288;
(statearr_20294[(8)] = inst_20276__$1);

return statearr_20294;
})();
if(cljs.core.truth_(inst_20276__$1)){
var statearr_20295_20309 = state_20288__$1;
(statearr_20295_20309[(1)] = (5));

} else {
var statearr_20296_20310 = state_20288__$1;
(statearr_20296_20310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (3))){
var inst_20286 = (state_20288[(2)]);
var state_20288__$1 = state_20288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20288__$1,inst_20286);
} else {
if((state_val_20289 === (2))){
var state_20288__$1 = state_20288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20288__$1,(4),ch);
} else {
if((state_val_20289 === (1))){
var state_20288__$1 = state_20288;
var statearr_20297_20311 = state_20288__$1;
(statearr_20297_20311[(2)] = null);

(statearr_20297_20311[(1)] = (2));


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
});})(c__16610__auto___20305,ch))
;
return ((function (switch__16539__auto__,c__16610__auto___20305,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__16540__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__16540__auto____0 = (function (){
var statearr_20301 = [null,null,null,null,null,null,null,null,null];
(statearr_20301[(0)] = figwheel$client$heads_up_plugin_$_state_machine__16540__auto__);

(statearr_20301[(1)] = (1));

return statearr_20301;
});
var figwheel$client$heads_up_plugin_$_state_machine__16540__auto____1 = (function (state_20288){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_20288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e20302){if((e20302 instanceof Object)){
var ex__16543__auto__ = e20302;
var statearr_20303_20312 = state_20288;
(statearr_20303_20312[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20313 = state_20288;
state_20288 = G__20313;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__16540__auto__ = function(state_20288){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__16540__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__16540__auto____1.call(this,state_20288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__16540__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__16540__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___20305,ch))
})();
var state__16612__auto__ = (function (){var statearr_20304 = f__16611__auto__.call(null);
(statearr_20304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___20305);

return statearr_20304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___20305,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__16610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto__){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto__){
return (function (state_20334){
var state_val_20335 = (state_20334[(1)]);
if((state_val_20335 === (2))){
var inst_20331 = (state_20334[(2)]);
var inst_20332 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_20334__$1 = (function (){var statearr_20336 = state_20334;
(statearr_20336[(7)] = inst_20331);

return statearr_20336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20334__$1,inst_20332);
} else {
if((state_val_20335 === (1))){
var inst_20329 = cljs.core.async.timeout.call(null,(3000));
var state_20334__$1 = state_20334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20334__$1,(2),inst_20329);
} else {
return null;
}
}
});})(c__16610__auto__))
;
return ((function (switch__16539__auto__,c__16610__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__16540__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__16540__auto____0 = (function (){
var statearr_20340 = [null,null,null,null,null,null,null,null];
(statearr_20340[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__16540__auto__);

(statearr_20340[(1)] = (1));

return statearr_20340;
});
var figwheel$client$enforce_project_plugin_$_state_machine__16540__auto____1 = (function (state_20334){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_20334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e20341){if((e20341 instanceof Object)){
var ex__16543__auto__ = e20341;
var statearr_20342_20344 = state_20334;
(statearr_20342_20344[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20345 = state_20334;
state_20334 = G__20345;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__16540__auto__ = function(state_20334){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__16540__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__16540__auto____1.call(this,state_20334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__16540__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__16540__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_20343 = f__16611__auto__.call(null);
(statearr_20343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_20343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto__))
);

return c__16610__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__14530__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__14530__auto__)){
return ("CustomEvent" in window);
} else {
return and__14530__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj20349 = {"detail":url};
return obj20349;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__20350){
var map__20356 = p__20350;
var map__20356__$1 = ((cljs.core.seq_QMARK_.call(null,map__20356))?cljs.core.apply.call(null,cljs.core.hash_map,map__20356):map__20356);
var ed = map__20356__$1;
var cause = cljs.core.get.call(null,map__20356__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__20356__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__20356__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__20357_20361 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__20358_20362 = null;
var count__20359_20363 = (0);
var i__20360_20364 = (0);
while(true){
if((i__20360_20364 < count__20359_20363)){
var msg_20365 = cljs.core._nth.call(null,chunk__20358_20362,i__20360_20364);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_20365);

var G__20366 = seq__20357_20361;
var G__20367 = chunk__20358_20362;
var G__20368 = count__20359_20363;
var G__20369 = (i__20360_20364 + (1));
seq__20357_20361 = G__20366;
chunk__20358_20362 = G__20367;
count__20359_20363 = G__20368;
i__20360_20364 = G__20369;
continue;
} else {
var temp__4126__auto___20370 = cljs.core.seq.call(null,seq__20357_20361);
if(temp__4126__auto___20370){
var seq__20357_20371__$1 = temp__4126__auto___20370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20357_20371__$1)){
var c__15327__auto___20372 = cljs.core.chunk_first.call(null,seq__20357_20371__$1);
var G__20373 = cljs.core.chunk_rest.call(null,seq__20357_20371__$1);
var G__20374 = c__15327__auto___20372;
var G__20375 = cljs.core.count.call(null,c__15327__auto___20372);
var G__20376 = (0);
seq__20357_20361 = G__20373;
chunk__20358_20362 = G__20374;
count__20359_20363 = G__20375;
i__20360_20364 = G__20376;
continue;
} else {
var msg_20377 = cljs.core.first.call(null,seq__20357_20371__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_20377);

var G__20378 = cljs.core.next.call(null,seq__20357_20371__$1);
var G__20379 = null;
var G__20380 = (0);
var G__20381 = (0);
seq__20357_20361 = G__20378;
chunk__20358_20362 = G__20379;
count__20359_20363 = G__20380;
i__20360_20364 = G__20381;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__20382){
var map__20384 = p__20382;
var map__20384__$1 = ((cljs.core.seq_QMARK_.call(null,map__20384))?cljs.core.apply.call(null,cljs.core.hash_map,map__20384):map__20384);
var w = map__20384__$1;
var message = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__14530__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__14530__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__14530__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__20391 = cljs.core.seq.call(null,plugins);
var chunk__20392 = null;
var count__20393 = (0);
var i__20394 = (0);
while(true){
if((i__20394 < count__20393)){
var vec__20395 = cljs.core._nth.call(null,chunk__20392,i__20394);
var k = cljs.core.nth.call(null,vec__20395,(0),null);
var plugin = cljs.core.nth.call(null,vec__20395,(1),null);
if(cljs.core.truth_(plugin)){
var pl_20397 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__20391,chunk__20392,count__20393,i__20394,pl_20397,vec__20395,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_20397.call(null,msg_hist);
});})(seq__20391,chunk__20392,count__20393,i__20394,pl_20397,vec__20395,k,plugin))
);
} else {
}

var G__20398 = seq__20391;
var G__20399 = chunk__20392;
var G__20400 = count__20393;
var G__20401 = (i__20394 + (1));
seq__20391 = G__20398;
chunk__20392 = G__20399;
count__20393 = G__20400;
i__20394 = G__20401;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20391);
if(temp__4126__auto__){
var seq__20391__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20391__$1)){
var c__15327__auto__ = cljs.core.chunk_first.call(null,seq__20391__$1);
var G__20402 = cljs.core.chunk_rest.call(null,seq__20391__$1);
var G__20403 = c__15327__auto__;
var G__20404 = cljs.core.count.call(null,c__15327__auto__);
var G__20405 = (0);
seq__20391 = G__20402;
chunk__20392 = G__20403;
count__20393 = G__20404;
i__20394 = G__20405;
continue;
} else {
var vec__20396 = cljs.core.first.call(null,seq__20391__$1);
var k = cljs.core.nth.call(null,vec__20396,(0),null);
var plugin = cljs.core.nth.call(null,vec__20396,(1),null);
if(cljs.core.truth_(plugin)){
var pl_20406 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__20391,chunk__20392,count__20393,i__20394,pl_20406,vec__20396,k,plugin,seq__20391__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_20406.call(null,msg_hist);
});})(seq__20391,chunk__20392,count__20393,i__20394,pl_20406,vec__20396,k,plugin,seq__20391__$1,temp__4126__auto__))
);
} else {
}

var G__20407 = cljs.core.next.call(null,seq__20391__$1);
var G__20408 = null;
var G__20409 = (0);
var G__20410 = (0);
seq__20391 = G__20407;
chunk__20392 = G__20408;
count__20393 = G__20409;
i__20394 = G__20410;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__20412 = arguments.length;
switch (G__20412) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__15582__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__15582__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__20415){
var map__20416 = p__20415;
var map__20416__$1 = ((cljs.core.seq_QMARK_.call(null,map__20416))?cljs.core.apply.call(null,cljs.core.hash_map,map__20416):map__20416);
var opts = map__20416__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq20414){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20414));
});

//# sourceMappingURL=client.js.map