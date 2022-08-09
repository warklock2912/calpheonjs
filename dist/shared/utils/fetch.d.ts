/**
 * Fetches a url and retrieves the payload as a string.
 *
 * If the data's length exceeds a certain amount, it will be assumed it's an
 * invalid url and it will return `null`. This is required because when querying
 * BDOCodex, if there is no match for the query parameters, it will return a
 * huge payload.
 *
 * @param url - The url to be fetched.
 */
export declare const fetch: (url: string) => Promise<string | null>;
