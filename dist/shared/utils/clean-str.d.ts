/**
 * Removes decoration and custom characters trailing a string.
 *
 * These are the decoration characters that will always be removed: ` -–\n`.
 *
 * @param str   - The string to be cleaned.
 * @param chars - Additional trailing characters to be removed.
 */
export declare const cleanStr: (str?: string | undefined, chars?: string | undefined) => string;
