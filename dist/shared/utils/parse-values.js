"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePercentageValue = exports.parseFloatValue = exports.parseIntValue = void 0;
/**
 * Converts values to integers. If the value can't be converted, it will return
 * a default value.
 *
 * @param raw - The value to be converted to integer.
 * @param val - The default value in case the conversion fails.
 */
exports.parseIntValue = function (raw, val) {
    if (val === void 0) { val = 0; }
    if (typeof raw === 'number')
        return raw;
    if (typeof raw === 'string')
        return parseInt(raw.replace(/\D/g, '')) || val;
    return val;
};
/**
 * Converts values to floating points. If the value can't be converted, it will
 * return a default value.
 *
 * @param raw - The value to be converted to floating point.
 * @param val - The default value in case the conversion fails.
 */
exports.parseFloatValue = function (raw, val) {
    if (val === void 0) { val = 0; }
    if (typeof raw === 'number')
        return raw;
    if (typeof raw === 'string')
        return parseFloat(raw.replace(/\D/g, '')) || val;
    return val;
};
/**
 * Converts a percentage string of shape "xx.x%" into a floating point. If the
 * value can't be converted, it will return a default value.
 *
 * @param raw - The string to be converted.
 * @param val - The default value in case the conversion fails.
 */
exports.parsePercentageValue = function (raw, val) {
    if (val === void 0) { val = 0; }
    return parseFloat(raw.replace(/\%/g, '')) || val;
};
