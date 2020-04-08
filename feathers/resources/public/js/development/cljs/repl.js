// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27538){
var map__27539 = p__27538;
var map__27539__$1 = (((((!((map__27539 == null))))?(((((map__27539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27539):map__27539);
var m = map__27539__$1;
var n = cljs.core.get.call(null,map__27539__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27541_27573 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27542_27574 = null;
var count__27543_27575 = (0);
var i__27544_27576 = (0);
while(true){
if((i__27544_27576 < count__27543_27575)){
var f_27577 = cljs.core._nth.call(null,chunk__27542_27574,i__27544_27576);
cljs.core.println.call(null,"  ",f_27577);


var G__27578 = seq__27541_27573;
var G__27579 = chunk__27542_27574;
var G__27580 = count__27543_27575;
var G__27581 = (i__27544_27576 + (1));
seq__27541_27573 = G__27578;
chunk__27542_27574 = G__27579;
count__27543_27575 = G__27580;
i__27544_27576 = G__27581;
continue;
} else {
var temp__5735__auto___27582 = cljs.core.seq.call(null,seq__27541_27573);
if(temp__5735__auto___27582){
var seq__27541_27583__$1 = temp__5735__auto___27582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27541_27583__$1)){
var c__4550__auto___27584 = cljs.core.chunk_first.call(null,seq__27541_27583__$1);
var G__27585 = cljs.core.chunk_rest.call(null,seq__27541_27583__$1);
var G__27586 = c__4550__auto___27584;
var G__27587 = cljs.core.count.call(null,c__4550__auto___27584);
var G__27588 = (0);
seq__27541_27573 = G__27585;
chunk__27542_27574 = G__27586;
count__27543_27575 = G__27587;
i__27544_27576 = G__27588;
continue;
} else {
var f_27589 = cljs.core.first.call(null,seq__27541_27583__$1);
cljs.core.println.call(null,"  ",f_27589);


var G__27590 = cljs.core.next.call(null,seq__27541_27583__$1);
var G__27591 = null;
var G__27592 = (0);
var G__27593 = (0);
seq__27541_27573 = G__27590;
chunk__27542_27574 = G__27591;
count__27543_27575 = G__27592;
i__27544_27576 = G__27593;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27594 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27594);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27594)))?cljs.core.second.call(null,arglists_27594):arglists_27594));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27545_27595 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27546_27596 = null;
var count__27547_27597 = (0);
var i__27548_27598 = (0);
while(true){
if((i__27548_27598 < count__27547_27597)){
var vec__27559_27599 = cljs.core._nth.call(null,chunk__27546_27596,i__27548_27598);
var name_27600 = cljs.core.nth.call(null,vec__27559_27599,(0),null);
var map__27562_27601 = cljs.core.nth.call(null,vec__27559_27599,(1),null);
var map__27562_27602__$1 = (((((!((map__27562_27601 == null))))?(((((map__27562_27601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27562_27601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27562_27601):map__27562_27601);
var doc_27603 = cljs.core.get.call(null,map__27562_27602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27604 = cljs.core.get.call(null,map__27562_27602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27600);

cljs.core.println.call(null," ",arglists_27604);

if(cljs.core.truth_(doc_27603)){
cljs.core.println.call(null," ",doc_27603);
} else {
}


var G__27605 = seq__27545_27595;
var G__27606 = chunk__27546_27596;
var G__27607 = count__27547_27597;
var G__27608 = (i__27548_27598 + (1));
seq__27545_27595 = G__27605;
chunk__27546_27596 = G__27606;
count__27547_27597 = G__27607;
i__27548_27598 = G__27608;
continue;
} else {
var temp__5735__auto___27609 = cljs.core.seq.call(null,seq__27545_27595);
if(temp__5735__auto___27609){
var seq__27545_27610__$1 = temp__5735__auto___27609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27545_27610__$1)){
var c__4550__auto___27611 = cljs.core.chunk_first.call(null,seq__27545_27610__$1);
var G__27612 = cljs.core.chunk_rest.call(null,seq__27545_27610__$1);
var G__27613 = c__4550__auto___27611;
var G__27614 = cljs.core.count.call(null,c__4550__auto___27611);
var G__27615 = (0);
seq__27545_27595 = G__27612;
chunk__27546_27596 = G__27613;
count__27547_27597 = G__27614;
i__27548_27598 = G__27615;
continue;
} else {
var vec__27564_27616 = cljs.core.first.call(null,seq__27545_27610__$1);
var name_27617 = cljs.core.nth.call(null,vec__27564_27616,(0),null);
var map__27567_27618 = cljs.core.nth.call(null,vec__27564_27616,(1),null);
var map__27567_27619__$1 = (((((!((map__27567_27618 == null))))?(((((map__27567_27618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27567_27618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27567_27618):map__27567_27618);
var doc_27620 = cljs.core.get.call(null,map__27567_27619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27621 = cljs.core.get.call(null,map__27567_27619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27617);

cljs.core.println.call(null," ",arglists_27621);

if(cljs.core.truth_(doc_27620)){
cljs.core.println.call(null," ",doc_27620);
} else {
}


var G__27622 = cljs.core.next.call(null,seq__27545_27610__$1);
var G__27623 = null;
var G__27624 = (0);
var G__27625 = (0);
seq__27545_27595 = G__27622;
chunk__27546_27596 = G__27623;
count__27547_27597 = G__27624;
i__27548_27598 = G__27625;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__27569 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27570 = null;
var count__27571 = (0);
var i__27572 = (0);
while(true){
if((i__27572 < count__27571)){
var role = cljs.core._nth.call(null,chunk__27570,i__27572);
var temp__5735__auto___27626__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27626__$1)){
var spec_27627 = temp__5735__auto___27626__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27627));
} else {
}


var G__27628 = seq__27569;
var G__27629 = chunk__27570;
var G__27630 = count__27571;
var G__27631 = (i__27572 + (1));
seq__27569 = G__27628;
chunk__27570 = G__27629;
count__27571 = G__27630;
i__27572 = G__27631;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__27569);
if(temp__5735__auto____$1){
var seq__27569__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27569__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27569__$1);
var G__27632 = cljs.core.chunk_rest.call(null,seq__27569__$1);
var G__27633 = c__4550__auto__;
var G__27634 = cljs.core.count.call(null,c__4550__auto__);
var G__27635 = (0);
seq__27569 = G__27632;
chunk__27570 = G__27633;
count__27571 = G__27634;
i__27572 = G__27635;
continue;
} else {
var role = cljs.core.first.call(null,seq__27569__$1);
var temp__5735__auto___27636__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27636__$2)){
var spec_27637 = temp__5735__auto___27636__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27637));
} else {
}


var G__27638 = cljs.core.next.call(null,seq__27569__$1);
var G__27639 = null;
var G__27640 = (0);
var G__27641 = (0);
seq__27569 = G__27638;
chunk__27570 = G__27639;
count__27571 = G__27640;
i__27572 = G__27641;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27642 = cljs.core.conj.call(null,via,t);
var G__27643 = cljs.core.ex_cause.call(null,t);
via = G__27642;
t = G__27643;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27646 = datafied_throwable;
var map__27646__$1 = (((((!((map__27646 == null))))?(((((map__27646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27646):map__27646);
var via = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27647 = cljs.core.last.call(null,via);
var map__27647__$1 = (((((!((map__27647 == null))))?(((((map__27647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27647):map__27647);
var type = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27648 = data;
var map__27648__$1 = (((((!((map__27648 == null))))?(((((map__27648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27648):map__27648);
var problems = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27649 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27649__$1 = (((((!((map__27649 == null))))?(((((map__27649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27649):map__27649);
var top_data = map__27649__$1;
var source = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27654 = phase;
var G__27654__$1 = (((G__27654 instanceof cljs.core.Keyword))?G__27654.fqn:null);
switch (G__27654__$1) {
case "read-source":
var map__27655 = data;
var map__27655__$1 = (((((!((map__27655 == null))))?(((((map__27655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27655):map__27655);
var line = cljs.core.get.call(null,map__27655__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27655__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27657 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27657__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27657,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27657);
var G__27657__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27657__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27657__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27657__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27657__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27658 = top_data;
var G__27658__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27658,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27658);
var G__27658__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27658__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27658__$1);
var G__27658__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27658__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27658__$2);
var G__27658__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27658__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27658__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27658__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27658__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27659 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27659,(0),null);
var method = cljs.core.nth.call(null,vec__27659,(1),null);
var file = cljs.core.nth.call(null,vec__27659,(2),null);
var line = cljs.core.nth.call(null,vec__27659,(3),null);
var G__27662 = top_data;
var G__27662__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27662,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27662);
var G__27662__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27662__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27662__$1);
var G__27662__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__27662__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27662__$2);
var G__27662__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27662__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27662__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27662__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27662__$4;
}

break;
case "execution":
var vec__27663 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27663,(0),null);
var method = cljs.core.nth.call(null,vec__27663,(1),null);
var file = cljs.core.nth.call(null,vec__27663,(2),null);
var line = cljs.core.nth.call(null,vec__27663,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__27663,source__$1,method,file,line,G__27654,G__27654__$1,map__27646,map__27646__$1,via,trace,phase,map__27647,map__27647__$1,type,message,data,map__27648,map__27648__$1,problems,fn,caller,map__27649,map__27649__$1,top_data,source){
return (function (p1__27645_SHARP_){
var or__4131__auto__ = (p1__27645_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27645_SHARP_);
}
});})(vec__27663,source__$1,method,file,line,G__27654,G__27654__$1,map__27646,map__27646__$1,via,trace,phase,map__27647,map__27647__$1,type,message,data,map__27648,map__27648__$1,problems,fn,caller,map__27649,map__27649__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27666 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27666__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27666,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27666);
var G__27666__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27666__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27666__$1);
var G__27666__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__27666__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27666__$2);
var G__27666__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27666__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27666__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27666__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27666__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27654__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27670){
var map__27671 = p__27670;
var map__27671__$1 = (((((!((map__27671 == null))))?(((((map__27671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27671):map__27671);
var triage_data = map__27671__$1;
var phase = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27673 = phase;
var G__27673__$1 = (((G__27673 instanceof cljs.core.Keyword))?G__27673.fqn:null);
switch (G__27673__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27674_27683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27675_27684 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27676_27685 = true;
var _STAR_print_fn_STAR__temp_val__27677_27686 = ((function (_STAR_print_newline_STAR__orig_val__27674_27683,_STAR_print_fn_STAR__orig_val__27675_27684,_STAR_print_newline_STAR__temp_val__27676_27685,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27674_27683,_STAR_print_fn_STAR__orig_val__27675_27684,_STAR_print_newline_STAR__temp_val__27676_27685,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27676_27685;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27677_27686;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27674_27683,_STAR_print_fn_STAR__orig_val__27675_27684,_STAR_print_newline_STAR__temp_val__27676_27685,_STAR_print_fn_STAR__temp_val__27677_27686,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27674_27683,_STAR_print_fn_STAR__orig_val__27675_27684,_STAR_print_newline_STAR__temp_val__27676_27685,_STAR_print_fn_STAR__temp_val__27677_27686,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27668_SHARP_){
return cljs.core.dissoc.call(null,p1__27668_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27674_27683,_STAR_print_fn_STAR__orig_val__27675_27684,_STAR_print_newline_STAR__temp_val__27676_27685,_STAR_print_fn_STAR__temp_val__27677_27686,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27674_27683,_STAR_print_fn_STAR__orig_val__27675_27684,_STAR_print_newline_STAR__temp_val__27676_27685,_STAR_print_fn_STAR__temp_val__27677_27686,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27675_27684;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27674_27683;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27678_27687 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27679_27688 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27680_27689 = true;
var _STAR_print_fn_STAR__temp_val__27681_27690 = ((function (_STAR_print_newline_STAR__orig_val__27678_27687,_STAR_print_fn_STAR__orig_val__27679_27688,_STAR_print_newline_STAR__temp_val__27680_27689,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27678_27687,_STAR_print_fn_STAR__orig_val__27679_27688,_STAR_print_newline_STAR__temp_val__27680_27689,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27680_27689;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27681_27690;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27678_27687,_STAR_print_fn_STAR__orig_val__27679_27688,_STAR_print_newline_STAR__temp_val__27680_27689,_STAR_print_fn_STAR__temp_val__27681_27690,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27678_27687,_STAR_print_fn_STAR__orig_val__27679_27688,_STAR_print_newline_STAR__temp_val__27680_27689,_STAR_print_fn_STAR__temp_val__27681_27690,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27669_SHARP_){
return cljs.core.dissoc.call(null,p1__27669_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27678_27687,_STAR_print_fn_STAR__orig_val__27679_27688,_STAR_print_newline_STAR__temp_val__27680_27689,_STAR_print_fn_STAR__temp_val__27681_27690,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27678_27687,_STAR_print_fn_STAR__orig_val__27679_27688,_STAR_print_newline_STAR__temp_val__27680_27689,_STAR_print_fn_STAR__temp_val__27681_27690,sb__4661__auto__,G__27673,G__27673__$1,loc,class_name,simple_class,cause_type,format,map__27671,map__27671__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27679_27688;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27678_27687;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27673__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1582209464772
