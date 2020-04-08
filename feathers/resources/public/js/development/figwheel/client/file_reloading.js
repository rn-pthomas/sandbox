// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26862_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26862_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26863 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26864 = null;
var count__26865 = (0);
var i__26866 = (0);
while(true){
if((i__26866 < count__26865)){
var n = cljs.core._nth.call(null,chunk__26864,i__26866);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26867 = seq__26863;
var G__26868 = chunk__26864;
var G__26869 = count__26865;
var G__26870 = (i__26866 + (1));
seq__26863 = G__26867;
chunk__26864 = G__26868;
count__26865 = G__26869;
i__26866 = G__26870;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26863);
if(temp__5735__auto__){
var seq__26863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26863__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26863__$1);
var G__26871 = cljs.core.chunk_rest.call(null,seq__26863__$1);
var G__26872 = c__4550__auto__;
var G__26873 = cljs.core.count.call(null,c__4550__auto__);
var G__26874 = (0);
seq__26863 = G__26871;
chunk__26864 = G__26872;
count__26865 = G__26873;
i__26866 = G__26874;
continue;
} else {
var n = cljs.core.first.call(null,seq__26863__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26875 = cljs.core.next.call(null,seq__26863__$1);
var G__26876 = null;
var G__26877 = (0);
var G__26878 = (0);
seq__26863 = G__26875;
chunk__26864 = G__26876;
count__26865 = G__26877;
i__26866 = G__26878;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26879){
var vec__26880 = p__26879;
var _ = cljs.core.nth.call(null,vec__26880,(0),null);
var v = cljs.core.nth.call(null,vec__26880,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26883){
var vec__26884 = p__26883;
var k = cljs.core.nth.call(null,vec__26884,(0),null);
var v = cljs.core.nth.call(null,vec__26884,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26896_26904 = cljs.core.seq.call(null,deps);
var chunk__26897_26905 = null;
var count__26898_26906 = (0);
var i__26899_26907 = (0);
while(true){
if((i__26899_26907 < count__26898_26906)){
var dep_26908 = cljs.core._nth.call(null,chunk__26897_26905,i__26899_26907);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26908;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26908));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26908,(depth + (1)),state);
} else {
}


var G__26909 = seq__26896_26904;
var G__26910 = chunk__26897_26905;
var G__26911 = count__26898_26906;
var G__26912 = (i__26899_26907 + (1));
seq__26896_26904 = G__26909;
chunk__26897_26905 = G__26910;
count__26898_26906 = G__26911;
i__26899_26907 = G__26912;
continue;
} else {
var temp__5735__auto___26913 = cljs.core.seq.call(null,seq__26896_26904);
if(temp__5735__auto___26913){
var seq__26896_26914__$1 = temp__5735__auto___26913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26896_26914__$1)){
var c__4550__auto___26915 = cljs.core.chunk_first.call(null,seq__26896_26914__$1);
var G__26916 = cljs.core.chunk_rest.call(null,seq__26896_26914__$1);
var G__26917 = c__4550__auto___26915;
var G__26918 = cljs.core.count.call(null,c__4550__auto___26915);
var G__26919 = (0);
seq__26896_26904 = G__26916;
chunk__26897_26905 = G__26917;
count__26898_26906 = G__26918;
i__26899_26907 = G__26919;
continue;
} else {
var dep_26920 = cljs.core.first.call(null,seq__26896_26914__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26920;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26920));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26920,(depth + (1)),state);
} else {
}


var G__26921 = cljs.core.next.call(null,seq__26896_26914__$1);
var G__26922 = null;
var G__26923 = (0);
var G__26924 = (0);
seq__26896_26904 = G__26921;
chunk__26897_26905 = G__26922;
count__26898_26906 = G__26923;
i__26899_26907 = G__26924;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26900){
var vec__26901 = p__26900;
var seq__26902 = cljs.core.seq.call(null,vec__26901);
var first__26903 = cljs.core.first.call(null,seq__26902);
var seq__26902__$1 = cljs.core.next.call(null,seq__26902);
var x = first__26903;
var xs = seq__26902__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26901,seq__26902,first__26903,seq__26902__$1,x,xs,get_deps__$1){
return (function (p1__26887_SHARP_){
return clojure.set.difference.call(null,p1__26887_SHARP_,x);
});})(vec__26901,seq__26902,first__26903,seq__26902__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26925 = cljs.core.seq.call(null,provides);
var chunk__26926 = null;
var count__26927 = (0);
var i__26928 = (0);
while(true){
if((i__26928 < count__26927)){
var prov = cljs.core._nth.call(null,chunk__26926,i__26928);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26937_26945 = cljs.core.seq.call(null,requires);
var chunk__26938_26946 = null;
var count__26939_26947 = (0);
var i__26940_26948 = (0);
while(true){
if((i__26940_26948 < count__26939_26947)){
var req_26949 = cljs.core._nth.call(null,chunk__26938_26946,i__26940_26948);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26949,prov);


var G__26950 = seq__26937_26945;
var G__26951 = chunk__26938_26946;
var G__26952 = count__26939_26947;
var G__26953 = (i__26940_26948 + (1));
seq__26937_26945 = G__26950;
chunk__26938_26946 = G__26951;
count__26939_26947 = G__26952;
i__26940_26948 = G__26953;
continue;
} else {
var temp__5735__auto___26954 = cljs.core.seq.call(null,seq__26937_26945);
if(temp__5735__auto___26954){
var seq__26937_26955__$1 = temp__5735__auto___26954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26937_26955__$1)){
var c__4550__auto___26956 = cljs.core.chunk_first.call(null,seq__26937_26955__$1);
var G__26957 = cljs.core.chunk_rest.call(null,seq__26937_26955__$1);
var G__26958 = c__4550__auto___26956;
var G__26959 = cljs.core.count.call(null,c__4550__auto___26956);
var G__26960 = (0);
seq__26937_26945 = G__26957;
chunk__26938_26946 = G__26958;
count__26939_26947 = G__26959;
i__26940_26948 = G__26960;
continue;
} else {
var req_26961 = cljs.core.first.call(null,seq__26937_26955__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26961,prov);


var G__26962 = cljs.core.next.call(null,seq__26937_26955__$1);
var G__26963 = null;
var G__26964 = (0);
var G__26965 = (0);
seq__26937_26945 = G__26962;
chunk__26938_26946 = G__26963;
count__26939_26947 = G__26964;
i__26940_26948 = G__26965;
continue;
}
} else {
}
}
break;
}


var G__26966 = seq__26925;
var G__26967 = chunk__26926;
var G__26968 = count__26927;
var G__26969 = (i__26928 + (1));
seq__26925 = G__26966;
chunk__26926 = G__26967;
count__26927 = G__26968;
i__26928 = G__26969;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26925);
if(temp__5735__auto__){
var seq__26925__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26925__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26925__$1);
var G__26970 = cljs.core.chunk_rest.call(null,seq__26925__$1);
var G__26971 = c__4550__auto__;
var G__26972 = cljs.core.count.call(null,c__4550__auto__);
var G__26973 = (0);
seq__26925 = G__26970;
chunk__26926 = G__26971;
count__26927 = G__26972;
i__26928 = G__26973;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26925__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26941_26974 = cljs.core.seq.call(null,requires);
var chunk__26942_26975 = null;
var count__26943_26976 = (0);
var i__26944_26977 = (0);
while(true){
if((i__26944_26977 < count__26943_26976)){
var req_26978 = cljs.core._nth.call(null,chunk__26942_26975,i__26944_26977);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26978,prov);


var G__26979 = seq__26941_26974;
var G__26980 = chunk__26942_26975;
var G__26981 = count__26943_26976;
var G__26982 = (i__26944_26977 + (1));
seq__26941_26974 = G__26979;
chunk__26942_26975 = G__26980;
count__26943_26976 = G__26981;
i__26944_26977 = G__26982;
continue;
} else {
var temp__5735__auto___26983__$1 = cljs.core.seq.call(null,seq__26941_26974);
if(temp__5735__auto___26983__$1){
var seq__26941_26984__$1 = temp__5735__auto___26983__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26941_26984__$1)){
var c__4550__auto___26985 = cljs.core.chunk_first.call(null,seq__26941_26984__$1);
var G__26986 = cljs.core.chunk_rest.call(null,seq__26941_26984__$1);
var G__26987 = c__4550__auto___26985;
var G__26988 = cljs.core.count.call(null,c__4550__auto___26985);
var G__26989 = (0);
seq__26941_26974 = G__26986;
chunk__26942_26975 = G__26987;
count__26943_26976 = G__26988;
i__26944_26977 = G__26989;
continue;
} else {
var req_26990 = cljs.core.first.call(null,seq__26941_26984__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26990,prov);


var G__26991 = cljs.core.next.call(null,seq__26941_26984__$1);
var G__26992 = null;
var G__26993 = (0);
var G__26994 = (0);
seq__26941_26974 = G__26991;
chunk__26942_26975 = G__26992;
count__26943_26976 = G__26993;
i__26944_26977 = G__26994;
continue;
}
} else {
}
}
break;
}


var G__26995 = cljs.core.next.call(null,seq__26925__$1);
var G__26996 = null;
var G__26997 = (0);
var G__26998 = (0);
seq__26925 = G__26995;
chunk__26926 = G__26996;
count__26927 = G__26997;
i__26928 = G__26998;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26999_27003 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27000_27004 = null;
var count__27001_27005 = (0);
var i__27002_27006 = (0);
while(true){
if((i__27002_27006 < count__27001_27005)){
var ns_27007 = cljs.core._nth.call(null,chunk__27000_27004,i__27002_27006);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27007);


var G__27008 = seq__26999_27003;
var G__27009 = chunk__27000_27004;
var G__27010 = count__27001_27005;
var G__27011 = (i__27002_27006 + (1));
seq__26999_27003 = G__27008;
chunk__27000_27004 = G__27009;
count__27001_27005 = G__27010;
i__27002_27006 = G__27011;
continue;
} else {
var temp__5735__auto___27012 = cljs.core.seq.call(null,seq__26999_27003);
if(temp__5735__auto___27012){
var seq__26999_27013__$1 = temp__5735__auto___27012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26999_27013__$1)){
var c__4550__auto___27014 = cljs.core.chunk_first.call(null,seq__26999_27013__$1);
var G__27015 = cljs.core.chunk_rest.call(null,seq__26999_27013__$1);
var G__27016 = c__4550__auto___27014;
var G__27017 = cljs.core.count.call(null,c__4550__auto___27014);
var G__27018 = (0);
seq__26999_27003 = G__27015;
chunk__27000_27004 = G__27016;
count__27001_27005 = G__27017;
i__27002_27006 = G__27018;
continue;
} else {
var ns_27019 = cljs.core.first.call(null,seq__26999_27013__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27019);


var G__27020 = cljs.core.next.call(null,seq__26999_27013__$1);
var G__27021 = null;
var G__27022 = (0);
var G__27023 = (0);
seq__26999_27003 = G__27020;
chunk__27000_27004 = G__27021;
count__27001_27005 = G__27022;
i__27002_27006 = G__27023;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27024__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27025__i = 0, G__27025__a = new Array(arguments.length -  0);
while (G__27025__i < G__27025__a.length) {G__27025__a[G__27025__i] = arguments[G__27025__i + 0]; ++G__27025__i;}
  args = new cljs.core.IndexedSeq(G__27025__a,0,null);
} 
return G__27024__delegate.call(this,args);};
G__27024.cljs$lang$maxFixedArity = 0;
G__27024.cljs$lang$applyTo = (function (arglist__27026){
var args = cljs.core.seq(arglist__27026);
return G__27024__delegate(args);
});
G__27024.cljs$core$IFn$_invoke$arity$variadic = G__27024__delegate;
return G__27024;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27027_SHARP_,p2__27028_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27027_SHARP_)),p2__27028_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27029_SHARP_,p2__27030_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27029_SHARP_),p2__27030_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27031 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27031.addCallback(((function (G__27031){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27031))
);

G__27031.addErrback(((function (G__27031){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27031))
);

return G__27031;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27032){if((e27032 instanceof Error)){
var e = e27032;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27032;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27033){if((e27033 instanceof Error)){
var e = e27033;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27033;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27034 = cljs.core._EQ_;
var expr__27035 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27034.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27035))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27034.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27035))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27034.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27035))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27034,expr__27035){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27034,expr__27035))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27037,callback){
var map__27038 = p__27037;
var map__27038__$1 = (((((!((map__27038 == null))))?(((((map__27038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27038):map__27038);
var file_msg = map__27038__$1;
var request_url = cljs.core.get.call(null,map__27038__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27038,map__27038__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27038,map__27038__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__){
return (function (state_27076){
var state_val_27077 = (state_27076[(1)]);
if((state_val_27077 === (7))){
var inst_27072 = (state_27076[(2)]);
var state_27076__$1 = state_27076;
var statearr_27078_27104 = state_27076__$1;
(statearr_27078_27104[(2)] = inst_27072);

(statearr_27078_27104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (1))){
var state_27076__$1 = state_27076;
var statearr_27079_27105 = state_27076__$1;
(statearr_27079_27105[(2)] = null);

(statearr_27079_27105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (4))){
var inst_27042 = (state_27076[(7)]);
var inst_27042__$1 = (state_27076[(2)]);
var state_27076__$1 = (function (){var statearr_27080 = state_27076;
(statearr_27080[(7)] = inst_27042__$1);

return statearr_27080;
})();
if(cljs.core.truth_(inst_27042__$1)){
var statearr_27081_27106 = state_27076__$1;
(statearr_27081_27106[(1)] = (5));

} else {
var statearr_27082_27107 = state_27076__$1;
(statearr_27082_27107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (15))){
var inst_27055 = (state_27076[(8)]);
var inst_27057 = (state_27076[(9)]);
var inst_27059 = inst_27057.call(null,inst_27055);
var state_27076__$1 = state_27076;
var statearr_27083_27108 = state_27076__$1;
(statearr_27083_27108[(2)] = inst_27059);

(statearr_27083_27108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (13))){
var inst_27066 = (state_27076[(2)]);
var state_27076__$1 = state_27076;
var statearr_27084_27109 = state_27076__$1;
(statearr_27084_27109[(2)] = inst_27066);

(statearr_27084_27109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (6))){
var state_27076__$1 = state_27076;
var statearr_27085_27110 = state_27076__$1;
(statearr_27085_27110[(2)] = null);

(statearr_27085_27110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (17))){
var inst_27063 = (state_27076[(2)]);
var state_27076__$1 = state_27076;
var statearr_27086_27111 = state_27076__$1;
(statearr_27086_27111[(2)] = inst_27063);

(statearr_27086_27111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (3))){
var inst_27074 = (state_27076[(2)]);
var state_27076__$1 = state_27076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27076__$1,inst_27074);
} else {
if((state_val_27077 === (12))){
var state_27076__$1 = state_27076;
var statearr_27087_27112 = state_27076__$1;
(statearr_27087_27112[(2)] = null);

(statearr_27087_27112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (2))){
var state_27076__$1 = state_27076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27076__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27077 === (11))){
var inst_27047 = (state_27076[(10)]);
var inst_27053 = figwheel.client.file_reloading.blocking_load.call(null,inst_27047);
var state_27076__$1 = state_27076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27076__$1,(14),inst_27053);
} else {
if((state_val_27077 === (9))){
var inst_27047 = (state_27076[(10)]);
var state_27076__$1 = state_27076;
if(cljs.core.truth_(inst_27047)){
var statearr_27088_27113 = state_27076__$1;
(statearr_27088_27113[(1)] = (11));

} else {
var statearr_27089_27114 = state_27076__$1;
(statearr_27089_27114[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (5))){
var inst_27042 = (state_27076[(7)]);
var inst_27048 = (state_27076[(11)]);
var inst_27047 = cljs.core.nth.call(null,inst_27042,(0),null);
var inst_27048__$1 = cljs.core.nth.call(null,inst_27042,(1),null);
var state_27076__$1 = (function (){var statearr_27090 = state_27076;
(statearr_27090[(11)] = inst_27048__$1);

(statearr_27090[(10)] = inst_27047);

return statearr_27090;
})();
if(cljs.core.truth_(inst_27048__$1)){
var statearr_27091_27115 = state_27076__$1;
(statearr_27091_27115[(1)] = (8));

} else {
var statearr_27092_27116 = state_27076__$1;
(statearr_27092_27116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (14))){
var inst_27047 = (state_27076[(10)]);
var inst_27057 = (state_27076[(9)]);
var inst_27055 = (state_27076[(2)]);
var inst_27056 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27057__$1 = cljs.core.get.call(null,inst_27056,inst_27047);
var state_27076__$1 = (function (){var statearr_27093 = state_27076;
(statearr_27093[(8)] = inst_27055);

(statearr_27093[(9)] = inst_27057__$1);

return statearr_27093;
})();
if(cljs.core.truth_(inst_27057__$1)){
var statearr_27094_27117 = state_27076__$1;
(statearr_27094_27117[(1)] = (15));

} else {
var statearr_27095_27118 = state_27076__$1;
(statearr_27095_27118[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (16))){
var inst_27055 = (state_27076[(8)]);
var inst_27061 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27055);
var state_27076__$1 = state_27076;
var statearr_27096_27119 = state_27076__$1;
(statearr_27096_27119[(2)] = inst_27061);

(statearr_27096_27119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (10))){
var inst_27068 = (state_27076[(2)]);
var state_27076__$1 = (function (){var statearr_27097 = state_27076;
(statearr_27097[(12)] = inst_27068);

return statearr_27097;
})();
var statearr_27098_27120 = state_27076__$1;
(statearr_27098_27120[(2)] = null);

(statearr_27098_27120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27077 === (8))){
var inst_27048 = (state_27076[(11)]);
var inst_27050 = eval(inst_27048);
var state_27076__$1 = state_27076;
var statearr_27099_27121 = state_27076__$1;
(statearr_27099_27121[(2)] = inst_27050);

(statearr_27099_27121[(1)] = (10));


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
});})(c__23421__auto__))
;
return ((function (switch__23326__auto__,c__23421__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23327__auto__ = null;
var figwheel$client$file_reloading$state_machine__23327__auto____0 = (function (){
var statearr_27100 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27100[(0)] = figwheel$client$file_reloading$state_machine__23327__auto__);

(statearr_27100[(1)] = (1));

return statearr_27100;
});
var figwheel$client$file_reloading$state_machine__23327__auto____1 = (function (state_27076){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_27076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e27101){if((e27101 instanceof Object)){
var ex__23330__auto__ = e27101;
var statearr_27102_27122 = state_27076;
(statearr_27102_27122[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27123 = state_27076;
state_27076 = G__27123;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23327__auto__ = function(state_27076){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23327__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23327__auto____1.call(this,state_27076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23327__auto____0;
figwheel$client$file_reloading$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23327__auto____1;
return figwheel$client$file_reloading$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__))
})();
var state__23423__auto__ = (function (){var statearr_27103 = f__23422__auto__.call(null);
(statearr_27103[(6)] = c__23421__auto__);

return statearr_27103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__))
);

return c__23421__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27125 = arguments.length;
switch (G__27125) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27127,callback){
var map__27128 = p__27127;
var map__27128__$1 = (((((!((map__27128 == null))))?(((((map__27128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27128):map__27128);
var file_msg = map__27128__$1;
var namespace = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27128,map__27128__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27128,map__27128__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27130){
var map__27131 = p__27130;
var map__27131__$1 = (((((!((map__27131 == null))))?(((((map__27131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27131):map__27131);
var file_msg = map__27131__$1;
var namespace = cljs.core.get.call(null,map__27131__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27133){
var map__27134 = p__27133;
var map__27134__$1 = (((((!((map__27134 == null))))?(((((map__27134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27134):map__27134);
var file_msg = map__27134__$1;
var namespace = cljs.core.get.call(null,map__27134__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27136,callback){
var map__27137 = p__27136;
var map__27137__$1 = (((((!((map__27137 == null))))?(((((map__27137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27137):map__27137);
var file_msg = map__27137__$1;
var request_url = cljs.core.get.call(null,map__27137__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23421__auto___27187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___27187,out){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___27187,out){
return (function (state_27172){
var state_val_27173 = (state_27172[(1)]);
if((state_val_27173 === (1))){
var inst_27146 = cljs.core.seq.call(null,files);
var inst_27147 = cljs.core.first.call(null,inst_27146);
var inst_27148 = cljs.core.next.call(null,inst_27146);
var inst_27149 = files;
var state_27172__$1 = (function (){var statearr_27174 = state_27172;
(statearr_27174[(7)] = inst_27148);

(statearr_27174[(8)] = inst_27149);

(statearr_27174[(9)] = inst_27147);

return statearr_27174;
})();
var statearr_27175_27188 = state_27172__$1;
(statearr_27175_27188[(2)] = null);

(statearr_27175_27188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (2))){
var inst_27155 = (state_27172[(10)]);
var inst_27149 = (state_27172[(8)]);
var inst_27154 = cljs.core.seq.call(null,inst_27149);
var inst_27155__$1 = cljs.core.first.call(null,inst_27154);
var inst_27156 = cljs.core.next.call(null,inst_27154);
var inst_27157 = (inst_27155__$1 == null);
var inst_27158 = cljs.core.not.call(null,inst_27157);
var state_27172__$1 = (function (){var statearr_27176 = state_27172;
(statearr_27176[(10)] = inst_27155__$1);

(statearr_27176[(11)] = inst_27156);

return statearr_27176;
})();
if(inst_27158){
var statearr_27177_27189 = state_27172__$1;
(statearr_27177_27189[(1)] = (4));

} else {
var statearr_27178_27190 = state_27172__$1;
(statearr_27178_27190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (3))){
var inst_27170 = (state_27172[(2)]);
var state_27172__$1 = state_27172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27172__$1,inst_27170);
} else {
if((state_val_27173 === (4))){
var inst_27155 = (state_27172[(10)]);
var inst_27160 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27155);
var state_27172__$1 = state_27172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27172__$1,(7),inst_27160);
} else {
if((state_val_27173 === (5))){
var inst_27166 = cljs.core.async.close_BANG_.call(null,out);
var state_27172__$1 = state_27172;
var statearr_27179_27191 = state_27172__$1;
(statearr_27179_27191[(2)] = inst_27166);

(statearr_27179_27191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (6))){
var inst_27168 = (state_27172[(2)]);
var state_27172__$1 = state_27172;
var statearr_27180_27192 = state_27172__$1;
(statearr_27180_27192[(2)] = inst_27168);

(statearr_27180_27192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (7))){
var inst_27156 = (state_27172[(11)]);
var inst_27162 = (state_27172[(2)]);
var inst_27163 = cljs.core.async.put_BANG_.call(null,out,inst_27162);
var inst_27149 = inst_27156;
var state_27172__$1 = (function (){var statearr_27181 = state_27172;
(statearr_27181[(8)] = inst_27149);

(statearr_27181[(12)] = inst_27163);

return statearr_27181;
})();
var statearr_27182_27193 = state_27172__$1;
(statearr_27182_27193[(2)] = null);

(statearr_27182_27193[(1)] = (2));


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
});})(c__23421__auto___27187,out))
;
return ((function (switch__23326__auto__,c__23421__auto___27187,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto____0 = (function (){
var statearr_27183 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27183[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto__);

(statearr_27183[(1)] = (1));

return statearr_27183;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto____1 = (function (state_27172){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_27172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e27184){if((e27184 instanceof Object)){
var ex__23330__auto__ = e27184;
var statearr_27185_27194 = state_27172;
(statearr_27185_27194[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27195 = state_27172;
state_27172 = G__27195;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto__ = function(state_27172){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto____1.call(this,state_27172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___27187,out))
})();
var state__23423__auto__ = (function (){var statearr_27186 = f__23422__auto__.call(null);
(statearr_27186[(6)] = c__23421__auto___27187);

return statearr_27186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___27187,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27196,opts){
var map__27197 = p__27196;
var map__27197__$1 = (((((!((map__27197 == null))))?(((((map__27197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27197):map__27197);
var eval_body = cljs.core.get.call(null,map__27197__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27197__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27199){var e = e27199;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27200_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27200_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27201){
var vec__27202 = p__27201;
var k = cljs.core.nth.call(null,vec__27202,(0),null);
var v = cljs.core.nth.call(null,vec__27202,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27205){
var vec__27206 = p__27205;
var k = cljs.core.nth.call(null,vec__27206,(0),null);
var v = cljs.core.nth.call(null,vec__27206,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27212,p__27213){
var map__27214 = p__27212;
var map__27214__$1 = (((((!((map__27214 == null))))?(((((map__27214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27214):map__27214);
var opts = map__27214__$1;
var before_jsload = cljs.core.get.call(null,map__27214__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27214__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27214__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27215 = p__27213;
var map__27215__$1 = (((((!((map__27215 == null))))?(((((map__27215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27215):map__27215);
var msg = map__27215__$1;
var files = cljs.core.get.call(null,map__27215__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27215__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27215__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27369){
var state_val_27370 = (state_27369[(1)]);
if((state_val_27370 === (7))){
var inst_27231 = (state_27369[(7)]);
var inst_27229 = (state_27369[(8)]);
var inst_27232 = (state_27369[(9)]);
var inst_27230 = (state_27369[(10)]);
var inst_27237 = cljs.core._nth.call(null,inst_27230,inst_27232);
var inst_27238 = figwheel.client.file_reloading.eval_body.call(null,inst_27237,opts);
var inst_27239 = (inst_27232 + (1));
var tmp27371 = inst_27231;
var tmp27372 = inst_27229;
var tmp27373 = inst_27230;
var inst_27229__$1 = tmp27372;
var inst_27230__$1 = tmp27373;
var inst_27231__$1 = tmp27371;
var inst_27232__$1 = inst_27239;
var state_27369__$1 = (function (){var statearr_27374 = state_27369;
(statearr_27374[(7)] = inst_27231__$1);

(statearr_27374[(11)] = inst_27238);

(statearr_27374[(8)] = inst_27229__$1);

(statearr_27374[(9)] = inst_27232__$1);

(statearr_27374[(10)] = inst_27230__$1);

return statearr_27374;
})();
var statearr_27375_27458 = state_27369__$1;
(statearr_27375_27458[(2)] = null);

(statearr_27375_27458[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (20))){
var inst_27272 = (state_27369[(12)]);
var inst_27280 = figwheel.client.file_reloading.sort_files.call(null,inst_27272);
var state_27369__$1 = state_27369;
var statearr_27376_27459 = state_27369__$1;
(statearr_27376_27459[(2)] = inst_27280);

(statearr_27376_27459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (27))){
var state_27369__$1 = state_27369;
var statearr_27377_27460 = state_27369__$1;
(statearr_27377_27460[(2)] = null);

(statearr_27377_27460[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (1))){
var inst_27221 = (state_27369[(13)]);
var inst_27218 = before_jsload.call(null,files);
var inst_27219 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27220 = (function (){return ((function (inst_27221,inst_27218,inst_27219,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27209_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27209_SHARP_);
});
;})(inst_27221,inst_27218,inst_27219,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27221__$1 = cljs.core.filter.call(null,inst_27220,files);
var inst_27222 = cljs.core.not_empty.call(null,inst_27221__$1);
var state_27369__$1 = (function (){var statearr_27378 = state_27369;
(statearr_27378[(13)] = inst_27221__$1);

(statearr_27378[(14)] = inst_27218);

(statearr_27378[(15)] = inst_27219);

return statearr_27378;
})();
if(cljs.core.truth_(inst_27222)){
var statearr_27379_27461 = state_27369__$1;
(statearr_27379_27461[(1)] = (2));

} else {
var statearr_27380_27462 = state_27369__$1;
(statearr_27380_27462[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (24))){
var state_27369__$1 = state_27369;
var statearr_27381_27463 = state_27369__$1;
(statearr_27381_27463[(2)] = null);

(statearr_27381_27463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (39))){
var inst_27322 = (state_27369[(16)]);
var state_27369__$1 = state_27369;
var statearr_27382_27464 = state_27369__$1;
(statearr_27382_27464[(2)] = inst_27322);

(statearr_27382_27464[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (46))){
var inst_27364 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27383_27465 = state_27369__$1;
(statearr_27383_27465[(2)] = inst_27364);

(statearr_27383_27465[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (4))){
var inst_27266 = (state_27369[(2)]);
var inst_27267 = cljs.core.List.EMPTY;
var inst_27268 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27267);
var inst_27269 = (function (){return ((function (inst_27266,inst_27267,inst_27268,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27210_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27210_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27210_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27210_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27266,inst_27267,inst_27268,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27270 = cljs.core.filter.call(null,inst_27269,files);
var inst_27271 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27272 = cljs.core.concat.call(null,inst_27270,inst_27271);
var state_27369__$1 = (function (){var statearr_27384 = state_27369;
(statearr_27384[(12)] = inst_27272);

(statearr_27384[(17)] = inst_27268);

(statearr_27384[(18)] = inst_27266);

return statearr_27384;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27385_27466 = state_27369__$1;
(statearr_27385_27466[(1)] = (16));

} else {
var statearr_27386_27467 = state_27369__$1;
(statearr_27386_27467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (15))){
var inst_27256 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27387_27468 = state_27369__$1;
(statearr_27387_27468[(2)] = inst_27256);

(statearr_27387_27468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (21))){
var inst_27282 = (state_27369[(19)]);
var inst_27282__$1 = (state_27369[(2)]);
var inst_27283 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27282__$1);
var state_27369__$1 = (function (){var statearr_27388 = state_27369;
(statearr_27388[(19)] = inst_27282__$1);

return statearr_27388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27369__$1,(22),inst_27283);
} else {
if((state_val_27370 === (31))){
var inst_27367 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27369__$1,inst_27367);
} else {
if((state_val_27370 === (32))){
var inst_27322 = (state_27369[(16)]);
var inst_27327 = inst_27322.cljs$lang$protocol_mask$partition0$;
var inst_27328 = (inst_27327 & (64));
var inst_27329 = inst_27322.cljs$core$ISeq$;
var inst_27330 = (cljs.core.PROTOCOL_SENTINEL === inst_27329);
var inst_27331 = ((inst_27328) || (inst_27330));
var state_27369__$1 = state_27369;
if(cljs.core.truth_(inst_27331)){
var statearr_27389_27469 = state_27369__$1;
(statearr_27389_27469[(1)] = (35));

} else {
var statearr_27390_27470 = state_27369__$1;
(statearr_27390_27470[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (40))){
var inst_27344 = (state_27369[(20)]);
var inst_27343 = (state_27369[(2)]);
var inst_27344__$1 = cljs.core.get.call(null,inst_27343,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27345 = cljs.core.get.call(null,inst_27343,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27346 = cljs.core.not_empty.call(null,inst_27344__$1);
var state_27369__$1 = (function (){var statearr_27391 = state_27369;
(statearr_27391[(21)] = inst_27345);

(statearr_27391[(20)] = inst_27344__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27346)){
var statearr_27392_27471 = state_27369__$1;
(statearr_27392_27471[(1)] = (41));

} else {
var statearr_27393_27472 = state_27369__$1;
(statearr_27393_27472[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (33))){
var state_27369__$1 = state_27369;
var statearr_27394_27473 = state_27369__$1;
(statearr_27394_27473[(2)] = false);

(statearr_27394_27473[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (13))){
var inst_27242 = (state_27369[(22)]);
var inst_27246 = cljs.core.chunk_first.call(null,inst_27242);
var inst_27247 = cljs.core.chunk_rest.call(null,inst_27242);
var inst_27248 = cljs.core.count.call(null,inst_27246);
var inst_27229 = inst_27247;
var inst_27230 = inst_27246;
var inst_27231 = inst_27248;
var inst_27232 = (0);
var state_27369__$1 = (function (){var statearr_27395 = state_27369;
(statearr_27395[(7)] = inst_27231);

(statearr_27395[(8)] = inst_27229);

(statearr_27395[(9)] = inst_27232);

(statearr_27395[(10)] = inst_27230);

return statearr_27395;
})();
var statearr_27396_27474 = state_27369__$1;
(statearr_27396_27474[(2)] = null);

(statearr_27396_27474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (22))){
var inst_27285 = (state_27369[(23)]);
var inst_27282 = (state_27369[(19)]);
var inst_27290 = (state_27369[(24)]);
var inst_27286 = (state_27369[(25)]);
var inst_27285__$1 = (state_27369[(2)]);
var inst_27286__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27285__$1);
var inst_27287 = (function (){var all_files = inst_27282;
var res_SINGLEQUOTE_ = inst_27285__$1;
var res = inst_27286__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27285,inst_27282,inst_27290,inst_27286,inst_27285__$1,inst_27286__$1,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27211_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27211_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27285,inst_27282,inst_27290,inst_27286,inst_27285__$1,inst_27286__$1,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27288 = cljs.core.filter.call(null,inst_27287,inst_27285__$1);
var inst_27289 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27290__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27289);
var inst_27291 = cljs.core.not_empty.call(null,inst_27290__$1);
var state_27369__$1 = (function (){var statearr_27397 = state_27369;
(statearr_27397[(23)] = inst_27285__$1);

(statearr_27397[(26)] = inst_27288);

(statearr_27397[(24)] = inst_27290__$1);

(statearr_27397[(25)] = inst_27286__$1);

return statearr_27397;
})();
if(cljs.core.truth_(inst_27291)){
var statearr_27398_27475 = state_27369__$1;
(statearr_27398_27475[(1)] = (23));

} else {
var statearr_27399_27476 = state_27369__$1;
(statearr_27399_27476[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (36))){
var state_27369__$1 = state_27369;
var statearr_27400_27477 = state_27369__$1;
(statearr_27400_27477[(2)] = false);

(statearr_27400_27477[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (41))){
var inst_27344 = (state_27369[(20)]);
var inst_27348 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27349 = cljs.core.map.call(null,inst_27348,inst_27344);
var inst_27350 = cljs.core.pr_str.call(null,inst_27349);
var inst_27351 = ["figwheel-no-load meta-data: ",inst_27350].join('');
var inst_27352 = figwheel.client.utils.log.call(null,inst_27351);
var state_27369__$1 = state_27369;
var statearr_27401_27478 = state_27369__$1;
(statearr_27401_27478[(2)] = inst_27352);

(statearr_27401_27478[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (43))){
var inst_27345 = (state_27369[(21)]);
var inst_27355 = (state_27369[(2)]);
var inst_27356 = cljs.core.not_empty.call(null,inst_27345);
var state_27369__$1 = (function (){var statearr_27402 = state_27369;
(statearr_27402[(27)] = inst_27355);

return statearr_27402;
})();
if(cljs.core.truth_(inst_27356)){
var statearr_27403_27479 = state_27369__$1;
(statearr_27403_27479[(1)] = (44));

} else {
var statearr_27404_27480 = state_27369__$1;
(statearr_27404_27480[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (29))){
var inst_27322 = (state_27369[(16)]);
var inst_27285 = (state_27369[(23)]);
var inst_27288 = (state_27369[(26)]);
var inst_27282 = (state_27369[(19)]);
var inst_27290 = (state_27369[(24)]);
var inst_27286 = (state_27369[(25)]);
var inst_27318 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27321 = (function (){var all_files = inst_27282;
var res_SINGLEQUOTE_ = inst_27285;
var res = inst_27286;
var files_not_loaded = inst_27288;
var dependencies_that_loaded = inst_27290;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27322,inst_27285,inst_27288,inst_27282,inst_27290,inst_27286,inst_27318,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27320){
var map__27405 = p__27320;
var map__27405__$1 = (((((!((map__27405 == null))))?(((((map__27405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27405):map__27405);
var namespace = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27322,inst_27285,inst_27288,inst_27282,inst_27290,inst_27286,inst_27318,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27322__$1 = cljs.core.group_by.call(null,inst_27321,inst_27288);
var inst_27324 = (inst_27322__$1 == null);
var inst_27325 = cljs.core.not.call(null,inst_27324);
var state_27369__$1 = (function (){var statearr_27407 = state_27369;
(statearr_27407[(16)] = inst_27322__$1);

(statearr_27407[(28)] = inst_27318);

return statearr_27407;
})();
if(inst_27325){
var statearr_27408_27481 = state_27369__$1;
(statearr_27408_27481[(1)] = (32));

} else {
var statearr_27409_27482 = state_27369__$1;
(statearr_27409_27482[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (44))){
var inst_27345 = (state_27369[(21)]);
var inst_27358 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27345);
var inst_27359 = cljs.core.pr_str.call(null,inst_27358);
var inst_27360 = ["not required: ",inst_27359].join('');
var inst_27361 = figwheel.client.utils.log.call(null,inst_27360);
var state_27369__$1 = state_27369;
var statearr_27410_27483 = state_27369__$1;
(statearr_27410_27483[(2)] = inst_27361);

(statearr_27410_27483[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (6))){
var inst_27263 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27411_27484 = state_27369__$1;
(statearr_27411_27484[(2)] = inst_27263);

(statearr_27411_27484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (28))){
var inst_27288 = (state_27369[(26)]);
var inst_27315 = (state_27369[(2)]);
var inst_27316 = cljs.core.not_empty.call(null,inst_27288);
var state_27369__$1 = (function (){var statearr_27412 = state_27369;
(statearr_27412[(29)] = inst_27315);

return statearr_27412;
})();
if(cljs.core.truth_(inst_27316)){
var statearr_27413_27485 = state_27369__$1;
(statearr_27413_27485[(1)] = (29));

} else {
var statearr_27414_27486 = state_27369__$1;
(statearr_27414_27486[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (25))){
var inst_27286 = (state_27369[(25)]);
var inst_27302 = (state_27369[(2)]);
var inst_27303 = cljs.core.not_empty.call(null,inst_27286);
var state_27369__$1 = (function (){var statearr_27415 = state_27369;
(statearr_27415[(30)] = inst_27302);

return statearr_27415;
})();
if(cljs.core.truth_(inst_27303)){
var statearr_27416_27487 = state_27369__$1;
(statearr_27416_27487[(1)] = (26));

} else {
var statearr_27417_27488 = state_27369__$1;
(statearr_27417_27488[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (34))){
var inst_27338 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
if(cljs.core.truth_(inst_27338)){
var statearr_27418_27489 = state_27369__$1;
(statearr_27418_27489[(1)] = (38));

} else {
var statearr_27419_27490 = state_27369__$1;
(statearr_27419_27490[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (17))){
var state_27369__$1 = state_27369;
var statearr_27420_27491 = state_27369__$1;
(statearr_27420_27491[(2)] = recompile_dependents);

(statearr_27420_27491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (3))){
var state_27369__$1 = state_27369;
var statearr_27421_27492 = state_27369__$1;
(statearr_27421_27492[(2)] = null);

(statearr_27421_27492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (12))){
var inst_27259 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27422_27493 = state_27369__$1;
(statearr_27422_27493[(2)] = inst_27259);

(statearr_27422_27493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (2))){
var inst_27221 = (state_27369[(13)]);
var inst_27228 = cljs.core.seq.call(null,inst_27221);
var inst_27229 = inst_27228;
var inst_27230 = null;
var inst_27231 = (0);
var inst_27232 = (0);
var state_27369__$1 = (function (){var statearr_27423 = state_27369;
(statearr_27423[(7)] = inst_27231);

(statearr_27423[(8)] = inst_27229);

(statearr_27423[(9)] = inst_27232);

(statearr_27423[(10)] = inst_27230);

return statearr_27423;
})();
var statearr_27424_27494 = state_27369__$1;
(statearr_27424_27494[(2)] = null);

(statearr_27424_27494[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (23))){
var inst_27285 = (state_27369[(23)]);
var inst_27288 = (state_27369[(26)]);
var inst_27282 = (state_27369[(19)]);
var inst_27290 = (state_27369[(24)]);
var inst_27286 = (state_27369[(25)]);
var inst_27293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27295 = (function (){var all_files = inst_27282;
var res_SINGLEQUOTE_ = inst_27285;
var res = inst_27286;
var files_not_loaded = inst_27288;
var dependencies_that_loaded = inst_27290;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27285,inst_27288,inst_27282,inst_27290,inst_27286,inst_27293,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27294){
var map__27425 = p__27294;
var map__27425__$1 = (((((!((map__27425 == null))))?(((((map__27425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27425):map__27425);
var request_url = cljs.core.get.call(null,map__27425__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27285,inst_27288,inst_27282,inst_27290,inst_27286,inst_27293,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27296 = cljs.core.reverse.call(null,inst_27290);
var inst_27297 = cljs.core.map.call(null,inst_27295,inst_27296);
var inst_27298 = cljs.core.pr_str.call(null,inst_27297);
var inst_27299 = figwheel.client.utils.log.call(null,inst_27298);
var state_27369__$1 = (function (){var statearr_27427 = state_27369;
(statearr_27427[(31)] = inst_27293);

return statearr_27427;
})();
var statearr_27428_27495 = state_27369__$1;
(statearr_27428_27495[(2)] = inst_27299);

(statearr_27428_27495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (35))){
var state_27369__$1 = state_27369;
var statearr_27429_27496 = state_27369__$1;
(statearr_27429_27496[(2)] = true);

(statearr_27429_27496[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (19))){
var inst_27272 = (state_27369[(12)]);
var inst_27278 = figwheel.client.file_reloading.expand_files.call(null,inst_27272);
var state_27369__$1 = state_27369;
var statearr_27430_27497 = state_27369__$1;
(statearr_27430_27497[(2)] = inst_27278);

(statearr_27430_27497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (11))){
var state_27369__$1 = state_27369;
var statearr_27431_27498 = state_27369__$1;
(statearr_27431_27498[(2)] = null);

(statearr_27431_27498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (9))){
var inst_27261 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27432_27499 = state_27369__$1;
(statearr_27432_27499[(2)] = inst_27261);

(statearr_27432_27499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (5))){
var inst_27231 = (state_27369[(7)]);
var inst_27232 = (state_27369[(9)]);
var inst_27234 = (inst_27232 < inst_27231);
var inst_27235 = inst_27234;
var state_27369__$1 = state_27369;
if(cljs.core.truth_(inst_27235)){
var statearr_27433_27500 = state_27369__$1;
(statearr_27433_27500[(1)] = (7));

} else {
var statearr_27434_27501 = state_27369__$1;
(statearr_27434_27501[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (14))){
var inst_27242 = (state_27369[(22)]);
var inst_27251 = cljs.core.first.call(null,inst_27242);
var inst_27252 = figwheel.client.file_reloading.eval_body.call(null,inst_27251,opts);
var inst_27253 = cljs.core.next.call(null,inst_27242);
var inst_27229 = inst_27253;
var inst_27230 = null;
var inst_27231 = (0);
var inst_27232 = (0);
var state_27369__$1 = (function (){var statearr_27435 = state_27369;
(statearr_27435[(32)] = inst_27252);

(statearr_27435[(7)] = inst_27231);

(statearr_27435[(8)] = inst_27229);

(statearr_27435[(9)] = inst_27232);

(statearr_27435[(10)] = inst_27230);

return statearr_27435;
})();
var statearr_27436_27502 = state_27369__$1;
(statearr_27436_27502[(2)] = null);

(statearr_27436_27502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (45))){
var state_27369__$1 = state_27369;
var statearr_27437_27503 = state_27369__$1;
(statearr_27437_27503[(2)] = null);

(statearr_27437_27503[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (26))){
var inst_27285 = (state_27369[(23)]);
var inst_27288 = (state_27369[(26)]);
var inst_27282 = (state_27369[(19)]);
var inst_27290 = (state_27369[(24)]);
var inst_27286 = (state_27369[(25)]);
var inst_27305 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27307 = (function (){var all_files = inst_27282;
var res_SINGLEQUOTE_ = inst_27285;
var res = inst_27286;
var files_not_loaded = inst_27288;
var dependencies_that_loaded = inst_27290;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27285,inst_27288,inst_27282,inst_27290,inst_27286,inst_27305,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27306){
var map__27438 = p__27306;
var map__27438__$1 = (((((!((map__27438 == null))))?(((((map__27438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27438):map__27438);
var namespace = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27285,inst_27288,inst_27282,inst_27290,inst_27286,inst_27305,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27308 = cljs.core.map.call(null,inst_27307,inst_27286);
var inst_27309 = cljs.core.pr_str.call(null,inst_27308);
var inst_27310 = figwheel.client.utils.log.call(null,inst_27309);
var inst_27311 = (function (){var all_files = inst_27282;
var res_SINGLEQUOTE_ = inst_27285;
var res = inst_27286;
var files_not_loaded = inst_27288;
var dependencies_that_loaded = inst_27290;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27285,inst_27288,inst_27282,inst_27290,inst_27286,inst_27305,inst_27307,inst_27308,inst_27309,inst_27310,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27285,inst_27288,inst_27282,inst_27290,inst_27286,inst_27305,inst_27307,inst_27308,inst_27309,inst_27310,state_val_27370,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27312 = setTimeout(inst_27311,(10));
var state_27369__$1 = (function (){var statearr_27440 = state_27369;
(statearr_27440[(33)] = inst_27310);

(statearr_27440[(34)] = inst_27305);

return statearr_27440;
})();
var statearr_27441_27504 = state_27369__$1;
(statearr_27441_27504[(2)] = inst_27312);

(statearr_27441_27504[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (16))){
var state_27369__$1 = state_27369;
var statearr_27442_27505 = state_27369__$1;
(statearr_27442_27505[(2)] = reload_dependents);

(statearr_27442_27505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (38))){
var inst_27322 = (state_27369[(16)]);
var inst_27340 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27322);
var state_27369__$1 = state_27369;
var statearr_27443_27506 = state_27369__$1;
(statearr_27443_27506[(2)] = inst_27340);

(statearr_27443_27506[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (30))){
var state_27369__$1 = state_27369;
var statearr_27444_27507 = state_27369__$1;
(statearr_27444_27507[(2)] = null);

(statearr_27444_27507[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (10))){
var inst_27242 = (state_27369[(22)]);
var inst_27244 = cljs.core.chunked_seq_QMARK_.call(null,inst_27242);
var state_27369__$1 = state_27369;
if(inst_27244){
var statearr_27445_27508 = state_27369__$1;
(statearr_27445_27508[(1)] = (13));

} else {
var statearr_27446_27509 = state_27369__$1;
(statearr_27446_27509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (18))){
var inst_27276 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
if(cljs.core.truth_(inst_27276)){
var statearr_27447_27510 = state_27369__$1;
(statearr_27447_27510[(1)] = (19));

} else {
var statearr_27448_27511 = state_27369__$1;
(statearr_27448_27511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (42))){
var state_27369__$1 = state_27369;
var statearr_27449_27512 = state_27369__$1;
(statearr_27449_27512[(2)] = null);

(statearr_27449_27512[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (37))){
var inst_27335 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27450_27513 = state_27369__$1;
(statearr_27450_27513[(2)] = inst_27335);

(statearr_27450_27513[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (8))){
var inst_27229 = (state_27369[(8)]);
var inst_27242 = (state_27369[(22)]);
var inst_27242__$1 = cljs.core.seq.call(null,inst_27229);
var state_27369__$1 = (function (){var statearr_27451 = state_27369;
(statearr_27451[(22)] = inst_27242__$1);

return statearr_27451;
})();
if(inst_27242__$1){
var statearr_27452_27514 = state_27369__$1;
(statearr_27452_27514[(1)] = (10));

} else {
var statearr_27453_27515 = state_27369__$1;
(statearr_27453_27515[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23326__auto__,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto____0 = (function (){
var statearr_27454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27454[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto__);

(statearr_27454[(1)] = (1));

return statearr_27454;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto____1 = (function (state_27369){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_27369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e27455){if((e27455 instanceof Object)){
var ex__23330__auto__ = e27455;
var statearr_27456_27516 = state_27369;
(statearr_27456_27516[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27517 = state_27369;
state_27369 = G__27517;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto__ = function(state_27369){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto____1.call(this,state_27369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23423__auto__ = (function (){var statearr_27457 = f__23422__auto__.call(null);
(statearr_27457[(6)] = c__23421__auto__);

return statearr_27457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__,map__27214,map__27214__$1,opts,before_jsload,on_jsload,reload_dependents,map__27215,map__27215__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23421__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27520,link){
var map__27521 = p__27520;
var map__27521__$1 = (((((!((map__27521 == null))))?(((((map__27521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27521):map__27521);
var file = cljs.core.get.call(null,map__27521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__27521,map__27521__$1,file){
return (function (p1__27518_SHARP_,p2__27519_SHARP_){
if(cljs.core._EQ_.call(null,p1__27518_SHARP_,p2__27519_SHARP_)){
return p1__27518_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__27521,map__27521__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27524){
var map__27525 = p__27524;
var map__27525__$1 = (((((!((map__27525 == null))))?(((((map__27525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27525):map__27525);
var match_length = cljs.core.get.call(null,map__27525__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27525__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27523_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27523_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
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
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27527_SHARP_,p2__27528_SHARP_){
return cljs.core.assoc.call(null,p1__27527_SHARP_,cljs.core.get.call(null,p2__27528_SHARP_,key),p2__27528_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27529 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27529);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27529);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27530,p__27531){
var map__27532 = p__27530;
var map__27532__$1 = (((((!((map__27532 == null))))?(((((map__27532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27532):map__27532);
var on_cssload = cljs.core.get.call(null,map__27532__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27533 = p__27531;
var map__27533__$1 = (((((!((map__27533 == null))))?(((((map__27533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27533):map__27533);
var files_msg = map__27533__$1;
var files = cljs.core.get.call(null,map__27533__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1582209464531
