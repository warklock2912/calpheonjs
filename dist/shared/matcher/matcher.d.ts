import { App } from "../../shared/typings";
export declare class Matcher {
    private readonly _cache;
    private readonly _matches;
    private _lastMatchedStr?;
    private _length;
    constructor(locale: App.Locales, matches: Record<App.Locales, string[]>);
    /**
     * Checks if a string contains a match.
     *
     * @param str - The string to match.
     */
    in(str?: string): boolean;
    /**
     * Retrieves the starting index or the ending index of the match.
     *
     * @param str - The string to match.
     * @param end - Whether to return the starting or ending index.
     */
    indexIn(str?: string, end?: boolean): number;
    /**
     * Retrieves the match for a given string.
     *
     * @param str - The string to retrieve the match for.
     */
    matchIn(str?: string): string | undefined;
    /**
     * The last string that was evaluated to a successful match.
     */
    get last(): string | undefined;
    /**
     * The number of successful matches.
     */
    get length(): number;
}
