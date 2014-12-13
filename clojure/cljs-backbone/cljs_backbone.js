goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../cljs_backbone/routes.js", ['cljs_backbone.routes'], ['cljs.core']);
goog.addDependency("../cljs_backbone/core.js", ['cljs_backbone.core'], ['cljs.core', 'cljs_backbone.routes']);