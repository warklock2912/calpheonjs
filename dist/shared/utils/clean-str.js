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
exports.cleanStr = void 0;
/**
 * Removes decoration and custom characters trailing a string.
 *
 * These are the decoration characters that will always be removed: ` -–\n`.
 *
 * @param str   - The string to be cleaned.
 * @param chars - Additional trailing characters to be removed.
 */
exports.cleanStr = function (str, chars) {
    if (!str)
        return '';
    var record = ((chars || '') + ' -–\n').split('').reduce(function (obj, char) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[char] = true, _a)));
    }, {});
    var startIdx = 0, endIdx = str.length - 1;
    while (record[str[startIdx]])
        startIdx++;
    while (record[str[endIdx]] && endIdx >= startIdx)
        endIdx--;
    return str.substring(startIdx, endIdx + 1);
};
