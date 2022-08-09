import * as Queries from "../typings";
import { App } from "../../shared/typings";
import { Scrapers } from "../../scraper";
export declare class Generic {
    protected readonly _locale: App.Locales;
    protected readonly _scrape: Scrapers.Scrape;
    static get type(): Queries.EntityTypes;
    constructor(_locale: App.Locales, _scrape: Scrapers.Scrape);
    protected ScrapeFactory(shortUrl: string): Scrapers.ScrapeFn;
    /** Parses the icon url from an html raw string. */
    protected parseIconURL(raw: string): string;
    /** Parses an entity short url. */
    protected parseShortURL(raw: string): string;
    /** Parses an entity name from an html raw string. */
    protected parseName(raw: string): string;
    build(data: any): any[];
}
