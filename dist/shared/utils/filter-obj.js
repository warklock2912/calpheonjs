"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterObj = void 0;
/**
 * Removes properties whose value is considered undefined.
 *
 * @param obj      - The object to be filtered.
 * @param filterFn - The function that defines what is undefined.
 */
exports.filterObj = function (obj, filterFn) {
    var fn = filterFn || (function (obj, key) { return (obj[key] !== undefined || (typeof obj[key] === 'number' &&
        obj[key] === obj[key])); });
    return Object.keys(obj).reduce(function (filtered, key) {
        var _a;
        if (fn(obj, key))
            return __assign(__assign({}, filtered), (_a = {}, _a[key] = obj[key], _a));
        return filtered;
    }, {});
};
