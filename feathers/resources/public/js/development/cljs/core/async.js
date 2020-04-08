// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23481 = arguments.length;
switch (G__23481) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23482 = (function (f,blockable,meta23483){
this.f = f;
this.blockable = blockable;
this.meta23483 = meta23483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23484,meta23483__$1){
var self__ = this;
var _23484__$1 = this;
return (new cljs.core.async.t_cljs$core$async23482(self__.f,self__.blockable,meta23483__$1));
});

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23484){
var self__ = this;
var _23484__$1 = this;
return self__.meta23483;
});

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23483","meta23483",1247657486,null)], null);
});

cljs.core.async.t_cljs$core$async23482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23482";

cljs.core.async.t_cljs$core$async23482.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23482");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23482.
 */
cljs.core.async.__GT_t_cljs$core$async23482 = (function cljs$core$async$__GT_t_cljs$core$async23482(f__$1,blockable__$1,meta23483){
return (new cljs.core.async.t_cljs$core$async23482(f__$1,blockable__$1,meta23483));
});

}

return (new cljs.core.async.t_cljs$core$async23482(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23488 = arguments.length;
switch (G__23488) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23491 = arguments.length;
switch (G__23491) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23494 = arguments.length;
switch (G__23494) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23496 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23496);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23496,ret){
return (function (){
return fn1.call(null,val_23496);
});})(val_23496,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23498 = arguments.length;
switch (G__23498) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23500 = n;
var x_23501 = (0);
while(true){
if((x_23501 < n__4607__auto___23500)){
(a[x_23501] = (0));

var G__23502 = (x_23501 + (1));
x_23501 = G__23502;
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

var G__23503 = (i + (1));
i = G__23503;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23504 = (function (flag,meta23505){
this.flag = flag;
this.meta23505 = meta23505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23506,meta23505__$1){
var self__ = this;
var _23506__$1 = this;
return (new cljs.core.async.t_cljs$core$async23504(self__.flag,meta23505__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23506){
var self__ = this;
var _23506__$1 = this;
return self__.meta23505;
});})(flag))
;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23504.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23505","meta23505",-2138024241,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23504";

cljs.core.async.t_cljs$core$async23504.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23504");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23504.
 */
cljs.core.async.__GT_t_cljs$core$async23504 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23504(flag__$1,meta23505){
return (new cljs.core.async.t_cljs$core$async23504(flag__$1,meta23505));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23504(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23507 = (function (flag,cb,meta23508){
this.flag = flag;
this.cb = cb;
this.meta23508 = meta23508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23509,meta23508__$1){
var self__ = this;
var _23509__$1 = this;
return (new cljs.core.async.t_cljs$core$async23507(self__.flag,self__.cb,meta23508__$1));
});

cljs.core.async.t_cljs$core$async23507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23509){
var self__ = this;
var _23509__$1 = this;
return self__.meta23508;
});

cljs.core.async.t_cljs$core$async23507.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23507.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23508","meta23508",1378165782,null)], null);
});

cljs.core.async.t_cljs$core$async23507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23507";

cljs.core.async.t_cljs$core$async23507.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23507");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23507.
 */
cljs.core.async.__GT_t_cljs$core$async23507 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23507(flag__$1,cb__$1,meta23508){
return (new cljs.core.async.t_cljs$core$async23507(flag__$1,cb__$1,meta23508));
});

}

return (new cljs.core.async.t_cljs$core$async23507(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23510_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23510_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23511_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23511_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23512 = (i + (1));
i = G__23512;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23518 = arguments.length;
var i__4731__auto___23519 = (0);
while(true){
if((i__4731__auto___23519 < len__4730__auto___23518)){
args__4736__auto__.push((arguments[i__4731__auto___23519]));

var G__23520 = (i__4731__auto___23519 + (1));
i__4731__auto___23519 = G__23520;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23515){
var map__23516 = p__23515;
var map__23516__$1 = (((((!((map__23516 == null))))?(((((map__23516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23516):map__23516);
var opts = map__23516__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23513){
var G__23514 = cljs.core.first.call(null,seq23513);
var seq23513__$1 = cljs.core.next.call(null,seq23513);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23514,seq23513__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23522 = arguments.length;
switch (G__23522) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23421__auto___23568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___23568){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___23568){
return (function (state_23546){
var state_val_23547 = (state_23546[(1)]);
if((state_val_23547 === (7))){
var inst_23542 = (state_23546[(2)]);
var state_23546__$1 = state_23546;
var statearr_23548_23569 = state_23546__$1;
(statearr_23548_23569[(2)] = inst_23542);

(statearr_23548_23569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (1))){
var state_23546__$1 = state_23546;
var statearr_23549_23570 = state_23546__$1;
(statearr_23549_23570[(2)] = null);

(statearr_23549_23570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (4))){
var inst_23525 = (state_23546[(7)]);
var inst_23525__$1 = (state_23546[(2)]);
var inst_23526 = (inst_23525__$1 == null);
var state_23546__$1 = (function (){var statearr_23550 = state_23546;
(statearr_23550[(7)] = inst_23525__$1);

return statearr_23550;
})();
if(cljs.core.truth_(inst_23526)){
var statearr_23551_23571 = state_23546__$1;
(statearr_23551_23571[(1)] = (5));

} else {
var statearr_23552_23572 = state_23546__$1;
(statearr_23552_23572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (13))){
var state_23546__$1 = state_23546;
var statearr_23553_23573 = state_23546__$1;
(statearr_23553_23573[(2)] = null);

(statearr_23553_23573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (6))){
var inst_23525 = (state_23546[(7)]);
var state_23546__$1 = state_23546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23546__$1,(11),to,inst_23525);
} else {
if((state_val_23547 === (3))){
var inst_23544 = (state_23546[(2)]);
var state_23546__$1 = state_23546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23546__$1,inst_23544);
} else {
if((state_val_23547 === (12))){
var state_23546__$1 = state_23546;
var statearr_23554_23574 = state_23546__$1;
(statearr_23554_23574[(2)] = null);

(statearr_23554_23574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (2))){
var state_23546__$1 = state_23546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23546__$1,(4),from);
} else {
if((state_val_23547 === (11))){
var inst_23535 = (state_23546[(2)]);
var state_23546__$1 = state_23546;
if(cljs.core.truth_(inst_23535)){
var statearr_23555_23575 = state_23546__$1;
(statearr_23555_23575[(1)] = (12));

} else {
var statearr_23556_23576 = state_23546__$1;
(statearr_23556_23576[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (9))){
var state_23546__$1 = state_23546;
var statearr_23557_23577 = state_23546__$1;
(statearr_23557_23577[(2)] = null);

(statearr_23557_23577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (5))){
var state_23546__$1 = state_23546;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23558_23578 = state_23546__$1;
(statearr_23558_23578[(1)] = (8));

} else {
var statearr_23559_23579 = state_23546__$1;
(statearr_23559_23579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (14))){
var inst_23540 = (state_23546[(2)]);
var state_23546__$1 = state_23546;
var statearr_23560_23580 = state_23546__$1;
(statearr_23560_23580[(2)] = inst_23540);

(statearr_23560_23580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (10))){
var inst_23532 = (state_23546[(2)]);
var state_23546__$1 = state_23546;
var statearr_23561_23581 = state_23546__$1;
(statearr_23561_23581[(2)] = inst_23532);

(statearr_23561_23581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (8))){
var inst_23529 = cljs.core.async.close_BANG_.call(null,to);
var state_23546__$1 = state_23546;
var statearr_23562_23582 = state_23546__$1;
(statearr_23562_23582[(2)] = inst_23529);

(statearr_23562_23582[(1)] = (10));


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
});})(c__23421__auto___23568))
;
return ((function (switch__23326__auto__,c__23421__auto___23568){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_23563 = [null,null,null,null,null,null,null,null];
(statearr_23563[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_23563[(1)] = (1));

return statearr_23563;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_23546){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23564){if((e23564 instanceof Object)){
var ex__23330__auto__ = e23564;
var statearr_23565_23583 = state_23546;
(statearr_23565_23583[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23584 = state_23546;
state_23546 = G__23584;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_23546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_23546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___23568))
})();
var state__23423__auto__ = (function (){var statearr_23566 = f__23422__auto__.call(null);
(statearr_23566[(6)] = c__23421__auto___23568);

return statearr_23566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___23568))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23585){
var vec__23586 = p__23585;
var v = cljs.core.nth.call(null,vec__23586,(0),null);
var p = cljs.core.nth.call(null,vec__23586,(1),null);
var job = vec__23586;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23421__auto___23757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___23757,res,vec__23586,v,p,job,jobs,results){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___23757,res,vec__23586,v,p,job,jobs,results){
return (function (state_23593){
var state_val_23594 = (state_23593[(1)]);
if((state_val_23594 === (1))){
var state_23593__$1 = state_23593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23593__$1,(2),res,v);
} else {
if((state_val_23594 === (2))){
var inst_23590 = (state_23593[(2)]);
var inst_23591 = cljs.core.async.close_BANG_.call(null,res);
var state_23593__$1 = (function (){var statearr_23595 = state_23593;
(statearr_23595[(7)] = inst_23590);

return statearr_23595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23593__$1,inst_23591);
} else {
return null;
}
}
});})(c__23421__auto___23757,res,vec__23586,v,p,job,jobs,results))
;
return ((function (switch__23326__auto__,c__23421__auto___23757,res,vec__23586,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0 = (function (){
var statearr_23596 = [null,null,null,null,null,null,null,null];
(statearr_23596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__);

(statearr_23596[(1)] = (1));

return statearr_23596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1 = (function (state_23593){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23597){if((e23597 instanceof Object)){
var ex__23330__auto__ = e23597;
var statearr_23598_23758 = state_23593;
(statearr_23598_23758[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23759 = state_23593;
state_23593 = G__23759;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = function(state_23593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1.call(this,state_23593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___23757,res,vec__23586,v,p,job,jobs,results))
})();
var state__23423__auto__ = (function (){var statearr_23599 = f__23422__auto__.call(null);
(statearr_23599[(6)] = c__23421__auto___23757);

return statearr_23599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___23757,res,vec__23586,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23600){
var vec__23601 = p__23600;
var v = cljs.core.nth.call(null,vec__23601,(0),null);
var p = cljs.core.nth.call(null,vec__23601,(1),null);
var job = vec__23601;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___23760 = n;
var __23761 = (0);
while(true){
if((__23761 < n__4607__auto___23760)){
var G__23604_23762 = type;
var G__23604_23763__$1 = (((G__23604_23762 instanceof cljs.core.Keyword))?G__23604_23762.fqn:null);
switch (G__23604_23763__$1) {
case "compute":
var c__23421__auto___23765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23761,c__23421__auto___23765,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (__23761,c__23421__auto___23765,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async){
return (function (state_23617){
var state_val_23618 = (state_23617[(1)]);
if((state_val_23618 === (1))){
var state_23617__$1 = state_23617;
var statearr_23619_23766 = state_23617__$1;
(statearr_23619_23766[(2)] = null);

(statearr_23619_23766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23618 === (2))){
var state_23617__$1 = state_23617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23617__$1,(4),jobs);
} else {
if((state_val_23618 === (3))){
var inst_23615 = (state_23617[(2)]);
var state_23617__$1 = state_23617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23617__$1,inst_23615);
} else {
if((state_val_23618 === (4))){
var inst_23607 = (state_23617[(2)]);
var inst_23608 = process.call(null,inst_23607);
var state_23617__$1 = state_23617;
if(cljs.core.truth_(inst_23608)){
var statearr_23620_23767 = state_23617__$1;
(statearr_23620_23767[(1)] = (5));

} else {
var statearr_23621_23768 = state_23617__$1;
(statearr_23621_23768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23618 === (5))){
var state_23617__$1 = state_23617;
var statearr_23622_23769 = state_23617__$1;
(statearr_23622_23769[(2)] = null);

(statearr_23622_23769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23618 === (6))){
var state_23617__$1 = state_23617;
var statearr_23623_23770 = state_23617__$1;
(statearr_23623_23770[(2)] = null);

(statearr_23623_23770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23618 === (7))){
var inst_23613 = (state_23617[(2)]);
var state_23617__$1 = state_23617;
var statearr_23624_23771 = state_23617__$1;
(statearr_23624_23771[(2)] = inst_23613);

(statearr_23624_23771[(1)] = (3));


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
});})(__23761,c__23421__auto___23765,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async))
;
return ((function (__23761,switch__23326__auto__,c__23421__auto___23765,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0 = (function (){
var statearr_23625 = [null,null,null,null,null,null,null];
(statearr_23625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__);

(statearr_23625[(1)] = (1));

return statearr_23625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1 = (function (state_23617){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23626){if((e23626 instanceof Object)){
var ex__23330__auto__ = e23626;
var statearr_23627_23772 = state_23617;
(statearr_23627_23772[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23773 = state_23617;
state_23617 = G__23773;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = function(state_23617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1.call(this,state_23617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__;
})()
;})(__23761,switch__23326__auto__,c__23421__auto___23765,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async))
})();
var state__23423__auto__ = (function (){var statearr_23628 = f__23422__auto__.call(null);
(statearr_23628[(6)] = c__23421__auto___23765);

return statearr_23628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(__23761,c__23421__auto___23765,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async))
);


break;
case "async":
var c__23421__auto___23774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23761,c__23421__auto___23774,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (__23761,c__23421__auto___23774,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async){
return (function (state_23641){
var state_val_23642 = (state_23641[(1)]);
if((state_val_23642 === (1))){
var state_23641__$1 = state_23641;
var statearr_23643_23775 = state_23641__$1;
(statearr_23643_23775[(2)] = null);

(statearr_23643_23775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23642 === (2))){
var state_23641__$1 = state_23641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23641__$1,(4),jobs);
} else {
if((state_val_23642 === (3))){
var inst_23639 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23641__$1,inst_23639);
} else {
if((state_val_23642 === (4))){
var inst_23631 = (state_23641[(2)]);
var inst_23632 = async.call(null,inst_23631);
var state_23641__$1 = state_23641;
if(cljs.core.truth_(inst_23632)){
var statearr_23644_23776 = state_23641__$1;
(statearr_23644_23776[(1)] = (5));

} else {
var statearr_23645_23777 = state_23641__$1;
(statearr_23645_23777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23642 === (5))){
var state_23641__$1 = state_23641;
var statearr_23646_23778 = state_23641__$1;
(statearr_23646_23778[(2)] = null);

(statearr_23646_23778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23642 === (6))){
var state_23641__$1 = state_23641;
var statearr_23647_23779 = state_23641__$1;
(statearr_23647_23779[(2)] = null);

(statearr_23647_23779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23642 === (7))){
var inst_23637 = (state_23641[(2)]);
var state_23641__$1 = state_23641;
var statearr_23648_23780 = state_23641__$1;
(statearr_23648_23780[(2)] = inst_23637);

(statearr_23648_23780[(1)] = (3));


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
});})(__23761,c__23421__auto___23774,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async))
;
return ((function (__23761,switch__23326__auto__,c__23421__auto___23774,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0 = (function (){
var statearr_23649 = [null,null,null,null,null,null,null];
(statearr_23649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__);

(statearr_23649[(1)] = (1));

return statearr_23649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1 = (function (state_23641){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23650){if((e23650 instanceof Object)){
var ex__23330__auto__ = e23650;
var statearr_23651_23781 = state_23641;
(statearr_23651_23781[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23782 = state_23641;
state_23641 = G__23782;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = function(state_23641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1.call(this,state_23641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__;
})()
;})(__23761,switch__23326__auto__,c__23421__auto___23774,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async))
})();
var state__23423__auto__ = (function (){var statearr_23652 = f__23422__auto__.call(null);
(statearr_23652[(6)] = c__23421__auto___23774);

return statearr_23652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(__23761,c__23421__auto___23774,G__23604_23762,G__23604_23763__$1,n__4607__auto___23760,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23604_23763__$1)].join('')));

}

var G__23783 = (__23761 + (1));
__23761 = G__23783;
continue;
} else {
}
break;
}

var c__23421__auto___23784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___23784,jobs,results,process,async){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___23784,jobs,results,process,async){
return (function (state_23674){
var state_val_23675 = (state_23674[(1)]);
if((state_val_23675 === (7))){
var inst_23670 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
var statearr_23676_23785 = state_23674__$1;
(statearr_23676_23785[(2)] = inst_23670);

(statearr_23676_23785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (1))){
var state_23674__$1 = state_23674;
var statearr_23677_23786 = state_23674__$1;
(statearr_23677_23786[(2)] = null);

(statearr_23677_23786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (4))){
var inst_23655 = (state_23674[(7)]);
var inst_23655__$1 = (state_23674[(2)]);
var inst_23656 = (inst_23655__$1 == null);
var state_23674__$1 = (function (){var statearr_23678 = state_23674;
(statearr_23678[(7)] = inst_23655__$1);

return statearr_23678;
})();
if(cljs.core.truth_(inst_23656)){
var statearr_23679_23787 = state_23674__$1;
(statearr_23679_23787[(1)] = (5));

} else {
var statearr_23680_23788 = state_23674__$1;
(statearr_23680_23788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (6))){
var inst_23655 = (state_23674[(7)]);
var inst_23660 = (state_23674[(8)]);
var inst_23660__$1 = cljs.core.async.chan.call(null,(1));
var inst_23661 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23662 = [inst_23655,inst_23660__$1];
var inst_23663 = (new cljs.core.PersistentVector(null,2,(5),inst_23661,inst_23662,null));
var state_23674__$1 = (function (){var statearr_23681 = state_23674;
(statearr_23681[(8)] = inst_23660__$1);

return statearr_23681;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23674__$1,(8),jobs,inst_23663);
} else {
if((state_val_23675 === (3))){
var inst_23672 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23674__$1,inst_23672);
} else {
if((state_val_23675 === (2))){
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23674__$1,(4),from);
} else {
if((state_val_23675 === (9))){
var inst_23667 = (state_23674[(2)]);
var state_23674__$1 = (function (){var statearr_23682 = state_23674;
(statearr_23682[(9)] = inst_23667);

return statearr_23682;
})();
var statearr_23683_23789 = state_23674__$1;
(statearr_23683_23789[(2)] = null);

(statearr_23683_23789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (5))){
var inst_23658 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23674__$1 = state_23674;
var statearr_23684_23790 = state_23674__$1;
(statearr_23684_23790[(2)] = inst_23658);

(statearr_23684_23790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (8))){
var inst_23660 = (state_23674[(8)]);
var inst_23665 = (state_23674[(2)]);
var state_23674__$1 = (function (){var statearr_23685 = state_23674;
(statearr_23685[(10)] = inst_23665);

return statearr_23685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23674__$1,(9),results,inst_23660);
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
});})(c__23421__auto___23784,jobs,results,process,async))
;
return ((function (switch__23326__auto__,c__23421__auto___23784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0 = (function (){
var statearr_23686 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__);

(statearr_23686[(1)] = (1));

return statearr_23686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1 = (function (state_23674){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23687){if((e23687 instanceof Object)){
var ex__23330__auto__ = e23687;
var statearr_23688_23791 = state_23674;
(statearr_23688_23791[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23792 = state_23674;
state_23674 = G__23792;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = function(state_23674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1.call(this,state_23674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___23784,jobs,results,process,async))
})();
var state__23423__auto__ = (function (){var statearr_23689 = f__23422__auto__.call(null);
(statearr_23689[(6)] = c__23421__auto___23784);

return statearr_23689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___23784,jobs,results,process,async))
);


var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__,jobs,results,process,async){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__,jobs,results,process,async){
return (function (state_23727){
var state_val_23728 = (state_23727[(1)]);
if((state_val_23728 === (7))){
var inst_23723 = (state_23727[(2)]);
var state_23727__$1 = state_23727;
var statearr_23729_23793 = state_23727__$1;
(statearr_23729_23793[(2)] = inst_23723);

(statearr_23729_23793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (20))){
var state_23727__$1 = state_23727;
var statearr_23730_23794 = state_23727__$1;
(statearr_23730_23794[(2)] = null);

(statearr_23730_23794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (1))){
var state_23727__$1 = state_23727;
var statearr_23731_23795 = state_23727__$1;
(statearr_23731_23795[(2)] = null);

(statearr_23731_23795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (4))){
var inst_23692 = (state_23727[(7)]);
var inst_23692__$1 = (state_23727[(2)]);
var inst_23693 = (inst_23692__$1 == null);
var state_23727__$1 = (function (){var statearr_23732 = state_23727;
(statearr_23732[(7)] = inst_23692__$1);

return statearr_23732;
})();
if(cljs.core.truth_(inst_23693)){
var statearr_23733_23796 = state_23727__$1;
(statearr_23733_23796[(1)] = (5));

} else {
var statearr_23734_23797 = state_23727__$1;
(statearr_23734_23797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (15))){
var inst_23705 = (state_23727[(8)]);
var state_23727__$1 = state_23727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23727__$1,(18),to,inst_23705);
} else {
if((state_val_23728 === (21))){
var inst_23718 = (state_23727[(2)]);
var state_23727__$1 = state_23727;
var statearr_23735_23798 = state_23727__$1;
(statearr_23735_23798[(2)] = inst_23718);

(statearr_23735_23798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (13))){
var inst_23720 = (state_23727[(2)]);
var state_23727__$1 = (function (){var statearr_23736 = state_23727;
(statearr_23736[(9)] = inst_23720);

return statearr_23736;
})();
var statearr_23737_23799 = state_23727__$1;
(statearr_23737_23799[(2)] = null);

(statearr_23737_23799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (6))){
var inst_23692 = (state_23727[(7)]);
var state_23727__$1 = state_23727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23727__$1,(11),inst_23692);
} else {
if((state_val_23728 === (17))){
var inst_23713 = (state_23727[(2)]);
var state_23727__$1 = state_23727;
if(cljs.core.truth_(inst_23713)){
var statearr_23738_23800 = state_23727__$1;
(statearr_23738_23800[(1)] = (19));

} else {
var statearr_23739_23801 = state_23727__$1;
(statearr_23739_23801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (3))){
var inst_23725 = (state_23727[(2)]);
var state_23727__$1 = state_23727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23727__$1,inst_23725);
} else {
if((state_val_23728 === (12))){
var inst_23702 = (state_23727[(10)]);
var state_23727__$1 = state_23727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23727__$1,(14),inst_23702);
} else {
if((state_val_23728 === (2))){
var state_23727__$1 = state_23727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23727__$1,(4),results);
} else {
if((state_val_23728 === (19))){
var state_23727__$1 = state_23727;
var statearr_23740_23802 = state_23727__$1;
(statearr_23740_23802[(2)] = null);

(statearr_23740_23802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (11))){
var inst_23702 = (state_23727[(2)]);
var state_23727__$1 = (function (){var statearr_23741 = state_23727;
(statearr_23741[(10)] = inst_23702);

return statearr_23741;
})();
var statearr_23742_23803 = state_23727__$1;
(statearr_23742_23803[(2)] = null);

(statearr_23742_23803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (9))){
var state_23727__$1 = state_23727;
var statearr_23743_23804 = state_23727__$1;
(statearr_23743_23804[(2)] = null);

(statearr_23743_23804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (5))){
var state_23727__$1 = state_23727;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23744_23805 = state_23727__$1;
(statearr_23744_23805[(1)] = (8));

} else {
var statearr_23745_23806 = state_23727__$1;
(statearr_23745_23806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (14))){
var inst_23705 = (state_23727[(8)]);
var inst_23707 = (state_23727[(11)]);
var inst_23705__$1 = (state_23727[(2)]);
var inst_23706 = (inst_23705__$1 == null);
var inst_23707__$1 = cljs.core.not.call(null,inst_23706);
var state_23727__$1 = (function (){var statearr_23746 = state_23727;
(statearr_23746[(8)] = inst_23705__$1);

(statearr_23746[(11)] = inst_23707__$1);

return statearr_23746;
})();
if(inst_23707__$1){
var statearr_23747_23807 = state_23727__$1;
(statearr_23747_23807[(1)] = (15));

} else {
var statearr_23748_23808 = state_23727__$1;
(statearr_23748_23808[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (16))){
var inst_23707 = (state_23727[(11)]);
var state_23727__$1 = state_23727;
var statearr_23749_23809 = state_23727__$1;
(statearr_23749_23809[(2)] = inst_23707);

(statearr_23749_23809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (10))){
var inst_23699 = (state_23727[(2)]);
var state_23727__$1 = state_23727;
var statearr_23750_23810 = state_23727__$1;
(statearr_23750_23810[(2)] = inst_23699);

(statearr_23750_23810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (18))){
var inst_23710 = (state_23727[(2)]);
var state_23727__$1 = state_23727;
var statearr_23751_23811 = state_23727__$1;
(statearr_23751_23811[(2)] = inst_23710);

(statearr_23751_23811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23728 === (8))){
var inst_23696 = cljs.core.async.close_BANG_.call(null,to);
var state_23727__$1 = state_23727;
var statearr_23752_23812 = state_23727__$1;
(statearr_23752_23812[(2)] = inst_23696);

(statearr_23752_23812[(1)] = (10));


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
});})(c__23421__auto__,jobs,results,process,async))
;
return ((function (switch__23326__auto__,c__23421__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0 = (function (){
var statearr_23753 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__);

(statearr_23753[(1)] = (1));

return statearr_23753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1 = (function (state_23727){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23754){if((e23754 instanceof Object)){
var ex__23330__auto__ = e23754;
var statearr_23755_23813 = state_23727;
(statearr_23755_23813[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23814 = state_23727;
state_23727 = G__23814;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__ = function(state_23727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1.call(this,state_23727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__,jobs,results,process,async))
})();
var state__23423__auto__ = (function (){var statearr_23756 = f__23422__auto__.call(null);
(statearr_23756[(6)] = c__23421__auto__);

return statearr_23756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__,jobs,results,process,async))
);

return c__23421__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23816 = arguments.length;
switch (G__23816) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23819 = arguments.length;
switch (G__23819) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23822 = arguments.length;
switch (G__23822) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23421__auto___23871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___23871,tc,fc){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___23871,tc,fc){
return (function (state_23848){
var state_val_23849 = (state_23848[(1)]);
if((state_val_23849 === (7))){
var inst_23844 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23850_23872 = state_23848__$1;
(statearr_23850_23872[(2)] = inst_23844);

(statearr_23850_23872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (1))){
var state_23848__$1 = state_23848;
var statearr_23851_23873 = state_23848__$1;
(statearr_23851_23873[(2)] = null);

(statearr_23851_23873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (4))){
var inst_23825 = (state_23848[(7)]);
var inst_23825__$1 = (state_23848[(2)]);
var inst_23826 = (inst_23825__$1 == null);
var state_23848__$1 = (function (){var statearr_23852 = state_23848;
(statearr_23852[(7)] = inst_23825__$1);

return statearr_23852;
})();
if(cljs.core.truth_(inst_23826)){
var statearr_23853_23874 = state_23848__$1;
(statearr_23853_23874[(1)] = (5));

} else {
var statearr_23854_23875 = state_23848__$1;
(statearr_23854_23875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (13))){
var state_23848__$1 = state_23848;
var statearr_23855_23876 = state_23848__$1;
(statearr_23855_23876[(2)] = null);

(statearr_23855_23876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (6))){
var inst_23825 = (state_23848[(7)]);
var inst_23831 = p.call(null,inst_23825);
var state_23848__$1 = state_23848;
if(cljs.core.truth_(inst_23831)){
var statearr_23856_23877 = state_23848__$1;
(statearr_23856_23877[(1)] = (9));

} else {
var statearr_23857_23878 = state_23848__$1;
(statearr_23857_23878[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (3))){
var inst_23846 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23848__$1,inst_23846);
} else {
if((state_val_23849 === (12))){
var state_23848__$1 = state_23848;
var statearr_23858_23879 = state_23848__$1;
(statearr_23858_23879[(2)] = null);

(statearr_23858_23879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (2))){
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23848__$1,(4),ch);
} else {
if((state_val_23849 === (11))){
var inst_23825 = (state_23848[(7)]);
var inst_23835 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23848__$1,(8),inst_23835,inst_23825);
} else {
if((state_val_23849 === (9))){
var state_23848__$1 = state_23848;
var statearr_23859_23880 = state_23848__$1;
(statearr_23859_23880[(2)] = tc);

(statearr_23859_23880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (5))){
var inst_23828 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23829 = cljs.core.async.close_BANG_.call(null,fc);
var state_23848__$1 = (function (){var statearr_23860 = state_23848;
(statearr_23860[(8)] = inst_23828);

return statearr_23860;
})();
var statearr_23861_23881 = state_23848__$1;
(statearr_23861_23881[(2)] = inst_23829);

(statearr_23861_23881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (14))){
var inst_23842 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23862_23882 = state_23848__$1;
(statearr_23862_23882[(2)] = inst_23842);

(statearr_23862_23882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (10))){
var state_23848__$1 = state_23848;
var statearr_23863_23883 = state_23848__$1;
(statearr_23863_23883[(2)] = fc);

(statearr_23863_23883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (8))){
var inst_23837 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
if(cljs.core.truth_(inst_23837)){
var statearr_23864_23884 = state_23848__$1;
(statearr_23864_23884[(1)] = (12));

} else {
var statearr_23865_23885 = state_23848__$1;
(statearr_23865_23885[(1)] = (13));

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
});})(c__23421__auto___23871,tc,fc))
;
return ((function (switch__23326__auto__,c__23421__auto___23871,tc,fc){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_23866 = [null,null,null,null,null,null,null,null,null];
(statearr_23866[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_23866[(1)] = (1));

return statearr_23866;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_23848){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23867){if((e23867 instanceof Object)){
var ex__23330__auto__ = e23867;
var statearr_23868_23886 = state_23848;
(statearr_23868_23886[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23887 = state_23848;
state_23848 = G__23887;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_23848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_23848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___23871,tc,fc))
})();
var state__23423__auto__ = (function (){var statearr_23869 = f__23422__auto__.call(null);
(statearr_23869[(6)] = c__23421__auto___23871);

return statearr_23869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___23871,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__){
return (function (state_23908){
var state_val_23909 = (state_23908[(1)]);
if((state_val_23909 === (7))){
var inst_23904 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
var statearr_23910_23928 = state_23908__$1;
(statearr_23910_23928[(2)] = inst_23904);

(statearr_23910_23928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (1))){
var inst_23888 = init;
var state_23908__$1 = (function (){var statearr_23911 = state_23908;
(statearr_23911[(7)] = inst_23888);

return statearr_23911;
})();
var statearr_23912_23929 = state_23908__$1;
(statearr_23912_23929[(2)] = null);

(statearr_23912_23929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (4))){
var inst_23891 = (state_23908[(8)]);
var inst_23891__$1 = (state_23908[(2)]);
var inst_23892 = (inst_23891__$1 == null);
var state_23908__$1 = (function (){var statearr_23913 = state_23908;
(statearr_23913[(8)] = inst_23891__$1);

return statearr_23913;
})();
if(cljs.core.truth_(inst_23892)){
var statearr_23914_23930 = state_23908__$1;
(statearr_23914_23930[(1)] = (5));

} else {
var statearr_23915_23931 = state_23908__$1;
(statearr_23915_23931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (6))){
var inst_23891 = (state_23908[(8)]);
var inst_23888 = (state_23908[(7)]);
var inst_23895 = (state_23908[(9)]);
var inst_23895__$1 = f.call(null,inst_23888,inst_23891);
var inst_23896 = cljs.core.reduced_QMARK_.call(null,inst_23895__$1);
var state_23908__$1 = (function (){var statearr_23916 = state_23908;
(statearr_23916[(9)] = inst_23895__$1);

return statearr_23916;
})();
if(inst_23896){
var statearr_23917_23932 = state_23908__$1;
(statearr_23917_23932[(1)] = (8));

} else {
var statearr_23918_23933 = state_23908__$1;
(statearr_23918_23933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (3))){
var inst_23906 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23908__$1,inst_23906);
} else {
if((state_val_23909 === (2))){
var state_23908__$1 = state_23908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23908__$1,(4),ch);
} else {
if((state_val_23909 === (9))){
var inst_23895 = (state_23908[(9)]);
var inst_23888 = inst_23895;
var state_23908__$1 = (function (){var statearr_23919 = state_23908;
(statearr_23919[(7)] = inst_23888);

return statearr_23919;
})();
var statearr_23920_23934 = state_23908__$1;
(statearr_23920_23934[(2)] = null);

(statearr_23920_23934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (5))){
var inst_23888 = (state_23908[(7)]);
var state_23908__$1 = state_23908;
var statearr_23921_23935 = state_23908__$1;
(statearr_23921_23935[(2)] = inst_23888);

(statearr_23921_23935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (10))){
var inst_23902 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
var statearr_23922_23936 = state_23908__$1;
(statearr_23922_23936[(2)] = inst_23902);

(statearr_23922_23936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (8))){
var inst_23895 = (state_23908[(9)]);
var inst_23898 = cljs.core.deref.call(null,inst_23895);
var state_23908__$1 = state_23908;
var statearr_23923_23937 = state_23908__$1;
(statearr_23923_23937[(2)] = inst_23898);

(statearr_23923_23937[(1)] = (10));


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
});})(c__23421__auto__))
;
return ((function (switch__23326__auto__,c__23421__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23327__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23327__auto____0 = (function (){
var statearr_23924 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23924[(0)] = cljs$core$async$reduce_$_state_machine__23327__auto__);

(statearr_23924[(1)] = (1));

return statearr_23924;
});
var cljs$core$async$reduce_$_state_machine__23327__auto____1 = (function (state_23908){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23925){if((e23925 instanceof Object)){
var ex__23330__auto__ = e23925;
var statearr_23926_23938 = state_23908;
(statearr_23926_23938[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23939 = state_23908;
state_23908 = G__23939;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23327__auto__ = function(state_23908){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23327__auto____1.call(this,state_23908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23327__auto____0;
cljs$core$async$reduce_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23327__auto____1;
return cljs$core$async$reduce_$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__))
})();
var state__23423__auto__ = (function (){var statearr_23927 = f__23422__auto__.call(null);
(statearr_23927[(6)] = c__23421__auto__);

return statearr_23927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__))
);

return c__23421__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__,f__$1){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__,f__$1){
return (function (state_23945){
var state_val_23946 = (state_23945[(1)]);
if((state_val_23946 === (1))){
var inst_23940 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23945__$1 = state_23945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23945__$1,(2),inst_23940);
} else {
if((state_val_23946 === (2))){
var inst_23942 = (state_23945[(2)]);
var inst_23943 = f__$1.call(null,inst_23942);
var state_23945__$1 = state_23945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23945__$1,inst_23943);
} else {
return null;
}
}
});})(c__23421__auto__,f__$1))
;
return ((function (switch__23326__auto__,c__23421__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23327__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23327__auto____0 = (function (){
var statearr_23947 = [null,null,null,null,null,null,null];
(statearr_23947[(0)] = cljs$core$async$transduce_$_state_machine__23327__auto__);

(statearr_23947[(1)] = (1));

return statearr_23947;
});
var cljs$core$async$transduce_$_state_machine__23327__auto____1 = (function (state_23945){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23948){if((e23948 instanceof Object)){
var ex__23330__auto__ = e23948;
var statearr_23949_23951 = state_23945;
(statearr_23949_23951[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23952 = state_23945;
state_23945 = G__23952;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23327__auto__ = function(state_23945){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23327__auto____1.call(this,state_23945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23327__auto____0;
cljs$core$async$transduce_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23327__auto____1;
return cljs$core$async$transduce_$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__,f__$1))
})();
var state__23423__auto__ = (function (){var statearr_23950 = f__23422__auto__.call(null);
(statearr_23950[(6)] = c__23421__auto__);

return statearr_23950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__,f__$1))
);

return c__23421__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23954 = arguments.length;
switch (G__23954) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__){
return (function (state_23979){
var state_val_23980 = (state_23979[(1)]);
if((state_val_23980 === (7))){
var inst_23961 = (state_23979[(2)]);
var state_23979__$1 = state_23979;
var statearr_23981_24002 = state_23979__$1;
(statearr_23981_24002[(2)] = inst_23961);

(statearr_23981_24002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (1))){
var inst_23955 = cljs.core.seq.call(null,coll);
var inst_23956 = inst_23955;
var state_23979__$1 = (function (){var statearr_23982 = state_23979;
(statearr_23982[(7)] = inst_23956);

return statearr_23982;
})();
var statearr_23983_24003 = state_23979__$1;
(statearr_23983_24003[(2)] = null);

(statearr_23983_24003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (4))){
var inst_23956 = (state_23979[(7)]);
var inst_23959 = cljs.core.first.call(null,inst_23956);
var state_23979__$1 = state_23979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23979__$1,(7),ch,inst_23959);
} else {
if((state_val_23980 === (13))){
var inst_23973 = (state_23979[(2)]);
var state_23979__$1 = state_23979;
var statearr_23984_24004 = state_23979__$1;
(statearr_23984_24004[(2)] = inst_23973);

(statearr_23984_24004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (6))){
var inst_23964 = (state_23979[(2)]);
var state_23979__$1 = state_23979;
if(cljs.core.truth_(inst_23964)){
var statearr_23985_24005 = state_23979__$1;
(statearr_23985_24005[(1)] = (8));

} else {
var statearr_23986_24006 = state_23979__$1;
(statearr_23986_24006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (3))){
var inst_23977 = (state_23979[(2)]);
var state_23979__$1 = state_23979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23979__$1,inst_23977);
} else {
if((state_val_23980 === (12))){
var state_23979__$1 = state_23979;
var statearr_23987_24007 = state_23979__$1;
(statearr_23987_24007[(2)] = null);

(statearr_23987_24007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (2))){
var inst_23956 = (state_23979[(7)]);
var state_23979__$1 = state_23979;
if(cljs.core.truth_(inst_23956)){
var statearr_23988_24008 = state_23979__$1;
(statearr_23988_24008[(1)] = (4));

} else {
var statearr_23989_24009 = state_23979__$1;
(statearr_23989_24009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (11))){
var inst_23970 = cljs.core.async.close_BANG_.call(null,ch);
var state_23979__$1 = state_23979;
var statearr_23990_24010 = state_23979__$1;
(statearr_23990_24010[(2)] = inst_23970);

(statearr_23990_24010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (9))){
var state_23979__$1 = state_23979;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23991_24011 = state_23979__$1;
(statearr_23991_24011[(1)] = (11));

} else {
var statearr_23992_24012 = state_23979__$1;
(statearr_23992_24012[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (5))){
var inst_23956 = (state_23979[(7)]);
var state_23979__$1 = state_23979;
var statearr_23993_24013 = state_23979__$1;
(statearr_23993_24013[(2)] = inst_23956);

(statearr_23993_24013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (10))){
var inst_23975 = (state_23979[(2)]);
var state_23979__$1 = state_23979;
var statearr_23994_24014 = state_23979__$1;
(statearr_23994_24014[(2)] = inst_23975);

(statearr_23994_24014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (8))){
var inst_23956 = (state_23979[(7)]);
var inst_23966 = cljs.core.next.call(null,inst_23956);
var inst_23956__$1 = inst_23966;
var state_23979__$1 = (function (){var statearr_23995 = state_23979;
(statearr_23995[(7)] = inst_23956__$1);

return statearr_23995;
})();
var statearr_23996_24015 = state_23979__$1;
(statearr_23996_24015[(2)] = null);

(statearr_23996_24015[(1)] = (2));


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
});})(c__23421__auto__))
;
return ((function (switch__23326__auto__,c__23421__auto__){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_23997 = [null,null,null,null,null,null,null,null];
(statearr_23997[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_23997[(1)] = (1));

return statearr_23997;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_23979){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_23979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e23998){if((e23998 instanceof Object)){
var ex__23330__auto__ = e23998;
var statearr_23999_24016 = state_23979;
(statearr_23999_24016[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24017 = state_23979;
state_23979 = G__24017;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_23979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_23979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__))
})();
var state__23423__auto__ = (function (){var statearr_24000 = f__23422__auto__.call(null);
(statearr_24000[(6)] = c__23421__auto__);

return statearr_24000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__))
);

return c__23421__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24018 = (function (ch,cs,meta24019){
this.ch = ch;
this.cs = cs;
this.meta24019 = meta24019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24020,meta24019__$1){
var self__ = this;
var _24020__$1 = this;
return (new cljs.core.async.t_cljs$core$async24018(self__.ch,self__.cs,meta24019__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24020){
var self__ = this;
var _24020__$1 = this;
return self__.meta24019;
});})(cs))
;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24018.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24019","meta24019",1533438638,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24018";

cljs.core.async.t_cljs$core$async24018.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24018");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24018.
 */
cljs.core.async.__GT_t_cljs$core$async24018 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24018(ch__$1,cs__$1,meta24019){
return (new cljs.core.async.t_cljs$core$async24018(ch__$1,cs__$1,meta24019));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24018(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23421__auto___24240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___24240,cs,m,dchan,dctr,done){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___24240,cs,m,dchan,dctr,done){
return (function (state_24155){
var state_val_24156 = (state_24155[(1)]);
if((state_val_24156 === (7))){
var inst_24151 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24157_24241 = state_24155__$1;
(statearr_24157_24241[(2)] = inst_24151);

(statearr_24157_24241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (20))){
var inst_24054 = (state_24155[(7)]);
var inst_24066 = cljs.core.first.call(null,inst_24054);
var inst_24067 = cljs.core.nth.call(null,inst_24066,(0),null);
var inst_24068 = cljs.core.nth.call(null,inst_24066,(1),null);
var state_24155__$1 = (function (){var statearr_24158 = state_24155;
(statearr_24158[(8)] = inst_24067);

return statearr_24158;
})();
if(cljs.core.truth_(inst_24068)){
var statearr_24159_24242 = state_24155__$1;
(statearr_24159_24242[(1)] = (22));

} else {
var statearr_24160_24243 = state_24155__$1;
(statearr_24160_24243[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (27))){
var inst_24023 = (state_24155[(9)]);
var inst_24103 = (state_24155[(10)]);
var inst_24096 = (state_24155[(11)]);
var inst_24098 = (state_24155[(12)]);
var inst_24103__$1 = cljs.core._nth.call(null,inst_24096,inst_24098);
var inst_24104 = cljs.core.async.put_BANG_.call(null,inst_24103__$1,inst_24023,done);
var state_24155__$1 = (function (){var statearr_24161 = state_24155;
(statearr_24161[(10)] = inst_24103__$1);

return statearr_24161;
})();
if(cljs.core.truth_(inst_24104)){
var statearr_24162_24244 = state_24155__$1;
(statearr_24162_24244[(1)] = (30));

} else {
var statearr_24163_24245 = state_24155__$1;
(statearr_24163_24245[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (1))){
var state_24155__$1 = state_24155;
var statearr_24164_24246 = state_24155__$1;
(statearr_24164_24246[(2)] = null);

(statearr_24164_24246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (24))){
var inst_24054 = (state_24155[(7)]);
var inst_24073 = (state_24155[(2)]);
var inst_24074 = cljs.core.next.call(null,inst_24054);
var inst_24032 = inst_24074;
var inst_24033 = null;
var inst_24034 = (0);
var inst_24035 = (0);
var state_24155__$1 = (function (){var statearr_24165 = state_24155;
(statearr_24165[(13)] = inst_24073);

(statearr_24165[(14)] = inst_24034);

(statearr_24165[(15)] = inst_24033);

(statearr_24165[(16)] = inst_24035);

(statearr_24165[(17)] = inst_24032);

return statearr_24165;
})();
var statearr_24166_24247 = state_24155__$1;
(statearr_24166_24247[(2)] = null);

(statearr_24166_24247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (39))){
var state_24155__$1 = state_24155;
var statearr_24170_24248 = state_24155__$1;
(statearr_24170_24248[(2)] = null);

(statearr_24170_24248[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (4))){
var inst_24023 = (state_24155[(9)]);
var inst_24023__$1 = (state_24155[(2)]);
var inst_24024 = (inst_24023__$1 == null);
var state_24155__$1 = (function (){var statearr_24171 = state_24155;
(statearr_24171[(9)] = inst_24023__$1);

return statearr_24171;
})();
if(cljs.core.truth_(inst_24024)){
var statearr_24172_24249 = state_24155__$1;
(statearr_24172_24249[(1)] = (5));

} else {
var statearr_24173_24250 = state_24155__$1;
(statearr_24173_24250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (15))){
var inst_24034 = (state_24155[(14)]);
var inst_24033 = (state_24155[(15)]);
var inst_24035 = (state_24155[(16)]);
var inst_24032 = (state_24155[(17)]);
var inst_24050 = (state_24155[(2)]);
var inst_24051 = (inst_24035 + (1));
var tmp24167 = inst_24034;
var tmp24168 = inst_24033;
var tmp24169 = inst_24032;
var inst_24032__$1 = tmp24169;
var inst_24033__$1 = tmp24168;
var inst_24034__$1 = tmp24167;
var inst_24035__$1 = inst_24051;
var state_24155__$1 = (function (){var statearr_24174 = state_24155;
(statearr_24174[(18)] = inst_24050);

(statearr_24174[(14)] = inst_24034__$1);

(statearr_24174[(15)] = inst_24033__$1);

(statearr_24174[(16)] = inst_24035__$1);

(statearr_24174[(17)] = inst_24032__$1);

return statearr_24174;
})();
var statearr_24175_24251 = state_24155__$1;
(statearr_24175_24251[(2)] = null);

(statearr_24175_24251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (21))){
var inst_24077 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24179_24252 = state_24155__$1;
(statearr_24179_24252[(2)] = inst_24077);

(statearr_24179_24252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (31))){
var inst_24103 = (state_24155[(10)]);
var inst_24107 = done.call(null,null);
var inst_24108 = cljs.core.async.untap_STAR_.call(null,m,inst_24103);
var state_24155__$1 = (function (){var statearr_24180 = state_24155;
(statearr_24180[(19)] = inst_24107);

return statearr_24180;
})();
var statearr_24181_24253 = state_24155__$1;
(statearr_24181_24253[(2)] = inst_24108);

(statearr_24181_24253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (32))){
var inst_24095 = (state_24155[(20)]);
var inst_24096 = (state_24155[(11)]);
var inst_24097 = (state_24155[(21)]);
var inst_24098 = (state_24155[(12)]);
var inst_24110 = (state_24155[(2)]);
var inst_24111 = (inst_24098 + (1));
var tmp24176 = inst_24095;
var tmp24177 = inst_24096;
var tmp24178 = inst_24097;
var inst_24095__$1 = tmp24176;
var inst_24096__$1 = tmp24177;
var inst_24097__$1 = tmp24178;
var inst_24098__$1 = inst_24111;
var state_24155__$1 = (function (){var statearr_24182 = state_24155;
(statearr_24182[(22)] = inst_24110);

(statearr_24182[(20)] = inst_24095__$1);

(statearr_24182[(11)] = inst_24096__$1);

(statearr_24182[(21)] = inst_24097__$1);

(statearr_24182[(12)] = inst_24098__$1);

return statearr_24182;
})();
var statearr_24183_24254 = state_24155__$1;
(statearr_24183_24254[(2)] = null);

(statearr_24183_24254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (40))){
var inst_24123 = (state_24155[(23)]);
var inst_24127 = done.call(null,null);
var inst_24128 = cljs.core.async.untap_STAR_.call(null,m,inst_24123);
var state_24155__$1 = (function (){var statearr_24184 = state_24155;
(statearr_24184[(24)] = inst_24127);

return statearr_24184;
})();
var statearr_24185_24255 = state_24155__$1;
(statearr_24185_24255[(2)] = inst_24128);

(statearr_24185_24255[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (33))){
var inst_24114 = (state_24155[(25)]);
var inst_24116 = cljs.core.chunked_seq_QMARK_.call(null,inst_24114);
var state_24155__$1 = state_24155;
if(inst_24116){
var statearr_24186_24256 = state_24155__$1;
(statearr_24186_24256[(1)] = (36));

} else {
var statearr_24187_24257 = state_24155__$1;
(statearr_24187_24257[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (13))){
var inst_24044 = (state_24155[(26)]);
var inst_24047 = cljs.core.async.close_BANG_.call(null,inst_24044);
var state_24155__$1 = state_24155;
var statearr_24188_24258 = state_24155__$1;
(statearr_24188_24258[(2)] = inst_24047);

(statearr_24188_24258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (22))){
var inst_24067 = (state_24155[(8)]);
var inst_24070 = cljs.core.async.close_BANG_.call(null,inst_24067);
var state_24155__$1 = state_24155;
var statearr_24189_24259 = state_24155__$1;
(statearr_24189_24259[(2)] = inst_24070);

(statearr_24189_24259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (36))){
var inst_24114 = (state_24155[(25)]);
var inst_24118 = cljs.core.chunk_first.call(null,inst_24114);
var inst_24119 = cljs.core.chunk_rest.call(null,inst_24114);
var inst_24120 = cljs.core.count.call(null,inst_24118);
var inst_24095 = inst_24119;
var inst_24096 = inst_24118;
var inst_24097 = inst_24120;
var inst_24098 = (0);
var state_24155__$1 = (function (){var statearr_24190 = state_24155;
(statearr_24190[(20)] = inst_24095);

(statearr_24190[(11)] = inst_24096);

(statearr_24190[(21)] = inst_24097);

(statearr_24190[(12)] = inst_24098);

return statearr_24190;
})();
var statearr_24191_24260 = state_24155__$1;
(statearr_24191_24260[(2)] = null);

(statearr_24191_24260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (41))){
var inst_24114 = (state_24155[(25)]);
var inst_24130 = (state_24155[(2)]);
var inst_24131 = cljs.core.next.call(null,inst_24114);
var inst_24095 = inst_24131;
var inst_24096 = null;
var inst_24097 = (0);
var inst_24098 = (0);
var state_24155__$1 = (function (){var statearr_24192 = state_24155;
(statearr_24192[(20)] = inst_24095);

(statearr_24192[(11)] = inst_24096);

(statearr_24192[(21)] = inst_24097);

(statearr_24192[(12)] = inst_24098);

(statearr_24192[(27)] = inst_24130);

return statearr_24192;
})();
var statearr_24193_24261 = state_24155__$1;
(statearr_24193_24261[(2)] = null);

(statearr_24193_24261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (43))){
var state_24155__$1 = state_24155;
var statearr_24194_24262 = state_24155__$1;
(statearr_24194_24262[(2)] = null);

(statearr_24194_24262[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (29))){
var inst_24139 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24195_24263 = state_24155__$1;
(statearr_24195_24263[(2)] = inst_24139);

(statearr_24195_24263[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (44))){
var inst_24148 = (state_24155[(2)]);
var state_24155__$1 = (function (){var statearr_24196 = state_24155;
(statearr_24196[(28)] = inst_24148);

return statearr_24196;
})();
var statearr_24197_24264 = state_24155__$1;
(statearr_24197_24264[(2)] = null);

(statearr_24197_24264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (6))){
var inst_24087 = (state_24155[(29)]);
var inst_24086 = cljs.core.deref.call(null,cs);
var inst_24087__$1 = cljs.core.keys.call(null,inst_24086);
var inst_24088 = cljs.core.count.call(null,inst_24087__$1);
var inst_24089 = cljs.core.reset_BANG_.call(null,dctr,inst_24088);
var inst_24094 = cljs.core.seq.call(null,inst_24087__$1);
var inst_24095 = inst_24094;
var inst_24096 = null;
var inst_24097 = (0);
var inst_24098 = (0);
var state_24155__$1 = (function (){var statearr_24198 = state_24155;
(statearr_24198[(20)] = inst_24095);

(statearr_24198[(30)] = inst_24089);

(statearr_24198[(11)] = inst_24096);

(statearr_24198[(21)] = inst_24097);

(statearr_24198[(29)] = inst_24087__$1);

(statearr_24198[(12)] = inst_24098);

return statearr_24198;
})();
var statearr_24199_24265 = state_24155__$1;
(statearr_24199_24265[(2)] = null);

(statearr_24199_24265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (28))){
var inst_24114 = (state_24155[(25)]);
var inst_24095 = (state_24155[(20)]);
var inst_24114__$1 = cljs.core.seq.call(null,inst_24095);
var state_24155__$1 = (function (){var statearr_24200 = state_24155;
(statearr_24200[(25)] = inst_24114__$1);

return statearr_24200;
})();
if(inst_24114__$1){
var statearr_24201_24266 = state_24155__$1;
(statearr_24201_24266[(1)] = (33));

} else {
var statearr_24202_24267 = state_24155__$1;
(statearr_24202_24267[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (25))){
var inst_24097 = (state_24155[(21)]);
var inst_24098 = (state_24155[(12)]);
var inst_24100 = (inst_24098 < inst_24097);
var inst_24101 = inst_24100;
var state_24155__$1 = state_24155;
if(cljs.core.truth_(inst_24101)){
var statearr_24203_24268 = state_24155__$1;
(statearr_24203_24268[(1)] = (27));

} else {
var statearr_24204_24269 = state_24155__$1;
(statearr_24204_24269[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (34))){
var state_24155__$1 = state_24155;
var statearr_24205_24270 = state_24155__$1;
(statearr_24205_24270[(2)] = null);

(statearr_24205_24270[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (17))){
var state_24155__$1 = state_24155;
var statearr_24206_24271 = state_24155__$1;
(statearr_24206_24271[(2)] = null);

(statearr_24206_24271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (3))){
var inst_24153 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24155__$1,inst_24153);
} else {
if((state_val_24156 === (12))){
var inst_24082 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24207_24272 = state_24155__$1;
(statearr_24207_24272[(2)] = inst_24082);

(statearr_24207_24272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (2))){
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24155__$1,(4),ch);
} else {
if((state_val_24156 === (23))){
var state_24155__$1 = state_24155;
var statearr_24208_24273 = state_24155__$1;
(statearr_24208_24273[(2)] = null);

(statearr_24208_24273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (35))){
var inst_24137 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24209_24274 = state_24155__$1;
(statearr_24209_24274[(2)] = inst_24137);

(statearr_24209_24274[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (19))){
var inst_24054 = (state_24155[(7)]);
var inst_24058 = cljs.core.chunk_first.call(null,inst_24054);
var inst_24059 = cljs.core.chunk_rest.call(null,inst_24054);
var inst_24060 = cljs.core.count.call(null,inst_24058);
var inst_24032 = inst_24059;
var inst_24033 = inst_24058;
var inst_24034 = inst_24060;
var inst_24035 = (0);
var state_24155__$1 = (function (){var statearr_24210 = state_24155;
(statearr_24210[(14)] = inst_24034);

(statearr_24210[(15)] = inst_24033);

(statearr_24210[(16)] = inst_24035);

(statearr_24210[(17)] = inst_24032);

return statearr_24210;
})();
var statearr_24211_24275 = state_24155__$1;
(statearr_24211_24275[(2)] = null);

(statearr_24211_24275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (11))){
var inst_24032 = (state_24155[(17)]);
var inst_24054 = (state_24155[(7)]);
var inst_24054__$1 = cljs.core.seq.call(null,inst_24032);
var state_24155__$1 = (function (){var statearr_24212 = state_24155;
(statearr_24212[(7)] = inst_24054__$1);

return statearr_24212;
})();
if(inst_24054__$1){
var statearr_24213_24276 = state_24155__$1;
(statearr_24213_24276[(1)] = (16));

} else {
var statearr_24214_24277 = state_24155__$1;
(statearr_24214_24277[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (9))){
var inst_24084 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24215_24278 = state_24155__$1;
(statearr_24215_24278[(2)] = inst_24084);

(statearr_24215_24278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (5))){
var inst_24030 = cljs.core.deref.call(null,cs);
var inst_24031 = cljs.core.seq.call(null,inst_24030);
var inst_24032 = inst_24031;
var inst_24033 = null;
var inst_24034 = (0);
var inst_24035 = (0);
var state_24155__$1 = (function (){var statearr_24216 = state_24155;
(statearr_24216[(14)] = inst_24034);

(statearr_24216[(15)] = inst_24033);

(statearr_24216[(16)] = inst_24035);

(statearr_24216[(17)] = inst_24032);

return statearr_24216;
})();
var statearr_24217_24279 = state_24155__$1;
(statearr_24217_24279[(2)] = null);

(statearr_24217_24279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (14))){
var state_24155__$1 = state_24155;
var statearr_24218_24280 = state_24155__$1;
(statearr_24218_24280[(2)] = null);

(statearr_24218_24280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (45))){
var inst_24145 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24219_24281 = state_24155__$1;
(statearr_24219_24281[(2)] = inst_24145);

(statearr_24219_24281[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (26))){
var inst_24087 = (state_24155[(29)]);
var inst_24141 = (state_24155[(2)]);
var inst_24142 = cljs.core.seq.call(null,inst_24087);
var state_24155__$1 = (function (){var statearr_24220 = state_24155;
(statearr_24220[(31)] = inst_24141);

return statearr_24220;
})();
if(inst_24142){
var statearr_24221_24282 = state_24155__$1;
(statearr_24221_24282[(1)] = (42));

} else {
var statearr_24222_24283 = state_24155__$1;
(statearr_24222_24283[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (16))){
var inst_24054 = (state_24155[(7)]);
var inst_24056 = cljs.core.chunked_seq_QMARK_.call(null,inst_24054);
var state_24155__$1 = state_24155;
if(inst_24056){
var statearr_24223_24284 = state_24155__$1;
(statearr_24223_24284[(1)] = (19));

} else {
var statearr_24224_24285 = state_24155__$1;
(statearr_24224_24285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (38))){
var inst_24134 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24225_24286 = state_24155__$1;
(statearr_24225_24286[(2)] = inst_24134);

(statearr_24225_24286[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (30))){
var state_24155__$1 = state_24155;
var statearr_24226_24287 = state_24155__$1;
(statearr_24226_24287[(2)] = null);

(statearr_24226_24287[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (10))){
var inst_24033 = (state_24155[(15)]);
var inst_24035 = (state_24155[(16)]);
var inst_24043 = cljs.core._nth.call(null,inst_24033,inst_24035);
var inst_24044 = cljs.core.nth.call(null,inst_24043,(0),null);
var inst_24045 = cljs.core.nth.call(null,inst_24043,(1),null);
var state_24155__$1 = (function (){var statearr_24227 = state_24155;
(statearr_24227[(26)] = inst_24044);

return statearr_24227;
})();
if(cljs.core.truth_(inst_24045)){
var statearr_24228_24288 = state_24155__$1;
(statearr_24228_24288[(1)] = (13));

} else {
var statearr_24229_24289 = state_24155__$1;
(statearr_24229_24289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (18))){
var inst_24080 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24230_24290 = state_24155__$1;
(statearr_24230_24290[(2)] = inst_24080);

(statearr_24230_24290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (42))){
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24155__$1,(45),dchan);
} else {
if((state_val_24156 === (37))){
var inst_24023 = (state_24155[(9)]);
var inst_24114 = (state_24155[(25)]);
var inst_24123 = (state_24155[(23)]);
var inst_24123__$1 = cljs.core.first.call(null,inst_24114);
var inst_24124 = cljs.core.async.put_BANG_.call(null,inst_24123__$1,inst_24023,done);
var state_24155__$1 = (function (){var statearr_24231 = state_24155;
(statearr_24231[(23)] = inst_24123__$1);

return statearr_24231;
})();
if(cljs.core.truth_(inst_24124)){
var statearr_24232_24291 = state_24155__$1;
(statearr_24232_24291[(1)] = (39));

} else {
var statearr_24233_24292 = state_24155__$1;
(statearr_24233_24292[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (8))){
var inst_24034 = (state_24155[(14)]);
var inst_24035 = (state_24155[(16)]);
var inst_24037 = (inst_24035 < inst_24034);
var inst_24038 = inst_24037;
var state_24155__$1 = state_24155;
if(cljs.core.truth_(inst_24038)){
var statearr_24234_24293 = state_24155__$1;
(statearr_24234_24293[(1)] = (10));

} else {
var statearr_24235_24294 = state_24155__$1;
(statearr_24235_24294[(1)] = (11));

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
});})(c__23421__auto___24240,cs,m,dchan,dctr,done))
;
return ((function (switch__23326__auto__,c__23421__auto___24240,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23327__auto__ = null;
var cljs$core$async$mult_$_state_machine__23327__auto____0 = (function (){
var statearr_24236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24236[(0)] = cljs$core$async$mult_$_state_machine__23327__auto__);

(statearr_24236[(1)] = (1));

return statearr_24236;
});
var cljs$core$async$mult_$_state_machine__23327__auto____1 = (function (state_24155){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_24155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e24237){if((e24237 instanceof Object)){
var ex__23330__auto__ = e24237;
var statearr_24238_24295 = state_24155;
(statearr_24238_24295[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24296 = state_24155;
state_24155 = G__24296;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23327__auto__ = function(state_24155){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23327__auto____1.call(this,state_24155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23327__auto____0;
cljs$core$async$mult_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23327__auto____1;
return cljs$core$async$mult_$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___24240,cs,m,dchan,dctr,done))
})();
var state__23423__auto__ = (function (){var statearr_24239 = f__23422__auto__.call(null);
(statearr_24239[(6)] = c__23421__auto___24240);

return statearr_24239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___24240,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24298 = arguments.length;
switch (G__24298) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24310 = arguments.length;
var i__4731__auto___24311 = (0);
while(true){
if((i__4731__auto___24311 < len__4730__auto___24310)){
args__4736__auto__.push((arguments[i__4731__auto___24311]));

var G__24312 = (i__4731__auto___24311 + (1));
i__4731__auto___24311 = G__24312;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24304){
var map__24305 = p__24304;
var map__24305__$1 = (((((!((map__24305 == null))))?(((((map__24305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24305):map__24305);
var opts = map__24305__$1;
var statearr_24307_24313 = state;
(statearr_24307_24313[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24305,map__24305__$1,opts){
return (function (val){
var statearr_24308_24314 = state;
(statearr_24308_24314[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24305,map__24305__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24309_24315 = state;
(statearr_24309_24315[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24300){
var G__24301 = cljs.core.first.call(null,seq24300);
var seq24300__$1 = cljs.core.next.call(null,seq24300);
var G__24302 = cljs.core.first.call(null,seq24300__$1);
var seq24300__$2 = cljs.core.next.call(null,seq24300__$1);
var G__24303 = cljs.core.first.call(null,seq24300__$2);
var seq24300__$3 = cljs.core.next.call(null,seq24300__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24301,G__24302,G__24303,seq24300__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24316 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24317){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24317 = meta24317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24318,meta24317__$1){
var self__ = this;
var _24318__$1 = this;
return (new cljs.core.async.t_cljs$core$async24316(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24317__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24318){
var self__ = this;
var _24318__$1 = this;
return self__.meta24317;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24316.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24316.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24317","meta24317",1287658036,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24316";

cljs.core.async.t_cljs$core$async24316.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24316");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24316.
 */
cljs.core.async.__GT_t_cljs$core$async24316 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24316(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24317){
return (new cljs.core.async.t_cljs$core$async24316(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24317));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24316(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23421__auto___24480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___24480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___24480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24420){
var state_val_24421 = (state_24420[(1)]);
if((state_val_24421 === (7))){
var inst_24335 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
var statearr_24422_24481 = state_24420__$1;
(statearr_24422_24481[(2)] = inst_24335);

(statearr_24422_24481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (20))){
var inst_24347 = (state_24420[(7)]);
var state_24420__$1 = state_24420;
var statearr_24423_24482 = state_24420__$1;
(statearr_24423_24482[(2)] = inst_24347);

(statearr_24423_24482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (27))){
var state_24420__$1 = state_24420;
var statearr_24424_24483 = state_24420__$1;
(statearr_24424_24483[(2)] = null);

(statearr_24424_24483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (1))){
var inst_24322 = (state_24420[(8)]);
var inst_24322__$1 = calc_state.call(null);
var inst_24324 = (inst_24322__$1 == null);
var inst_24325 = cljs.core.not.call(null,inst_24324);
var state_24420__$1 = (function (){var statearr_24425 = state_24420;
(statearr_24425[(8)] = inst_24322__$1);

return statearr_24425;
})();
if(inst_24325){
var statearr_24426_24484 = state_24420__$1;
(statearr_24426_24484[(1)] = (2));

} else {
var statearr_24427_24485 = state_24420__$1;
(statearr_24427_24485[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (24))){
var inst_24380 = (state_24420[(9)]);
var inst_24394 = (state_24420[(10)]);
var inst_24371 = (state_24420[(11)]);
var inst_24394__$1 = inst_24371.call(null,inst_24380);
var state_24420__$1 = (function (){var statearr_24428 = state_24420;
(statearr_24428[(10)] = inst_24394__$1);

return statearr_24428;
})();
if(cljs.core.truth_(inst_24394__$1)){
var statearr_24429_24486 = state_24420__$1;
(statearr_24429_24486[(1)] = (29));

} else {
var statearr_24430_24487 = state_24420__$1;
(statearr_24430_24487[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (4))){
var inst_24338 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
if(cljs.core.truth_(inst_24338)){
var statearr_24431_24488 = state_24420__$1;
(statearr_24431_24488[(1)] = (8));

} else {
var statearr_24432_24489 = state_24420__$1;
(statearr_24432_24489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (15))){
var inst_24365 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
if(cljs.core.truth_(inst_24365)){
var statearr_24433_24490 = state_24420__$1;
(statearr_24433_24490[(1)] = (19));

} else {
var statearr_24434_24491 = state_24420__$1;
(statearr_24434_24491[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (21))){
var inst_24370 = (state_24420[(12)]);
var inst_24370__$1 = (state_24420[(2)]);
var inst_24371 = cljs.core.get.call(null,inst_24370__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24372 = cljs.core.get.call(null,inst_24370__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24373 = cljs.core.get.call(null,inst_24370__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24420__$1 = (function (){var statearr_24435 = state_24420;
(statearr_24435[(12)] = inst_24370__$1);

(statearr_24435[(13)] = inst_24372);

(statearr_24435[(11)] = inst_24371);

return statearr_24435;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24420__$1,(22),inst_24373);
} else {
if((state_val_24421 === (31))){
var inst_24402 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
if(cljs.core.truth_(inst_24402)){
var statearr_24436_24492 = state_24420__$1;
(statearr_24436_24492[(1)] = (32));

} else {
var statearr_24437_24493 = state_24420__$1;
(statearr_24437_24493[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (32))){
var inst_24379 = (state_24420[(14)]);
var state_24420__$1 = state_24420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24420__$1,(35),out,inst_24379);
} else {
if((state_val_24421 === (33))){
var inst_24370 = (state_24420[(12)]);
var inst_24347 = inst_24370;
var state_24420__$1 = (function (){var statearr_24438 = state_24420;
(statearr_24438[(7)] = inst_24347);

return statearr_24438;
})();
var statearr_24439_24494 = state_24420__$1;
(statearr_24439_24494[(2)] = null);

(statearr_24439_24494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (13))){
var inst_24347 = (state_24420[(7)]);
var inst_24354 = inst_24347.cljs$lang$protocol_mask$partition0$;
var inst_24355 = (inst_24354 & (64));
var inst_24356 = inst_24347.cljs$core$ISeq$;
var inst_24357 = (cljs.core.PROTOCOL_SENTINEL === inst_24356);
var inst_24358 = ((inst_24355) || (inst_24357));
var state_24420__$1 = state_24420;
if(cljs.core.truth_(inst_24358)){
var statearr_24440_24495 = state_24420__$1;
(statearr_24440_24495[(1)] = (16));

} else {
var statearr_24441_24496 = state_24420__$1;
(statearr_24441_24496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (22))){
var inst_24380 = (state_24420[(9)]);
var inst_24379 = (state_24420[(14)]);
var inst_24378 = (state_24420[(2)]);
var inst_24379__$1 = cljs.core.nth.call(null,inst_24378,(0),null);
var inst_24380__$1 = cljs.core.nth.call(null,inst_24378,(1),null);
var inst_24381 = (inst_24379__$1 == null);
var inst_24382 = cljs.core._EQ_.call(null,inst_24380__$1,change);
var inst_24383 = ((inst_24381) || (inst_24382));
var state_24420__$1 = (function (){var statearr_24442 = state_24420;
(statearr_24442[(9)] = inst_24380__$1);

(statearr_24442[(14)] = inst_24379__$1);

return statearr_24442;
})();
if(cljs.core.truth_(inst_24383)){
var statearr_24443_24497 = state_24420__$1;
(statearr_24443_24497[(1)] = (23));

} else {
var statearr_24444_24498 = state_24420__$1;
(statearr_24444_24498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (36))){
var inst_24370 = (state_24420[(12)]);
var inst_24347 = inst_24370;
var state_24420__$1 = (function (){var statearr_24445 = state_24420;
(statearr_24445[(7)] = inst_24347);

return statearr_24445;
})();
var statearr_24446_24499 = state_24420__$1;
(statearr_24446_24499[(2)] = null);

(statearr_24446_24499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (29))){
var inst_24394 = (state_24420[(10)]);
var state_24420__$1 = state_24420;
var statearr_24447_24500 = state_24420__$1;
(statearr_24447_24500[(2)] = inst_24394);

(statearr_24447_24500[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (6))){
var state_24420__$1 = state_24420;
var statearr_24448_24501 = state_24420__$1;
(statearr_24448_24501[(2)] = false);

(statearr_24448_24501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (28))){
var inst_24390 = (state_24420[(2)]);
var inst_24391 = calc_state.call(null);
var inst_24347 = inst_24391;
var state_24420__$1 = (function (){var statearr_24449 = state_24420;
(statearr_24449[(7)] = inst_24347);

(statearr_24449[(15)] = inst_24390);

return statearr_24449;
})();
var statearr_24450_24502 = state_24420__$1;
(statearr_24450_24502[(2)] = null);

(statearr_24450_24502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (25))){
var inst_24416 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
var statearr_24451_24503 = state_24420__$1;
(statearr_24451_24503[(2)] = inst_24416);

(statearr_24451_24503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (34))){
var inst_24414 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
var statearr_24452_24504 = state_24420__$1;
(statearr_24452_24504[(2)] = inst_24414);

(statearr_24452_24504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (17))){
var state_24420__$1 = state_24420;
var statearr_24453_24505 = state_24420__$1;
(statearr_24453_24505[(2)] = false);

(statearr_24453_24505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (3))){
var state_24420__$1 = state_24420;
var statearr_24454_24506 = state_24420__$1;
(statearr_24454_24506[(2)] = false);

(statearr_24454_24506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (12))){
var inst_24418 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24420__$1,inst_24418);
} else {
if((state_val_24421 === (2))){
var inst_24322 = (state_24420[(8)]);
var inst_24327 = inst_24322.cljs$lang$protocol_mask$partition0$;
var inst_24328 = (inst_24327 & (64));
var inst_24329 = inst_24322.cljs$core$ISeq$;
var inst_24330 = (cljs.core.PROTOCOL_SENTINEL === inst_24329);
var inst_24331 = ((inst_24328) || (inst_24330));
var state_24420__$1 = state_24420;
if(cljs.core.truth_(inst_24331)){
var statearr_24455_24507 = state_24420__$1;
(statearr_24455_24507[(1)] = (5));

} else {
var statearr_24456_24508 = state_24420__$1;
(statearr_24456_24508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (23))){
var inst_24379 = (state_24420[(14)]);
var inst_24385 = (inst_24379 == null);
var state_24420__$1 = state_24420;
if(cljs.core.truth_(inst_24385)){
var statearr_24457_24509 = state_24420__$1;
(statearr_24457_24509[(1)] = (26));

} else {
var statearr_24458_24510 = state_24420__$1;
(statearr_24458_24510[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (35))){
var inst_24405 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
if(cljs.core.truth_(inst_24405)){
var statearr_24459_24511 = state_24420__$1;
(statearr_24459_24511[(1)] = (36));

} else {
var statearr_24460_24512 = state_24420__$1;
(statearr_24460_24512[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (19))){
var inst_24347 = (state_24420[(7)]);
var inst_24367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24347);
var state_24420__$1 = state_24420;
var statearr_24461_24513 = state_24420__$1;
(statearr_24461_24513[(2)] = inst_24367);

(statearr_24461_24513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (11))){
var inst_24347 = (state_24420[(7)]);
var inst_24351 = (inst_24347 == null);
var inst_24352 = cljs.core.not.call(null,inst_24351);
var state_24420__$1 = state_24420;
if(inst_24352){
var statearr_24462_24514 = state_24420__$1;
(statearr_24462_24514[(1)] = (13));

} else {
var statearr_24463_24515 = state_24420__$1;
(statearr_24463_24515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (9))){
var inst_24322 = (state_24420[(8)]);
var state_24420__$1 = state_24420;
var statearr_24464_24516 = state_24420__$1;
(statearr_24464_24516[(2)] = inst_24322);

(statearr_24464_24516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (5))){
var state_24420__$1 = state_24420;
var statearr_24465_24517 = state_24420__$1;
(statearr_24465_24517[(2)] = true);

(statearr_24465_24517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (14))){
var state_24420__$1 = state_24420;
var statearr_24466_24518 = state_24420__$1;
(statearr_24466_24518[(2)] = false);

(statearr_24466_24518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (26))){
var inst_24380 = (state_24420[(9)]);
var inst_24387 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24380);
var state_24420__$1 = state_24420;
var statearr_24467_24519 = state_24420__$1;
(statearr_24467_24519[(2)] = inst_24387);

(statearr_24467_24519[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (16))){
var state_24420__$1 = state_24420;
var statearr_24468_24520 = state_24420__$1;
(statearr_24468_24520[(2)] = true);

(statearr_24468_24520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (38))){
var inst_24410 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
var statearr_24469_24521 = state_24420__$1;
(statearr_24469_24521[(2)] = inst_24410);

(statearr_24469_24521[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (30))){
var inst_24380 = (state_24420[(9)]);
var inst_24372 = (state_24420[(13)]);
var inst_24371 = (state_24420[(11)]);
var inst_24397 = cljs.core.empty_QMARK_.call(null,inst_24371);
var inst_24398 = inst_24372.call(null,inst_24380);
var inst_24399 = cljs.core.not.call(null,inst_24398);
var inst_24400 = ((inst_24397) && (inst_24399));
var state_24420__$1 = state_24420;
var statearr_24470_24522 = state_24420__$1;
(statearr_24470_24522[(2)] = inst_24400);

(statearr_24470_24522[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (10))){
var inst_24322 = (state_24420[(8)]);
var inst_24343 = (state_24420[(2)]);
var inst_24344 = cljs.core.get.call(null,inst_24343,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24345 = cljs.core.get.call(null,inst_24343,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24346 = cljs.core.get.call(null,inst_24343,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24347 = inst_24322;
var state_24420__$1 = (function (){var statearr_24471 = state_24420;
(statearr_24471[(16)] = inst_24344);

(statearr_24471[(7)] = inst_24347);

(statearr_24471[(17)] = inst_24345);

(statearr_24471[(18)] = inst_24346);

return statearr_24471;
})();
var statearr_24472_24523 = state_24420__$1;
(statearr_24472_24523[(2)] = null);

(statearr_24472_24523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (18))){
var inst_24362 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
var statearr_24473_24524 = state_24420__$1;
(statearr_24473_24524[(2)] = inst_24362);

(statearr_24473_24524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (37))){
var state_24420__$1 = state_24420;
var statearr_24474_24525 = state_24420__$1;
(statearr_24474_24525[(2)] = null);

(statearr_24474_24525[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (8))){
var inst_24322 = (state_24420[(8)]);
var inst_24340 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24322);
var state_24420__$1 = state_24420;
var statearr_24475_24526 = state_24420__$1;
(statearr_24475_24526[(2)] = inst_24340);

(statearr_24475_24526[(1)] = (10));


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
});})(c__23421__auto___24480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23326__auto__,c__23421__auto___24480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23327__auto__ = null;
var cljs$core$async$mix_$_state_machine__23327__auto____0 = (function (){
var statearr_24476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24476[(0)] = cljs$core$async$mix_$_state_machine__23327__auto__);

(statearr_24476[(1)] = (1));

return statearr_24476;
});
var cljs$core$async$mix_$_state_machine__23327__auto____1 = (function (state_24420){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_24420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e24477){if((e24477 instanceof Object)){
var ex__23330__auto__ = e24477;
var statearr_24478_24527 = state_24420;
(statearr_24478_24527[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24528 = state_24420;
state_24420 = G__24528;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23327__auto__ = function(state_24420){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23327__auto____1.call(this,state_24420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23327__auto____0;
cljs$core$async$mix_$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23327__auto____1;
return cljs$core$async$mix_$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___24480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23423__auto__ = (function (){var statearr_24479 = f__23422__auto__.call(null);
(statearr_24479[(6)] = c__23421__auto___24480);

return statearr_24479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___24480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24530 = arguments.length;
switch (G__24530) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24534 = arguments.length;
switch (G__24534) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24532_SHARP_){
if(cljs.core.truth_(p1__24532_SHARP_.call(null,topic))){
return p1__24532_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24532_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24535 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24536){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24536 = meta24536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24537,meta24536__$1){
var self__ = this;
var _24537__$1 = this;
return (new cljs.core.async.t_cljs$core$async24535(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24536__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24537){
var self__ = this;
var _24537__$1 = this;
return self__.meta24536;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24535.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24536","meta24536",1693354587,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24535";

cljs.core.async.t_cljs$core$async24535.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24535");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24535.
 */
cljs.core.async.__GT_t_cljs$core$async24535 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24535(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24536){
return (new cljs.core.async.t_cljs$core$async24535(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24536));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24535(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23421__auto___24655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___24655,mults,ensure_mult,p){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___24655,mults,ensure_mult,p){
return (function (state_24609){
var state_val_24610 = (state_24609[(1)]);
if((state_val_24610 === (7))){
var inst_24605 = (state_24609[(2)]);
var state_24609__$1 = state_24609;
var statearr_24611_24656 = state_24609__$1;
(statearr_24611_24656[(2)] = inst_24605);

(statearr_24611_24656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (20))){
var state_24609__$1 = state_24609;
var statearr_24612_24657 = state_24609__$1;
(statearr_24612_24657[(2)] = null);

(statearr_24612_24657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (1))){
var state_24609__$1 = state_24609;
var statearr_24613_24658 = state_24609__$1;
(statearr_24613_24658[(2)] = null);

(statearr_24613_24658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (24))){
var inst_24588 = (state_24609[(7)]);
var inst_24597 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24588);
var state_24609__$1 = state_24609;
var statearr_24614_24659 = state_24609__$1;
(statearr_24614_24659[(2)] = inst_24597);

(statearr_24614_24659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (4))){
var inst_24540 = (state_24609[(8)]);
var inst_24540__$1 = (state_24609[(2)]);
var inst_24541 = (inst_24540__$1 == null);
var state_24609__$1 = (function (){var statearr_24615 = state_24609;
(statearr_24615[(8)] = inst_24540__$1);

return statearr_24615;
})();
if(cljs.core.truth_(inst_24541)){
var statearr_24616_24660 = state_24609__$1;
(statearr_24616_24660[(1)] = (5));

} else {
var statearr_24617_24661 = state_24609__$1;
(statearr_24617_24661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (15))){
var inst_24582 = (state_24609[(2)]);
var state_24609__$1 = state_24609;
var statearr_24618_24662 = state_24609__$1;
(statearr_24618_24662[(2)] = inst_24582);

(statearr_24618_24662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (21))){
var inst_24602 = (state_24609[(2)]);
var state_24609__$1 = (function (){var statearr_24619 = state_24609;
(statearr_24619[(9)] = inst_24602);

return statearr_24619;
})();
var statearr_24620_24663 = state_24609__$1;
(statearr_24620_24663[(2)] = null);

(statearr_24620_24663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (13))){
var inst_24564 = (state_24609[(10)]);
var inst_24566 = cljs.core.chunked_seq_QMARK_.call(null,inst_24564);
var state_24609__$1 = state_24609;
if(inst_24566){
var statearr_24621_24664 = state_24609__$1;
(statearr_24621_24664[(1)] = (16));

} else {
var statearr_24622_24665 = state_24609__$1;
(statearr_24622_24665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (22))){
var inst_24594 = (state_24609[(2)]);
var state_24609__$1 = state_24609;
if(cljs.core.truth_(inst_24594)){
var statearr_24623_24666 = state_24609__$1;
(statearr_24623_24666[(1)] = (23));

} else {
var statearr_24624_24667 = state_24609__$1;
(statearr_24624_24667[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (6))){
var inst_24590 = (state_24609[(11)]);
var inst_24588 = (state_24609[(7)]);
var inst_24540 = (state_24609[(8)]);
var inst_24588__$1 = topic_fn.call(null,inst_24540);
var inst_24589 = cljs.core.deref.call(null,mults);
var inst_24590__$1 = cljs.core.get.call(null,inst_24589,inst_24588__$1);
var state_24609__$1 = (function (){var statearr_24625 = state_24609;
(statearr_24625[(11)] = inst_24590__$1);

(statearr_24625[(7)] = inst_24588__$1);

return statearr_24625;
})();
if(cljs.core.truth_(inst_24590__$1)){
var statearr_24626_24668 = state_24609__$1;
(statearr_24626_24668[(1)] = (19));

} else {
var statearr_24627_24669 = state_24609__$1;
(statearr_24627_24669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (25))){
var inst_24599 = (state_24609[(2)]);
var state_24609__$1 = state_24609;
var statearr_24628_24670 = state_24609__$1;
(statearr_24628_24670[(2)] = inst_24599);

(statearr_24628_24670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (17))){
var inst_24564 = (state_24609[(10)]);
var inst_24573 = cljs.core.first.call(null,inst_24564);
var inst_24574 = cljs.core.async.muxch_STAR_.call(null,inst_24573);
var inst_24575 = cljs.core.async.close_BANG_.call(null,inst_24574);
var inst_24576 = cljs.core.next.call(null,inst_24564);
var inst_24550 = inst_24576;
var inst_24551 = null;
var inst_24552 = (0);
var inst_24553 = (0);
var state_24609__$1 = (function (){var statearr_24629 = state_24609;
(statearr_24629[(12)] = inst_24552);

(statearr_24629[(13)] = inst_24551);

(statearr_24629[(14)] = inst_24575);

(statearr_24629[(15)] = inst_24553);

(statearr_24629[(16)] = inst_24550);

return statearr_24629;
})();
var statearr_24630_24671 = state_24609__$1;
(statearr_24630_24671[(2)] = null);

(statearr_24630_24671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (3))){
var inst_24607 = (state_24609[(2)]);
var state_24609__$1 = state_24609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24609__$1,inst_24607);
} else {
if((state_val_24610 === (12))){
var inst_24584 = (state_24609[(2)]);
var state_24609__$1 = state_24609;
var statearr_24631_24672 = state_24609__$1;
(statearr_24631_24672[(2)] = inst_24584);

(statearr_24631_24672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (2))){
var state_24609__$1 = state_24609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24609__$1,(4),ch);
} else {
if((state_val_24610 === (23))){
var state_24609__$1 = state_24609;
var statearr_24632_24673 = state_24609__$1;
(statearr_24632_24673[(2)] = null);

(statearr_24632_24673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (19))){
var inst_24590 = (state_24609[(11)]);
var inst_24540 = (state_24609[(8)]);
var inst_24592 = cljs.core.async.muxch_STAR_.call(null,inst_24590);
var state_24609__$1 = state_24609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24609__$1,(22),inst_24592,inst_24540);
} else {
if((state_val_24610 === (11))){
var inst_24564 = (state_24609[(10)]);
var inst_24550 = (state_24609[(16)]);
var inst_24564__$1 = cljs.core.seq.call(null,inst_24550);
var state_24609__$1 = (function (){var statearr_24633 = state_24609;
(statearr_24633[(10)] = inst_24564__$1);

return statearr_24633;
})();
if(inst_24564__$1){
var statearr_24634_24674 = state_24609__$1;
(statearr_24634_24674[(1)] = (13));

} else {
var statearr_24635_24675 = state_24609__$1;
(statearr_24635_24675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (9))){
var inst_24586 = (state_24609[(2)]);
var state_24609__$1 = state_24609;
var statearr_24636_24676 = state_24609__$1;
(statearr_24636_24676[(2)] = inst_24586);

(statearr_24636_24676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (5))){
var inst_24547 = cljs.core.deref.call(null,mults);
var inst_24548 = cljs.core.vals.call(null,inst_24547);
var inst_24549 = cljs.core.seq.call(null,inst_24548);
var inst_24550 = inst_24549;
var inst_24551 = null;
var inst_24552 = (0);
var inst_24553 = (0);
var state_24609__$1 = (function (){var statearr_24637 = state_24609;
(statearr_24637[(12)] = inst_24552);

(statearr_24637[(13)] = inst_24551);

(statearr_24637[(15)] = inst_24553);

(statearr_24637[(16)] = inst_24550);

return statearr_24637;
})();
var statearr_24638_24677 = state_24609__$1;
(statearr_24638_24677[(2)] = null);

(statearr_24638_24677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (14))){
var state_24609__$1 = state_24609;
var statearr_24642_24678 = state_24609__$1;
(statearr_24642_24678[(2)] = null);

(statearr_24642_24678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (16))){
var inst_24564 = (state_24609[(10)]);
var inst_24568 = cljs.core.chunk_first.call(null,inst_24564);
var inst_24569 = cljs.core.chunk_rest.call(null,inst_24564);
var inst_24570 = cljs.core.count.call(null,inst_24568);
var inst_24550 = inst_24569;
var inst_24551 = inst_24568;
var inst_24552 = inst_24570;
var inst_24553 = (0);
var state_24609__$1 = (function (){var statearr_24643 = state_24609;
(statearr_24643[(12)] = inst_24552);

(statearr_24643[(13)] = inst_24551);

(statearr_24643[(15)] = inst_24553);

(statearr_24643[(16)] = inst_24550);

return statearr_24643;
})();
var statearr_24644_24679 = state_24609__$1;
(statearr_24644_24679[(2)] = null);

(statearr_24644_24679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (10))){
var inst_24552 = (state_24609[(12)]);
var inst_24551 = (state_24609[(13)]);
var inst_24553 = (state_24609[(15)]);
var inst_24550 = (state_24609[(16)]);
var inst_24558 = cljs.core._nth.call(null,inst_24551,inst_24553);
var inst_24559 = cljs.core.async.muxch_STAR_.call(null,inst_24558);
var inst_24560 = cljs.core.async.close_BANG_.call(null,inst_24559);
var inst_24561 = (inst_24553 + (1));
var tmp24639 = inst_24552;
var tmp24640 = inst_24551;
var tmp24641 = inst_24550;
var inst_24550__$1 = tmp24641;
var inst_24551__$1 = tmp24640;
var inst_24552__$1 = tmp24639;
var inst_24553__$1 = inst_24561;
var state_24609__$1 = (function (){var statearr_24645 = state_24609;
(statearr_24645[(12)] = inst_24552__$1);

(statearr_24645[(13)] = inst_24551__$1);

(statearr_24645[(15)] = inst_24553__$1);

(statearr_24645[(17)] = inst_24560);

(statearr_24645[(16)] = inst_24550__$1);

return statearr_24645;
})();
var statearr_24646_24680 = state_24609__$1;
(statearr_24646_24680[(2)] = null);

(statearr_24646_24680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (18))){
var inst_24579 = (state_24609[(2)]);
var state_24609__$1 = state_24609;
var statearr_24647_24681 = state_24609__$1;
(statearr_24647_24681[(2)] = inst_24579);

(statearr_24647_24681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24610 === (8))){
var inst_24552 = (state_24609[(12)]);
var inst_24553 = (state_24609[(15)]);
var inst_24555 = (inst_24553 < inst_24552);
var inst_24556 = inst_24555;
var state_24609__$1 = state_24609;
if(cljs.core.truth_(inst_24556)){
var statearr_24648_24682 = state_24609__$1;
(statearr_24648_24682[(1)] = (10));

} else {
var statearr_24649_24683 = state_24609__$1;
(statearr_24649_24683[(1)] = (11));

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
});})(c__23421__auto___24655,mults,ensure_mult,p))
;
return ((function (switch__23326__auto__,c__23421__auto___24655,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_24650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24650[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_24650[(1)] = (1));

return statearr_24650;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_24609){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_24609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e24651){if((e24651 instanceof Object)){
var ex__23330__auto__ = e24651;
var statearr_24652_24684 = state_24609;
(statearr_24652_24684[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24685 = state_24609;
state_24609 = G__24685;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_24609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_24609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___24655,mults,ensure_mult,p))
})();
var state__23423__auto__ = (function (){var statearr_24653 = f__23422__auto__.call(null);
(statearr_24653[(6)] = c__23421__auto___24655);

return statearr_24653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___24655,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24687 = arguments.length;
switch (G__24687) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24690 = arguments.length;
switch (G__24690) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24693 = arguments.length;
switch (G__24693) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__23421__auto___24760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___24760,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___24760,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24732){
var state_val_24733 = (state_24732[(1)]);
if((state_val_24733 === (7))){
var state_24732__$1 = state_24732;
var statearr_24734_24761 = state_24732__$1;
(statearr_24734_24761[(2)] = null);

(statearr_24734_24761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (1))){
var state_24732__$1 = state_24732;
var statearr_24735_24762 = state_24732__$1;
(statearr_24735_24762[(2)] = null);

(statearr_24735_24762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (4))){
var inst_24696 = (state_24732[(7)]);
var inst_24698 = (inst_24696 < cnt);
var state_24732__$1 = state_24732;
if(cljs.core.truth_(inst_24698)){
var statearr_24736_24763 = state_24732__$1;
(statearr_24736_24763[(1)] = (6));

} else {
var statearr_24737_24764 = state_24732__$1;
(statearr_24737_24764[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (15))){
var inst_24728 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24738_24765 = state_24732__$1;
(statearr_24738_24765[(2)] = inst_24728);

(statearr_24738_24765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (13))){
var inst_24721 = cljs.core.async.close_BANG_.call(null,out);
var state_24732__$1 = state_24732;
var statearr_24739_24766 = state_24732__$1;
(statearr_24739_24766[(2)] = inst_24721);

(statearr_24739_24766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (6))){
var state_24732__$1 = state_24732;
var statearr_24740_24767 = state_24732__$1;
(statearr_24740_24767[(2)] = null);

(statearr_24740_24767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (3))){
var inst_24730 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24732__$1,inst_24730);
} else {
if((state_val_24733 === (12))){
var inst_24718 = (state_24732[(8)]);
var inst_24718__$1 = (state_24732[(2)]);
var inst_24719 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24718__$1);
var state_24732__$1 = (function (){var statearr_24741 = state_24732;
(statearr_24741[(8)] = inst_24718__$1);

return statearr_24741;
})();
if(cljs.core.truth_(inst_24719)){
var statearr_24742_24768 = state_24732__$1;
(statearr_24742_24768[(1)] = (13));

} else {
var statearr_24743_24769 = state_24732__$1;
(statearr_24743_24769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (2))){
var inst_24695 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24696 = (0);
var state_24732__$1 = (function (){var statearr_24744 = state_24732;
(statearr_24744[(7)] = inst_24696);

(statearr_24744[(9)] = inst_24695);

return statearr_24744;
})();
var statearr_24745_24770 = state_24732__$1;
(statearr_24745_24770[(2)] = null);

(statearr_24745_24770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (11))){
var inst_24696 = (state_24732[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24732,(10),Object,null,(9));
var inst_24705 = chs__$1.call(null,inst_24696);
var inst_24706 = done.call(null,inst_24696);
var inst_24707 = cljs.core.async.take_BANG_.call(null,inst_24705,inst_24706);
var state_24732__$1 = state_24732;
var statearr_24746_24771 = state_24732__$1;
(statearr_24746_24771[(2)] = inst_24707);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (9))){
var inst_24696 = (state_24732[(7)]);
var inst_24709 = (state_24732[(2)]);
var inst_24710 = (inst_24696 + (1));
var inst_24696__$1 = inst_24710;
var state_24732__$1 = (function (){var statearr_24747 = state_24732;
(statearr_24747[(7)] = inst_24696__$1);

(statearr_24747[(10)] = inst_24709);

return statearr_24747;
})();
var statearr_24748_24772 = state_24732__$1;
(statearr_24748_24772[(2)] = null);

(statearr_24748_24772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (5))){
var inst_24716 = (state_24732[(2)]);
var state_24732__$1 = (function (){var statearr_24749 = state_24732;
(statearr_24749[(11)] = inst_24716);

return statearr_24749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24732__$1,(12),dchan);
} else {
if((state_val_24733 === (14))){
var inst_24718 = (state_24732[(8)]);
var inst_24723 = cljs.core.apply.call(null,f,inst_24718);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24732__$1,(16),out,inst_24723);
} else {
if((state_val_24733 === (16))){
var inst_24725 = (state_24732[(2)]);
var state_24732__$1 = (function (){var statearr_24750 = state_24732;
(statearr_24750[(12)] = inst_24725);

return statearr_24750;
})();
var statearr_24751_24773 = state_24732__$1;
(statearr_24751_24773[(2)] = null);

(statearr_24751_24773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (10))){
var inst_24700 = (state_24732[(2)]);
var inst_24701 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24732__$1 = (function (){var statearr_24752 = state_24732;
(statearr_24752[(13)] = inst_24700);

return statearr_24752;
})();
var statearr_24753_24774 = state_24732__$1;
(statearr_24753_24774[(2)] = inst_24701);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (8))){
var inst_24714 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24754_24775 = state_24732__$1;
(statearr_24754_24775[(2)] = inst_24714);

(statearr_24754_24775[(1)] = (5));


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
});})(c__23421__auto___24760,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23326__auto__,c__23421__auto___24760,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_24755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24755[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_24755[(1)] = (1));

return statearr_24755;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_24732){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_24732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e24756){if((e24756 instanceof Object)){
var ex__23330__auto__ = e24756;
var statearr_24757_24776 = state_24732;
(statearr_24757_24776[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24777 = state_24732;
state_24732 = G__24777;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_24732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_24732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___24760,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23423__auto__ = (function (){var statearr_24758 = f__23422__auto__.call(null);
(statearr_24758[(6)] = c__23421__auto___24760);

return statearr_24758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___24760,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24780 = arguments.length;
switch (G__24780) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23421__auto___24834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___24834,out){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___24834,out){
return (function (state_24812){
var state_val_24813 = (state_24812[(1)]);
if((state_val_24813 === (7))){
var inst_24792 = (state_24812[(7)]);
var inst_24791 = (state_24812[(8)]);
var inst_24791__$1 = (state_24812[(2)]);
var inst_24792__$1 = cljs.core.nth.call(null,inst_24791__$1,(0),null);
var inst_24793 = cljs.core.nth.call(null,inst_24791__$1,(1),null);
var inst_24794 = (inst_24792__$1 == null);
var state_24812__$1 = (function (){var statearr_24814 = state_24812;
(statearr_24814[(7)] = inst_24792__$1);

(statearr_24814[(8)] = inst_24791__$1);

(statearr_24814[(9)] = inst_24793);

return statearr_24814;
})();
if(cljs.core.truth_(inst_24794)){
var statearr_24815_24835 = state_24812__$1;
(statearr_24815_24835[(1)] = (8));

} else {
var statearr_24816_24836 = state_24812__$1;
(statearr_24816_24836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (1))){
var inst_24781 = cljs.core.vec.call(null,chs);
var inst_24782 = inst_24781;
var state_24812__$1 = (function (){var statearr_24817 = state_24812;
(statearr_24817[(10)] = inst_24782);

return statearr_24817;
})();
var statearr_24818_24837 = state_24812__$1;
(statearr_24818_24837[(2)] = null);

(statearr_24818_24837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (4))){
var inst_24782 = (state_24812[(10)]);
var state_24812__$1 = state_24812;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24812__$1,(7),inst_24782);
} else {
if((state_val_24813 === (6))){
var inst_24808 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
var statearr_24819_24838 = state_24812__$1;
(statearr_24819_24838[(2)] = inst_24808);

(statearr_24819_24838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (3))){
var inst_24810 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24812__$1,inst_24810);
} else {
if((state_val_24813 === (2))){
var inst_24782 = (state_24812[(10)]);
var inst_24784 = cljs.core.count.call(null,inst_24782);
var inst_24785 = (inst_24784 > (0));
var state_24812__$1 = state_24812;
if(cljs.core.truth_(inst_24785)){
var statearr_24821_24839 = state_24812__$1;
(statearr_24821_24839[(1)] = (4));

} else {
var statearr_24822_24840 = state_24812__$1;
(statearr_24822_24840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (11))){
var inst_24782 = (state_24812[(10)]);
var inst_24801 = (state_24812[(2)]);
var tmp24820 = inst_24782;
var inst_24782__$1 = tmp24820;
var state_24812__$1 = (function (){var statearr_24823 = state_24812;
(statearr_24823[(10)] = inst_24782__$1);

(statearr_24823[(11)] = inst_24801);

return statearr_24823;
})();
var statearr_24824_24841 = state_24812__$1;
(statearr_24824_24841[(2)] = null);

(statearr_24824_24841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (9))){
var inst_24792 = (state_24812[(7)]);
var state_24812__$1 = state_24812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24812__$1,(11),out,inst_24792);
} else {
if((state_val_24813 === (5))){
var inst_24806 = cljs.core.async.close_BANG_.call(null,out);
var state_24812__$1 = state_24812;
var statearr_24825_24842 = state_24812__$1;
(statearr_24825_24842[(2)] = inst_24806);

(statearr_24825_24842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (10))){
var inst_24804 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
var statearr_24826_24843 = state_24812__$1;
(statearr_24826_24843[(2)] = inst_24804);

(statearr_24826_24843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (8))){
var inst_24782 = (state_24812[(10)]);
var inst_24792 = (state_24812[(7)]);
var inst_24791 = (state_24812[(8)]);
var inst_24793 = (state_24812[(9)]);
var inst_24796 = (function (){var cs = inst_24782;
var vec__24787 = inst_24791;
var v = inst_24792;
var c = inst_24793;
return ((function (cs,vec__24787,v,c,inst_24782,inst_24792,inst_24791,inst_24793,state_val_24813,c__23421__auto___24834,out){
return (function (p1__24778_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24778_SHARP_);
});
;})(cs,vec__24787,v,c,inst_24782,inst_24792,inst_24791,inst_24793,state_val_24813,c__23421__auto___24834,out))
})();
var inst_24797 = cljs.core.filterv.call(null,inst_24796,inst_24782);
var inst_24782__$1 = inst_24797;
var state_24812__$1 = (function (){var statearr_24827 = state_24812;
(statearr_24827[(10)] = inst_24782__$1);

return statearr_24827;
})();
var statearr_24828_24844 = state_24812__$1;
(statearr_24828_24844[(2)] = null);

(statearr_24828_24844[(1)] = (2));


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
});})(c__23421__auto___24834,out))
;
return ((function (switch__23326__auto__,c__23421__auto___24834,out){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_24829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24829[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_24829[(1)] = (1));

return statearr_24829;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_24812){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_24812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e24830){if((e24830 instanceof Object)){
var ex__23330__auto__ = e24830;
var statearr_24831_24845 = state_24812;
(statearr_24831_24845[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24846 = state_24812;
state_24812 = G__24846;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_24812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_24812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___24834,out))
})();
var state__23423__auto__ = (function (){var statearr_24832 = f__23422__auto__.call(null);
(statearr_24832[(6)] = c__23421__auto___24834);

return statearr_24832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___24834,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24848 = arguments.length;
switch (G__24848) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23421__auto___24893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___24893,out){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___24893,out){
return (function (state_24872){
var state_val_24873 = (state_24872[(1)]);
if((state_val_24873 === (7))){
var inst_24854 = (state_24872[(7)]);
var inst_24854__$1 = (state_24872[(2)]);
var inst_24855 = (inst_24854__$1 == null);
var inst_24856 = cljs.core.not.call(null,inst_24855);
var state_24872__$1 = (function (){var statearr_24874 = state_24872;
(statearr_24874[(7)] = inst_24854__$1);

return statearr_24874;
})();
if(inst_24856){
var statearr_24875_24894 = state_24872__$1;
(statearr_24875_24894[(1)] = (8));

} else {
var statearr_24876_24895 = state_24872__$1;
(statearr_24876_24895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (1))){
var inst_24849 = (0);
var state_24872__$1 = (function (){var statearr_24877 = state_24872;
(statearr_24877[(8)] = inst_24849);

return statearr_24877;
})();
var statearr_24878_24896 = state_24872__$1;
(statearr_24878_24896[(2)] = null);

(statearr_24878_24896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (4))){
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24872__$1,(7),ch);
} else {
if((state_val_24873 === (6))){
var inst_24867 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
var statearr_24879_24897 = state_24872__$1;
(statearr_24879_24897[(2)] = inst_24867);

(statearr_24879_24897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (3))){
var inst_24869 = (state_24872[(2)]);
var inst_24870 = cljs.core.async.close_BANG_.call(null,out);
var state_24872__$1 = (function (){var statearr_24880 = state_24872;
(statearr_24880[(9)] = inst_24869);

return statearr_24880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24872__$1,inst_24870);
} else {
if((state_val_24873 === (2))){
var inst_24849 = (state_24872[(8)]);
var inst_24851 = (inst_24849 < n);
var state_24872__$1 = state_24872;
if(cljs.core.truth_(inst_24851)){
var statearr_24881_24898 = state_24872__$1;
(statearr_24881_24898[(1)] = (4));

} else {
var statearr_24882_24899 = state_24872__$1;
(statearr_24882_24899[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (11))){
var inst_24849 = (state_24872[(8)]);
var inst_24859 = (state_24872[(2)]);
var inst_24860 = (inst_24849 + (1));
var inst_24849__$1 = inst_24860;
var state_24872__$1 = (function (){var statearr_24883 = state_24872;
(statearr_24883[(10)] = inst_24859);

(statearr_24883[(8)] = inst_24849__$1);

return statearr_24883;
})();
var statearr_24884_24900 = state_24872__$1;
(statearr_24884_24900[(2)] = null);

(statearr_24884_24900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (9))){
var state_24872__$1 = state_24872;
var statearr_24885_24901 = state_24872__$1;
(statearr_24885_24901[(2)] = null);

(statearr_24885_24901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (5))){
var state_24872__$1 = state_24872;
var statearr_24886_24902 = state_24872__$1;
(statearr_24886_24902[(2)] = null);

(statearr_24886_24902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (10))){
var inst_24864 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
var statearr_24887_24903 = state_24872__$1;
(statearr_24887_24903[(2)] = inst_24864);

(statearr_24887_24903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (8))){
var inst_24854 = (state_24872[(7)]);
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24872__$1,(11),out,inst_24854);
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
});})(c__23421__auto___24893,out))
;
return ((function (switch__23326__auto__,c__23421__auto___24893,out){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_24888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24888[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_24888[(1)] = (1));

return statearr_24888;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_24872){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_24872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e24889){if((e24889 instanceof Object)){
var ex__23330__auto__ = e24889;
var statearr_24890_24904 = state_24872;
(statearr_24890_24904[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24905 = state_24872;
state_24872 = G__24905;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_24872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_24872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___24893,out))
})();
var state__23423__auto__ = (function (){var statearr_24891 = f__23422__auto__.call(null);
(statearr_24891[(6)] = c__23421__auto___24893);

return statearr_24891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___24893,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24907 = (function (f,ch,meta24908){
this.f = f;
this.ch = ch;
this.meta24908 = meta24908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24909,meta24908__$1){
var self__ = this;
var _24909__$1 = this;
return (new cljs.core.async.t_cljs$core$async24907(self__.f,self__.ch,meta24908__$1));
});

cljs.core.async.t_cljs$core$async24907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24909){
var self__ = this;
var _24909__$1 = this;
return self__.meta24908;
});

cljs.core.async.t_cljs$core$async24907.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24907.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24907.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24910 = (function (f,ch,meta24908,_,fn1,meta24911){
this.f = f;
this.ch = ch;
this.meta24908 = meta24908;
this._ = _;
this.fn1 = fn1;
this.meta24911 = meta24911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24912,meta24911__$1){
var self__ = this;
var _24912__$1 = this;
return (new cljs.core.async.t_cljs$core$async24910(self__.f,self__.ch,self__.meta24908,self__._,self__.fn1,meta24911__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24912){
var self__ = this;
var _24912__$1 = this;
return self__.meta24911;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24910.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24910.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24906_SHARP_){
return f1.call(null,(((p1__24906_SHARP_ == null))?null:self__.f.call(null,p1__24906_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24910.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24908","meta24908",-137145630,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24907","cljs.core.async/t_cljs$core$async24907",2014483011,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24911","meta24911",-1233813597,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24910";

cljs.core.async.t_cljs$core$async24910.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24910");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24910.
 */
cljs.core.async.__GT_t_cljs$core$async24910 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24910(f__$1,ch__$1,meta24908__$1,___$2,fn1__$1,meta24911){
return (new cljs.core.async.t_cljs$core$async24910(f__$1,ch__$1,meta24908__$1,___$2,fn1__$1,meta24911));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24910(self__.f,self__.ch,self__.meta24908,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24907.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24908","meta24908",-137145630,null)], null);
});

cljs.core.async.t_cljs$core$async24907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24907";

cljs.core.async.t_cljs$core$async24907.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24907");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24907.
 */
cljs.core.async.__GT_t_cljs$core$async24907 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24907(f__$1,ch__$1,meta24908){
return (new cljs.core.async.t_cljs$core$async24907(f__$1,ch__$1,meta24908));
});

}

return (new cljs.core.async.t_cljs$core$async24907(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24913 = (function (f,ch,meta24914){
this.f = f;
this.ch = ch;
this.meta24914 = meta24914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24915,meta24914__$1){
var self__ = this;
var _24915__$1 = this;
return (new cljs.core.async.t_cljs$core$async24913(self__.f,self__.ch,meta24914__$1));
});

cljs.core.async.t_cljs$core$async24913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24915){
var self__ = this;
var _24915__$1 = this;
return self__.meta24914;
});

cljs.core.async.t_cljs$core$async24913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24914","meta24914",1828634645,null)], null);
});

cljs.core.async.t_cljs$core$async24913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24913";

cljs.core.async.t_cljs$core$async24913.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24913");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24913.
 */
cljs.core.async.__GT_t_cljs$core$async24913 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24913(f__$1,ch__$1,meta24914){
return (new cljs.core.async.t_cljs$core$async24913(f__$1,ch__$1,meta24914));
});

}

return (new cljs.core.async.t_cljs$core$async24913(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24916 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24916 = (function (p,ch,meta24917){
this.p = p;
this.ch = ch;
this.meta24917 = meta24917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24918,meta24917__$1){
var self__ = this;
var _24918__$1 = this;
return (new cljs.core.async.t_cljs$core$async24916(self__.p,self__.ch,meta24917__$1));
});

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24918){
var self__ = this;
var _24918__$1 = this;
return self__.meta24917;
});

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24917","meta24917",630925408,null)], null);
});

cljs.core.async.t_cljs$core$async24916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24916";

cljs.core.async.t_cljs$core$async24916.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24916");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24916.
 */
cljs.core.async.__GT_t_cljs$core$async24916 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24916(p__$1,ch__$1,meta24917){
return (new cljs.core.async.t_cljs$core$async24916(p__$1,ch__$1,meta24917));
});

}

return (new cljs.core.async.t_cljs$core$async24916(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24920 = arguments.length;
switch (G__24920) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23421__auto___24960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___24960,out){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___24960,out){
return (function (state_24941){
var state_val_24942 = (state_24941[(1)]);
if((state_val_24942 === (7))){
var inst_24937 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24943_24961 = state_24941__$1;
(statearr_24943_24961[(2)] = inst_24937);

(statearr_24943_24961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (1))){
var state_24941__$1 = state_24941;
var statearr_24944_24962 = state_24941__$1;
(statearr_24944_24962[(2)] = null);

(statearr_24944_24962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (4))){
var inst_24923 = (state_24941[(7)]);
var inst_24923__$1 = (state_24941[(2)]);
var inst_24924 = (inst_24923__$1 == null);
var state_24941__$1 = (function (){var statearr_24945 = state_24941;
(statearr_24945[(7)] = inst_24923__$1);

return statearr_24945;
})();
if(cljs.core.truth_(inst_24924)){
var statearr_24946_24963 = state_24941__$1;
(statearr_24946_24963[(1)] = (5));

} else {
var statearr_24947_24964 = state_24941__$1;
(statearr_24947_24964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (6))){
var inst_24923 = (state_24941[(7)]);
var inst_24928 = p.call(null,inst_24923);
var state_24941__$1 = state_24941;
if(cljs.core.truth_(inst_24928)){
var statearr_24948_24965 = state_24941__$1;
(statearr_24948_24965[(1)] = (8));

} else {
var statearr_24949_24966 = state_24941__$1;
(statearr_24949_24966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (3))){
var inst_24939 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24941__$1,inst_24939);
} else {
if((state_val_24942 === (2))){
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24941__$1,(4),ch);
} else {
if((state_val_24942 === (11))){
var inst_24931 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24950_24967 = state_24941__$1;
(statearr_24950_24967[(2)] = inst_24931);

(statearr_24950_24967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (9))){
var state_24941__$1 = state_24941;
var statearr_24951_24968 = state_24941__$1;
(statearr_24951_24968[(2)] = null);

(statearr_24951_24968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (5))){
var inst_24926 = cljs.core.async.close_BANG_.call(null,out);
var state_24941__$1 = state_24941;
var statearr_24952_24969 = state_24941__$1;
(statearr_24952_24969[(2)] = inst_24926);

(statearr_24952_24969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (10))){
var inst_24934 = (state_24941[(2)]);
var state_24941__$1 = (function (){var statearr_24953 = state_24941;
(statearr_24953[(8)] = inst_24934);

return statearr_24953;
})();
var statearr_24954_24970 = state_24941__$1;
(statearr_24954_24970[(2)] = null);

(statearr_24954_24970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (8))){
var inst_24923 = (state_24941[(7)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24941__$1,(11),out,inst_24923);
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
});})(c__23421__auto___24960,out))
;
return ((function (switch__23326__auto__,c__23421__auto___24960,out){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_24955 = [null,null,null,null,null,null,null,null,null];
(statearr_24955[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_24955[(1)] = (1));

return statearr_24955;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_24941){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_24941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e24956){if((e24956 instanceof Object)){
var ex__23330__auto__ = e24956;
var statearr_24957_24971 = state_24941;
(statearr_24957_24971[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24972 = state_24941;
state_24941 = G__24972;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_24941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_24941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___24960,out))
})();
var state__23423__auto__ = (function (){var statearr_24958 = f__23422__auto__.call(null);
(statearr_24958[(6)] = c__23421__auto___24960);

return statearr_24958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___24960,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24974 = arguments.length;
switch (G__24974) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__23421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto__){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto__){
return (function (state_25037){
var state_val_25038 = (state_25037[(1)]);
if((state_val_25038 === (7))){
var inst_25033 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25039_25077 = state_25037__$1;
(statearr_25039_25077[(2)] = inst_25033);

(statearr_25039_25077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (20))){
var inst_25003 = (state_25037[(7)]);
var inst_25014 = (state_25037[(2)]);
var inst_25015 = cljs.core.next.call(null,inst_25003);
var inst_24989 = inst_25015;
var inst_24990 = null;
var inst_24991 = (0);
var inst_24992 = (0);
var state_25037__$1 = (function (){var statearr_25040 = state_25037;
(statearr_25040[(8)] = inst_24990);

(statearr_25040[(9)] = inst_24992);

(statearr_25040[(10)] = inst_25014);

(statearr_25040[(11)] = inst_24991);

(statearr_25040[(12)] = inst_24989);

return statearr_25040;
})();
var statearr_25041_25078 = state_25037__$1;
(statearr_25041_25078[(2)] = null);

(statearr_25041_25078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (1))){
var state_25037__$1 = state_25037;
var statearr_25042_25079 = state_25037__$1;
(statearr_25042_25079[(2)] = null);

(statearr_25042_25079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (4))){
var inst_24978 = (state_25037[(13)]);
var inst_24978__$1 = (state_25037[(2)]);
var inst_24979 = (inst_24978__$1 == null);
var state_25037__$1 = (function (){var statearr_25043 = state_25037;
(statearr_25043[(13)] = inst_24978__$1);

return statearr_25043;
})();
if(cljs.core.truth_(inst_24979)){
var statearr_25044_25080 = state_25037__$1;
(statearr_25044_25080[(1)] = (5));

} else {
var statearr_25045_25081 = state_25037__$1;
(statearr_25045_25081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (15))){
var state_25037__$1 = state_25037;
var statearr_25049_25082 = state_25037__$1;
(statearr_25049_25082[(2)] = null);

(statearr_25049_25082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (21))){
var state_25037__$1 = state_25037;
var statearr_25050_25083 = state_25037__$1;
(statearr_25050_25083[(2)] = null);

(statearr_25050_25083[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (13))){
var inst_24990 = (state_25037[(8)]);
var inst_24992 = (state_25037[(9)]);
var inst_24991 = (state_25037[(11)]);
var inst_24989 = (state_25037[(12)]);
var inst_24999 = (state_25037[(2)]);
var inst_25000 = (inst_24992 + (1));
var tmp25046 = inst_24990;
var tmp25047 = inst_24991;
var tmp25048 = inst_24989;
var inst_24989__$1 = tmp25048;
var inst_24990__$1 = tmp25046;
var inst_24991__$1 = tmp25047;
var inst_24992__$1 = inst_25000;
var state_25037__$1 = (function (){var statearr_25051 = state_25037;
(statearr_25051[(8)] = inst_24990__$1);

(statearr_25051[(14)] = inst_24999);

(statearr_25051[(9)] = inst_24992__$1);

(statearr_25051[(11)] = inst_24991__$1);

(statearr_25051[(12)] = inst_24989__$1);

return statearr_25051;
})();
var statearr_25052_25084 = state_25037__$1;
(statearr_25052_25084[(2)] = null);

(statearr_25052_25084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (22))){
var state_25037__$1 = state_25037;
var statearr_25053_25085 = state_25037__$1;
(statearr_25053_25085[(2)] = null);

(statearr_25053_25085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (6))){
var inst_24978 = (state_25037[(13)]);
var inst_24987 = f.call(null,inst_24978);
var inst_24988 = cljs.core.seq.call(null,inst_24987);
var inst_24989 = inst_24988;
var inst_24990 = null;
var inst_24991 = (0);
var inst_24992 = (0);
var state_25037__$1 = (function (){var statearr_25054 = state_25037;
(statearr_25054[(8)] = inst_24990);

(statearr_25054[(9)] = inst_24992);

(statearr_25054[(11)] = inst_24991);

(statearr_25054[(12)] = inst_24989);

return statearr_25054;
})();
var statearr_25055_25086 = state_25037__$1;
(statearr_25055_25086[(2)] = null);

(statearr_25055_25086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (17))){
var inst_25003 = (state_25037[(7)]);
var inst_25007 = cljs.core.chunk_first.call(null,inst_25003);
var inst_25008 = cljs.core.chunk_rest.call(null,inst_25003);
var inst_25009 = cljs.core.count.call(null,inst_25007);
var inst_24989 = inst_25008;
var inst_24990 = inst_25007;
var inst_24991 = inst_25009;
var inst_24992 = (0);
var state_25037__$1 = (function (){var statearr_25056 = state_25037;
(statearr_25056[(8)] = inst_24990);

(statearr_25056[(9)] = inst_24992);

(statearr_25056[(11)] = inst_24991);

(statearr_25056[(12)] = inst_24989);

return statearr_25056;
})();
var statearr_25057_25087 = state_25037__$1;
(statearr_25057_25087[(2)] = null);

(statearr_25057_25087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (3))){
var inst_25035 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25037__$1,inst_25035);
} else {
if((state_val_25038 === (12))){
var inst_25023 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25058_25088 = state_25037__$1;
(statearr_25058_25088[(2)] = inst_25023);

(statearr_25058_25088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (2))){
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25037__$1,(4),in$);
} else {
if((state_val_25038 === (23))){
var inst_25031 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25059_25089 = state_25037__$1;
(statearr_25059_25089[(2)] = inst_25031);

(statearr_25059_25089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (19))){
var inst_25018 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25060_25090 = state_25037__$1;
(statearr_25060_25090[(2)] = inst_25018);

(statearr_25060_25090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (11))){
var inst_25003 = (state_25037[(7)]);
var inst_24989 = (state_25037[(12)]);
var inst_25003__$1 = cljs.core.seq.call(null,inst_24989);
var state_25037__$1 = (function (){var statearr_25061 = state_25037;
(statearr_25061[(7)] = inst_25003__$1);

return statearr_25061;
})();
if(inst_25003__$1){
var statearr_25062_25091 = state_25037__$1;
(statearr_25062_25091[(1)] = (14));

} else {
var statearr_25063_25092 = state_25037__$1;
(statearr_25063_25092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (9))){
var inst_25025 = (state_25037[(2)]);
var inst_25026 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25037__$1 = (function (){var statearr_25064 = state_25037;
(statearr_25064[(15)] = inst_25025);

return statearr_25064;
})();
if(cljs.core.truth_(inst_25026)){
var statearr_25065_25093 = state_25037__$1;
(statearr_25065_25093[(1)] = (21));

} else {
var statearr_25066_25094 = state_25037__$1;
(statearr_25066_25094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (5))){
var inst_24981 = cljs.core.async.close_BANG_.call(null,out);
var state_25037__$1 = state_25037;
var statearr_25067_25095 = state_25037__$1;
(statearr_25067_25095[(2)] = inst_24981);

(statearr_25067_25095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (14))){
var inst_25003 = (state_25037[(7)]);
var inst_25005 = cljs.core.chunked_seq_QMARK_.call(null,inst_25003);
var state_25037__$1 = state_25037;
if(inst_25005){
var statearr_25068_25096 = state_25037__$1;
(statearr_25068_25096[(1)] = (17));

} else {
var statearr_25069_25097 = state_25037__$1;
(statearr_25069_25097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (16))){
var inst_25021 = (state_25037[(2)]);
var state_25037__$1 = state_25037;
var statearr_25070_25098 = state_25037__$1;
(statearr_25070_25098[(2)] = inst_25021);

(statearr_25070_25098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25038 === (10))){
var inst_24990 = (state_25037[(8)]);
var inst_24992 = (state_25037[(9)]);
var inst_24997 = cljs.core._nth.call(null,inst_24990,inst_24992);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25037__$1,(13),out,inst_24997);
} else {
if((state_val_25038 === (18))){
var inst_25003 = (state_25037[(7)]);
var inst_25012 = cljs.core.first.call(null,inst_25003);
var state_25037__$1 = state_25037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25037__$1,(20),out,inst_25012);
} else {
if((state_val_25038 === (8))){
var inst_24992 = (state_25037[(9)]);
var inst_24991 = (state_25037[(11)]);
var inst_24994 = (inst_24992 < inst_24991);
var inst_24995 = inst_24994;
var state_25037__$1 = state_25037;
if(cljs.core.truth_(inst_24995)){
var statearr_25071_25099 = state_25037__$1;
(statearr_25071_25099[(1)] = (10));

} else {
var statearr_25072_25100 = state_25037__$1;
(statearr_25072_25100[(1)] = (11));

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
});})(c__23421__auto__))
;
return ((function (switch__23326__auto__,c__23421__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23327__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23327__auto____0 = (function (){
var statearr_25073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25073[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23327__auto__);

(statearr_25073[(1)] = (1));

return statearr_25073;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23327__auto____1 = (function (state_25037){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_25037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e25074){if((e25074 instanceof Object)){
var ex__23330__auto__ = e25074;
var statearr_25075_25101 = state_25037;
(statearr_25075_25101[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25102 = state_25037;
state_25037 = G__25102;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23327__auto__ = function(state_25037){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23327__auto____1.call(this,state_25037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23327__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23327__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto__))
})();
var state__23423__auto__ = (function (){var statearr_25076 = f__23422__auto__.call(null);
(statearr_25076[(6)] = c__23421__auto__);

return statearr_25076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto__))
);

return c__23421__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25104 = arguments.length;
switch (G__25104) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25107 = arguments.length;
switch (G__25107) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25110 = arguments.length;
switch (G__25110) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23421__auto___25157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___25157,out){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___25157,out){
return (function (state_25134){
var state_val_25135 = (state_25134[(1)]);
if((state_val_25135 === (7))){
var inst_25129 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
var statearr_25136_25158 = state_25134__$1;
(statearr_25136_25158[(2)] = inst_25129);

(statearr_25136_25158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (1))){
var inst_25111 = null;
var state_25134__$1 = (function (){var statearr_25137 = state_25134;
(statearr_25137[(7)] = inst_25111);

return statearr_25137;
})();
var statearr_25138_25159 = state_25134__$1;
(statearr_25138_25159[(2)] = null);

(statearr_25138_25159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (4))){
var inst_25114 = (state_25134[(8)]);
var inst_25114__$1 = (state_25134[(2)]);
var inst_25115 = (inst_25114__$1 == null);
var inst_25116 = cljs.core.not.call(null,inst_25115);
var state_25134__$1 = (function (){var statearr_25139 = state_25134;
(statearr_25139[(8)] = inst_25114__$1);

return statearr_25139;
})();
if(inst_25116){
var statearr_25140_25160 = state_25134__$1;
(statearr_25140_25160[(1)] = (5));

} else {
var statearr_25141_25161 = state_25134__$1;
(statearr_25141_25161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (6))){
var state_25134__$1 = state_25134;
var statearr_25142_25162 = state_25134__$1;
(statearr_25142_25162[(2)] = null);

(statearr_25142_25162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (3))){
var inst_25131 = (state_25134[(2)]);
var inst_25132 = cljs.core.async.close_BANG_.call(null,out);
var state_25134__$1 = (function (){var statearr_25143 = state_25134;
(statearr_25143[(9)] = inst_25131);

return statearr_25143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25134__$1,inst_25132);
} else {
if((state_val_25135 === (2))){
var state_25134__$1 = state_25134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25134__$1,(4),ch);
} else {
if((state_val_25135 === (11))){
var inst_25114 = (state_25134[(8)]);
var inst_25123 = (state_25134[(2)]);
var inst_25111 = inst_25114;
var state_25134__$1 = (function (){var statearr_25144 = state_25134;
(statearr_25144[(10)] = inst_25123);

(statearr_25144[(7)] = inst_25111);

return statearr_25144;
})();
var statearr_25145_25163 = state_25134__$1;
(statearr_25145_25163[(2)] = null);

(statearr_25145_25163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (9))){
var inst_25114 = (state_25134[(8)]);
var state_25134__$1 = state_25134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25134__$1,(11),out,inst_25114);
} else {
if((state_val_25135 === (5))){
var inst_25114 = (state_25134[(8)]);
var inst_25111 = (state_25134[(7)]);
var inst_25118 = cljs.core._EQ_.call(null,inst_25114,inst_25111);
var state_25134__$1 = state_25134;
if(inst_25118){
var statearr_25147_25164 = state_25134__$1;
(statearr_25147_25164[(1)] = (8));

} else {
var statearr_25148_25165 = state_25134__$1;
(statearr_25148_25165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (10))){
var inst_25126 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
var statearr_25149_25166 = state_25134__$1;
(statearr_25149_25166[(2)] = inst_25126);

(statearr_25149_25166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (8))){
var inst_25111 = (state_25134[(7)]);
var tmp25146 = inst_25111;
var inst_25111__$1 = tmp25146;
var state_25134__$1 = (function (){var statearr_25150 = state_25134;
(statearr_25150[(7)] = inst_25111__$1);

return statearr_25150;
})();
var statearr_25151_25167 = state_25134__$1;
(statearr_25151_25167[(2)] = null);

(statearr_25151_25167[(1)] = (2));


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
});})(c__23421__auto___25157,out))
;
return ((function (switch__23326__auto__,c__23421__auto___25157,out){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_25152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25152[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_25152[(1)] = (1));

return statearr_25152;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_25134){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_25134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e25153){if((e25153 instanceof Object)){
var ex__23330__auto__ = e25153;
var statearr_25154_25168 = state_25134;
(statearr_25154_25168[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25169 = state_25134;
state_25134 = G__25169;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_25134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_25134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___25157,out))
})();
var state__23423__auto__ = (function (){var statearr_25155 = f__23422__auto__.call(null);
(statearr_25155[(6)] = c__23421__auto___25157);

return statearr_25155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___25157,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25171 = arguments.length;
switch (G__25171) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23421__auto___25237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___25237,out){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___25237,out){
return (function (state_25209){
var state_val_25210 = (state_25209[(1)]);
if((state_val_25210 === (7))){
var inst_25205 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
var statearr_25211_25238 = state_25209__$1;
(statearr_25211_25238[(2)] = inst_25205);

(statearr_25211_25238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (1))){
var inst_25172 = (new Array(n));
var inst_25173 = inst_25172;
var inst_25174 = (0);
var state_25209__$1 = (function (){var statearr_25212 = state_25209;
(statearr_25212[(7)] = inst_25173);

(statearr_25212[(8)] = inst_25174);

return statearr_25212;
})();
var statearr_25213_25239 = state_25209__$1;
(statearr_25213_25239[(2)] = null);

(statearr_25213_25239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (4))){
var inst_25177 = (state_25209[(9)]);
var inst_25177__$1 = (state_25209[(2)]);
var inst_25178 = (inst_25177__$1 == null);
var inst_25179 = cljs.core.not.call(null,inst_25178);
var state_25209__$1 = (function (){var statearr_25214 = state_25209;
(statearr_25214[(9)] = inst_25177__$1);

return statearr_25214;
})();
if(inst_25179){
var statearr_25215_25240 = state_25209__$1;
(statearr_25215_25240[(1)] = (5));

} else {
var statearr_25216_25241 = state_25209__$1;
(statearr_25216_25241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (15))){
var inst_25199 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
var statearr_25217_25242 = state_25209__$1;
(statearr_25217_25242[(2)] = inst_25199);

(statearr_25217_25242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (13))){
var state_25209__$1 = state_25209;
var statearr_25218_25243 = state_25209__$1;
(statearr_25218_25243[(2)] = null);

(statearr_25218_25243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (6))){
var inst_25174 = (state_25209[(8)]);
var inst_25195 = (inst_25174 > (0));
var state_25209__$1 = state_25209;
if(cljs.core.truth_(inst_25195)){
var statearr_25219_25244 = state_25209__$1;
(statearr_25219_25244[(1)] = (12));

} else {
var statearr_25220_25245 = state_25209__$1;
(statearr_25220_25245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (3))){
var inst_25207 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25209__$1,inst_25207);
} else {
if((state_val_25210 === (12))){
var inst_25173 = (state_25209[(7)]);
var inst_25197 = cljs.core.vec.call(null,inst_25173);
var state_25209__$1 = state_25209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25209__$1,(15),out,inst_25197);
} else {
if((state_val_25210 === (2))){
var state_25209__$1 = state_25209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25209__$1,(4),ch);
} else {
if((state_val_25210 === (11))){
var inst_25189 = (state_25209[(2)]);
var inst_25190 = (new Array(n));
var inst_25173 = inst_25190;
var inst_25174 = (0);
var state_25209__$1 = (function (){var statearr_25221 = state_25209;
(statearr_25221[(7)] = inst_25173);

(statearr_25221[(10)] = inst_25189);

(statearr_25221[(8)] = inst_25174);

return statearr_25221;
})();
var statearr_25222_25246 = state_25209__$1;
(statearr_25222_25246[(2)] = null);

(statearr_25222_25246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (9))){
var inst_25173 = (state_25209[(7)]);
var inst_25187 = cljs.core.vec.call(null,inst_25173);
var state_25209__$1 = state_25209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25209__$1,(11),out,inst_25187);
} else {
if((state_val_25210 === (5))){
var inst_25173 = (state_25209[(7)]);
var inst_25182 = (state_25209[(11)]);
var inst_25177 = (state_25209[(9)]);
var inst_25174 = (state_25209[(8)]);
var inst_25181 = (inst_25173[inst_25174] = inst_25177);
var inst_25182__$1 = (inst_25174 + (1));
var inst_25183 = (inst_25182__$1 < n);
var state_25209__$1 = (function (){var statearr_25223 = state_25209;
(statearr_25223[(12)] = inst_25181);

(statearr_25223[(11)] = inst_25182__$1);

return statearr_25223;
})();
if(cljs.core.truth_(inst_25183)){
var statearr_25224_25247 = state_25209__$1;
(statearr_25224_25247[(1)] = (8));

} else {
var statearr_25225_25248 = state_25209__$1;
(statearr_25225_25248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (14))){
var inst_25202 = (state_25209[(2)]);
var inst_25203 = cljs.core.async.close_BANG_.call(null,out);
var state_25209__$1 = (function (){var statearr_25227 = state_25209;
(statearr_25227[(13)] = inst_25202);

return statearr_25227;
})();
var statearr_25228_25249 = state_25209__$1;
(statearr_25228_25249[(2)] = inst_25203);

(statearr_25228_25249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (10))){
var inst_25193 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
var statearr_25229_25250 = state_25209__$1;
(statearr_25229_25250[(2)] = inst_25193);

(statearr_25229_25250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (8))){
var inst_25173 = (state_25209[(7)]);
var inst_25182 = (state_25209[(11)]);
var tmp25226 = inst_25173;
var inst_25173__$1 = tmp25226;
var inst_25174 = inst_25182;
var state_25209__$1 = (function (){var statearr_25230 = state_25209;
(statearr_25230[(7)] = inst_25173__$1);

(statearr_25230[(8)] = inst_25174);

return statearr_25230;
})();
var statearr_25231_25251 = state_25209__$1;
(statearr_25231_25251[(2)] = null);

(statearr_25231_25251[(1)] = (2));


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
});})(c__23421__auto___25237,out))
;
return ((function (switch__23326__auto__,c__23421__auto___25237,out){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_25232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25232[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_25232[(1)] = (1));

return statearr_25232;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_25209){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_25209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e25233){if((e25233 instanceof Object)){
var ex__23330__auto__ = e25233;
var statearr_25234_25252 = state_25209;
(statearr_25234_25252[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25253 = state_25209;
state_25209 = G__25253;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_25209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_25209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___25237,out))
})();
var state__23423__auto__ = (function (){var statearr_25235 = f__23422__auto__.call(null);
(statearr_25235[(6)] = c__23421__auto___25237);

return statearr_25235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___25237,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25255 = arguments.length;
switch (G__25255) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23421__auto___25325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23421__auto___25325,out){
return (function (){
var f__23422__auto__ = (function (){var switch__23326__auto__ = ((function (c__23421__auto___25325,out){
return (function (state_25297){
var state_val_25298 = (state_25297[(1)]);
if((state_val_25298 === (7))){
var inst_25293 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
var statearr_25299_25326 = state_25297__$1;
(statearr_25299_25326[(2)] = inst_25293);

(statearr_25299_25326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (1))){
var inst_25256 = [];
var inst_25257 = inst_25256;
var inst_25258 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25297__$1 = (function (){var statearr_25300 = state_25297;
(statearr_25300[(7)] = inst_25257);

(statearr_25300[(8)] = inst_25258);

return statearr_25300;
})();
var statearr_25301_25327 = state_25297__$1;
(statearr_25301_25327[(2)] = null);

(statearr_25301_25327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (4))){
var inst_25261 = (state_25297[(9)]);
var inst_25261__$1 = (state_25297[(2)]);
var inst_25262 = (inst_25261__$1 == null);
var inst_25263 = cljs.core.not.call(null,inst_25262);
var state_25297__$1 = (function (){var statearr_25302 = state_25297;
(statearr_25302[(9)] = inst_25261__$1);

return statearr_25302;
})();
if(inst_25263){
var statearr_25303_25328 = state_25297__$1;
(statearr_25303_25328[(1)] = (5));

} else {
var statearr_25304_25329 = state_25297__$1;
(statearr_25304_25329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (15))){
var inst_25287 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
var statearr_25305_25330 = state_25297__$1;
(statearr_25305_25330[(2)] = inst_25287);

(statearr_25305_25330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (13))){
var state_25297__$1 = state_25297;
var statearr_25306_25331 = state_25297__$1;
(statearr_25306_25331[(2)] = null);

(statearr_25306_25331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (6))){
var inst_25257 = (state_25297[(7)]);
var inst_25282 = inst_25257.length;
var inst_25283 = (inst_25282 > (0));
var state_25297__$1 = state_25297;
if(cljs.core.truth_(inst_25283)){
var statearr_25307_25332 = state_25297__$1;
(statearr_25307_25332[(1)] = (12));

} else {
var statearr_25308_25333 = state_25297__$1;
(statearr_25308_25333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (3))){
var inst_25295 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25297__$1,inst_25295);
} else {
if((state_val_25298 === (12))){
var inst_25257 = (state_25297[(7)]);
var inst_25285 = cljs.core.vec.call(null,inst_25257);
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25297__$1,(15),out,inst_25285);
} else {
if((state_val_25298 === (2))){
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25297__$1,(4),ch);
} else {
if((state_val_25298 === (11))){
var inst_25261 = (state_25297[(9)]);
var inst_25265 = (state_25297[(10)]);
var inst_25275 = (state_25297[(2)]);
var inst_25276 = [];
var inst_25277 = inst_25276.push(inst_25261);
var inst_25257 = inst_25276;
var inst_25258 = inst_25265;
var state_25297__$1 = (function (){var statearr_25309 = state_25297;
(statearr_25309[(7)] = inst_25257);

(statearr_25309[(8)] = inst_25258);

(statearr_25309[(11)] = inst_25275);

(statearr_25309[(12)] = inst_25277);

return statearr_25309;
})();
var statearr_25310_25334 = state_25297__$1;
(statearr_25310_25334[(2)] = null);

(statearr_25310_25334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (9))){
var inst_25257 = (state_25297[(7)]);
var inst_25273 = cljs.core.vec.call(null,inst_25257);
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25297__$1,(11),out,inst_25273);
} else {
if((state_val_25298 === (5))){
var inst_25258 = (state_25297[(8)]);
var inst_25261 = (state_25297[(9)]);
var inst_25265 = (state_25297[(10)]);
var inst_25265__$1 = f.call(null,inst_25261);
var inst_25266 = cljs.core._EQ_.call(null,inst_25265__$1,inst_25258);
var inst_25267 = cljs.core.keyword_identical_QMARK_.call(null,inst_25258,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25268 = ((inst_25266) || (inst_25267));
var state_25297__$1 = (function (){var statearr_25311 = state_25297;
(statearr_25311[(10)] = inst_25265__$1);

return statearr_25311;
})();
if(cljs.core.truth_(inst_25268)){
var statearr_25312_25335 = state_25297__$1;
(statearr_25312_25335[(1)] = (8));

} else {
var statearr_25313_25336 = state_25297__$1;
(statearr_25313_25336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (14))){
var inst_25290 = (state_25297[(2)]);
var inst_25291 = cljs.core.async.close_BANG_.call(null,out);
var state_25297__$1 = (function (){var statearr_25315 = state_25297;
(statearr_25315[(13)] = inst_25290);

return statearr_25315;
})();
var statearr_25316_25337 = state_25297__$1;
(statearr_25316_25337[(2)] = inst_25291);

(statearr_25316_25337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (10))){
var inst_25280 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
var statearr_25317_25338 = state_25297__$1;
(statearr_25317_25338[(2)] = inst_25280);

(statearr_25317_25338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (8))){
var inst_25257 = (state_25297[(7)]);
var inst_25261 = (state_25297[(9)]);
var inst_25265 = (state_25297[(10)]);
var inst_25270 = inst_25257.push(inst_25261);
var tmp25314 = inst_25257;
var inst_25257__$1 = tmp25314;
var inst_25258 = inst_25265;
var state_25297__$1 = (function (){var statearr_25318 = state_25297;
(statearr_25318[(7)] = inst_25257__$1);

(statearr_25318[(8)] = inst_25258);

(statearr_25318[(14)] = inst_25270);

return statearr_25318;
})();
var statearr_25319_25339 = state_25297__$1;
(statearr_25319_25339[(2)] = null);

(statearr_25319_25339[(1)] = (2));


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
});})(c__23421__auto___25325,out))
;
return ((function (switch__23326__auto__,c__23421__auto___25325,out){
return (function() {
var cljs$core$async$state_machine__23327__auto__ = null;
var cljs$core$async$state_machine__23327__auto____0 = (function (){
var statearr_25320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25320[(0)] = cljs$core$async$state_machine__23327__auto__);

(statearr_25320[(1)] = (1));

return statearr_25320;
});
var cljs$core$async$state_machine__23327__auto____1 = (function (state_25297){
while(true){
var ret_value__23328__auto__ = (function (){try{while(true){
var result__23329__auto__ = switch__23326__auto__.call(null,state_25297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23329__auto__;
}
break;
}
}catch (e25321){if((e25321 instanceof Object)){
var ex__23330__auto__ = e25321;
var statearr_25322_25340 = state_25297;
(statearr_25322_25340[(5)] = ex__23330__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25341 = state_25297;
state_25297 = G__25341;
continue;
} else {
return ret_value__23328__auto__;
}
break;
}
});
cljs$core$async$state_machine__23327__auto__ = function(state_25297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23327__auto____1.call(this,state_25297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23327__auto____0;
cljs$core$async$state_machine__23327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23327__auto____1;
return cljs$core$async$state_machine__23327__auto__;
})()
;})(switch__23326__auto__,c__23421__auto___25325,out))
})();
var state__23423__auto__ = (function (){var statearr_25323 = f__23422__auto__.call(null);
(statearr_25323[(6)] = c__23421__auto___25325);

return statearr_25323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23423__auto__);
});})(c__23421__auto___25325,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1582209462299
