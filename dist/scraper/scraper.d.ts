import * as Scrapers from "./typings";
import { App } from "../shared/typings";
import { Queries } from "../query";
export declare class Scraper {
    private readonly _id;
    private readonly _locale;
    private readonly _type;
    private readonly _fetch;
    private readonly _query;
    private readonly _scrape;
    constructor(_id: string, _locale: App.Locales, _type: Scrapers.Types, _fetch: App.FetchFn, _query: Queries.Query, _scrape: Scrapers.Scrape);
    private get url();
    private getCategoryId;
    private exists;
    fetch(): Promise<string | null>;
    parse(): Promise<Scrapers.Result>;
}
