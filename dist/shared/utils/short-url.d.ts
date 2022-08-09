import { App } from "../../shared/typings";
/**
 * Decomposes a BDOCodex short url into locale, type and id.
 *
 * @param shortUrl - The url to be decomposed.
 */
export declare const decomposeShortURL: (shortUrl: string) => {
    locale: App.Locales;
    type: string;
    id: string;
};
/**
 * Composes a BDO short url.
 *
 * @param id     - The entity id.
 * @param type   - The entity type.
 * @param locale - An accepted locale.
 */
export declare const composeShortURL: (id: string, type: string, locale: App.Locales.US) => string;
