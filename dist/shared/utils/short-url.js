"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeShortURL = exports.decomposeShortURL = void 0;
/**
 * Decomposes a BDOCodex short url into locale, type and id.
 *
 * @param shortUrl - The url to be decomposed.
 */
exports.decomposeShortURL = function (shortUrl) {
    var args = shortUrl.split('/').filter(function (e) { return e; });
    return {
        locale: args[0],
        type: args[1],
        id: args.slice(2).join('/'),
    };
};
/**
 * Composes a BDO short url.
 *
 * @param id     - The entity id.
 * @param type   - The entity type.
 * @param locale - An accepted locale.
 */
exports.composeShortURL = function (id, type, locale) {
    if (!id || !type || !locale)
        return undefined;
    return '/' + [locale, type, id].join('/') + '/';
};
