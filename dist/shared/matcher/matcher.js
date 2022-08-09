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
exports.Matcher = void 0;
var Matcher = /** @class */ (function () {
    function Matcher(locale, matches) {
        this._cache = {};
        this._length = 0;
        this._matches = matches[locale];
    }
    /**
     * Checks if a string contains a match.
     *
     * @param str - The string to match.
     */
    Matcher.prototype.in = function (str) {
        if (!str)
            return false;
        if (this._cache[str])
            return this._cache[str].idx !== -1;
        var idxs = this._matches.reduce(function (obj, match) {
            var _a;
            return (__assign(__assign({}, obj), (_a = {}, _a[match] = 0, _a)));
        }, {});
        for (var i = 0; i < str.length; i++) {
            var char = str[i];
            for (var _i = 0, _a = this._matches; _i < _a.length; _i++) {
                var match = _a[_i];
                if (char === match[idxs[match]])
                    idxs[match] += 1;
                else
                    idxs[match] = 0;
                if (idxs[match] !== match.length)
                    continue;
                this._lastMatchedStr = str;
                this._length += 1;
                this._cache[str] = {
                    idx: i - match.length + 1,
                    substr: match,
                };
                return true;
            }
        }
        this._cache[str] = { idx: -1 };
        return false;
    };
    /**
     * Retrieves the starting index or the ending index of the match.
     *
     * @param str - The string to match.
     * @param end - Whether to return the starting or ending index.
     */
    Matcher.prototype.indexIn = function (str, end) {
        if (!str)
            return -1;
        var match = this._cache[str];
        if (!match)
            this.in(str);
        if (!match.substr)
            return -1;
        if (end)
            return match.idx + match.substr.length;
        return match.idx;
    };
    /**
     * Retrieves the match for a given string.
     *
     * @param str - The string to retrieve the match for.
     */
    Matcher.prototype.matchIn = function (str) {
        if (!str)
            return undefined;
        if (!this._cache[str])
            this.in(str);
        return this._cache[str].substr;
    };
    Object.defineProperty(Matcher.prototype, "last", {
        /**
         * The last string that was evaluated to a successful match.
         */
        get: function () {
            return this._lastMatchedStr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matcher.prototype, "length", {
        /**
         * The number of successful matches.
         */
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    return Matcher;
}());
exports.Matcher = Matcher;
