// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('feathers.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
feathers.helpers.randomness = (function feathers$helpers$randomness(multiplier,randomness_factor){
return (multiplier * cljs.core.rand_int(randomness_factor));
});
