// Compiled by ClojureScript 1.10.520 {}
goog.provide('feathers.helpers');
goog.require('cljs.core');
feathers.helpers.randomness = (function feathers$helpers$randomness(multiplier,randomness_factor){
return (multiplier * cljs.core.rand_int.call(null,randomness_factor));
});

//# sourceMappingURL=helpers.js.map
