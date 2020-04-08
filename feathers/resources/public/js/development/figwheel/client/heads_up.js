// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27710 = arguments.length;
var i__4731__auto___27711 = (0);
while(true){
if((i__4731__auto___27711 < len__4730__auto___27710)){
args__4736__auto__.push((arguments[i__4731__auto___27711]));

var G__27712 = (i__4731__auto___27711 + (1));
i__4731__auto___27711 = G__27712;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27702_27713 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27703_27714 = null;
var count__27704_27715 = (0);
var i__27705_27716 = (0);
while(true){
if((i__27705_27716 < count__27704_27715)){
var k_27717 = cljs.core._nth.call(null,chunk__27703_27714,i__27705_27716);
e.setAttribute(cljs.core.name.call(null,k_27717),cljs.core.get.call(null,attrs,k_27717));


var G__27718 = seq__27702_27713;
var G__27719 = chunk__27703_27714;
var G__27720 = count__27704_27715;
var G__27721 = (i__27705_27716 + (1));
seq__27702_27713 = G__27718;
chunk__27703_27714 = G__27719;
count__27704_27715 = G__27720;
i__27705_27716 = G__27721;
continue;
} else {
var temp__5735__auto___27722 = cljs.core.seq.call(null,seq__27702_27713);
if(temp__5735__auto___27722){
var seq__27702_27723__$1 = temp__5735__auto___27722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27702_27723__$1)){
var c__4550__auto___27724 = cljs.core.chunk_first.call(null,seq__27702_27723__$1);
var G__27725 = cljs.core.chunk_rest.call(null,seq__27702_27723__$1);
var G__27726 = c__4550__auto___27724;
var G__27727 = cljs.core.count.call(null,c__4550__auto___27724);
var G__27728 = (0);
seq__27702_27713 = G__27725;
chunk__27703_27714 = G__27726;
count__27704_27715 = G__27727;
i__27705_27716 = G__27728;
continue;
} else {
var k_27729 = cljs.core.first.call(null,seq__27702_27723__$1);
e.setAttribute(cljs.core.name.call(null,k_27729),cljs.core.get.call(null,attrs,k_27729));


var G__27730 = cljs.core.next.call(null,seq__27702_27723__$1);
var G__27731 = null;
var G__27732 = (0);
var G__27733 = (0);
seq__27702_27713 = G__27730;
chunk__27703_27714 = G__27731;
count__27704_27715 = G__27732;
i__27705_27716 = G__27733;
continue;
}
} else {
}
}
break;
}

var seq__27706_27734 = cljs.core.seq.call(null,children);
var chunk__27707_27735 = null;
var count__27708_27736 = (0);
var i__27709_27737 = (0);
while(true){
if((i__27709_27737 < count__27708_27736)){
var ch_27738 = cljs.core._nth.call(null,chunk__27707_27735,i__27709_27737);
e.appendChild(ch_27738);


var G__27739 = seq__27706_27734;
var G__27740 = chunk__27707_27735;
var G__27741 = count__27708_27736;
var G__27742 = (i__27709_27737 + (1));
seq__27706_27734 = G__27739;
chunk__27707_27735 = G__27740;
count__27708_27736 = G__27741;
i__27709_27737 = G__27742;
continue;
} else {
var temp__5735__auto___27743 = cljs.core.seq.call(null,seq__27706_27734);
if(temp__5735__auto___27743){
var seq__27706_27744__$1 = temp__5735__auto___27743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27706_27744__$1)){
var c__4550__auto___27745 = cljs.core.chunk_first.call(null,seq__27706_27744__$1);
var G__27746 = cljs.core.chunk_rest.call(null,seq__27706_27744__$1);
var G__27747 = c__4550__auto___27745;
var G__27748 = cljs.core.count.call(null,c__4550__auto___27745);
var G__27749 = (0);
seq__27706_27734 = G__27746;
chunk__27707_27735 = G__27747;
count__27708_27736 = G__27748;
i__27709_27737 = G__27749;
continue;
} else {
var ch_27750 = cljs.core.first.call(null,seq__27706_27744__$1);
e.appendChild(ch_27750);


var G__27751 = cljs.core.next.call(null,seq__27706_27744__$1);
var G__27752 = null;
var G__27753 = (0);
var G__27754 = (0);
seq__27706_27734 = G__27751;
chunk__27707_27735 = G__27752;
count__27708_27736 = G__27753;
i__27709_27737 = G__27754;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27699){
var G__27700 = cljs.core.first.call(null,seq27699);
var seq27699__$1 = cljs.core.next.call(null,seq27699);
var G__27701 = cljs.core.first.call(null,seq27699__$1);
var seq27699__$2 = cljs.core.next.call(null,seq27699__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27700,G__27701,seq27699__$2);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_27755 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_27755.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27755.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27755.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27755);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27756,st_map){
var map__27757 = p__27756;
var map__27757__$1 = (((((!((map__27757 == null))))?(((((map__27757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27757):map__27757);
var container_el = cljs.core.get.call(null,map__27757__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27757,map__27757__$1,container_el){
return (function (p__27759){
var vec__27760 = p__27759;
var k = cljs.core.nth.call(null,vec__27760,(0),null);
var v = cljs.core.nth.call(null,vec__27760,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__27757,map__27757__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27763,dom_str){
var map__27764 = p__27763;
var map__27764__$1 = (((((!((map__27764 == null))))?(((((map__27764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27764):map__27764);
var c = map__27764__$1;
var content_area_el = cljs.core.get.call(null,map__27764__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27766){
var map__27767 = p__27766;
var map__27767__$1 = (((((!((map__27767 == null))))?(((((map__27767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27767):map__27767);
var content_area_el = cljs.core.get.call(null,map__27767__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__){
return (function (state_27784){
var state_val_27785 = (state_27784[(1)]);
if((state_val_27785 === (1))){
var inst_27769 = (state_27784[(7)]);
var inst_27769__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27770 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27771 = ["10px","10px","100%","68px","1.0"];
var inst_27772 = cljs.core.PersistentHashMap.fromArrays(inst_27770,inst_27771);
var inst_27773 = cljs.core.merge.call(null,inst_27772,style);
var inst_27774 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27769__$1,inst_27773);
var inst_27775 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27769__$1,msg);
var inst_27776 = cljs.core.async.timeout.call(null,(300));
var state_27784__$1 = (function (){var statearr_27786 = state_27784;
(statearr_27786[(7)] = inst_27769__$1);

(statearr_27786[(8)] = inst_27774);

(statearr_27786[(9)] = inst_27775);

return statearr_27786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27784__$1,(2),inst_27776);
} else {
if((state_val_27785 === (2))){
var inst_27769 = (state_27784[(7)]);
var inst_27778 = (state_27784[(2)]);
var inst_27779 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27780 = ["auto"];
var inst_27781 = cljs.core.PersistentHashMap.fromArrays(inst_27779,inst_27780);
var inst_27782 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27769,inst_27781);
var state_27784__$1 = (function (){var statearr_27787 = state_27784;
(statearr_27787[(10)] = inst_27778);

return statearr_27787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27784__$1,inst_27782);
} else {
return null;
}
}
});})(c__23421__auto__))
;
return ((function (switch__23326__auto__,c__23421__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto____0 = (function (){
var statearr_27788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27788[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto__);

(statearr_27788[(1)] = (1));

return statearr_27788;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto____1 = (function (state_27784){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_27784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e27789){if((e27789 instanceof Object)){
var ex__23330__auto__ = e27789;
var statearr_27790_27792 = state_27784;
(statearr_27790_27792[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27793 = state_27784;
state_27784 = G__27793;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto__ = function(state_27784){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto____1.call(this,state_27784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__))
})();
var state__23423__auto__ = (function (){var statearr_27791 = f__23422__auto__.call(null);
(statearr_27791[(6)] = c__23421__auto__);

return statearr_27791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__))
);

return c__23421__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__27795 = arguments.length;
switch (G__27795) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__27797){
var map__27798 = p__27797;
var map__27798__$1 = (((((!((map__27798 == null))))?(((((map__27798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27798):map__27798);
var file = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4131__auto__ = file;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__27800){
var vec__27801 = p__27800;
var typ = cljs.core.nth.call(null,vec__27801,(0),null);
var line_number = cljs.core.nth.call(null,vec__27801,(1),null);
var line = cljs.core.nth.call(null,vec__27801,(2),null);
var pred__27804 = cljs.core._EQ_;
var expr__27805 = typ;
if(cljs.core.truth_(pred__27804.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__27805))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__27804.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__27805))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__27804.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__27805))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error))));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__27807_SHARP_){
return cljs.core.update_in.call(null,p1__27807_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__27808_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__27808_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__27811){
var map__27812 = p__27811;
var map__27812__$1 = (((((!((map__27812 == null))))?(((((map__27812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27812):map__27812);
var exception = map__27812__$1;
var message = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__4120__auto__ = file;
if(cljs.core.truth_(and__4120__auto__)){
return line;
} else {
return and__4120__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__27812,map__27812__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__27809_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27809_SHARP_),"</div>"].join('');
});})(last_message,map__27812,map__27812__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):""),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__27812,map__27812__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__27810_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__27810_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__27810_SHARP_)))].join('');
});})(last_message,map__27812,map__27812__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__27814){
var map__27815 = p__27814;
var map__27815__$1 = (((((!((map__27815 == null))))?(((((map__27815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27815):map__27815);
var file = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__27818 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__27818__$1 = (((((!((map__27818 == null))))?(((((map__27818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27818):map__27818);
var head = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__27821){
var map__27822 = p__27821;
var map__27822__$1 = (((((!((map__27822 == null))))?(((((map__27822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27822):map__27822);
var warning_data = map__27822__$1;
var file = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4120__auto__ = file;
if(cljs.core.truth_(and__4120__auto__)){
return line;
} else {
return and__4120__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__27822,map__27822__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__27820_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27820_SHARP_),"</div>"].join('');
});})(last_message,map__27822,map__27822__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__27824 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__27824__$1 = (((((!((map__27824 == null))))?(((((map__27824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27824):map__27824);
var head = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__27826){
var map__27827 = p__27826;
var map__27827__$1 = (((((!((map__27827 == null))))?(((((map__27827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27827):map__27827);
var warning_data = map__27827__$1;
var message = cljs.core.get.call(null,map__27827__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__27827__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27827__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27827__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27829 = message;
var G__27829__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27829)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27829);
var G__27829__$2 = (cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27829__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__27829__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27829__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__27829__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__27830){
var map__27831 = p__27830;
var map__27831__$1 = (((((!((map__27831 == null))))?(((((map__27831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27831):map__27831);
var warning_data = map__27831__$1;
var message = cljs.core.get.call(null,map__27831__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__27831__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27831__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27831__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__27833 = figwheel.client.heads_up.ensure_container.call(null);
var map__27833__$1 = (((((!((map__27833 == null))))?(((((map__27833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27833):map__27833);
var content_area_el = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5735__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5735__auto__)){
var last_child = temp__5735__auto__;
var temp__5733__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5733__auto__)){
var message_count = temp__5733__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__){
return (function (state_27852){
var state_val_27853 = (state_27852[(1)]);
if((state_val_27853 === (1))){
var inst_27835 = (state_27852[(7)]);
var inst_27835__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27836 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27837 = ["0.0"];
var inst_27838 = cljs.core.PersistentHashMap.fromArrays(inst_27836,inst_27837);
var inst_27839 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27835__$1,inst_27838);
var inst_27840 = cljs.core.async.timeout.call(null,(300));
var state_27852__$1 = (function (){var statearr_27854 = state_27852;
(statearr_27854[(8)] = inst_27839);

(statearr_27854[(7)] = inst_27835__$1);

return statearr_27854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27852__$1,(2),inst_27840);
} else {
if((state_val_27853 === (2))){
var inst_27835 = (state_27852[(7)]);
var inst_27842 = (state_27852[(2)]);
var inst_27843 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27844 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27845 = cljs.core.PersistentHashMap.fromArrays(inst_27843,inst_27844);
var inst_27846 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27835,inst_27845);
var inst_27847 = cljs.core.async.timeout.call(null,(200));
var state_27852__$1 = (function (){var statearr_27855 = state_27852;
(statearr_27855[(9)] = inst_27846);

(statearr_27855[(10)] = inst_27842);

return statearr_27855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27852__$1,(3),inst_27847);
} else {
if((state_val_27853 === (3))){
var inst_27835 = (state_27852[(7)]);
var inst_27849 = (state_27852[(2)]);
var inst_27850 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27835,"");
var state_27852__$1 = (function (){var statearr_27856 = state_27852;
(statearr_27856[(11)] = inst_27849);

return statearr_27856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27852__$1,inst_27850);
} else {
return null;
}
}
}
});})(c__23421__auto__))
;
return ((function (switch__23326__auto__,c__23421__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23327__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23327__auto____0 = (function (){
var statearr_27857 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27857[(0)] = figwheel$client$heads_up$clear_$_state_machine__23327__auto__);

(statearr_27857[(1)] = (1));

return statearr_27857;
});
var figwheel$client$heads_up$clear_$_state_machine__23327__auto____1 = (function (state_27852){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_27852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e27858){if((e27858 instanceof Object)){
var ex__23330__auto__ = e27858;
var statearr_27859_27861 = state_27852;
(statearr_27859_27861[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27862 = state_27852;
state_27852 = G__27862;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23327__auto__ = function(state_27852){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23327__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23327__auto____1.call(this,state_27852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23327__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23327__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__))
})();
var state__23423__auto__ = (function (){var statearr_27860 = f__23422__auto__.call(null);
(statearr_27860[(6)] = c__23421__auto__);

return statearr_27860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__))
);

return c__23421__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__){
return (function (state_27873){
var state_val_27874 = (state_27873[(1)]);
if((state_val_27874 === (1))){
var inst_27863 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27873__$1 = state_27873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27873__$1,(2),inst_27863);
} else {
if((state_val_27874 === (2))){
var inst_27865 = (state_27873[(2)]);
var inst_27866 = cljs.core.async.timeout.call(null,(400));
var state_27873__$1 = (function (){var statearr_27875 = state_27873;
(statearr_27875[(7)] = inst_27865);

return statearr_27875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27873__$1,(3),inst_27866);
} else {
if((state_val_27874 === (3))){
var inst_27868 = (state_27873[(2)]);
var inst_27869 = figwheel.client.heads_up.clear.call(null);
var state_27873__$1 = (function (){var statearr_27876 = state_27873;
(statearr_27876[(8)] = inst_27868);

return statearr_27876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27873__$1,(4),inst_27869);
} else {
if((state_val_27874 === (4))){
var inst_27871 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27873__$1,inst_27871);
} else {
return null;
}
}
}
}
});})(c__23421__auto__))
;
return ((function (switch__23326__auto__,c__23421__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto____0 = (function (){
var statearr_27877 = [null,null,null,null,null,null,null,null,null];
(statearr_27877[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto__);

(statearr_27877[(1)] = (1));

return statearr_27877;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto____1 = (function (state_27873){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_27873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e27878){if((e27878 instanceof Object)){
var ex__23330__auto__ = e27878;
var statearr_27879_27881 = state_27873;
(statearr_27879_27881[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27882 = state_27873;
state_27873 = G__27882;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto__ = function(state_27873){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto____1.call(this,state_27873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__))
})();
var state__23423__auto__ = (function (){var statearr_27880 = f__23422__auto__.call(null);
(statearr_27880[(6)] = c__23421__auto__);

return statearr_27880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__))
);

return c__23421__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5735__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1582209465000
