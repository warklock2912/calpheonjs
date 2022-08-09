import * as Queries from "./typings";
import { App } from "../shared/typings";
import { Scrapers } from "../scraper";
export declare class Query {
    protected readonly _id: string;
    protected readonly _group: Queries.Groups;
    protected readonly _itemAs: Queries.ItemAs;
    protected readonly _locale: App.Locales;
    protected readonly fetch: App.FetchFn;
    protected readonly _scrape: Scrapers.Scrape;
    constructor(_id: string, _group: Queries.Groups, _itemAs: Queries.ItemAs, _locale: App.Locales, fetch: App.FetchFn, _scrape: Scrapers.Scrape);
    get url(): string;
    parse(): Promise<Queries.Result>;
    private getBuilder;
}
