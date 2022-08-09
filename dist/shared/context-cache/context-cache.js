"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextCache = void 0;
var ContextCache = /** @class */ (function () {
    function ContextCache() {
        this.contexts = {};
    }
    ContextCache.prototype.for = function (ctx) {
        if (!this.contexts[ctx])
            this.contexts[ctx] = {};
        var layer = this.contexts[ctx];
        return {
            set: function (key, val) {
                layer[key] = val;
                return layer[key];
            },
            get: function (key) {
                return layer[key];
            },
            has: function (key) {
                return !!layer[key];
            }
        };
    };
    return ContextCache;
}());
exports.ContextCache = ContextCache;
