/**
 * Removes properties whose value is considered undefined.
 *
 * @param obj      - The object to be filtered.
 * @param filterFn - The function that defines what is undefined.
 */
export declare const filterObj: <T extends Record<string | number, any>>(obj: T, filterFn?: ((obj: T, key: keyof T) => boolean) | undefined) => T;
