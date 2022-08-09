/**
 * Converts values to integers. If the value can't be converted, it will return
 * a default value.
 *
 * @param raw - The value to be converted to integer.
 * @param val - The default value in case the conversion fails.
 */
export declare const parseIntValue: (raw?: string | number | undefined, val?: number) => number;
/**
 * Converts values to floating points. If the value can't be converted, it will
 * return a default value.
 *
 * @param raw - The value to be converted to floating point.
 * @param val - The default value in case the conversion fails.
 */
export declare const parseFloatValue: (raw?: string | number | undefined, val?: number) => number;
/**
 * Converts a percentage string of shape "xx.x%" into a floating point. If the
 * value can't be converted, it will return a default value.
 *
 * @param raw - The string to be converted.
 * @param val - The default value in case the conversion fails.
 */
export declare const parsePercentageValue: (raw: string, val?: number) => number;
