// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t21584 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21584 = (function (f,fn_handler,meta21585){
this.f = f;
this.fn_handler = fn_handler;
this.meta21585 = meta21585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21584.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t21584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t21584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21586){
var self__ = this;
var _21586__$1 = this;
return self__.meta21585;
});

cljs.core.async.t21584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21586,meta21585__$1){
var self__ = this;
var _21586__$1 = this;
return (new cljs.core.async.t21584(self__.f,self__.fn_handler,meta21585__$1));
});

cljs.core.async.t21584.cljs$lang$type = true;

cljs.core.async.t21584.cljs$lang$ctorStr = "cljs.core.async/t21584";

cljs.core.async.t21584.cljs$lang$ctorPrWriter = (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t21584");
});

cljs.core.async.__GT_t21584 = (function cljs$core$async$fn_handler_$___GT_t21584(f__$1,fn_handler__$1,meta21585){
return (new cljs.core.async.t21584(f__$1,fn_handler__$1,meta21585));
});

}

return (new cljs.core.async.t21584(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__21588 = buff;
if(G__21588){
var bit__15216__auto__ = null;
if(cljs.core.truth_((function (){var or__14542__auto__ = bit__15216__auto__;
if(cljs.core.truth_(or__14542__auto__)){
return or__14542__auto__;
} else {
return G__21588.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__21588.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21588);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21588);
}
});
/**
 * Creates a channel with an optional buffer. If buf-or-n is a number,
 * will create and use a fixed buffer of that size.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__21590 = arguments.length;
switch (G__21590) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 1;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__21593 = arguments.length;
switch (G__21593) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21595 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21595);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21595,ret){
return (function (){
return fn1.call(null,val_21595);
});})(val_21595,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(){
return null;
});
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__21597 = arguments.length;
switch (G__21597) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
return cljs.core.async.put_BANG_.call(null,port,val,cljs.core.async.nop);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn0){
return cljs.core.async.put_BANG_.call(null,port,val,fn0,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));
if(cljs.core.truth_((function (){var and__14530__auto__ = ret;
if(cljs.core.truth_(and__14530__auto__)){
return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else {
return and__14530__auto__;
}
})())){
if(cljs.core.truth_(on_caller_QMARK_)){
fn0.call(null);
} else {
cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else {
}

return null;
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__15427__auto___21599 = n;
var x_21600 = (0);
while(true){
if((x_21600 < n__15427__auto___21599)){
(a[x_21600] = (0));

var G__21601 = (x_21600 + (1));
x_21600 = G__21601;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21602 = (i + (1));
i = G__21602;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t21606 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21606 = (function (flag,alt_flag,meta21607){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21607 = meta21607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21606.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t21606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t21606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21608){
var self__ = this;
var _21608__$1 = this;
return self__.meta21607;
});})(flag))
;

cljs.core.async.t21606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21608,meta21607__$1){
var self__ = this;
var _21608__$1 = this;
return (new cljs.core.async.t21606(self__.flag,self__.alt_flag,meta21607__$1));
});})(flag))
;

cljs.core.async.t21606.cljs$lang$type = true;

cljs.core.async.t21606.cljs$lang$ctorStr = "cljs.core.async/t21606";

cljs.core.async.t21606.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t21606");
});})(flag))
;

cljs.core.async.__GT_t21606 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t21606(flag__$1,alt_flag__$1,meta21607){
return (new cljs.core.async.t21606(flag__$1,alt_flag__$1,meta21607));
});})(flag))
;

}

return (new cljs.core.async.t21606(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t21612 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21612 = (function (cb,flag,alt_handler,meta21613){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21613 = meta21613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21612.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t21612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t21612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21614){
var self__ = this;
var _21614__$1 = this;
return self__.meta21613;
});

cljs.core.async.t21612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21614,meta21613__$1){
var self__ = this;
var _21614__$1 = this;
return (new cljs.core.async.t21612(self__.cb,self__.flag,self__.alt_handler,meta21613__$1));
});

cljs.core.async.t21612.cljs$lang$type = true;

cljs.core.async.t21612.cljs$lang$ctorStr = "cljs.core.async/t21612";

cljs.core.async.t21612.cljs$lang$ctorPrWriter = (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t21612");
});

cljs.core.async.__GT_t21612 = (function cljs$core$async$alt_handler_$___GT_t21612(cb__$1,flag__$1,alt_handler__$1,meta21613){
return (new cljs.core.async.t21612(cb__$1,flag__$1,alt_handler__$1,meta21613));
});

}

return (new cljs.core.async.t21612(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21615_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21615_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__14542__auto__ = wport;
if(cljs.core.truth_(or__14542__auto__)){
return or__14542__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21616 = (i + (1));
i = G__21616;
continue;
}
} else {
return null;
}
break;
}
})();
var or__14542__auto__ = ret;
if(cljs.core.truth_(or__14542__auto__)){
return or__14542__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__14530__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__14530__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__14530__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints, which
 * can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and nil for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__15582__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15582__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21619){
var map__21620 = p__21619;
var map__21620__$1 = ((cljs.core.seq_QMARK_.call(null,map__21620))?cljs.core.apply.call(null,cljs.core.hash_map,map__21620):map__21620);
var opts = map__21620__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21617){
var G__21618 = cljs.core.first.call(null,seq21617);
var seq21617__$1 = cljs.core.next.call(null,seq21617);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21618,seq21617__$1);
});
/**
 * Takes a function and a source channel, and returns a channel which
 * contains the values produced by applying f to each value taken from
 * the source channel
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t21628 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21628 = (function (ch,f,map_LT_,meta21629){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21629 = meta21629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21628.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21628.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});

cljs.core.async.t21628.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21628.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21631 = (function (fn1,_,meta21629,map_LT_,f,ch,meta21632){
this.fn1 = fn1;
this._ = _;
this.meta21629 = meta21629;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21632 = meta21632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21621_SHARP_){
return f1.call(null,(((p1__21621_SHARP_ == null))?null:self__.f.call(null,p1__21621_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21633){
var self__ = this;
var _21633__$1 = this;
return self__.meta21632;
});})(___$1))
;

cljs.core.async.t21631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21633,meta21632__$1){
var self__ = this;
var _21633__$1 = this;
return (new cljs.core.async.t21631(self__.fn1,self__._,self__.meta21629,self__.map_LT_,self__.f,self__.ch,meta21632__$1));
});})(___$1))
;

cljs.core.async.t21631.cljs$lang$type = true;

cljs.core.async.t21631.cljs$lang$ctorStr = "cljs.core.async/t21631";

cljs.core.async.t21631.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t21631");
});})(___$1))
;

cljs.core.async.__GT_t21631 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t21631(fn1__$1,___$2,meta21629__$1,map_LT___$1,f__$1,ch__$1,meta21632){
return (new cljs.core.async.t21631(fn1__$1,___$2,meta21629__$1,map_LT___$1,f__$1,ch__$1,meta21632));
});})(___$1))
;

}

return (new cljs.core.async.t21631(fn1,___$1,self__.meta21629,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__14530__auto__ = ret;
if(cljs.core.truth_(and__14530__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__14530__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t21628.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21628.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21630){
var self__ = this;
var _21630__$1 = this;
return self__.meta21629;
});

cljs.core.async.t21628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21630,meta21629__$1){
var self__ = this;
var _21630__$1 = this;
return (new cljs.core.async.t21628(self__.ch,self__.f,self__.map_LT_,meta21629__$1));
});

cljs.core.async.t21628.cljs$lang$type = true;

cljs.core.async.t21628.cljs$lang$ctorStr = "cljs.core.async/t21628";

cljs.core.async.t21628.cljs$lang$ctorPrWriter = (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t21628");
});

cljs.core.async.__GT_t21628 = (function cljs$core$async$map_LT__$___GT_t21628(ch__$1,f__$1,map_LT___$1,meta21629){
return (new cljs.core.async.t21628(ch__$1,f__$1,map_LT___$1,meta21629));
});

}

return (new cljs.core.async.t21628(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a function and a target channel, and returns a channel which
 * applies f to each value before supplying it to the target channel.
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t21637 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21637 = (function (ch,f,map_GT_,meta21638){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21638 = meta21638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21637.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});

cljs.core.async.t21637.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21637.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21639){
var self__ = this;
var _21639__$1 = this;
return self__.meta21638;
});

cljs.core.async.t21637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21639,meta21638__$1){
var self__ = this;
var _21639__$1 = this;
return (new cljs.core.async.t21637(self__.ch,self__.f,self__.map_GT_,meta21638__$1));
});

cljs.core.async.t21637.cljs$lang$type = true;

cljs.core.async.t21637.cljs$lang$ctorStr = "cljs.core.async/t21637";

cljs.core.async.t21637.cljs$lang$ctorPrWriter = (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t21637");
});

cljs.core.async.__GT_t21637 = (function cljs$core$async$map_GT__$___GT_t21637(ch__$1,f__$1,map_GT___$1,meta21638){
return (new cljs.core.async.t21637(ch__$1,f__$1,map_GT___$1,meta21638));
});

}

return (new cljs.core.async.t21637(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 * supplies only the values for which the predicate returns true to the
 * target channel.
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t21643 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21643 = (function (ch,p,filter_GT_,meta21644){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21644 = meta21644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21643.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box.call(null,null);
}
});

cljs.core.async.t21643.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21643.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21645){
var self__ = this;
var _21645__$1 = this;
return self__.meta21644;
});

cljs.core.async.t21643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21645,meta21644__$1){
var self__ = this;
var _21645__$1 = this;
return (new cljs.core.async.t21643(self__.ch,self__.p,self__.filter_GT_,meta21644__$1));
});

cljs.core.async.t21643.cljs$lang$type = true;

cljs.core.async.t21643.cljs$lang$ctorStr = "cljs.core.async/t21643";

cljs.core.async.t21643.cljs$lang$ctorPrWriter = (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t21643");
});

cljs.core.async.__GT_t21643 = (function cljs$core$async$filter_GT__$___GT_t21643(ch__$1,p__$1,filter_GT___$1,meta21644){
return (new cljs.core.async.t21643(ch__$1,p__$1,filter_GT___$1,meta21644));
});

}

return (new cljs.core.async.t21643(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 * supplies only the values for which the predicate returns false to the
 * target channel.
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Takes a predicate and a source channel, and returns a channel which
 * contains only the values taken from the source channel for which the
 * predicate returns true. The returned channel will be unbuffered by
 * default, or a buf-or-n can be supplied. The channel will close
 * when the source channel closes.
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__21647 = arguments.length;
switch (G__21647) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16610__auto___21690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___21690,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___21690,out){
return (function (state_21668){
var state_val_21669 = (state_21668[(1)]);
if((state_val_21669 === (7))){
var inst_21664 = (state_21668[(2)]);
var state_21668__$1 = state_21668;
var statearr_21670_21691 = state_21668__$1;
(statearr_21670_21691[(2)] = inst_21664);

(statearr_21670_21691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (1))){
var state_21668__$1 = state_21668;
var statearr_21671_21692 = state_21668__$1;
(statearr_21671_21692[(2)] = null);

(statearr_21671_21692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (4))){
var inst_21650 = (state_21668[(7)]);
var inst_21650__$1 = (state_21668[(2)]);
var inst_21651 = (inst_21650__$1 == null);
var state_21668__$1 = (function (){var statearr_21672 = state_21668;
(statearr_21672[(7)] = inst_21650__$1);

return statearr_21672;
})();
if(cljs.core.truth_(inst_21651)){
var statearr_21673_21693 = state_21668__$1;
(statearr_21673_21693[(1)] = (5));

} else {
var statearr_21674_21694 = state_21668__$1;
(statearr_21674_21694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (6))){
var inst_21650 = (state_21668[(7)]);
var inst_21655 = p.call(null,inst_21650);
var state_21668__$1 = state_21668;
if(cljs.core.truth_(inst_21655)){
var statearr_21675_21695 = state_21668__$1;
(statearr_21675_21695[(1)] = (8));

} else {
var statearr_21676_21696 = state_21668__$1;
(statearr_21676_21696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (3))){
var inst_21666 = (state_21668[(2)]);
var state_21668__$1 = state_21668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21668__$1,inst_21666);
} else {
if((state_val_21669 === (2))){
var state_21668__$1 = state_21668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21668__$1,(4),ch);
} else {
if((state_val_21669 === (11))){
var inst_21658 = (state_21668[(2)]);
var state_21668__$1 = state_21668;
var statearr_21677_21697 = state_21668__$1;
(statearr_21677_21697[(2)] = inst_21658);

(statearr_21677_21697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (9))){
var state_21668__$1 = state_21668;
var statearr_21678_21698 = state_21668__$1;
(statearr_21678_21698[(2)] = null);

(statearr_21678_21698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (5))){
var inst_21653 = cljs.core.async.close_BANG_.call(null,out);
var state_21668__$1 = state_21668;
var statearr_21679_21699 = state_21668__$1;
(statearr_21679_21699[(2)] = inst_21653);

(statearr_21679_21699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (10))){
var inst_21661 = (state_21668[(2)]);
var state_21668__$1 = (function (){var statearr_21680 = state_21668;
(statearr_21680[(8)] = inst_21661);

return statearr_21680;
})();
var statearr_21681_21700 = state_21668__$1;
(statearr_21681_21700[(2)] = null);

(statearr_21681_21700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21669 === (8))){
var inst_21650 = (state_21668[(7)]);
var state_21668__$1 = state_21668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21668__$1,(11),out,inst_21650);
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
});})(c__16610__auto___21690,out))
;
return ((function (switch__16539__auto__,c__16610__auto___21690,out){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_21685 = [null,null,null,null,null,null,null,null,null];
(statearr_21685[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_21685[(1)] = (1));

return statearr_21685;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_21668){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_21668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e21686){if((e21686 instanceof Object)){
var ex__16543__auto__ = e21686;
var statearr_21687_21701 = state_21668;
(statearr_21687_21701[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21702 = state_21668;
state_21668 = G__21702;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_21668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_21668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___21690,out))
})();
var state__16612__auto__ = (function (){var statearr_21688 = f__16611__auto__.call(null);
(statearr_21688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___21690);

return statearr_21688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___21690,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a predicate and a source channel, and returns a channel which
 * contains only the values taken from the source channel for which the
 * predicate returns false. The returned channel will be unbuffered by
 * default, or a buf-or-n can be supplied. The channel will close
 * when the source channel closes.
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__21704 = arguments.length;
switch (G__21704) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto__){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto__){
return (function (state_21857){
var state_val_21858 = (state_21857[(1)]);
if((state_val_21858 === (7))){
var inst_21853 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21859_21896 = state_21857__$1;
(statearr_21859_21896[(2)] = inst_21853);

(statearr_21859_21896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (20))){
var inst_21828 = (state_21857[(7)]);
var inst_21839 = (state_21857[(2)]);
var inst_21840 = cljs.core.next.call(null,inst_21828);
var inst_21814 = inst_21840;
var inst_21815 = null;
var inst_21816 = (0);
var inst_21817 = (0);
var state_21857__$1 = (function (){var statearr_21860 = state_21857;
(statearr_21860[(8)] = inst_21816);

(statearr_21860[(9)] = inst_21815);

(statearr_21860[(10)] = inst_21814);

(statearr_21860[(11)] = inst_21817);

(statearr_21860[(12)] = inst_21839);

return statearr_21860;
})();
var statearr_21861_21897 = state_21857__$1;
(statearr_21861_21897[(2)] = null);

(statearr_21861_21897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (1))){
var state_21857__$1 = state_21857;
var statearr_21862_21898 = state_21857__$1;
(statearr_21862_21898[(2)] = null);

(statearr_21862_21898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (4))){
var inst_21803 = (state_21857[(13)]);
var inst_21803__$1 = (state_21857[(2)]);
var inst_21804 = (inst_21803__$1 == null);
var state_21857__$1 = (function (){var statearr_21866 = state_21857;
(statearr_21866[(13)] = inst_21803__$1);

return statearr_21866;
})();
if(cljs.core.truth_(inst_21804)){
var statearr_21867_21899 = state_21857__$1;
(statearr_21867_21899[(1)] = (5));

} else {
var statearr_21868_21900 = state_21857__$1;
(statearr_21868_21900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (15))){
var state_21857__$1 = state_21857;
var statearr_21869_21901 = state_21857__$1;
(statearr_21869_21901[(2)] = null);

(statearr_21869_21901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (13))){
var inst_21816 = (state_21857[(8)]);
var inst_21815 = (state_21857[(9)]);
var inst_21814 = (state_21857[(10)]);
var inst_21817 = (state_21857[(11)]);
var inst_21824 = (state_21857[(2)]);
var inst_21825 = (inst_21817 + (1));
var tmp21863 = inst_21816;
var tmp21864 = inst_21815;
var tmp21865 = inst_21814;
var inst_21814__$1 = tmp21865;
var inst_21815__$1 = tmp21864;
var inst_21816__$1 = tmp21863;
var inst_21817__$1 = inst_21825;
var state_21857__$1 = (function (){var statearr_21870 = state_21857;
(statearr_21870[(8)] = inst_21816__$1);

(statearr_21870[(9)] = inst_21815__$1);

(statearr_21870[(14)] = inst_21824);

(statearr_21870[(10)] = inst_21814__$1);

(statearr_21870[(11)] = inst_21817__$1);

return statearr_21870;
})();
var statearr_21871_21902 = state_21857__$1;
(statearr_21871_21902[(2)] = null);

(statearr_21871_21902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (6))){
var inst_21803 = (state_21857[(13)]);
var inst_21808 = f.call(null,inst_21803);
var inst_21813 = cljs.core.seq.call(null,inst_21808);
var inst_21814 = inst_21813;
var inst_21815 = null;
var inst_21816 = (0);
var inst_21817 = (0);
var state_21857__$1 = (function (){var statearr_21872 = state_21857;
(statearr_21872[(8)] = inst_21816);

(statearr_21872[(9)] = inst_21815);

(statearr_21872[(10)] = inst_21814);

(statearr_21872[(11)] = inst_21817);

return statearr_21872;
})();
var statearr_21873_21903 = state_21857__$1;
(statearr_21873_21903[(2)] = null);

(statearr_21873_21903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (17))){
var inst_21828 = (state_21857[(7)]);
var inst_21832 = cljs.core.chunk_first.call(null,inst_21828);
var inst_21833 = cljs.core.chunk_rest.call(null,inst_21828);
var inst_21834 = cljs.core.count.call(null,inst_21832);
var inst_21814 = inst_21833;
var inst_21815 = inst_21832;
var inst_21816 = inst_21834;
var inst_21817 = (0);
var state_21857__$1 = (function (){var statearr_21874 = state_21857;
(statearr_21874[(8)] = inst_21816);

(statearr_21874[(9)] = inst_21815);

(statearr_21874[(10)] = inst_21814);

(statearr_21874[(11)] = inst_21817);

return statearr_21874;
})();
var statearr_21875_21904 = state_21857__$1;
(statearr_21875_21904[(2)] = null);

(statearr_21875_21904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (3))){
var inst_21855 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21857__$1,inst_21855);
} else {
if((state_val_21858 === (12))){
var inst_21848 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21876_21905 = state_21857__$1;
(statearr_21876_21905[(2)] = inst_21848);

(statearr_21876_21905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (2))){
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21857__$1,(4),in$);
} else {
if((state_val_21858 === (19))){
var inst_21843 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21877_21906 = state_21857__$1;
(statearr_21877_21906[(2)] = inst_21843);

(statearr_21877_21906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (11))){
var inst_21828 = (state_21857[(7)]);
var inst_21814 = (state_21857[(10)]);
var inst_21828__$1 = cljs.core.seq.call(null,inst_21814);
var state_21857__$1 = (function (){var statearr_21878 = state_21857;
(statearr_21878[(7)] = inst_21828__$1);

return statearr_21878;
})();
if(inst_21828__$1){
var statearr_21879_21907 = state_21857__$1;
(statearr_21879_21907[(1)] = (14));

} else {
var statearr_21880_21908 = state_21857__$1;
(statearr_21880_21908[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (9))){
var inst_21850 = (state_21857[(2)]);
var state_21857__$1 = (function (){var statearr_21881 = state_21857;
(statearr_21881[(15)] = inst_21850);

return statearr_21881;
})();
var statearr_21882_21909 = state_21857__$1;
(statearr_21882_21909[(2)] = null);

(statearr_21882_21909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (5))){
var inst_21806 = cljs.core.async.close_BANG_.call(null,out);
var state_21857__$1 = state_21857;
var statearr_21883_21910 = state_21857__$1;
(statearr_21883_21910[(2)] = inst_21806);

(statearr_21883_21910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (14))){
var inst_21828 = (state_21857[(7)]);
var inst_21830 = cljs.core.chunked_seq_QMARK_.call(null,inst_21828);
var state_21857__$1 = state_21857;
if(inst_21830){
var statearr_21884_21911 = state_21857__$1;
(statearr_21884_21911[(1)] = (17));

} else {
var statearr_21885_21912 = state_21857__$1;
(statearr_21885_21912[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (16))){
var inst_21846 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21886_21913 = state_21857__$1;
(statearr_21886_21913[(2)] = inst_21846);

(statearr_21886_21913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (10))){
var inst_21815 = (state_21857[(9)]);
var inst_21817 = (state_21857[(11)]);
var inst_21822 = cljs.core._nth.call(null,inst_21815,inst_21817);
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21857__$1,(13),out,inst_21822);
} else {
if((state_val_21858 === (18))){
var inst_21828 = (state_21857[(7)]);
var inst_21837 = cljs.core.first.call(null,inst_21828);
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21857__$1,(20),out,inst_21837);
} else {
if((state_val_21858 === (8))){
var inst_21816 = (state_21857[(8)]);
var inst_21817 = (state_21857[(11)]);
var inst_21819 = (inst_21817 < inst_21816);
var inst_21820 = inst_21819;
var state_21857__$1 = state_21857;
if(cljs.core.truth_(inst_21820)){
var statearr_21887_21914 = state_21857__$1;
(statearr_21887_21914[(1)] = (10));

} else {
var statearr_21888_21915 = state_21857__$1;
(statearr_21888_21915[(1)] = (11));

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
});})(c__16610__auto__))
;
return ((function (switch__16539__auto__,c__16610__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16540__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16540__auto____0 = (function (){
var statearr_21892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21892[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16540__auto__);

(statearr_21892[(1)] = (1));

return statearr_21892;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16540__auto____1 = (function (state_21857){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_21857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e21893){if((e21893 instanceof Object)){
var ex__16543__auto__ = e21893;
var statearr_21894_21916 = state_21857;
(statearr_21894_21916[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21917 = state_21857;
state_21857 = G__21917;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16540__auto__ = function(state_21857){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16540__auto____1.call(this,state_21857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16540__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16540__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_21895 = f__16611__auto__.call(null);
(statearr_21895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_21895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto__))
);

return c__16610__auto__;
});
/**
 * Takes a function and a source channel, and returns a channel which
 * contains the values in each collection produced by applying f to
 * each value taken from the source channel. f must return a
 * collection.
 * 
 * The returned channel will be unbuffered by default, or a buf-or-n
 * can be supplied. The channel will close when the source channel
 * closes.
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__21919 = arguments.length;
switch (G__21919) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a function and a target channel, and returns a channel which
 * applies f to each value put, then supplies each element of the result
 * to the target channel. f must return a collection.
 * 
 * The returned channel will be unbuffered by default, or a buf-or-n
 * can be supplied. The target channel will be closed when the source
 * channel closes.
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__21922 = arguments.length;
switch (G__21922) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the
 * from channel closes, but can be determined by the close?
 * parameter.
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__21925 = arguments.length;
switch (G__21925) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16610__auto___21967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___21967){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___21967){
return (function (state_21945){
var state_val_21946 = (state_21945[(1)]);
if((state_val_21946 === (7))){
var inst_21941 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
var statearr_21947_21968 = state_21945__$1;
(statearr_21947_21968[(2)] = inst_21941);

(statearr_21947_21968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (1))){
var state_21945__$1 = state_21945;
var statearr_21948_21969 = state_21945__$1;
(statearr_21948_21969[(2)] = null);

(statearr_21948_21969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (4))){
var inst_21928 = (state_21945[(7)]);
var inst_21928__$1 = (state_21945[(2)]);
var inst_21929 = (inst_21928__$1 == null);
var state_21945__$1 = (function (){var statearr_21949 = state_21945;
(statearr_21949[(7)] = inst_21928__$1);

return statearr_21949;
})();
if(cljs.core.truth_(inst_21929)){
var statearr_21950_21970 = state_21945__$1;
(statearr_21950_21970[(1)] = (5));

} else {
var statearr_21951_21971 = state_21945__$1;
(statearr_21951_21971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (6))){
var inst_21928 = (state_21945[(7)]);
var state_21945__$1 = state_21945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21945__$1,(11),to,inst_21928);
} else {
if((state_val_21946 === (3))){
var inst_21943 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21945__$1,inst_21943);
} else {
if((state_val_21946 === (2))){
var state_21945__$1 = state_21945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21945__$1,(4),from);
} else {
if((state_val_21946 === (11))){
var inst_21938 = (state_21945[(2)]);
var state_21945__$1 = (function (){var statearr_21952 = state_21945;
(statearr_21952[(8)] = inst_21938);

return statearr_21952;
})();
var statearr_21953_21972 = state_21945__$1;
(statearr_21953_21972[(2)] = null);

(statearr_21953_21972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (9))){
var state_21945__$1 = state_21945;
var statearr_21954_21973 = state_21945__$1;
(statearr_21954_21973[(2)] = null);

(statearr_21954_21973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (5))){
var state_21945__$1 = state_21945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21955_21974 = state_21945__$1;
(statearr_21955_21974[(1)] = (8));

} else {
var statearr_21956_21975 = state_21945__$1;
(statearr_21956_21975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (10))){
var inst_21935 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
var statearr_21957_21976 = state_21945__$1;
(statearr_21957_21976[(2)] = inst_21935);

(statearr_21957_21976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (8))){
var inst_21932 = cljs.core.async.close_BANG_.call(null,to);
var state_21945__$1 = state_21945;
var statearr_21958_21977 = state_21945__$1;
(statearr_21958_21977[(2)] = inst_21932);

(statearr_21958_21977[(1)] = (10));


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
});})(c__16610__auto___21967))
;
return ((function (switch__16539__auto__,c__16610__auto___21967){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_21962 = [null,null,null,null,null,null,null,null,null];
(statearr_21962[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_21962[(1)] = (1));

return statearr_21962;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_21945){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_21945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e21963){if((e21963 instanceof Object)){
var ex__16543__auto__ = e21963;
var statearr_21964_21978 = state_21945;
(statearr_21964_21978[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21979 = state_21945;
state_21945 = G__21979;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_21945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_21945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___21967))
})();
var state__16612__auto__ = (function (){var statearr_21965 = f__16611__auto__.call(null);
(statearr_21965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___21967);

return statearr_21965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___21967))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__21981 = arguments.length;
switch (G__21981) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16610__auto___22026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___22026,tc,fc){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___22026,tc,fc){
return (function (state_22003){
var state_val_22004 = (state_22003[(1)]);
if((state_val_22004 === (7))){
var inst_21999 = (state_22003[(2)]);
var state_22003__$1 = state_22003;
var statearr_22005_22027 = state_22003__$1;
(statearr_22005_22027[(2)] = inst_21999);

(statearr_22005_22027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (1))){
var state_22003__$1 = state_22003;
var statearr_22006_22028 = state_22003__$1;
(statearr_22006_22028[(2)] = null);

(statearr_22006_22028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (4))){
var inst_21984 = (state_22003[(7)]);
var inst_21984__$1 = (state_22003[(2)]);
var inst_21985 = (inst_21984__$1 == null);
var state_22003__$1 = (function (){var statearr_22007 = state_22003;
(statearr_22007[(7)] = inst_21984__$1);

return statearr_22007;
})();
if(cljs.core.truth_(inst_21985)){
var statearr_22008_22029 = state_22003__$1;
(statearr_22008_22029[(1)] = (5));

} else {
var statearr_22009_22030 = state_22003__$1;
(statearr_22009_22030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (6))){
var inst_21984 = (state_22003[(7)]);
var inst_21990 = p.call(null,inst_21984);
var state_22003__$1 = state_22003;
if(cljs.core.truth_(inst_21990)){
var statearr_22010_22031 = state_22003__$1;
(statearr_22010_22031[(1)] = (9));

} else {
var statearr_22011_22032 = state_22003__$1;
(statearr_22011_22032[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (3))){
var inst_22001 = (state_22003[(2)]);
var state_22003__$1 = state_22003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22003__$1,inst_22001);
} else {
if((state_val_22004 === (2))){
var state_22003__$1 = state_22003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22003__$1,(4),ch);
} else {
if((state_val_22004 === (11))){
var inst_21984 = (state_22003[(7)]);
var inst_21994 = (state_22003[(2)]);
var state_22003__$1 = state_22003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22003__$1,(8),inst_21994,inst_21984);
} else {
if((state_val_22004 === (9))){
var state_22003__$1 = state_22003;
var statearr_22012_22033 = state_22003__$1;
(statearr_22012_22033[(2)] = tc);

(statearr_22012_22033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (5))){
var inst_21987 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21988 = cljs.core.async.close_BANG_.call(null,fc);
var state_22003__$1 = (function (){var statearr_22013 = state_22003;
(statearr_22013[(8)] = inst_21987);

return statearr_22013;
})();
var statearr_22014_22034 = state_22003__$1;
(statearr_22014_22034[(2)] = inst_21988);

(statearr_22014_22034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (10))){
var state_22003__$1 = state_22003;
var statearr_22015_22035 = state_22003__$1;
(statearr_22015_22035[(2)] = fc);

(statearr_22015_22035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22004 === (8))){
var inst_21996 = (state_22003[(2)]);
var state_22003__$1 = (function (){var statearr_22016 = state_22003;
(statearr_22016[(9)] = inst_21996);

return statearr_22016;
})();
var statearr_22017_22036 = state_22003__$1;
(statearr_22017_22036[(2)] = null);

(statearr_22017_22036[(1)] = (2));


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
});})(c__16610__auto___22026,tc,fc))
;
return ((function (switch__16539__auto__,c__16610__auto___22026,tc,fc){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_22021 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22021[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_22021[(1)] = (1));

return statearr_22021;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_22003){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_22003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e22022){if((e22022 instanceof Object)){
var ex__16543__auto__ = e22022;
var statearr_22023_22037 = state_22003;
(statearr_22023_22037[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22038 = state_22003;
state_22003 = G__22038;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_22003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_22003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___22026,tc,fc))
})();
var state__16612__auto__ = (function (){var statearr_22024 = f__16611__auto__.call(null);
(statearr_22024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___22026);

return statearr_22024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___22026,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto__){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto__){
return (function (state_22085){
var state_val_22086 = (state_22085[(1)]);
if((state_val_22086 === (7))){
var inst_22081 = (state_22085[(2)]);
var state_22085__$1 = state_22085;
var statearr_22087_22103 = state_22085__$1;
(statearr_22087_22103[(2)] = inst_22081);

(statearr_22087_22103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22086 === (6))){
var inst_22071 = (state_22085[(7)]);
var inst_22074 = (state_22085[(8)]);
var inst_22078 = f.call(null,inst_22071,inst_22074);
var inst_22071__$1 = inst_22078;
var state_22085__$1 = (function (){var statearr_22088 = state_22085;
(statearr_22088[(7)] = inst_22071__$1);

return statearr_22088;
})();
var statearr_22089_22104 = state_22085__$1;
(statearr_22089_22104[(2)] = null);

(statearr_22089_22104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22086 === (5))){
var inst_22071 = (state_22085[(7)]);
var state_22085__$1 = state_22085;
var statearr_22090_22105 = state_22085__$1;
(statearr_22090_22105[(2)] = inst_22071);

(statearr_22090_22105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22086 === (4))){
var inst_22074 = (state_22085[(8)]);
var inst_22074__$1 = (state_22085[(2)]);
var inst_22075 = (inst_22074__$1 == null);
var state_22085__$1 = (function (){var statearr_22091 = state_22085;
(statearr_22091[(8)] = inst_22074__$1);

return statearr_22091;
})();
if(cljs.core.truth_(inst_22075)){
var statearr_22092_22106 = state_22085__$1;
(statearr_22092_22106[(1)] = (5));

} else {
var statearr_22093_22107 = state_22085__$1;
(statearr_22093_22107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22086 === (3))){
var inst_22083 = (state_22085[(2)]);
var state_22085__$1 = state_22085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22085__$1,inst_22083);
} else {
if((state_val_22086 === (2))){
var state_22085__$1 = state_22085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22085__$1,(4),ch);
} else {
if((state_val_22086 === (1))){
var inst_22071 = init;
var state_22085__$1 = (function (){var statearr_22094 = state_22085;
(statearr_22094[(7)] = inst_22071);

return statearr_22094;
})();
var statearr_22095_22108 = state_22085__$1;
(statearr_22095_22108[(2)] = null);

(statearr_22095_22108[(1)] = (2));


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
});})(c__16610__auto__))
;
return ((function (switch__16539__auto__,c__16610__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16540__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16540__auto____0 = (function (){
var statearr_22099 = [null,null,null,null,null,null,null,null,null];
(statearr_22099[(0)] = cljs$core$async$reduce_$_state_machine__16540__auto__);

(statearr_22099[(1)] = (1));

return statearr_22099;
});
var cljs$core$async$reduce_$_state_machine__16540__auto____1 = (function (state_22085){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_22085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e22100){if((e22100 instanceof Object)){
var ex__16543__auto__ = e22100;
var statearr_22101_22109 = state_22085;
(statearr_22101_22109[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22110 = state_22085;
state_22085 = G__22110;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16540__auto__ = function(state_22085){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16540__auto____1.call(this,state_22085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16540__auto____0;
cljs$core$async$reduce_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16540__auto____1;
return cljs$core$async$reduce_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_22102 = f__16611__auto__.call(null);
(statearr_22102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_22102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto__))
);

return c__16610__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__22112 = arguments.length;
switch (G__22112) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto__){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto__){
return (function (state_22133){
var state_val_22134 = (state_22133[(1)]);
if((state_val_22134 === (7))){
var inst_22114 = (state_22133[(7)]);
var inst_22119 = (state_22133[(2)]);
var inst_22120 = cljs.core.next.call(null,inst_22114);
var inst_22114__$1 = inst_22120;
var state_22133__$1 = (function (){var statearr_22135 = state_22133;
(statearr_22135[(8)] = inst_22119);

(statearr_22135[(7)] = inst_22114__$1);

return statearr_22135;
})();
var statearr_22136_22155 = state_22133__$1;
(statearr_22136_22155[(2)] = null);

(statearr_22136_22155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22134 === (1))){
var inst_22113 = cljs.core.seq.call(null,coll);
var inst_22114 = inst_22113;
var state_22133__$1 = (function (){var statearr_22137 = state_22133;
(statearr_22137[(7)] = inst_22114);

return statearr_22137;
})();
var statearr_22138_22156 = state_22133__$1;
(statearr_22138_22156[(2)] = null);

(statearr_22138_22156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22134 === (4))){
var inst_22114 = (state_22133[(7)]);
var inst_22117 = cljs.core.first.call(null,inst_22114);
var state_22133__$1 = state_22133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22133__$1,(7),ch,inst_22117);
} else {
if((state_val_22134 === (6))){
var inst_22129 = (state_22133[(2)]);
var state_22133__$1 = state_22133;
var statearr_22139_22157 = state_22133__$1;
(statearr_22139_22157[(2)] = inst_22129);

(statearr_22139_22157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22134 === (3))){
var inst_22131 = (state_22133[(2)]);
var state_22133__$1 = state_22133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22133__$1,inst_22131);
} else {
if((state_val_22134 === (2))){
var inst_22114 = (state_22133[(7)]);
var state_22133__$1 = state_22133;
if(cljs.core.truth_(inst_22114)){
var statearr_22140_22158 = state_22133__$1;
(statearr_22140_22158[(1)] = (4));

} else {
var statearr_22141_22159 = state_22133__$1;
(statearr_22141_22159[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22134 === (9))){
var state_22133__$1 = state_22133;
var statearr_22142_22160 = state_22133__$1;
(statearr_22142_22160[(2)] = null);

(statearr_22142_22160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22134 === (5))){
var state_22133__$1 = state_22133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22143_22161 = state_22133__$1;
(statearr_22143_22161[(1)] = (8));

} else {
var statearr_22144_22162 = state_22133__$1;
(statearr_22144_22162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22134 === (10))){
var inst_22127 = (state_22133[(2)]);
var state_22133__$1 = state_22133;
var statearr_22145_22163 = state_22133__$1;
(statearr_22145_22163[(2)] = inst_22127);

(statearr_22145_22163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22134 === (8))){
var inst_22124 = cljs.core.async.close_BANG_.call(null,ch);
var state_22133__$1 = state_22133;
var statearr_22146_22164 = state_22133__$1;
(statearr_22146_22164[(2)] = inst_22124);

(statearr_22146_22164[(1)] = (10));


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
});})(c__16610__auto__))
;
return ((function (switch__16539__auto__,c__16610__auto__){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_22150 = [null,null,null,null,null,null,null,null,null];
(statearr_22150[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_22150[(1)] = (1));

return statearr_22150;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_22133){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_22133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e22151){if((e22151 instanceof Object)){
var ex__16543__auto__ = e22151;
var statearr_22152_22165 = state_22133;
(statearr_22152_22165[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22166 = state_22133;
state_22133 = G__22166;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_22133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_22133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_22153 = f__16611__auto__.call(null);
(statearr_22153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_22153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto__))
);

return c__16610__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj22168 = {};
return obj22168;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__14530__auto__ = _;
if(and__14530__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__14530__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__15178__auto__ = (((_ == null))?null:_);
return (function (){var or__14542__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj22170 = {};
return obj22170;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__14530__auto__ = m;
if(and__14530__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__14530__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__15178__auto__ = (((m == null))?null:m);
return (function (){var or__14542__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__14530__auto__ = m;
if(and__14530__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__14530__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__15178__auto__ = (((m == null))?null:m);
return (function (){var or__14542__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__14530__auto__ = m;
if(and__14530__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__14530__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__15178__auto__ = (((m == null))?null:m);
return (function (){var or__14542__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap put throws an exception, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t22394 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22394 = (function (cs,ch,mult,meta22395){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22395 = meta22395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22394.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22394.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22394.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22394.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t22394.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22394.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22396){
var self__ = this;
var _22396__$1 = this;
return self__.meta22395;
});})(cs))
;

cljs.core.async.t22394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22396,meta22395__$1){
var self__ = this;
var _22396__$1 = this;
return (new cljs.core.async.t22394(self__.cs,self__.ch,self__.mult,meta22395__$1));
});})(cs))
;

cljs.core.async.t22394.cljs$lang$type = true;

cljs.core.async.t22394.cljs$lang$ctorStr = "cljs.core.async/t22394";

cljs.core.async.t22394.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t22394");
});})(cs))
;

cljs.core.async.__GT_t22394 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t22394(cs__$1,ch__$1,mult__$1,meta22395){
return (new cljs.core.async.t22394(cs__$1,ch__$1,mult__$1,meta22395));
});})(cs))
;

}

return (new cljs.core.async.t22394(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16610__auto___22617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___22617,cs,m,dchan,dctr,done){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___22617,cs,m,dchan,dctr,done){
return (function (state_22531){
var state_val_22532 = (state_22531[(1)]);
if((state_val_22532 === (7))){
var inst_22527 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22533_22618 = state_22531__$1;
(statearr_22533_22618[(2)] = inst_22527);

(statearr_22533_22618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (20))){
var inst_22428 = (state_22531[(7)]);
var inst_22438 = cljs.core.first.call(null,inst_22428);
var inst_22439 = cljs.core.nth.call(null,inst_22438,(0),null);
var inst_22440 = cljs.core.nth.call(null,inst_22438,(1),null);
var state_22531__$1 = (function (){var statearr_22534 = state_22531;
(statearr_22534[(8)] = inst_22439);

return statearr_22534;
})();
if(cljs.core.truth_(inst_22440)){
var statearr_22535_22619 = state_22531__$1;
(statearr_22535_22619[(1)] = (22));

} else {
var statearr_22536_22620 = state_22531__$1;
(statearr_22536_22620[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (27))){
var inst_22470 = (state_22531[(9)]);
var inst_22468 = (state_22531[(10)]);
var inst_22475 = cljs.core._nth.call(null,inst_22468,inst_22470);
var state_22531__$1 = (function (){var statearr_22537 = state_22531;
(statearr_22537[(11)] = inst_22475);

return statearr_22537;
})();
var statearr_22538_22621 = state_22531__$1;
(statearr_22538_22621[(2)] = null);

(statearr_22538_22621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (1))){
var state_22531__$1 = state_22531;
var statearr_22539_22622 = state_22531__$1;
(statearr_22539_22622[(2)] = null);

(statearr_22539_22622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (24))){
var inst_22428 = (state_22531[(7)]);
var inst_22445 = (state_22531[(2)]);
var inst_22446 = cljs.core.next.call(null,inst_22428);
var inst_22408 = inst_22446;
var inst_22409 = null;
var inst_22410 = (0);
var inst_22411 = (0);
var state_22531__$1 = (function (){var statearr_22540 = state_22531;
(statearr_22540[(12)] = inst_22408);

(statearr_22540[(13)] = inst_22445);

(statearr_22540[(14)] = inst_22411);

(statearr_22540[(15)] = inst_22409);

(statearr_22540[(16)] = inst_22410);

return statearr_22540;
})();
var statearr_22541_22623 = state_22531__$1;
(statearr_22541_22623[(2)] = null);

(statearr_22541_22623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (39))){
var inst_22488 = (state_22531[(17)]);
var inst_22506 = (state_22531[(2)]);
var inst_22507 = cljs.core.next.call(null,inst_22488);
var inst_22467 = inst_22507;
var inst_22468 = null;
var inst_22469 = (0);
var inst_22470 = (0);
var state_22531__$1 = (function (){var statearr_22545 = state_22531;
(statearr_22545[(18)] = inst_22506);

(statearr_22545[(19)] = inst_22467);

(statearr_22545[(20)] = inst_22469);

(statearr_22545[(9)] = inst_22470);

(statearr_22545[(10)] = inst_22468);

return statearr_22545;
})();
var statearr_22546_22624 = state_22531__$1;
(statearr_22546_22624[(2)] = null);

(statearr_22546_22624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (4))){
var inst_22399 = (state_22531[(21)]);
var inst_22399__$1 = (state_22531[(2)]);
var inst_22400 = (inst_22399__$1 == null);
var state_22531__$1 = (function (){var statearr_22547 = state_22531;
(statearr_22547[(21)] = inst_22399__$1);

return statearr_22547;
})();
if(cljs.core.truth_(inst_22400)){
var statearr_22548_22625 = state_22531__$1;
(statearr_22548_22625[(1)] = (5));

} else {
var statearr_22549_22626 = state_22531__$1;
(statearr_22549_22626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (15))){
var inst_22408 = (state_22531[(12)]);
var inst_22411 = (state_22531[(14)]);
var inst_22409 = (state_22531[(15)]);
var inst_22410 = (state_22531[(16)]);
var inst_22424 = (state_22531[(2)]);
var inst_22425 = (inst_22411 + (1));
var tmp22542 = inst_22408;
var tmp22543 = inst_22409;
var tmp22544 = inst_22410;
var inst_22408__$1 = tmp22542;
var inst_22409__$1 = tmp22543;
var inst_22410__$1 = tmp22544;
var inst_22411__$1 = inst_22425;
var state_22531__$1 = (function (){var statearr_22550 = state_22531;
(statearr_22550[(12)] = inst_22408__$1);

(statearr_22550[(22)] = inst_22424);

(statearr_22550[(14)] = inst_22411__$1);

(statearr_22550[(15)] = inst_22409__$1);

(statearr_22550[(16)] = inst_22410__$1);

return statearr_22550;
})();
var statearr_22551_22627 = state_22531__$1;
(statearr_22551_22627[(2)] = null);

(statearr_22551_22627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (21))){
var inst_22449 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22552_22628 = state_22531__$1;
(statearr_22552_22628[(2)] = inst_22449);

(statearr_22552_22628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (31))){
var inst_22475 = (state_22531[(11)]);
var inst_22476 = (state_22531[(2)]);
var inst_22477 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_22478 = cljs.core.async.untap_STAR_.call(null,m,inst_22475);
var state_22531__$1 = (function (){var statearr_22553 = state_22531;
(statearr_22553[(23)] = inst_22477);

(statearr_22553[(24)] = inst_22476);

return statearr_22553;
})();
var statearr_22554_22629 = state_22531__$1;
(statearr_22554_22629[(2)] = inst_22478);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (32))){
var inst_22399 = (state_22531[(21)]);
var inst_22475 = (state_22531[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22531,(31),Object,null,(30));
var inst_22482 = cljs.core.async.put_BANG_.call(null,inst_22475,inst_22399,done);
var state_22531__$1 = state_22531;
var statearr_22555_22630 = state_22531__$1;
(statearr_22555_22630[(2)] = inst_22482);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (40))){
var inst_22497 = (state_22531[(25)]);
var inst_22498 = (state_22531[(2)]);
var inst_22499 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_22500 = cljs.core.async.untap_STAR_.call(null,m,inst_22497);
var state_22531__$1 = (function (){var statearr_22556 = state_22531;
(statearr_22556[(26)] = inst_22499);

(statearr_22556[(27)] = inst_22498);

return statearr_22556;
})();
var statearr_22557_22631 = state_22531__$1;
(statearr_22557_22631[(2)] = inst_22500);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (33))){
var inst_22488 = (state_22531[(17)]);
var inst_22490 = cljs.core.chunked_seq_QMARK_.call(null,inst_22488);
var state_22531__$1 = state_22531;
if(inst_22490){
var statearr_22558_22632 = state_22531__$1;
(statearr_22558_22632[(1)] = (36));

} else {
var statearr_22559_22633 = state_22531__$1;
(statearr_22559_22633[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (13))){
var inst_22418 = (state_22531[(28)]);
var inst_22421 = cljs.core.async.close_BANG_.call(null,inst_22418);
var state_22531__$1 = state_22531;
var statearr_22560_22634 = state_22531__$1;
(statearr_22560_22634[(2)] = inst_22421);

(statearr_22560_22634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (22))){
var inst_22439 = (state_22531[(8)]);
var inst_22442 = cljs.core.async.close_BANG_.call(null,inst_22439);
var state_22531__$1 = state_22531;
var statearr_22561_22635 = state_22531__$1;
(statearr_22561_22635[(2)] = inst_22442);

(statearr_22561_22635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (36))){
var inst_22488 = (state_22531[(17)]);
var inst_22492 = cljs.core.chunk_first.call(null,inst_22488);
var inst_22493 = cljs.core.chunk_rest.call(null,inst_22488);
var inst_22494 = cljs.core.count.call(null,inst_22492);
var inst_22467 = inst_22493;
var inst_22468 = inst_22492;
var inst_22469 = inst_22494;
var inst_22470 = (0);
var state_22531__$1 = (function (){var statearr_22562 = state_22531;
(statearr_22562[(19)] = inst_22467);

(statearr_22562[(20)] = inst_22469);

(statearr_22562[(9)] = inst_22470);

(statearr_22562[(10)] = inst_22468);

return statearr_22562;
})();
var statearr_22563_22636 = state_22531__$1;
(statearr_22563_22636[(2)] = null);

(statearr_22563_22636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (41))){
var inst_22497 = (state_22531[(25)]);
var inst_22399 = (state_22531[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22531,(40),Object,null,(39));
var inst_22504 = cljs.core.async.put_BANG_.call(null,inst_22497,inst_22399,done);
var state_22531__$1 = state_22531;
var statearr_22564_22637 = state_22531__$1;
(statearr_22564_22637[(2)] = inst_22504);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (43))){
var state_22531__$1 = state_22531;
var statearr_22565_22638 = state_22531__$1;
(statearr_22565_22638[(2)] = null);

(statearr_22565_22638[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (29))){
var inst_22515 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22566_22639 = state_22531__$1;
(statearr_22566_22639[(2)] = inst_22515);

(statearr_22566_22639[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (44))){
var inst_22524 = (state_22531[(2)]);
var state_22531__$1 = (function (){var statearr_22567 = state_22531;
(statearr_22567[(29)] = inst_22524);

return statearr_22567;
})();
var statearr_22568_22640 = state_22531__$1;
(statearr_22568_22640[(2)] = null);

(statearr_22568_22640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (6))){
var inst_22459 = (state_22531[(30)]);
var inst_22458 = cljs.core.deref.call(null,cs);
var inst_22459__$1 = cljs.core.keys.call(null,inst_22458);
var inst_22460 = cljs.core.count.call(null,inst_22459__$1);
var inst_22461 = cljs.core.reset_BANG_.call(null,dctr,inst_22460);
var inst_22466 = cljs.core.seq.call(null,inst_22459__$1);
var inst_22467 = inst_22466;
var inst_22468 = null;
var inst_22469 = (0);
var inst_22470 = (0);
var state_22531__$1 = (function (){var statearr_22569 = state_22531;
(statearr_22569[(30)] = inst_22459__$1);

(statearr_22569[(19)] = inst_22467);

(statearr_22569[(20)] = inst_22469);

(statearr_22569[(31)] = inst_22461);

(statearr_22569[(9)] = inst_22470);

(statearr_22569[(10)] = inst_22468);

return statearr_22569;
})();
var statearr_22570_22641 = state_22531__$1;
(statearr_22570_22641[(2)] = null);

(statearr_22570_22641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (28))){
var inst_22467 = (state_22531[(19)]);
var inst_22488 = (state_22531[(17)]);
var inst_22488__$1 = cljs.core.seq.call(null,inst_22467);
var state_22531__$1 = (function (){var statearr_22571 = state_22531;
(statearr_22571[(17)] = inst_22488__$1);

return statearr_22571;
})();
if(inst_22488__$1){
var statearr_22572_22642 = state_22531__$1;
(statearr_22572_22642[(1)] = (33));

} else {
var statearr_22573_22643 = state_22531__$1;
(statearr_22573_22643[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (25))){
var inst_22469 = (state_22531[(20)]);
var inst_22470 = (state_22531[(9)]);
var inst_22472 = (inst_22470 < inst_22469);
var inst_22473 = inst_22472;
var state_22531__$1 = state_22531;
if(cljs.core.truth_(inst_22473)){
var statearr_22574_22644 = state_22531__$1;
(statearr_22574_22644[(1)] = (27));

} else {
var statearr_22575_22645 = state_22531__$1;
(statearr_22575_22645[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (34))){
var state_22531__$1 = state_22531;
var statearr_22576_22646 = state_22531__$1;
(statearr_22576_22646[(2)] = null);

(statearr_22576_22646[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (17))){
var state_22531__$1 = state_22531;
var statearr_22577_22647 = state_22531__$1;
(statearr_22577_22647[(2)] = null);

(statearr_22577_22647[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (3))){
var inst_22529 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22531__$1,inst_22529);
} else {
if((state_val_22532 === (12))){
var inst_22454 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22578_22648 = state_22531__$1;
(statearr_22578_22648[(2)] = inst_22454);

(statearr_22578_22648[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (2))){
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22531__$1,(4),ch);
} else {
if((state_val_22532 === (23))){
var state_22531__$1 = state_22531;
var statearr_22579_22649 = state_22531__$1;
(statearr_22579_22649[(2)] = null);

(statearr_22579_22649[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (35))){
var inst_22513 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22580_22650 = state_22531__$1;
(statearr_22580_22650[(2)] = inst_22513);

(statearr_22580_22650[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (19))){
var inst_22428 = (state_22531[(7)]);
var inst_22432 = cljs.core.chunk_first.call(null,inst_22428);
var inst_22433 = cljs.core.chunk_rest.call(null,inst_22428);
var inst_22434 = cljs.core.count.call(null,inst_22432);
var inst_22408 = inst_22433;
var inst_22409 = inst_22432;
var inst_22410 = inst_22434;
var inst_22411 = (0);
var state_22531__$1 = (function (){var statearr_22581 = state_22531;
(statearr_22581[(12)] = inst_22408);

(statearr_22581[(14)] = inst_22411);

(statearr_22581[(15)] = inst_22409);

(statearr_22581[(16)] = inst_22410);

return statearr_22581;
})();
var statearr_22582_22651 = state_22531__$1;
(statearr_22582_22651[(2)] = null);

(statearr_22582_22651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (11))){
var inst_22408 = (state_22531[(12)]);
var inst_22428 = (state_22531[(7)]);
var inst_22428__$1 = cljs.core.seq.call(null,inst_22408);
var state_22531__$1 = (function (){var statearr_22583 = state_22531;
(statearr_22583[(7)] = inst_22428__$1);

return statearr_22583;
})();
if(inst_22428__$1){
var statearr_22584_22652 = state_22531__$1;
(statearr_22584_22652[(1)] = (16));

} else {
var statearr_22585_22653 = state_22531__$1;
(statearr_22585_22653[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (9))){
var inst_22456 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22586_22654 = state_22531__$1;
(statearr_22586_22654[(2)] = inst_22456);

(statearr_22586_22654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (5))){
var inst_22406 = cljs.core.deref.call(null,cs);
var inst_22407 = cljs.core.seq.call(null,inst_22406);
var inst_22408 = inst_22407;
var inst_22409 = null;
var inst_22410 = (0);
var inst_22411 = (0);
var state_22531__$1 = (function (){var statearr_22587 = state_22531;
(statearr_22587[(12)] = inst_22408);

(statearr_22587[(14)] = inst_22411);

(statearr_22587[(15)] = inst_22409);

(statearr_22587[(16)] = inst_22410);

return statearr_22587;
})();
var statearr_22588_22655 = state_22531__$1;
(statearr_22588_22655[(2)] = null);

(statearr_22588_22655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (14))){
var state_22531__$1 = state_22531;
var statearr_22589_22656 = state_22531__$1;
(statearr_22589_22656[(2)] = null);

(statearr_22589_22656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (45))){
var inst_22521 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22590_22657 = state_22531__$1;
(statearr_22590_22657[(2)] = inst_22521);

(statearr_22590_22657[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (26))){
var inst_22459 = (state_22531[(30)]);
var inst_22517 = (state_22531[(2)]);
var inst_22518 = cljs.core.seq.call(null,inst_22459);
var state_22531__$1 = (function (){var statearr_22591 = state_22531;
(statearr_22591[(32)] = inst_22517);

return statearr_22591;
})();
if(inst_22518){
var statearr_22592_22658 = state_22531__$1;
(statearr_22592_22658[(1)] = (42));

} else {
var statearr_22593_22659 = state_22531__$1;
(statearr_22593_22659[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (16))){
var inst_22428 = (state_22531[(7)]);
var inst_22430 = cljs.core.chunked_seq_QMARK_.call(null,inst_22428);
var state_22531__$1 = state_22531;
if(inst_22430){
var statearr_22597_22660 = state_22531__$1;
(statearr_22597_22660[(1)] = (19));

} else {
var statearr_22598_22661 = state_22531__$1;
(statearr_22598_22661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (38))){
var inst_22510 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22599_22662 = state_22531__$1;
(statearr_22599_22662[(2)] = inst_22510);

(statearr_22599_22662[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (30))){
var inst_22467 = (state_22531[(19)]);
var inst_22469 = (state_22531[(20)]);
var inst_22470 = (state_22531[(9)]);
var inst_22468 = (state_22531[(10)]);
var inst_22484 = (state_22531[(2)]);
var inst_22485 = (inst_22470 + (1));
var tmp22594 = inst_22467;
var tmp22595 = inst_22469;
var tmp22596 = inst_22468;
var inst_22467__$1 = tmp22594;
var inst_22468__$1 = tmp22596;
var inst_22469__$1 = tmp22595;
var inst_22470__$1 = inst_22485;
var state_22531__$1 = (function (){var statearr_22600 = state_22531;
(statearr_22600[(19)] = inst_22467__$1);

(statearr_22600[(20)] = inst_22469__$1);

(statearr_22600[(9)] = inst_22470__$1);

(statearr_22600[(10)] = inst_22468__$1);

(statearr_22600[(33)] = inst_22484);

return statearr_22600;
})();
var statearr_22601_22663 = state_22531__$1;
(statearr_22601_22663[(2)] = null);

(statearr_22601_22663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (10))){
var inst_22411 = (state_22531[(14)]);
var inst_22409 = (state_22531[(15)]);
var inst_22417 = cljs.core._nth.call(null,inst_22409,inst_22411);
var inst_22418 = cljs.core.nth.call(null,inst_22417,(0),null);
var inst_22419 = cljs.core.nth.call(null,inst_22417,(1),null);
var state_22531__$1 = (function (){var statearr_22602 = state_22531;
(statearr_22602[(28)] = inst_22418);

return statearr_22602;
})();
if(cljs.core.truth_(inst_22419)){
var statearr_22603_22664 = state_22531__$1;
(statearr_22603_22664[(1)] = (13));

} else {
var statearr_22604_22665 = state_22531__$1;
(statearr_22604_22665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (18))){
var inst_22452 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22605_22666 = state_22531__$1;
(statearr_22605_22666[(2)] = inst_22452);

(statearr_22605_22666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (42))){
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22531__$1,(45),dchan);
} else {
if((state_val_22532 === (37))){
var inst_22488 = (state_22531[(17)]);
var inst_22497 = cljs.core.first.call(null,inst_22488);
var state_22531__$1 = (function (){var statearr_22606 = state_22531;
(statearr_22606[(25)] = inst_22497);

return statearr_22606;
})();
var statearr_22607_22667 = state_22531__$1;
(statearr_22607_22667[(2)] = null);

(statearr_22607_22667[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (8))){
var inst_22411 = (state_22531[(14)]);
var inst_22410 = (state_22531[(16)]);
var inst_22413 = (inst_22411 < inst_22410);
var inst_22414 = inst_22413;
var state_22531__$1 = state_22531;
if(cljs.core.truth_(inst_22414)){
var statearr_22608_22668 = state_22531__$1;
(statearr_22608_22668[(1)] = (10));

} else {
var statearr_22609_22669 = state_22531__$1;
(statearr_22609_22669[(1)] = (11));

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
});})(c__16610__auto___22617,cs,m,dchan,dctr,done))
;
return ((function (switch__16539__auto__,c__16610__auto___22617,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16540__auto__ = null;
var cljs$core$async$mult_$_state_machine__16540__auto____0 = (function (){
var statearr_22613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22613[(0)] = cljs$core$async$mult_$_state_machine__16540__auto__);

(statearr_22613[(1)] = (1));

return statearr_22613;
});
var cljs$core$async$mult_$_state_machine__16540__auto____1 = (function (state_22531){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_22531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e22614){if((e22614 instanceof Object)){
var ex__16543__auto__ = e22614;
var statearr_22615_22670 = state_22531;
(statearr_22615_22670[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22671 = state_22531;
state_22531 = G__22671;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16540__auto__ = function(state_22531){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16540__auto____1.call(this,state_22531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16540__auto____0;
cljs$core$async$mult_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16540__auto____1;
return cljs$core$async$mult_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___22617,cs,m,dchan,dctr,done))
})();
var state__16612__auto__ = (function (){var statearr_22616 = f__16611__auto__.call(null);
(statearr_22616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___22617);

return statearr_22616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___22617,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__22673 = arguments.length;
switch (G__22673) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj22676 = {};
return obj22676;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__14530__auto__ = m;
if(and__14530__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__14530__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__15178__auto__ = (((m == null))?null:m);
return (function (){var or__14542__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__14530__auto__ = m;
if(and__14530__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__14530__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__15178__auto__ = (((m == null))?null:m);
return (function (){var or__14542__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__14530__auto__ = m;
if(and__14530__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__14530__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__15178__auto__ = (((m == null))?null:m);
return (function (){var or__14542__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__14530__auto__ = m;
if(and__14530__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__14530__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__15178__auto__ = (((m == null))?null:m);
return (function (){var or__14542__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__14530__auto__ = m;
if(and__14530__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__14530__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__15178__auto__ = (((m == null))?null:m);
return (function (){var or__14542__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t22786 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22786 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22787){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22787 = meta22787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22786.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22786.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22786.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22786.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22786.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22786.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22786.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22788){
var self__ = this;
var _22788__$1 = this;
return self__.meta22787;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22788,meta22787__$1){
var self__ = this;
var _22788__$1 = this;
return (new cljs.core.async.t22786(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22787__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22786.cljs$lang$type = true;

cljs.core.async.t22786.cljs$lang$ctorStr = "cljs.core.async/t22786";

cljs.core.async.t22786.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t22786");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22786 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t22786(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22787){
return (new cljs.core.async.t22786(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22787));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22786(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16610__auto___22895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___22895,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___22895,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22853){
var state_val_22854 = (state_22853[(1)]);
if((state_val_22854 === (7))){
var inst_22802 = (state_22853[(7)]);
var inst_22807 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22802);
var state_22853__$1 = state_22853;
var statearr_22855_22896 = state_22853__$1;
(statearr_22855_22896[(2)] = inst_22807);

(statearr_22855_22896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (20))){
var inst_22817 = (state_22853[(8)]);
var state_22853__$1 = state_22853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22853__$1,(23),out,inst_22817);
} else {
if((state_val_22854 === (1))){
var inst_22792 = (state_22853[(9)]);
var inst_22792__$1 = calc_state.call(null);
var inst_22793 = cljs.core.seq_QMARK_.call(null,inst_22792__$1);
var state_22853__$1 = (function (){var statearr_22856 = state_22853;
(statearr_22856[(9)] = inst_22792__$1);

return statearr_22856;
})();
if(inst_22793){
var statearr_22857_22897 = state_22853__$1;
(statearr_22857_22897[(1)] = (2));

} else {
var statearr_22858_22898 = state_22853__$1;
(statearr_22858_22898[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (4))){
var inst_22792 = (state_22853[(9)]);
var inst_22798 = (state_22853[(2)]);
var inst_22799 = cljs.core.get.call(null,inst_22798,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22800 = cljs.core.get.call(null,inst_22798,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22801 = cljs.core.get.call(null,inst_22798,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22802 = inst_22792;
var state_22853__$1 = (function (){var statearr_22859 = state_22853;
(statearr_22859[(10)] = inst_22799);

(statearr_22859[(7)] = inst_22802);

(statearr_22859[(11)] = inst_22801);

(statearr_22859[(12)] = inst_22800);

return statearr_22859;
})();
var statearr_22860_22899 = state_22853__$1;
(statearr_22860_22899[(2)] = null);

(statearr_22860_22899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (15))){
var state_22853__$1 = state_22853;
var statearr_22861_22900 = state_22853__$1;
(statearr_22861_22900[(2)] = null);

(statearr_22861_22900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (21))){
var state_22853__$1 = state_22853;
var statearr_22862_22901 = state_22853__$1;
(statearr_22862_22901[(2)] = null);

(statearr_22862_22901[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (13))){
var inst_22849 = (state_22853[(2)]);
var state_22853__$1 = state_22853;
var statearr_22863_22902 = state_22853__$1;
(statearr_22863_22902[(2)] = inst_22849);

(statearr_22863_22902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (22))){
var inst_22810 = (state_22853[(13)]);
var inst_22846 = (state_22853[(2)]);
var inst_22802 = inst_22810;
var state_22853__$1 = (function (){var statearr_22864 = state_22853;
(statearr_22864[(7)] = inst_22802);

(statearr_22864[(14)] = inst_22846);

return statearr_22864;
})();
var statearr_22865_22903 = state_22853__$1;
(statearr_22865_22903[(2)] = null);

(statearr_22865_22903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (6))){
var inst_22851 = (state_22853[(2)]);
var state_22853__$1 = state_22853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22853__$1,inst_22851);
} else {
if((state_val_22854 === (17))){
var inst_22832 = (state_22853[(15)]);
var state_22853__$1 = state_22853;
var statearr_22866_22904 = state_22853__$1;
(statearr_22866_22904[(2)] = inst_22832);

(statearr_22866_22904[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (3))){
var inst_22792 = (state_22853[(9)]);
var state_22853__$1 = state_22853;
var statearr_22867_22905 = state_22853__$1;
(statearr_22867_22905[(2)] = inst_22792);

(statearr_22867_22905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (12))){
var inst_22813 = (state_22853[(16)]);
var inst_22832 = (state_22853[(15)]);
var inst_22818 = (state_22853[(17)]);
var inst_22832__$1 = inst_22813.call(null,inst_22818);
var state_22853__$1 = (function (){var statearr_22868 = state_22853;
(statearr_22868[(15)] = inst_22832__$1);

return statearr_22868;
})();
if(cljs.core.truth_(inst_22832__$1)){
var statearr_22869_22906 = state_22853__$1;
(statearr_22869_22906[(1)] = (17));

} else {
var statearr_22870_22907 = state_22853__$1;
(statearr_22870_22907[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (2))){
var inst_22792 = (state_22853[(9)]);
var inst_22795 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22792);
var state_22853__$1 = state_22853;
var statearr_22871_22908 = state_22853__$1;
(statearr_22871_22908[(2)] = inst_22795);

(statearr_22871_22908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (23))){
var inst_22843 = (state_22853[(2)]);
var state_22853__$1 = state_22853;
var statearr_22872_22909 = state_22853__$1;
(statearr_22872_22909[(2)] = inst_22843);

(statearr_22872_22909[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (19))){
var inst_22840 = (state_22853[(2)]);
var state_22853__$1 = state_22853;
if(cljs.core.truth_(inst_22840)){
var statearr_22873_22910 = state_22853__$1;
(statearr_22873_22910[(1)] = (20));

} else {
var statearr_22874_22911 = state_22853__$1;
(statearr_22874_22911[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (11))){
var inst_22817 = (state_22853[(8)]);
var inst_22823 = (inst_22817 == null);
var state_22853__$1 = state_22853;
if(cljs.core.truth_(inst_22823)){
var statearr_22875_22912 = state_22853__$1;
(statearr_22875_22912[(1)] = (14));

} else {
var statearr_22876_22913 = state_22853__$1;
(statearr_22876_22913[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (9))){
var inst_22810 = (state_22853[(13)]);
var inst_22810__$1 = (state_22853[(2)]);
var inst_22811 = cljs.core.get.call(null,inst_22810__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22812 = cljs.core.get.call(null,inst_22810__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22813 = cljs.core.get.call(null,inst_22810__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22853__$1 = (function (){var statearr_22877 = state_22853;
(statearr_22877[(16)] = inst_22813);

(statearr_22877[(18)] = inst_22812);

(statearr_22877[(13)] = inst_22810__$1);

return statearr_22877;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22853__$1,(10),inst_22811);
} else {
if((state_val_22854 === (5))){
var inst_22802 = (state_22853[(7)]);
var inst_22805 = cljs.core.seq_QMARK_.call(null,inst_22802);
var state_22853__$1 = state_22853;
if(inst_22805){
var statearr_22878_22914 = state_22853__$1;
(statearr_22878_22914[(1)] = (7));

} else {
var statearr_22879_22915 = state_22853__$1;
(statearr_22879_22915[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (14))){
var inst_22818 = (state_22853[(17)]);
var inst_22825 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22818);
var state_22853__$1 = state_22853;
var statearr_22880_22916 = state_22853__$1;
(statearr_22880_22916[(2)] = inst_22825);

(statearr_22880_22916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (16))){
var inst_22828 = (state_22853[(2)]);
var inst_22829 = calc_state.call(null);
var inst_22802 = inst_22829;
var state_22853__$1 = (function (){var statearr_22881 = state_22853;
(statearr_22881[(7)] = inst_22802);

(statearr_22881[(19)] = inst_22828);

return statearr_22881;
})();
var statearr_22882_22917 = state_22853__$1;
(statearr_22882_22917[(2)] = null);

(statearr_22882_22917[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (10))){
var inst_22818 = (state_22853[(17)]);
var inst_22817 = (state_22853[(8)]);
var inst_22816 = (state_22853[(2)]);
var inst_22817__$1 = cljs.core.nth.call(null,inst_22816,(0),null);
var inst_22818__$1 = cljs.core.nth.call(null,inst_22816,(1),null);
var inst_22819 = (inst_22817__$1 == null);
var inst_22820 = cljs.core._EQ_.call(null,inst_22818__$1,change);
var inst_22821 = (inst_22819) || (inst_22820);
var state_22853__$1 = (function (){var statearr_22883 = state_22853;
(statearr_22883[(17)] = inst_22818__$1);

(statearr_22883[(8)] = inst_22817__$1);

return statearr_22883;
})();
if(cljs.core.truth_(inst_22821)){
var statearr_22884_22918 = state_22853__$1;
(statearr_22884_22918[(1)] = (11));

} else {
var statearr_22885_22919 = state_22853__$1;
(statearr_22885_22919[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (18))){
var inst_22813 = (state_22853[(16)]);
var inst_22818 = (state_22853[(17)]);
var inst_22812 = (state_22853[(18)]);
var inst_22835 = cljs.core.empty_QMARK_.call(null,inst_22813);
var inst_22836 = inst_22812.call(null,inst_22818);
var inst_22837 = cljs.core.not.call(null,inst_22836);
var inst_22838 = (inst_22835) && (inst_22837);
var state_22853__$1 = state_22853;
var statearr_22886_22920 = state_22853__$1;
(statearr_22886_22920[(2)] = inst_22838);

(statearr_22886_22920[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22854 === (8))){
var inst_22802 = (state_22853[(7)]);
var state_22853__$1 = state_22853;
var statearr_22887_22921 = state_22853__$1;
(statearr_22887_22921[(2)] = inst_22802);

(statearr_22887_22921[(1)] = (9));


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
});})(c__16610__auto___22895,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16539__auto__,c__16610__auto___22895,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16540__auto__ = null;
var cljs$core$async$mix_$_state_machine__16540__auto____0 = (function (){
var statearr_22891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22891[(0)] = cljs$core$async$mix_$_state_machine__16540__auto__);

(statearr_22891[(1)] = (1));

return statearr_22891;
});
var cljs$core$async$mix_$_state_machine__16540__auto____1 = (function (state_22853){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_22853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e22892){if((e22892 instanceof Object)){
var ex__16543__auto__ = e22892;
var statearr_22893_22922 = state_22853;
(statearr_22893_22922[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22923 = state_22853;
state_22853 = G__22923;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16540__auto__ = function(state_22853){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16540__auto____1.call(this,state_22853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16540__auto____0;
cljs$core$async$mix_$_state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16540__auto____1;
return cljs$core$async$mix_$_state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___22895,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16612__auto__ = (function (){var statearr_22894 = f__16611__auto__.call(null);
(statearr_22894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___22895);

return statearr_22894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___22895,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj22925 = {};
return obj22925;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__14530__auto__ = p;
if(and__14530__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__14530__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__15178__auto__ = (((p == null))?null:p);
return (function (){var or__14542__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__14530__auto__ = p;
if(and__14530__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__14530__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__15178__auto__ = (((p == null))?null:p);
return (function (){var or__14542__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__22927 = arguments.length;
switch (G__22927) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__14530__auto__ = p;
if(and__14530__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__14530__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__15178__auto__ = (((p == null))?null:p);
return (function (){var or__14542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__14530__auto__ = p;
if(and__14530__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__14530__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__15178__auto__ = (((p == null))?null:p);
return (function (){var or__14542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15178__auto__)]);
if(or__14542__auto__){
return or__14542__auto__;
} else {
var or__14542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__14542__auto____$1){
return or__14542__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__22931 = arguments.length;
switch (G__22931) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__14542__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__14542__auto__)){
return or__14542__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__14542__auto__,mults){
return (function (p1__22929_SHARP_){
if(cljs.core.truth_(p1__22929_SHARP_.call(null,topic))){
return p1__22929_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22929_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14542__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22932 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22932 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta22933){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta22933 = meta22933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22932.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22932.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22932.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t22932.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22932.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22932.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22934){
var self__ = this;
var _22934__$1 = this;
return self__.meta22933;
});})(mults,ensure_mult))
;

cljs.core.async.t22932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22934,meta22933__$1){
var self__ = this;
var _22934__$1 = this;
return (new cljs.core.async.t22932(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta22933__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22932.cljs$lang$type = true;

cljs.core.async.t22932.cljs$lang$ctorStr = "cljs.core.async/t22932";

cljs.core.async.t22932.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15121__auto__,writer__15122__auto__,opt__15123__auto__){
return cljs.core._write.call(null,writer__15122__auto__,"cljs.core.async/t22932");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22932 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t22932(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta22933){
return (new cljs.core.async.t22932(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta22933));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22932(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16610__auto___23057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___23057,mults,ensure_mult,p){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___23057,mults,ensure_mult,p){
return (function (state_23008){
var state_val_23009 = (state_23008[(1)]);
if((state_val_23009 === (7))){
var inst_23004 = (state_23008[(2)]);
var state_23008__$1 = state_23008;
var statearr_23010_23058 = state_23008__$1;
(statearr_23010_23058[(2)] = inst_23004);

(statearr_23010_23058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (20))){
var state_23008__$1 = state_23008;
var statearr_23011_23059 = state_23008__$1;
(statearr_23011_23059[(2)] = null);

(statearr_23011_23059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (1))){
var state_23008__$1 = state_23008;
var statearr_23012_23060 = state_23008__$1;
(statearr_23012_23060[(2)] = null);

(statearr_23012_23060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (24))){
var inst_22937 = (state_23008[(7)]);
var inst_22987 = (state_23008[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23008,(23),Object,null,(22));
var inst_22994 = cljs.core.async.muxch_STAR_.call(null,inst_22987);
var state_23008__$1 = state_23008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23008__$1,(25),inst_22994,inst_22937);
} else {
if((state_val_23009 === (4))){
var inst_22937 = (state_23008[(7)]);
var inst_22937__$1 = (state_23008[(2)]);
var inst_22938 = (inst_22937__$1 == null);
var state_23008__$1 = (function (){var statearr_23013 = state_23008;
(statearr_23013[(7)] = inst_22937__$1);

return statearr_23013;
})();
if(cljs.core.truth_(inst_22938)){
var statearr_23014_23061 = state_23008__$1;
(statearr_23014_23061[(1)] = (5));

} else {
var statearr_23015_23062 = state_23008__$1;
(statearr_23015_23062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (15))){
var inst_22979 = (state_23008[(2)]);
var state_23008__$1 = state_23008;
var statearr_23016_23063 = state_23008__$1;
(statearr_23016_23063[(2)] = inst_22979);

(statearr_23016_23063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (21))){
var inst_23001 = (state_23008[(2)]);
var state_23008__$1 = (function (){var statearr_23017 = state_23008;
(statearr_23017[(9)] = inst_23001);

return statearr_23017;
})();
var statearr_23018_23064 = state_23008__$1;
(statearr_23018_23064[(2)] = null);

(statearr_23018_23064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (13))){
var inst_22961 = (state_23008[(10)]);
var inst_22963 = cljs.core.chunked_seq_QMARK_.call(null,inst_22961);
var state_23008__$1 = state_23008;
if(inst_22963){
var statearr_23019_23065 = state_23008__$1;
(statearr_23019_23065[(1)] = (16));

} else {
var statearr_23020_23066 = state_23008__$1;
(statearr_23020_23066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (22))){
var inst_22998 = (state_23008[(2)]);
var state_23008__$1 = state_23008;
var statearr_23021_23067 = state_23008__$1;
(statearr_23021_23067[(2)] = inst_22998);

(statearr_23021_23067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (6))){
var inst_22937 = (state_23008[(7)]);
var inst_22987 = (state_23008[(8)]);
var inst_22985 = (state_23008[(11)]);
var inst_22985__$1 = topic_fn.call(null,inst_22937);
var inst_22986 = cljs.core.deref.call(null,mults);
var inst_22987__$1 = cljs.core.get.call(null,inst_22986,inst_22985__$1);
var state_23008__$1 = (function (){var statearr_23022 = state_23008;
(statearr_23022[(8)] = inst_22987__$1);

(statearr_23022[(11)] = inst_22985__$1);

return statearr_23022;
})();
if(cljs.core.truth_(inst_22987__$1)){
var statearr_23023_23068 = state_23008__$1;
(statearr_23023_23068[(1)] = (19));

} else {
var statearr_23024_23069 = state_23008__$1;
(statearr_23024_23069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (25))){
var inst_22996 = (state_23008[(2)]);
var state_23008__$1 = state_23008;
var statearr_23025_23070 = state_23008__$1;
(statearr_23025_23070[(2)] = inst_22996);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23008__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (17))){
var inst_22961 = (state_23008[(10)]);
var inst_22970 = cljs.core.first.call(null,inst_22961);
var inst_22971 = cljs.core.async.muxch_STAR_.call(null,inst_22970);
var inst_22972 = cljs.core.async.close_BANG_.call(null,inst_22971);
var inst_22973 = cljs.core.next.call(null,inst_22961);
var inst_22947 = inst_22973;
var inst_22948 = null;
var inst_22949 = (0);
var inst_22950 = (0);
var state_23008__$1 = (function (){var statearr_23026 = state_23008;
(statearr_23026[(12)] = inst_22948);

(statearr_23026[(13)] = inst_22972);

(statearr_23026[(14)] = inst_22949);

(statearr_23026[(15)] = inst_22947);

(statearr_23026[(16)] = inst_22950);

return statearr_23026;
})();
var statearr_23027_23071 = state_23008__$1;
(statearr_23027_23071[(2)] = null);

(statearr_23027_23071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (3))){
var inst_23006 = (state_23008[(2)]);
var state_23008__$1 = state_23008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23008__$1,inst_23006);
} else {
if((state_val_23009 === (12))){
var inst_22981 = (state_23008[(2)]);
var state_23008__$1 = state_23008;
var statearr_23028_23072 = state_23008__$1;
(statearr_23028_23072[(2)] = inst_22981);

(statearr_23028_23072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (2))){
var state_23008__$1 = state_23008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23008__$1,(4),ch);
} else {
if((state_val_23009 === (23))){
var inst_22985 = (state_23008[(11)]);
var inst_22989 = (state_23008[(2)]);
var inst_22990 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22985);
var state_23008__$1 = (function (){var statearr_23029 = state_23008;
(statearr_23029[(17)] = inst_22989);

return statearr_23029;
})();
var statearr_23030_23073 = state_23008__$1;
(statearr_23030_23073[(2)] = inst_22990);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23008__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (19))){
var state_23008__$1 = state_23008;
var statearr_23031_23074 = state_23008__$1;
(statearr_23031_23074[(2)] = null);

(statearr_23031_23074[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (11))){
var inst_22961 = (state_23008[(10)]);
var inst_22947 = (state_23008[(15)]);
var inst_22961__$1 = cljs.core.seq.call(null,inst_22947);
var state_23008__$1 = (function (){var statearr_23032 = state_23008;
(statearr_23032[(10)] = inst_22961__$1);

return statearr_23032;
})();
if(inst_22961__$1){
var statearr_23033_23075 = state_23008__$1;
(statearr_23033_23075[(1)] = (13));

} else {
var statearr_23034_23076 = state_23008__$1;
(statearr_23034_23076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (9))){
var inst_22983 = (state_23008[(2)]);
var state_23008__$1 = state_23008;
var statearr_23035_23077 = state_23008__$1;
(statearr_23035_23077[(2)] = inst_22983);

(statearr_23035_23077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (5))){
var inst_22944 = cljs.core.deref.call(null,mults);
var inst_22945 = cljs.core.vals.call(null,inst_22944);
var inst_22946 = cljs.core.seq.call(null,inst_22945);
var inst_22947 = inst_22946;
var inst_22948 = null;
var inst_22949 = (0);
var inst_22950 = (0);
var state_23008__$1 = (function (){var statearr_23036 = state_23008;
(statearr_23036[(12)] = inst_22948);

(statearr_23036[(14)] = inst_22949);

(statearr_23036[(15)] = inst_22947);

(statearr_23036[(16)] = inst_22950);

return statearr_23036;
})();
var statearr_23037_23078 = state_23008__$1;
(statearr_23037_23078[(2)] = null);

(statearr_23037_23078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (14))){
var state_23008__$1 = state_23008;
var statearr_23041_23079 = state_23008__$1;
(statearr_23041_23079[(2)] = null);

(statearr_23041_23079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (16))){
var inst_22961 = (state_23008[(10)]);
var inst_22965 = cljs.core.chunk_first.call(null,inst_22961);
var inst_22966 = cljs.core.chunk_rest.call(null,inst_22961);
var inst_22967 = cljs.core.count.call(null,inst_22965);
var inst_22947 = inst_22966;
var inst_22948 = inst_22965;
var inst_22949 = inst_22967;
var inst_22950 = (0);
var state_23008__$1 = (function (){var statearr_23042 = state_23008;
(statearr_23042[(12)] = inst_22948);

(statearr_23042[(14)] = inst_22949);

(statearr_23042[(15)] = inst_22947);

(statearr_23042[(16)] = inst_22950);

return statearr_23042;
})();
var statearr_23043_23080 = state_23008__$1;
(statearr_23043_23080[(2)] = null);

(statearr_23043_23080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (10))){
var inst_22948 = (state_23008[(12)]);
var inst_22949 = (state_23008[(14)]);
var inst_22947 = (state_23008[(15)]);
var inst_22950 = (state_23008[(16)]);
var inst_22955 = cljs.core._nth.call(null,inst_22948,inst_22950);
var inst_22956 = cljs.core.async.muxch_STAR_.call(null,inst_22955);
var inst_22957 = cljs.core.async.close_BANG_.call(null,inst_22956);
var inst_22958 = (inst_22950 + (1));
var tmp23038 = inst_22948;
var tmp23039 = inst_22949;
var tmp23040 = inst_22947;
var inst_22947__$1 = tmp23040;
var inst_22948__$1 = tmp23038;
var inst_22949__$1 = tmp23039;
var inst_22950__$1 = inst_22958;
var state_23008__$1 = (function (){var statearr_23044 = state_23008;
(statearr_23044[(12)] = inst_22948__$1);

(statearr_23044[(18)] = inst_22957);

(statearr_23044[(14)] = inst_22949__$1);

(statearr_23044[(15)] = inst_22947__$1);

(statearr_23044[(16)] = inst_22950__$1);

return statearr_23044;
})();
var statearr_23045_23081 = state_23008__$1;
(statearr_23045_23081[(2)] = null);

(statearr_23045_23081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (18))){
var inst_22976 = (state_23008[(2)]);
var state_23008__$1 = state_23008;
var statearr_23046_23082 = state_23008__$1;
(statearr_23046_23082[(2)] = inst_22976);

(statearr_23046_23082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23009 === (8))){
var inst_22949 = (state_23008[(14)]);
var inst_22950 = (state_23008[(16)]);
var inst_22952 = (inst_22950 < inst_22949);
var inst_22953 = inst_22952;
var state_23008__$1 = state_23008;
if(cljs.core.truth_(inst_22953)){
var statearr_23047_23083 = state_23008__$1;
(statearr_23047_23083[(1)] = (10));

} else {
var statearr_23048_23084 = state_23008__$1;
(statearr_23048_23084[(1)] = (11));

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
});})(c__16610__auto___23057,mults,ensure_mult,p))
;
return ((function (switch__16539__auto__,c__16610__auto___23057,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_23052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23052[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_23052[(1)] = (1));

return statearr_23052;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_23008){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_23008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e23053){if((e23053 instanceof Object)){
var ex__16543__auto__ = e23053;
var statearr_23054_23085 = state_23008;
(statearr_23054_23085[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23086 = state_23008;
state_23008 = G__23086;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_23008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_23008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___23057,mults,ensure_mult,p))
})();
var state__16612__auto__ = (function (){var statearr_23055 = f__16611__auto__.call(null);
(statearr_23055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___23057);

return statearr_23055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___23057,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__23088 = arguments.length;
switch (G__23088) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__23091 = arguments.length;
switch (G__23091) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__23094 = arguments.length;
switch (G__23094) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16610__auto___23164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___23164,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___23164,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23133){
var state_val_23134 = (state_23133[(1)]);
if((state_val_23134 === (7))){
var state_23133__$1 = state_23133;
var statearr_23135_23165 = state_23133__$1;
(statearr_23135_23165[(2)] = null);

(statearr_23135_23165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (1))){
var state_23133__$1 = state_23133;
var statearr_23136_23166 = state_23133__$1;
(statearr_23136_23166[(2)] = null);

(statearr_23136_23166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (4))){
var inst_23097 = (state_23133[(7)]);
var inst_23099 = (inst_23097 < cnt);
var state_23133__$1 = state_23133;
if(cljs.core.truth_(inst_23099)){
var statearr_23137_23167 = state_23133__$1;
(statearr_23137_23167[(1)] = (6));

} else {
var statearr_23138_23168 = state_23133__$1;
(statearr_23138_23168[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (15))){
var inst_23129 = (state_23133[(2)]);
var state_23133__$1 = state_23133;
var statearr_23139_23169 = state_23133__$1;
(statearr_23139_23169[(2)] = inst_23129);

(statearr_23139_23169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (13))){
var inst_23122 = cljs.core.async.close_BANG_.call(null,out);
var state_23133__$1 = state_23133;
var statearr_23140_23170 = state_23133__$1;
(statearr_23140_23170[(2)] = inst_23122);

(statearr_23140_23170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (6))){
var state_23133__$1 = state_23133;
var statearr_23141_23171 = state_23133__$1;
(statearr_23141_23171[(2)] = null);

(statearr_23141_23171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (3))){
var inst_23131 = (state_23133[(2)]);
var state_23133__$1 = state_23133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23133__$1,inst_23131);
} else {
if((state_val_23134 === (12))){
var inst_23119 = (state_23133[(8)]);
var inst_23119__$1 = (state_23133[(2)]);
var inst_23120 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23119__$1);
var state_23133__$1 = (function (){var statearr_23142 = state_23133;
(statearr_23142[(8)] = inst_23119__$1);

return statearr_23142;
})();
if(cljs.core.truth_(inst_23120)){
var statearr_23143_23172 = state_23133__$1;
(statearr_23143_23172[(1)] = (13));

} else {
var statearr_23144_23173 = state_23133__$1;
(statearr_23144_23173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (2))){
var inst_23096 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23097 = (0);
var state_23133__$1 = (function (){var statearr_23145 = state_23133;
(statearr_23145[(9)] = inst_23096);

(statearr_23145[(7)] = inst_23097);

return statearr_23145;
})();
var statearr_23146_23174 = state_23133__$1;
(statearr_23146_23174[(2)] = null);

(statearr_23146_23174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (11))){
var inst_23097 = (state_23133[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23133,(10),Object,null,(9));
var inst_23106 = chs__$1.call(null,inst_23097);
var inst_23107 = done.call(null,inst_23097);
var inst_23108 = cljs.core.async.take_BANG_.call(null,inst_23106,inst_23107);
var state_23133__$1 = state_23133;
var statearr_23147_23175 = state_23133__$1;
(statearr_23147_23175[(2)] = inst_23108);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (9))){
var inst_23097 = (state_23133[(7)]);
var inst_23110 = (state_23133[(2)]);
var inst_23111 = (inst_23097 + (1));
var inst_23097__$1 = inst_23111;
var state_23133__$1 = (function (){var statearr_23148 = state_23133;
(statearr_23148[(10)] = inst_23110);

(statearr_23148[(7)] = inst_23097__$1);

return statearr_23148;
})();
var statearr_23149_23176 = state_23133__$1;
(statearr_23149_23176[(2)] = null);

(statearr_23149_23176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (5))){
var inst_23117 = (state_23133[(2)]);
var state_23133__$1 = (function (){var statearr_23150 = state_23133;
(statearr_23150[(11)] = inst_23117);

return statearr_23150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23133__$1,(12),dchan);
} else {
if((state_val_23134 === (14))){
var inst_23119 = (state_23133[(8)]);
var inst_23124 = cljs.core.apply.call(null,f,inst_23119);
var state_23133__$1 = state_23133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23133__$1,(16),out,inst_23124);
} else {
if((state_val_23134 === (16))){
var inst_23126 = (state_23133[(2)]);
var state_23133__$1 = (function (){var statearr_23151 = state_23133;
(statearr_23151[(12)] = inst_23126);

return statearr_23151;
})();
var statearr_23152_23177 = state_23133__$1;
(statearr_23152_23177[(2)] = null);

(statearr_23152_23177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (10))){
var inst_23101 = (state_23133[(2)]);
var inst_23102 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23133__$1 = (function (){var statearr_23153 = state_23133;
(statearr_23153[(13)] = inst_23101);

return statearr_23153;
})();
var statearr_23154_23178 = state_23133__$1;
(statearr_23154_23178[(2)] = inst_23102);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (8))){
var inst_23115 = (state_23133[(2)]);
var state_23133__$1 = state_23133;
var statearr_23155_23179 = state_23133__$1;
(statearr_23155_23179[(2)] = inst_23115);

(statearr_23155_23179[(1)] = (5));


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
});})(c__16610__auto___23164,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16539__auto__,c__16610__auto___23164,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_23159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23159[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_23159[(1)] = (1));

return statearr_23159;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_23133){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_23133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e23160){if((e23160 instanceof Object)){
var ex__16543__auto__ = e23160;
var statearr_23161_23180 = state_23133;
(statearr_23161_23180[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23181 = state_23133;
state_23133 = G__23181;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_23133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_23133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___23164,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16612__auto__ = (function (){var statearr_23162 = f__16611__auto__.call(null);
(statearr_23162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___23164);

return statearr_23162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___23164,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__23184 = arguments.length;
switch (G__23184) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16610__auto___23239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___23239,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___23239,out){
return (function (state_23214){
var state_val_23215 = (state_23214[(1)]);
if((state_val_23215 === (7))){
var inst_23194 = (state_23214[(7)]);
var inst_23193 = (state_23214[(8)]);
var inst_23193__$1 = (state_23214[(2)]);
var inst_23194__$1 = cljs.core.nth.call(null,inst_23193__$1,(0),null);
var inst_23195 = cljs.core.nth.call(null,inst_23193__$1,(1),null);
var inst_23196 = (inst_23194__$1 == null);
var state_23214__$1 = (function (){var statearr_23216 = state_23214;
(statearr_23216[(7)] = inst_23194__$1);

(statearr_23216[(9)] = inst_23195);

(statearr_23216[(8)] = inst_23193__$1);

return statearr_23216;
})();
if(cljs.core.truth_(inst_23196)){
var statearr_23217_23240 = state_23214__$1;
(statearr_23217_23240[(1)] = (8));

} else {
var statearr_23218_23241 = state_23214__$1;
(statearr_23218_23241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (1))){
var inst_23185 = cljs.core.vec.call(null,chs);
var inst_23186 = inst_23185;
var state_23214__$1 = (function (){var statearr_23219 = state_23214;
(statearr_23219[(10)] = inst_23186);

return statearr_23219;
})();
var statearr_23220_23242 = state_23214__$1;
(statearr_23220_23242[(2)] = null);

(statearr_23220_23242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (4))){
var inst_23186 = (state_23214[(10)]);
var state_23214__$1 = state_23214;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23214__$1,(7),inst_23186);
} else {
if((state_val_23215 === (6))){
var inst_23210 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
var statearr_23221_23243 = state_23214__$1;
(statearr_23221_23243[(2)] = inst_23210);

(statearr_23221_23243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (3))){
var inst_23212 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23214__$1,inst_23212);
} else {
if((state_val_23215 === (2))){
var inst_23186 = (state_23214[(10)]);
var inst_23188 = cljs.core.count.call(null,inst_23186);
var inst_23189 = (inst_23188 > (0));
var state_23214__$1 = state_23214;
if(cljs.core.truth_(inst_23189)){
var statearr_23223_23244 = state_23214__$1;
(statearr_23223_23244[(1)] = (4));

} else {
var statearr_23224_23245 = state_23214__$1;
(statearr_23224_23245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (11))){
var inst_23186 = (state_23214[(10)]);
var inst_23203 = (state_23214[(2)]);
var tmp23222 = inst_23186;
var inst_23186__$1 = tmp23222;
var state_23214__$1 = (function (){var statearr_23225 = state_23214;
(statearr_23225[(10)] = inst_23186__$1);

(statearr_23225[(11)] = inst_23203);

return statearr_23225;
})();
var statearr_23226_23246 = state_23214__$1;
(statearr_23226_23246[(2)] = null);

(statearr_23226_23246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (9))){
var inst_23194 = (state_23214[(7)]);
var state_23214__$1 = state_23214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23214__$1,(11),out,inst_23194);
} else {
if((state_val_23215 === (5))){
var inst_23208 = cljs.core.async.close_BANG_.call(null,out);
var state_23214__$1 = state_23214;
var statearr_23227_23247 = state_23214__$1;
(statearr_23227_23247[(2)] = inst_23208);

(statearr_23227_23247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (10))){
var inst_23206 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
var statearr_23228_23248 = state_23214__$1;
(statearr_23228_23248[(2)] = inst_23206);

(statearr_23228_23248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (8))){
var inst_23194 = (state_23214[(7)]);
var inst_23195 = (state_23214[(9)]);
var inst_23193 = (state_23214[(8)]);
var inst_23186 = (state_23214[(10)]);
var inst_23198 = (function (){var c = inst_23195;
var v = inst_23194;
var vec__23191 = inst_23193;
var cs = inst_23186;
return ((function (c,v,vec__23191,cs,inst_23194,inst_23195,inst_23193,inst_23186,state_val_23215,c__16610__auto___23239,out){
return (function (p1__23182_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23182_SHARP_);
});
;})(c,v,vec__23191,cs,inst_23194,inst_23195,inst_23193,inst_23186,state_val_23215,c__16610__auto___23239,out))
})();
var inst_23199 = cljs.core.filterv.call(null,inst_23198,inst_23186);
var inst_23186__$1 = inst_23199;
var state_23214__$1 = (function (){var statearr_23229 = state_23214;
(statearr_23229[(10)] = inst_23186__$1);

return statearr_23229;
})();
var statearr_23230_23249 = state_23214__$1;
(statearr_23230_23249[(2)] = null);

(statearr_23230_23249[(1)] = (2));


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
});})(c__16610__auto___23239,out))
;
return ((function (switch__16539__auto__,c__16610__auto___23239,out){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_23234 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23234[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_23234[(1)] = (1));

return statearr_23234;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_23214){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_23214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e23235){if((e23235 instanceof Object)){
var ex__16543__auto__ = e23235;
var statearr_23236_23250 = state_23214;
(statearr_23236_23250[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23251 = state_23214;
state_23214 = G__23251;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_23214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_23214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___23239,out))
})();
var state__16612__auto__ = (function (){var statearr_23237 = f__16611__auto__.call(null);
(statearr_23237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___23239);

return statearr_23237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___23239,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__23253 = arguments.length;
switch (G__23253) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16610__auto___23301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___23301,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___23301,out){
return (function (state_23277){
var state_val_23278 = (state_23277[(1)]);
if((state_val_23278 === (7))){
var inst_23259 = (state_23277[(7)]);
var inst_23259__$1 = (state_23277[(2)]);
var inst_23260 = (inst_23259__$1 == null);
var inst_23261 = cljs.core.not.call(null,inst_23260);
var state_23277__$1 = (function (){var statearr_23279 = state_23277;
(statearr_23279[(7)] = inst_23259__$1);

return statearr_23279;
})();
if(inst_23261){
var statearr_23280_23302 = state_23277__$1;
(statearr_23280_23302[(1)] = (8));

} else {
var statearr_23281_23303 = state_23277__$1;
(statearr_23281_23303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (1))){
var inst_23254 = (0);
var state_23277__$1 = (function (){var statearr_23282 = state_23277;
(statearr_23282[(8)] = inst_23254);

return statearr_23282;
})();
var statearr_23283_23304 = state_23277__$1;
(statearr_23283_23304[(2)] = null);

(statearr_23283_23304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (4))){
var state_23277__$1 = state_23277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23277__$1,(7),ch);
} else {
if((state_val_23278 === (6))){
var inst_23272 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23284_23305 = state_23277__$1;
(statearr_23284_23305[(2)] = inst_23272);

(statearr_23284_23305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (3))){
var inst_23274 = (state_23277[(2)]);
var inst_23275 = cljs.core.async.close_BANG_.call(null,out);
var state_23277__$1 = (function (){var statearr_23285 = state_23277;
(statearr_23285[(9)] = inst_23274);

return statearr_23285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23277__$1,inst_23275);
} else {
if((state_val_23278 === (2))){
var inst_23254 = (state_23277[(8)]);
var inst_23256 = (inst_23254 < n);
var state_23277__$1 = state_23277;
if(cljs.core.truth_(inst_23256)){
var statearr_23286_23306 = state_23277__$1;
(statearr_23286_23306[(1)] = (4));

} else {
var statearr_23287_23307 = state_23277__$1;
(statearr_23287_23307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (11))){
var inst_23254 = (state_23277[(8)]);
var inst_23264 = (state_23277[(2)]);
var inst_23265 = (inst_23254 + (1));
var inst_23254__$1 = inst_23265;
var state_23277__$1 = (function (){var statearr_23288 = state_23277;
(statearr_23288[(8)] = inst_23254__$1);

(statearr_23288[(10)] = inst_23264);

return statearr_23288;
})();
var statearr_23289_23308 = state_23277__$1;
(statearr_23289_23308[(2)] = null);

(statearr_23289_23308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (9))){
var state_23277__$1 = state_23277;
var statearr_23290_23309 = state_23277__$1;
(statearr_23290_23309[(2)] = null);

(statearr_23290_23309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (5))){
var state_23277__$1 = state_23277;
var statearr_23291_23310 = state_23277__$1;
(statearr_23291_23310[(2)] = null);

(statearr_23291_23310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (10))){
var inst_23269 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23292_23311 = state_23277__$1;
(statearr_23292_23311[(2)] = inst_23269);

(statearr_23292_23311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (8))){
var inst_23259 = (state_23277[(7)]);
var state_23277__$1 = state_23277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23277__$1,(11),out,inst_23259);
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
});})(c__16610__auto___23301,out))
;
return ((function (switch__16539__auto__,c__16610__auto___23301,out){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_23296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23296[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_23296[(1)] = (1));

return statearr_23296;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_23277){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_23277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e23297){if((e23297 instanceof Object)){
var ex__16543__auto__ = e23297;
var statearr_23298_23312 = state_23277;
(statearr_23298_23312[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23313 = state_23277;
state_23277 = G__23313;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_23277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_23277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___23301,out))
})();
var state__16612__auto__ = (function (){var statearr_23299 = f__16611__auto__.call(null);
(statearr_23299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___23301);

return statearr_23299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___23301,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will contain values from ch. Consecutive duplicate
 * values will be dropped.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__23315 = arguments.length;
switch (G__23315) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16610__auto___23365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___23365,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___23365,out){
return (function (state_23339){
var state_val_23340 = (state_23339[(1)]);
if((state_val_23340 === (7))){
var inst_23334 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23341_23366 = state_23339__$1;
(statearr_23341_23366[(2)] = inst_23334);

(statearr_23341_23366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (1))){
var inst_23316 = null;
var state_23339__$1 = (function (){var statearr_23342 = state_23339;
(statearr_23342[(7)] = inst_23316);

return statearr_23342;
})();
var statearr_23343_23367 = state_23339__$1;
(statearr_23343_23367[(2)] = null);

(statearr_23343_23367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (4))){
var inst_23319 = (state_23339[(8)]);
var inst_23319__$1 = (state_23339[(2)]);
var inst_23320 = (inst_23319__$1 == null);
var inst_23321 = cljs.core.not.call(null,inst_23320);
var state_23339__$1 = (function (){var statearr_23344 = state_23339;
(statearr_23344[(8)] = inst_23319__$1);

return statearr_23344;
})();
if(inst_23321){
var statearr_23345_23368 = state_23339__$1;
(statearr_23345_23368[(1)] = (5));

} else {
var statearr_23346_23369 = state_23339__$1;
(statearr_23346_23369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (6))){
var state_23339__$1 = state_23339;
var statearr_23347_23370 = state_23339__$1;
(statearr_23347_23370[(2)] = null);

(statearr_23347_23370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (3))){
var inst_23336 = (state_23339[(2)]);
var inst_23337 = cljs.core.async.close_BANG_.call(null,out);
var state_23339__$1 = (function (){var statearr_23348 = state_23339;
(statearr_23348[(9)] = inst_23336);

return statearr_23348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23339__$1,inst_23337);
} else {
if((state_val_23340 === (2))){
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23339__$1,(4),ch);
} else {
if((state_val_23340 === (11))){
var inst_23319 = (state_23339[(8)]);
var inst_23328 = (state_23339[(2)]);
var inst_23316 = inst_23319;
var state_23339__$1 = (function (){var statearr_23349 = state_23339;
(statearr_23349[(7)] = inst_23316);

(statearr_23349[(10)] = inst_23328);

return statearr_23349;
})();
var statearr_23350_23371 = state_23339__$1;
(statearr_23350_23371[(2)] = null);

(statearr_23350_23371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (9))){
var inst_23319 = (state_23339[(8)]);
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23339__$1,(11),out,inst_23319);
} else {
if((state_val_23340 === (5))){
var inst_23316 = (state_23339[(7)]);
var inst_23319 = (state_23339[(8)]);
var inst_23323 = cljs.core._EQ_.call(null,inst_23319,inst_23316);
var state_23339__$1 = state_23339;
if(inst_23323){
var statearr_23352_23372 = state_23339__$1;
(statearr_23352_23372[(1)] = (8));

} else {
var statearr_23353_23373 = state_23339__$1;
(statearr_23353_23373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (10))){
var inst_23331 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23354_23374 = state_23339__$1;
(statearr_23354_23374[(2)] = inst_23331);

(statearr_23354_23374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (8))){
var inst_23316 = (state_23339[(7)]);
var tmp23351 = inst_23316;
var inst_23316__$1 = tmp23351;
var state_23339__$1 = (function (){var statearr_23355 = state_23339;
(statearr_23355[(7)] = inst_23316__$1);

return statearr_23355;
})();
var statearr_23356_23375 = state_23339__$1;
(statearr_23356_23375[(2)] = null);

(statearr_23356_23375[(1)] = (2));


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
});})(c__16610__auto___23365,out))
;
return ((function (switch__16539__auto__,c__16610__auto___23365,out){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_23360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23360[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_23360[(1)] = (1));

return statearr_23360;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_23339){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_23339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e23361){if((e23361 instanceof Object)){
var ex__16543__auto__ = e23361;
var statearr_23362_23376 = state_23339;
(statearr_23362_23376[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23377 = state_23339;
state_23339 = G__23377;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_23339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_23339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___23365,out))
})();
var state__16612__auto__ = (function (){var statearr_23363 = f__16611__auto__.call(null);
(statearr_23363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___23365);

return statearr_23363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___23365,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will contain vectors of n items taken from ch. The
 * final vector in the return channel may be smaller than n if ch closed before
 * the vector could be completely filled.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__23379 = arguments.length;
switch (G__23379) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16610__auto___23448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___23448,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___23448,out){
return (function (state_23417){
var state_val_23418 = (state_23417[(1)]);
if((state_val_23418 === (7))){
var inst_23413 = (state_23417[(2)]);
var state_23417__$1 = state_23417;
var statearr_23419_23449 = state_23417__$1;
(statearr_23419_23449[(2)] = inst_23413);

(statearr_23419_23449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (1))){
var inst_23380 = (new Array(n));
var inst_23381 = inst_23380;
var inst_23382 = (0);
var state_23417__$1 = (function (){var statearr_23420 = state_23417;
(statearr_23420[(7)] = inst_23382);

(statearr_23420[(8)] = inst_23381);

return statearr_23420;
})();
var statearr_23421_23450 = state_23417__$1;
(statearr_23421_23450[(2)] = null);

(statearr_23421_23450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (4))){
var inst_23385 = (state_23417[(9)]);
var inst_23385__$1 = (state_23417[(2)]);
var inst_23386 = (inst_23385__$1 == null);
var inst_23387 = cljs.core.not.call(null,inst_23386);
var state_23417__$1 = (function (){var statearr_23422 = state_23417;
(statearr_23422[(9)] = inst_23385__$1);

return statearr_23422;
})();
if(inst_23387){
var statearr_23423_23451 = state_23417__$1;
(statearr_23423_23451[(1)] = (5));

} else {
var statearr_23424_23452 = state_23417__$1;
(statearr_23424_23452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (15))){
var inst_23407 = (state_23417[(2)]);
var state_23417__$1 = state_23417;
var statearr_23425_23453 = state_23417__$1;
(statearr_23425_23453[(2)] = inst_23407);

(statearr_23425_23453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (13))){
var state_23417__$1 = state_23417;
var statearr_23426_23454 = state_23417__$1;
(statearr_23426_23454[(2)] = null);

(statearr_23426_23454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (6))){
var inst_23382 = (state_23417[(7)]);
var inst_23403 = (inst_23382 > (0));
var state_23417__$1 = state_23417;
if(cljs.core.truth_(inst_23403)){
var statearr_23427_23455 = state_23417__$1;
(statearr_23427_23455[(1)] = (12));

} else {
var statearr_23428_23456 = state_23417__$1;
(statearr_23428_23456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (3))){
var inst_23415 = (state_23417[(2)]);
var state_23417__$1 = state_23417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23417__$1,inst_23415);
} else {
if((state_val_23418 === (12))){
var inst_23381 = (state_23417[(8)]);
var inst_23405 = cljs.core.vec.call(null,inst_23381);
var state_23417__$1 = state_23417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23417__$1,(15),out,inst_23405);
} else {
if((state_val_23418 === (2))){
var state_23417__$1 = state_23417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23417__$1,(4),ch);
} else {
if((state_val_23418 === (11))){
var inst_23397 = (state_23417[(2)]);
var inst_23398 = (new Array(n));
var inst_23381 = inst_23398;
var inst_23382 = (0);
var state_23417__$1 = (function (){var statearr_23429 = state_23417;
(statearr_23429[(7)] = inst_23382);

(statearr_23429[(8)] = inst_23381);

(statearr_23429[(10)] = inst_23397);

return statearr_23429;
})();
var statearr_23430_23457 = state_23417__$1;
(statearr_23430_23457[(2)] = null);

(statearr_23430_23457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (9))){
var inst_23381 = (state_23417[(8)]);
var inst_23395 = cljs.core.vec.call(null,inst_23381);
var state_23417__$1 = state_23417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23417__$1,(11),out,inst_23395);
} else {
if((state_val_23418 === (5))){
var inst_23382 = (state_23417[(7)]);
var inst_23381 = (state_23417[(8)]);
var inst_23385 = (state_23417[(9)]);
var inst_23390 = (state_23417[(11)]);
var inst_23389 = (inst_23381[inst_23382] = inst_23385);
var inst_23390__$1 = (inst_23382 + (1));
var inst_23391 = (inst_23390__$1 < n);
var state_23417__$1 = (function (){var statearr_23431 = state_23417;
(statearr_23431[(12)] = inst_23389);

(statearr_23431[(11)] = inst_23390__$1);

return statearr_23431;
})();
if(cljs.core.truth_(inst_23391)){
var statearr_23432_23458 = state_23417__$1;
(statearr_23432_23458[(1)] = (8));

} else {
var statearr_23433_23459 = state_23417__$1;
(statearr_23433_23459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (14))){
var inst_23410 = (state_23417[(2)]);
var inst_23411 = cljs.core.async.close_BANG_.call(null,out);
var state_23417__$1 = (function (){var statearr_23435 = state_23417;
(statearr_23435[(13)] = inst_23410);

return statearr_23435;
})();
var statearr_23436_23460 = state_23417__$1;
(statearr_23436_23460[(2)] = inst_23411);

(statearr_23436_23460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (10))){
var inst_23401 = (state_23417[(2)]);
var state_23417__$1 = state_23417;
var statearr_23437_23461 = state_23417__$1;
(statearr_23437_23461[(2)] = inst_23401);

(statearr_23437_23461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23418 === (8))){
var inst_23381 = (state_23417[(8)]);
var inst_23390 = (state_23417[(11)]);
var tmp23434 = inst_23381;
var inst_23381__$1 = tmp23434;
var inst_23382 = inst_23390;
var state_23417__$1 = (function (){var statearr_23438 = state_23417;
(statearr_23438[(7)] = inst_23382);

(statearr_23438[(8)] = inst_23381__$1);

return statearr_23438;
})();
var statearr_23439_23462 = state_23417__$1;
(statearr_23439_23462[(2)] = null);

(statearr_23439_23462[(1)] = (2));


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
});})(c__16610__auto___23448,out))
;
return ((function (switch__16539__auto__,c__16610__auto___23448,out){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_23443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23443[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_23443[(1)] = (1));

return statearr_23443;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_23417){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_23417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e23444){if((e23444 instanceof Object)){
var ex__16543__auto__ = e23444;
var statearr_23445_23463 = state_23417;
(statearr_23445_23463[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23464 = state_23417;
state_23417 = G__23464;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_23417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_23417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___23448,out))
})();
var state__16612__auto__ = (function (){var statearr_23446 = f__16611__auto__.call(null);
(statearr_23446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___23448);

return statearr_23446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___23448,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will contain vectors of items taken from ch. New
 * vectors will be created whenever (f itm) returns a value that differs from
 * the previous item's (f itm).
 * 
 * The output channel is unbuffered, unless buf-or-n is given
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__23466 = arguments.length;
switch (G__23466) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16610__auto___23539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16610__auto___23539,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16539__auto__ = ((function (c__16610__auto___23539,out){
return (function (state_23508){
var state_val_23509 = (state_23508[(1)]);
if((state_val_23509 === (7))){
var inst_23504 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
var statearr_23510_23540 = state_23508__$1;
(statearr_23510_23540[(2)] = inst_23504);

(statearr_23510_23540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (1))){
var inst_23467 = [];
var inst_23468 = inst_23467;
var inst_23469 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23508__$1 = (function (){var statearr_23511 = state_23508;
(statearr_23511[(7)] = inst_23468);

(statearr_23511[(8)] = inst_23469);

return statearr_23511;
})();
var statearr_23512_23541 = state_23508__$1;
(statearr_23512_23541[(2)] = null);

(statearr_23512_23541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (4))){
var inst_23472 = (state_23508[(9)]);
var inst_23472__$1 = (state_23508[(2)]);
var inst_23473 = (inst_23472__$1 == null);
var inst_23474 = cljs.core.not.call(null,inst_23473);
var state_23508__$1 = (function (){var statearr_23513 = state_23508;
(statearr_23513[(9)] = inst_23472__$1);

return statearr_23513;
})();
if(inst_23474){
var statearr_23514_23542 = state_23508__$1;
(statearr_23514_23542[(1)] = (5));

} else {
var statearr_23515_23543 = state_23508__$1;
(statearr_23515_23543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (15))){
var inst_23498 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
var statearr_23516_23544 = state_23508__$1;
(statearr_23516_23544[(2)] = inst_23498);

(statearr_23516_23544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (13))){
var state_23508__$1 = state_23508;
var statearr_23517_23545 = state_23508__$1;
(statearr_23517_23545[(2)] = null);

(statearr_23517_23545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (6))){
var inst_23468 = (state_23508[(7)]);
var inst_23493 = inst_23468.length;
var inst_23494 = (inst_23493 > (0));
var state_23508__$1 = state_23508;
if(cljs.core.truth_(inst_23494)){
var statearr_23518_23546 = state_23508__$1;
(statearr_23518_23546[(1)] = (12));

} else {
var statearr_23519_23547 = state_23508__$1;
(statearr_23519_23547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (3))){
var inst_23506 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23508__$1,inst_23506);
} else {
if((state_val_23509 === (12))){
var inst_23468 = (state_23508[(7)]);
var inst_23496 = cljs.core.vec.call(null,inst_23468);
var state_23508__$1 = state_23508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23508__$1,(15),out,inst_23496);
} else {
if((state_val_23509 === (2))){
var state_23508__$1 = state_23508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23508__$1,(4),ch);
} else {
if((state_val_23509 === (11))){
var inst_23472 = (state_23508[(9)]);
var inst_23476 = (state_23508[(10)]);
var inst_23486 = (state_23508[(2)]);
var inst_23487 = [];
var inst_23488 = inst_23487.push(inst_23472);
var inst_23468 = inst_23487;
var inst_23469 = inst_23476;
var state_23508__$1 = (function (){var statearr_23520 = state_23508;
(statearr_23520[(11)] = inst_23488);

(statearr_23520[(12)] = inst_23486);

(statearr_23520[(7)] = inst_23468);

(statearr_23520[(8)] = inst_23469);

return statearr_23520;
})();
var statearr_23521_23548 = state_23508__$1;
(statearr_23521_23548[(2)] = null);

(statearr_23521_23548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (9))){
var inst_23468 = (state_23508[(7)]);
var inst_23484 = cljs.core.vec.call(null,inst_23468);
var state_23508__$1 = state_23508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23508__$1,(11),out,inst_23484);
} else {
if((state_val_23509 === (5))){
var inst_23472 = (state_23508[(9)]);
var inst_23476 = (state_23508[(10)]);
var inst_23469 = (state_23508[(8)]);
var inst_23476__$1 = f.call(null,inst_23472);
var inst_23477 = cljs.core._EQ_.call(null,inst_23476__$1,inst_23469);
var inst_23478 = cljs.core.keyword_identical_QMARK_.call(null,inst_23469,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23479 = (inst_23477) || (inst_23478);
var state_23508__$1 = (function (){var statearr_23522 = state_23508;
(statearr_23522[(10)] = inst_23476__$1);

return statearr_23522;
})();
if(cljs.core.truth_(inst_23479)){
var statearr_23523_23549 = state_23508__$1;
(statearr_23523_23549[(1)] = (8));

} else {
var statearr_23524_23550 = state_23508__$1;
(statearr_23524_23550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (14))){
var inst_23501 = (state_23508[(2)]);
var inst_23502 = cljs.core.async.close_BANG_.call(null,out);
var state_23508__$1 = (function (){var statearr_23526 = state_23508;
(statearr_23526[(13)] = inst_23501);

return statearr_23526;
})();
var statearr_23527_23551 = state_23508__$1;
(statearr_23527_23551[(2)] = inst_23502);

(statearr_23527_23551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (10))){
var inst_23491 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
var statearr_23528_23552 = state_23508__$1;
(statearr_23528_23552[(2)] = inst_23491);

(statearr_23528_23552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (8))){
var inst_23472 = (state_23508[(9)]);
var inst_23476 = (state_23508[(10)]);
var inst_23468 = (state_23508[(7)]);
var inst_23481 = inst_23468.push(inst_23472);
var tmp23525 = inst_23468;
var inst_23468__$1 = tmp23525;
var inst_23469 = inst_23476;
var state_23508__$1 = (function (){var statearr_23529 = state_23508;
(statearr_23529[(14)] = inst_23481);

(statearr_23529[(7)] = inst_23468__$1);

(statearr_23529[(8)] = inst_23469);

return statearr_23529;
})();
var statearr_23530_23553 = state_23508__$1;
(statearr_23530_23553[(2)] = null);

(statearr_23530_23553[(1)] = (2));


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
});})(c__16610__auto___23539,out))
;
return ((function (switch__16539__auto__,c__16610__auto___23539,out){
return (function() {
var cljs$core$async$state_machine__16540__auto__ = null;
var cljs$core$async$state_machine__16540__auto____0 = (function (){
var statearr_23534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23534[(0)] = cljs$core$async$state_machine__16540__auto__);

(statearr_23534[(1)] = (1));

return statearr_23534;
});
var cljs$core$async$state_machine__16540__auto____1 = (function (state_23508){
while(true){
var ret_value__16541__auto__ = (function (){try{while(true){
var result__16542__auto__ = switch__16539__auto__.call(null,state_23508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16542__auto__;
}
break;
}
}catch (e23535){if((e23535 instanceof Object)){
var ex__16543__auto__ = e23535;
var statearr_23536_23554 = state_23508;
(statearr_23536_23554[(5)] = ex__16543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23555 = state_23508;
state_23508 = G__23555;
continue;
} else {
return ret_value__16541__auto__;
}
break;
}
});
cljs$core$async$state_machine__16540__auto__ = function(state_23508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16540__auto____1.call(this,state_23508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16540__auto____0;
cljs$core$async$state_machine__16540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16540__auto____1;
return cljs$core$async$state_machine__16540__auto__;
})()
;})(switch__16539__auto__,c__16610__auto___23539,out))
})();
var state__16612__auto__ = (function (){var statearr_23537 = f__16611__auto__.call(null);
(statearr_23537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___23539);

return statearr_23537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16612__auto__);
});})(c__16610__auto___23539,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map