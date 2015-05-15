// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__20873_SHARP_,p2__20874_SHARP_){
var and__14530__auto__ = p1__20873_SHARP_;
if(cljs.core.truth_(and__14530__auto__)){
return p2__20874_SHARP_;
} else {
return and__14530__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__14542__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__14542__auto__){
return or__14542__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__14542__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__14542__auto__){
return or__14542__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__14542__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__14542__auto__)){
return or__14542__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__15437__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15438__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15439__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15440__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15441__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15441__auto__,method_table__15437__auto__,prefer_table__15438__auto__,method_cache__15439__auto__,cached_hierarchy__15440__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20875){
var map__20876 = p__20875;
var map__20876__$1 = ((cljs.core.seq_QMARK_.call(null,map__20876))?cljs.core.apply.call(null,cljs.core.hash_map,map__20876):map__20876);
var file = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__20877){
var map__20878 = p__20877;
var map__20878__$1 = ((cljs.core.seq_QMARK_.call(null,map__20878))?cljs.core.apply.call(null,cljs.core.hash_map,map__20878):map__20878);
var namespace = cljs.core.get.call(null,map__20878__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__15437__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15438__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15439__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15440__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15441__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15441__auto__,method_table__15437__auto__,prefer_table__15438__auto__,method_cache__15439__auto__,cached_hierarchy__15440__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e20879){if((e20879 instanceof Error)){
var e = e20879;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20879;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__20881 = arguments.length;
switch (G__20881) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20883,callback){
var map__20885 = p__20883;
var map__20885__$1 = ((cljs.core.seq_QMARK_.call(null,map__20885))?cljs.core.apply.call(null,cljs.core.hash_map,map__20885):map__20885);
var file_msg = map__20885__$1;
var request_url = cljs.core.get.call(null,map__20885__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20885,map__20885__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20885,map__20885__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20886){
var map__20888 = p__20886;
var map__20888__$1 = ((cljs.core.seq_QMARK_.call(null,map__20888))?cljs.core.apply.call(null,cljs.core.hash_map,map__20888):map__20888);
var file_msg = map__20888__$1;
var meta_data = cljs.core.get.call(null,map__20888__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__20888__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__14542__auto__ = meta_data;
if(cljs.core.truth_(or__14542__auto__)){
return or__14542__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__14530__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__14530__auto__){
var or__14542__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__14542__auto__)){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__14542__auto____$1)){
return or__14542__auto____$1;
} else {
var and__14530__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__14530__auto____$1){
var or__14542__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__14542__auto____$2){
return or__14542__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__14530__auto____$1;
}
}
}
} else {
return and__14530__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20889,callback){
var map__20891 = p__20889;
var map__20891__$1 = ((cljs.core.seq_QMARK_.call(null,map__20891))?cljs.core.apply.call(null,cljs.core.hash_map,map__20891):map__20891);
var file_msg = map__20891__$1;
var namespace = cljs.core.get.call(null,map__20891__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__20891__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__16610__auto___20978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___20978,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___20978,out){
return (function (state_20960){
var state_val_20961 = (state_20960[(1)]);
if((state_val_20961 === (7))){
var inst_20944 = (state_20960[(7)]);
var inst_20950 = (state_20960[(2)]);
var inst_20951 = cljs.core.async.put_BANG_.call(null,out,inst_20950);
var inst_20940 = inst_20944;
var state_20960__$1 = (function (){var statearr_20962 = state_20960;
(statearr_20962[(8)] = inst_20940);

(statearr_20962[(9)] = inst_20951);

return statearr_20962;
})();
var statearr_20963_20979 = state_20960__$1;
(statearr_20963_20979[(2)] = null);

(statearr_20963_20979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (6))){
var inst_20956 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
var statearr_20964_20980 = state_20960__$1;
(statearr_20964_20980[(2)] = inst_20956);

(statearr_20964_20980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (5))){
var inst_20954 = cljs.core.async.close_BANG_.call(null,out);
var state_20960__$1 = state_20960;
var statearr_20965_20981 = state_20960__$1;
(statearr_20965_20981[(2)] = inst_20954);

(statearr_20965_20981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (4))){
var inst_20943 = (state_20960[(10)]);
var inst_20948 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20943);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20960__$1,(7),inst_20948);
} else {
if((state_val_20961 === (3))){
var inst_20958 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20960__$1,inst_20958);
} else {
if((state_val_20961 === (2))){
var inst_20940 = (state_20960[(8)]);
var inst_20943 = (state_20960[(10)]);
var inst_20943__$1 = cljs.core.nth.call(null,inst_20940,(0),null);
var inst_20944 = cljs.core.nthnext.call(null,inst_20940,(1));
var inst_20945 = (inst_20943__$1 == null);
var inst_20946 = cljs.core.not.call(null,inst_20945);
var state_20960__$1 = (function (){var statearr_20966 = state_20960;
(statearr_20966[(7)] = inst_20944);

(statearr_20966[(10)] = inst_20943__$1);

return statearr_20966;
})();
if(inst_20946){
var statearr_20967_20982 = state_20960__$1;
(statearr_20967_20982[(1)] = (4));

} else {
var statearr_20968_20983 = state_20960__$1;
(statearr_20968_20983[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (1))){
var inst_20938 = cljs.core.nth.call(null,files,(0),null);
var inst_20939 = cljs.core.nthnext.call(null,files,(1));
var inst_20940 = files;
var state_20960__$1 = (function (){var statearr_20969 = state_20960;
(statearr_20969[(8)] = inst_20940);

(statearr_20969[(11)] = inst_20939);

(statearr_20969[(12)] = inst_20938);

return statearr_20969;
})();
var statearr_20970_20984 = state_20960__$1;
(statearr_20970_20984[(2)] = null);

(statearr_20970_20984[(1)] = (2));


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
});})(c__16610__auto___20978,out))
;
return ((function (switch__16539__auto__,c__16610__auto___20978,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto____0 = (function (){
var statearr_20974 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20974[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto__);

(statearr_20974[(1)] = (1));

return statearr_20974;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto____1 = (function (state_20960){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_20960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e20975){if((e20975 instanceof Object)){
var ex__16543__auto__ = e20975;
var statearr_20976_20985 = state_20960;
(statearr_20976_20985[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20986 = state_20960;
state_20960 = G__20986;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto__ = function(state_20960){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto____1.call(this,state_20960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___20978,out))
})();
var state__16612__auto__ = (function (){var statearr_20977 = f__16611__auto__.call(null);
(statearr_20977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___20978);

return statearr_20977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___20978,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__20987,p__20988){
var map__20991 = p__20987;
var map__20991__$1 = ((cljs.core.seq_QMARK_.call(null,map__20991))?cljs.core.apply.call(null,cljs.core.hash_map,map__20991):map__20991);
var opts = map__20991__$1;
var url_rewriter = cljs.core.get.call(null,map__20991__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__20992 = p__20988;
var map__20992__$1 = ((cljs.core.seq_QMARK_.call(null,map__20992))?cljs.core.apply.call(null,cljs.core.hash_map,map__20992):map__20992);
var file_msg = map__20992__$1;
var file = cljs.core.get.call(null,map__20992__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__20993){
var map__20996 = p__20993;
var map__20996__$1 = ((cljs.core.seq_QMARK_.call(null,map__20996))?cljs.core.apply.call(null,cljs.core.hash_map,map__20996):map__20996);
var file = cljs.core.get.call(null,map__20996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__20996__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__14530__auto__ = eval_body__$1;
if(cljs.core.truth_(and__14530__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__14530__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e20997){var e = e20997;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21002,p__21003){
var map__21204 = p__21002;
var map__21204__$1 = ((cljs.core.seq_QMARK_.call(null,map__21204))?cljs.core.apply.call(null,cljs.core.hash_map,map__21204):map__21204);
var opts = map__21204__$1;
var load_unchanged_files = cljs.core.get.call(null,map__21204__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__21204__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__21204__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__21205 = p__21003;
var map__21205__$1 = ((cljs.core.seq_QMARK_.call(null,map__21205))?cljs.core.apply.call(null,cljs.core.hash_map,map__21205):map__21205);
var msg = map__21205__$1;
var files = cljs.core.get.call(null,map__21205__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__16610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function (state_21329){
var state_val_21330 = (state_21329[(1)]);
if((state_val_21330 === (7))){
var inst_21218 = (state_21329[(7)]);
var inst_21216 = (state_21329[(8)]);
var inst_21217 = (state_21329[(9)]);
var inst_21219 = (state_21329[(10)]);
var inst_21224 = cljs.core._nth.call(null,inst_21217,inst_21219);
var inst_21225 = figwheel.client.file_reloading.eval_body.call(null,inst_21224);
var inst_21226 = (inst_21219 + (1));
var tmp21331 = inst_21218;
var tmp21332 = inst_21216;
var tmp21333 = inst_21217;
var inst_21216__$1 = tmp21332;
var inst_21217__$1 = tmp21333;
var inst_21218__$1 = tmp21331;
var inst_21219__$1 = inst_21226;
var state_21329__$1 = (function (){var statearr_21334 = state_21329;
(statearr_21334[(7)] = inst_21218__$1);

(statearr_21334[(11)] = inst_21225);

(statearr_21334[(8)] = inst_21216__$1);

(statearr_21334[(9)] = inst_21217__$1);

(statearr_21334[(10)] = inst_21219__$1);

return statearr_21334;
})();
var statearr_21335_21404 = state_21329__$1;
(statearr_21335_21404[(2)] = null);

(statearr_21335_21404[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (20))){
var inst_21268 = (state_21329[(12)]);
var inst_21265 = (state_21329[(13)]);
var inst_21261 = (state_21329[(14)]);
var inst_21262 = (state_21329[(15)]);
var inst_21266 = (state_21329[(16)]);
var inst_21271 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21273 = (function (){var files_not_loaded = inst_21268;
var res = inst_21266;
var res_SINGLEQUOTE_ = inst_21265;
var files_SINGLEQUOTE_ = inst_21262;
var all_files = inst_21261;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_21268,inst_21265,inst_21261,inst_21262,inst_21266,inst_21271,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function (p__21272){
var map__21336 = p__21272;
var map__21336__$1 = ((cljs.core.seq_QMARK_.call(null,map__21336))?cljs.core.apply.call(null,cljs.core.hash_map,map__21336):map__21336);
var file = cljs.core.get.call(null,map__21336__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__21336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_21268,inst_21265,inst_21261,inst_21262,inst_21266,inst_21271,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
})();
var inst_21274 = cljs.core.map.call(null,inst_21273,inst_21266);
var inst_21275 = cljs.core.pr_str.call(null,inst_21274);
var inst_21276 = figwheel.client.utils.log.call(null,inst_21275);
var inst_21277 = (function (){var files_not_loaded = inst_21268;
var res = inst_21266;
var res_SINGLEQUOTE_ = inst_21265;
var files_SINGLEQUOTE_ = inst_21262;
var all_files = inst_21261;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_21268,inst_21265,inst_21261,inst_21262,inst_21266,inst_21271,inst_21273,inst_21274,inst_21275,inst_21276,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_21268,inst_21265,inst_21261,inst_21262,inst_21266,inst_21271,inst_21273,inst_21274,inst_21275,inst_21276,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
})();
var inst_21278 = setTimeout(inst_21277,(10));
var state_21329__$1 = (function (){var statearr_21337 = state_21329;
(statearr_21337[(17)] = inst_21276);

(statearr_21337[(18)] = inst_21271);

return statearr_21337;
})();
var statearr_21338_21405 = state_21329__$1;
(statearr_21338_21405[(2)] = inst_21278);

(statearr_21338_21405[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (27))){
var inst_21288 = (state_21329[(19)]);
var state_21329__$1 = state_21329;
var statearr_21339_21406 = state_21329__$1;
(statearr_21339_21406[(2)] = inst_21288);

(statearr_21339_21406[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (1))){
var inst_21208 = (state_21329[(20)]);
var inst_21206 = before_jsload.call(null,files);
var inst_21207 = (function (){return ((function (inst_21208,inst_21206,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function (p1__20998_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20998_SHARP_);
});
;})(inst_21208,inst_21206,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
})();
var inst_21208__$1 = cljs.core.filter.call(null,inst_21207,files);
var inst_21209 = cljs.core.not_empty.call(null,inst_21208__$1);
var state_21329__$1 = (function (){var statearr_21340 = state_21329;
(statearr_21340[(20)] = inst_21208__$1);

(statearr_21340[(21)] = inst_21206);

return statearr_21340;
})();
if(cljs.core.truth_(inst_21209)){
var statearr_21341_21407 = state_21329__$1;
(statearr_21341_21407[(1)] = (2));

} else {
var statearr_21342_21408 = state_21329__$1;
(statearr_21342_21408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (24))){
var state_21329__$1 = state_21329;
var statearr_21343_21409 = state_21329__$1;
(statearr_21343_21409[(2)] = null);

(statearr_21343_21409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (4))){
var inst_21253 = (state_21329[(2)]);
var inst_21254 = (function (){return ((function (inst_21253,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function (p1__20999_SHARP_){
var and__14530__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20999_SHARP_);
if(cljs.core.truth_(and__14530__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20999_SHARP_));
} else {
return and__14530__auto__;
}
});
;})(inst_21253,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
})();
var inst_21255 = cljs.core.filter.call(null,inst_21254,files);
var state_21329__$1 = (function (){var statearr_21344 = state_21329;
(statearr_21344[(22)] = inst_21255);

(statearr_21344[(23)] = inst_21253);

return statearr_21344;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_21345_21410 = state_21329__$1;
(statearr_21345_21410[(1)] = (16));

} else {
var statearr_21346_21411 = state_21329__$1;
(statearr_21346_21411[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (15))){
var inst_21243 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21347_21412 = state_21329__$1;
(statearr_21347_21412[(2)] = inst_21243);

(statearr_21347_21412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (21))){
var state_21329__$1 = state_21329;
var statearr_21348_21413 = state_21329__$1;
(statearr_21348_21413[(2)] = null);

(statearr_21348_21413[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (31))){
var inst_21296 = (state_21329[(24)]);
var inst_21306 = (state_21329[(2)]);
var inst_21307 = cljs.core.not_empty.call(null,inst_21296);
var state_21329__$1 = (function (){var statearr_21349 = state_21329;
(statearr_21349[(25)] = inst_21306);

return statearr_21349;
})();
if(cljs.core.truth_(inst_21307)){
var statearr_21350_21414 = state_21329__$1;
(statearr_21350_21414[(1)] = (32));

} else {
var statearr_21351_21415 = state_21329__$1;
(statearr_21351_21415[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (32))){
var inst_21296 = (state_21329[(24)]);
var inst_21309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21296);
var inst_21310 = cljs.core.pr_str.call(null,inst_21309);
var inst_21311 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_21310)].join('');
var inst_21312 = figwheel.client.utils.log.call(null,inst_21311);
var state_21329__$1 = state_21329;
var statearr_21352_21416 = state_21329__$1;
(statearr_21352_21416[(2)] = inst_21312);

(statearr_21352_21416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (33))){
var state_21329__$1 = state_21329;
var statearr_21353_21417 = state_21329__$1;
(statearr_21353_21417[(2)] = null);

(statearr_21353_21417[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (13))){
var inst_21229 = (state_21329[(26)]);
var inst_21233 = cljs.core.chunk_first.call(null,inst_21229);
var inst_21234 = cljs.core.chunk_rest.call(null,inst_21229);
var inst_21235 = cljs.core.count.call(null,inst_21233);
var inst_21216 = inst_21234;
var inst_21217 = inst_21233;
var inst_21218 = inst_21235;
var inst_21219 = (0);
var state_21329__$1 = (function (){var statearr_21354 = state_21329;
(statearr_21354[(7)] = inst_21218);

(statearr_21354[(8)] = inst_21216);

(statearr_21354[(9)] = inst_21217);

(statearr_21354[(10)] = inst_21219);

return statearr_21354;
})();
var statearr_21355_21418 = state_21329__$1;
(statearr_21355_21418[(2)] = null);

(statearr_21355_21418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (22))){
var inst_21268 = (state_21329[(12)]);
var inst_21281 = (state_21329[(2)]);
var inst_21282 = cljs.core.not_empty.call(null,inst_21268);
var state_21329__$1 = (function (){var statearr_21356 = state_21329;
(statearr_21356[(27)] = inst_21281);

return statearr_21356;
})();
if(cljs.core.truth_(inst_21282)){
var statearr_21357_21419 = state_21329__$1;
(statearr_21357_21419[(1)] = (23));

} else {
var statearr_21358_21420 = state_21329__$1;
(statearr_21358_21420[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (36))){
var state_21329__$1 = state_21329;
var statearr_21359_21421 = state_21329__$1;
(statearr_21359_21421[(2)] = null);

(statearr_21359_21421[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (29))){
var inst_21297 = (state_21329[(28)]);
var inst_21300 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21297);
var inst_21301 = cljs.core.pr_str.call(null,inst_21300);
var inst_21302 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21301)].join('');
var inst_21303 = figwheel.client.utils.log.call(null,inst_21302);
var state_21329__$1 = state_21329;
var statearr_21360_21422 = state_21329__$1;
(statearr_21360_21422[(2)] = inst_21303);

(statearr_21360_21422[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (6))){
var inst_21250 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21361_21423 = state_21329__$1;
(statearr_21361_21423[(2)] = inst_21250);

(statearr_21361_21423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (28))){
var inst_21297 = (state_21329[(28)]);
var inst_21294 = (state_21329[(2)]);
var inst_21295 = cljs.core.get.call(null,inst_21294,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21296 = cljs.core.get.call(null,inst_21294,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_21297__$1 = cljs.core.get.call(null,inst_21294,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21298 = cljs.core.not_empty.call(null,inst_21297__$1);
var state_21329__$1 = (function (){var statearr_21362 = state_21329;
(statearr_21362[(28)] = inst_21297__$1);

(statearr_21362[(29)] = inst_21295);

(statearr_21362[(24)] = inst_21296);

return statearr_21362;
})();
if(cljs.core.truth_(inst_21298)){
var statearr_21363_21424 = state_21329__$1;
(statearr_21363_21424[(1)] = (29));

} else {
var statearr_21364_21425 = state_21329__$1;
(statearr_21364_21425[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (25))){
var inst_21327 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21329__$1,inst_21327);
} else {
if((state_val_21330 === (34))){
var inst_21295 = (state_21329[(29)]);
var inst_21315 = (state_21329[(2)]);
var inst_21316 = cljs.core.not_empty.call(null,inst_21295);
var state_21329__$1 = (function (){var statearr_21365 = state_21329;
(statearr_21365[(30)] = inst_21315);

return statearr_21365;
})();
if(cljs.core.truth_(inst_21316)){
var statearr_21366_21426 = state_21329__$1;
(statearr_21366_21426[(1)] = (35));

} else {
var statearr_21367_21427 = state_21329__$1;
(statearr_21367_21427[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (17))){
var inst_21255 = (state_21329[(22)]);
var state_21329__$1 = state_21329;
var statearr_21368_21428 = state_21329__$1;
(statearr_21368_21428[(2)] = inst_21255);

(statearr_21368_21428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (3))){
var state_21329__$1 = state_21329;
var statearr_21369_21429 = state_21329__$1;
(statearr_21369_21429[(2)] = null);

(statearr_21369_21429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (12))){
var inst_21246 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21370_21430 = state_21329__$1;
(statearr_21370_21430[(2)] = inst_21246);

(statearr_21370_21430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (2))){
var inst_21208 = (state_21329[(20)]);
var inst_21215 = cljs.core.seq.call(null,inst_21208);
var inst_21216 = inst_21215;
var inst_21217 = null;
var inst_21218 = (0);
var inst_21219 = (0);
var state_21329__$1 = (function (){var statearr_21371 = state_21329;
(statearr_21371[(7)] = inst_21218);

(statearr_21371[(8)] = inst_21216);

(statearr_21371[(9)] = inst_21217);

(statearr_21371[(10)] = inst_21219);

return statearr_21371;
})();
var statearr_21372_21431 = state_21329__$1;
(statearr_21372_21431[(2)] = null);

(statearr_21372_21431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (23))){
var inst_21268 = (state_21329[(12)]);
var inst_21265 = (state_21329[(13)]);
var inst_21261 = (state_21329[(14)]);
var inst_21288 = (state_21329[(19)]);
var inst_21262 = (state_21329[(15)]);
var inst_21266 = (state_21329[(16)]);
var inst_21284 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21287 = (function (){var files_not_loaded = inst_21268;
var res = inst_21266;
var res_SINGLEQUOTE_ = inst_21265;
var files_SINGLEQUOTE_ = inst_21262;
var all_files = inst_21261;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_21268,inst_21265,inst_21261,inst_21288,inst_21262,inst_21266,inst_21284,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function (p__21286){
var map__21373 = p__21286;
var map__21373__$1 = ((cljs.core.seq_QMARK_.call(null,map__21373))?cljs.core.apply.call(null,cljs.core.hash_map,map__21373):map__21373);
var meta_data = cljs.core.get.call(null,map__21373__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_21268,inst_21265,inst_21261,inst_21288,inst_21262,inst_21266,inst_21284,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
})();
var inst_21288__$1 = cljs.core.group_by.call(null,inst_21287,inst_21268);
var inst_21289 = cljs.core.seq_QMARK_.call(null,inst_21288__$1);
var state_21329__$1 = (function (){var statearr_21374 = state_21329;
(statearr_21374[(19)] = inst_21288__$1);

(statearr_21374[(31)] = inst_21284);

return statearr_21374;
})();
if(inst_21289){
var statearr_21375_21432 = state_21329__$1;
(statearr_21375_21432[(1)] = (26));

} else {
var statearr_21376_21433 = state_21329__$1;
(statearr_21376_21433[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (35))){
var inst_21295 = (state_21329[(29)]);
var inst_21318 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21295);
var inst_21319 = cljs.core.pr_str.call(null,inst_21318);
var inst_21320 = [cljs.core.str("not required: "),cljs.core.str(inst_21319)].join('');
var inst_21321 = figwheel.client.utils.log.call(null,inst_21320);
var state_21329__$1 = state_21329;
var statearr_21377_21434 = state_21329__$1;
(statearr_21377_21434[(2)] = inst_21321);

(statearr_21377_21434[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (19))){
var inst_21265 = (state_21329[(13)]);
var inst_21261 = (state_21329[(14)]);
var inst_21262 = (state_21329[(15)]);
var inst_21266 = (state_21329[(16)]);
var inst_21265__$1 = (state_21329[(2)]);
var inst_21266__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21265__$1);
var inst_21267 = (function (){var res = inst_21266__$1;
var res_SINGLEQUOTE_ = inst_21265__$1;
var files_SINGLEQUOTE_ = inst_21262;
var all_files = inst_21261;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_21265,inst_21261,inst_21262,inst_21266,inst_21265__$1,inst_21266__$1,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function (p1__21001_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21001_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_21265,inst_21261,inst_21262,inst_21266,inst_21265__$1,inst_21266__$1,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
})();
var inst_21268 = cljs.core.filter.call(null,inst_21267,inst_21265__$1);
var inst_21269 = cljs.core.not_empty.call(null,inst_21266__$1);
var state_21329__$1 = (function (){var statearr_21378 = state_21329;
(statearr_21378[(12)] = inst_21268);

(statearr_21378[(13)] = inst_21265__$1);

(statearr_21378[(16)] = inst_21266__$1);

return statearr_21378;
})();
if(cljs.core.truth_(inst_21269)){
var statearr_21379_21435 = state_21329__$1;
(statearr_21379_21435[(1)] = (20));

} else {
var statearr_21380_21436 = state_21329__$1;
(statearr_21380_21436[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (11))){
var state_21329__$1 = state_21329;
var statearr_21381_21437 = state_21329__$1;
(statearr_21381_21437[(2)] = null);

(statearr_21381_21437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (9))){
var inst_21248 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21382_21438 = state_21329__$1;
(statearr_21382_21438[(2)] = inst_21248);

(statearr_21382_21438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (5))){
var inst_21218 = (state_21329[(7)]);
var inst_21219 = (state_21329[(10)]);
var inst_21221 = (inst_21219 < inst_21218);
var inst_21222 = inst_21221;
var state_21329__$1 = state_21329;
if(cljs.core.truth_(inst_21222)){
var statearr_21383_21439 = state_21329__$1;
(statearr_21383_21439[(1)] = (7));

} else {
var statearr_21384_21440 = state_21329__$1;
(statearr_21384_21440[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (14))){
var inst_21229 = (state_21329[(26)]);
var inst_21238 = cljs.core.first.call(null,inst_21229);
var inst_21239 = figwheel.client.file_reloading.eval_body.call(null,inst_21238);
var inst_21240 = cljs.core.next.call(null,inst_21229);
var inst_21216 = inst_21240;
var inst_21217 = null;
var inst_21218 = (0);
var inst_21219 = (0);
var state_21329__$1 = (function (){var statearr_21385 = state_21329;
(statearr_21385[(7)] = inst_21218);

(statearr_21385[(8)] = inst_21216);

(statearr_21385[(9)] = inst_21217);

(statearr_21385[(10)] = inst_21219);

(statearr_21385[(32)] = inst_21239);

return statearr_21385;
})();
var statearr_21386_21441 = state_21329__$1;
(statearr_21386_21441[(2)] = null);

(statearr_21386_21441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (26))){
var inst_21288 = (state_21329[(19)]);
var inst_21291 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21288);
var state_21329__$1 = state_21329;
var statearr_21387_21442 = state_21329__$1;
(statearr_21387_21442[(2)] = inst_21291);

(statearr_21387_21442[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (16))){
var inst_21255 = (state_21329[(22)]);
var inst_21257 = (function (){var all_files = inst_21255;
return ((function (all_files,inst_21255,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function (p1__21000_SHARP_){
return cljs.core.update_in.call(null,p1__21000_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_21255,state_val_21330,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
})();
var inst_21258 = cljs.core.map.call(null,inst_21257,inst_21255);
var state_21329__$1 = state_21329;
var statearr_21388_21443 = state_21329__$1;
(statearr_21388_21443[(2)] = inst_21258);

(statearr_21388_21443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (30))){
var state_21329__$1 = state_21329;
var statearr_21389_21444 = state_21329__$1;
(statearr_21389_21444[(2)] = null);

(statearr_21389_21444[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (10))){
var inst_21229 = (state_21329[(26)]);
var inst_21231 = cljs.core.chunked_seq_QMARK_.call(null,inst_21229);
var state_21329__$1 = state_21329;
if(inst_21231){
var statearr_21390_21445 = state_21329__$1;
(statearr_21390_21445[(1)] = (13));

} else {
var statearr_21391_21446 = state_21329__$1;
(statearr_21391_21446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (18))){
var inst_21261 = (state_21329[(14)]);
var inst_21262 = (state_21329[(15)]);
var inst_21261__$1 = (state_21329[(2)]);
var inst_21262__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_21261__$1);
var inst_21263 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21262__$1);
var state_21329__$1 = (function (){var statearr_21392 = state_21329;
(statearr_21392[(14)] = inst_21261__$1);

(statearr_21392[(15)] = inst_21262__$1);

return statearr_21392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21329__$1,(19),inst_21263);
} else {
if((state_val_21330 === (37))){
var inst_21324 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21393_21447 = state_21329__$1;
(statearr_21393_21447[(2)] = inst_21324);

(statearr_21393_21447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (8))){
var inst_21216 = (state_21329[(8)]);
var inst_21229 = (state_21329[(26)]);
var inst_21229__$1 = cljs.core.seq.call(null,inst_21216);
var state_21329__$1 = (function (){var statearr_21394 = state_21329;
(statearr_21394[(26)] = inst_21229__$1);

return statearr_21394;
})();
if(inst_21229__$1){
var statearr_21395_21448 = state_21329__$1;
(statearr_21395_21448[(1)] = (10));

} else {
var statearr_21396_21449 = state_21329__$1;
(statearr_21396_21449[(1)] = (11));

}

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
}
}
}
});})(c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
;
return ((function (switch__16539__auto__,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto____0 = (function (){
var statearr_21400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21400[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto__);

(statearr_21400[(1)] = (1));

return statearr_21400;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto____1 = (function (state_21329){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_21329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e21401){if((e21401 instanceof Object)){
var ex__16543__auto__ = e21401;
var statearr_21402_21450 = state_21329;
(statearr_21402_21450[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21451 = state_21329;
state_21329 = G__21451;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto__ = function(state_21329){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto____1.call(this,state_21329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
})();
var state__16612__auto__ = (function (){var statearr_21403 = f__16611__auto__.call(null);
(statearr_21403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_21403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto__,map__21204,map__21204__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__21205,map__21205__$1,msg,files))
);

return c__16610__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__21454,link){
var map__21456 = p__21454;
var map__21456__$1 = ((cljs.core.seq_QMARK_.call(null,map__21456))?cljs.core.apply.call(null,cljs.core.hash_map,map__21456):map__21456);
var file = cljs.core.get.call(null,map__21456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__21456,map__21456__$1,file){
return (function (p1__21452_SHARP_,p2__21453_SHARP_){
if(cljs.core._EQ_.call(null,p1__21452_SHARP_,p2__21453_SHARP_)){
return p1__21452_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__21456,map__21456__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21460){
var map__21461 = p__21460;
var map__21461__$1 = ((cljs.core.seq_QMARK_.call(null,map__21461))?cljs.core.apply.call(null,cljs.core.hash_map,map__21461):map__21461);
var current_url_length = cljs.core.get.call(null,map__21461__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__21461__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21457_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__21457_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__21463 = arguments.length;
switch (G__21463) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__21465){
var map__21467 = p__21465;
var map__21467__$1 = ((cljs.core.seq_QMARK_.call(null,map__21467))?cljs.core.apply.call(null,cljs.core.hash_map,map__21467):map__21467);
var f_data = map__21467__$1;
var request_url = cljs.core.get.call(null,map__21467__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21467__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__14542__auto__ = request_url;
if(cljs.core.truth_(or__14542__auto__)){
return or__14542__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__21468,files_msg){
var map__21490 = p__21468;
var map__21490__$1 = ((cljs.core.seq_QMARK_.call(null,map__21490))?cljs.core.apply.call(null,cljs.core.hash_map,map__21490):map__21490);
var opts = map__21490__$1;
var on_cssload = cljs.core.get.call(null,map__21490__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__21491_21511 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21492_21512 = null;
var count__21493_21513 = (0);
var i__21494_21514 = (0);
while(true){
if((i__21494_21514 < count__21493_21513)){
var f_21515 = cljs.core._nth.call(null,chunk__21492_21512,i__21494_21514);
figwheel.client.file_reloading.reload_css_file.call(null,f_21515);

var G__21516 = seq__21491_21511;
var G__21517 = chunk__21492_21512;
var G__21518 = count__21493_21513;
var G__21519 = (i__21494_21514 + (1));
seq__21491_21511 = G__21516;
chunk__21492_21512 = G__21517;
count__21493_21513 = G__21518;
i__21494_21514 = G__21519;
continue;
} else {
var temp__4126__auto___21520 = cljs.core.seq.call(null,seq__21491_21511);
if(temp__4126__auto___21520){
var seq__21491_21521__$1 = temp__4126__auto___21520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21491_21521__$1)){
var c__15327__auto___21522 = cljs.core.chunk_first.call(null,seq__21491_21521__$1);
var G__21523 = cljs.core.chunk_rest.call(null,seq__21491_21521__$1);
var G__21524 = c__15327__auto___21522;
var G__21525 = cljs.core.count.call(null,c__15327__auto___21522);
var G__21526 = (0);
seq__21491_21511 = G__21523;
chunk__21492_21512 = G__21524;
count__21493_21513 = G__21525;
i__21494_21514 = G__21526;
continue;
} else {
var f_21527 = cljs.core.first.call(null,seq__21491_21521__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_21527);

var G__21528 = cljs.core.next.call(null,seq__21491_21521__$1);
var G__21529 = null;
var G__21530 = (0);
var G__21531 = (0);
seq__21491_21511 = G__21528;
chunk__21492_21512 = G__21529;
count__21493_21513 = G__21530;
i__21494_21514 = G__21531;
continue;
}
} else {
}
}
break;
}

var c__16610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto__,map__21490,map__21490__$1,opts,on_cssload){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto__,map__21490,map__21490__$1,opts,on_cssload){
return (function (state_21501){
var state_val_21502 = (state_21501[(1)]);
if((state_val_21502 === (2))){
var inst_21497 = (state_21501[(2)]);
var inst_21498 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_21499 = on_cssload.call(null,inst_21498);
var state_21501__$1 = (function (){var statearr_21503 = state_21501;
(statearr_21503[(7)] = inst_21497);

return statearr_21503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21501__$1,inst_21499);
} else {
if((state_val_21502 === (1))){
var inst_21495 = cljs.core.async.timeout.call(null,(100));
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21501__$1,(2),inst_21495);
} else {
return null;
}
}
});})(c__16610__auto__,map__21490,map__21490__$1,opts,on_cssload))
;
return ((function (switch__16539__auto__,c__16610__auto__,map__21490,map__21490__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto____0 = (function (){
var statearr_21507 = [null,null,null,null,null,null,null,null];
(statearr_21507[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto__);

(statearr_21507[(1)] = (1));

return statearr_21507;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto____1 = (function (state_21501){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_21501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e21508){if((e21508 instanceof Object)){
var ex__16543__auto__ = e21508;
var statearr_21509_21532 = state_21501;
(statearr_21509_21532[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21533 = state_21501;
state_21501 = G__21533;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto__ = function(state_21501){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto____1.call(this,state_21501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto__,map__21490,map__21490__$1,opts,on_cssload))
})();
var state__16612__auto__ = (function (){var statearr_21510 = f__16611__auto__.call(null);
(statearr_21510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_21510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto__,map__21490,map__21490__$1,opts,on_cssload))
);

return c__16610__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map