try {
    require("source-map-support").install();
} catch(err) {
}
require("./out/goog/bootstrap/nodejs.js");
require("./out/mux.js");
goog.require("mux.core");
goog.require("cljs.nodejscli");
