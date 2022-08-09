/// <reference types="cheerio" />
import * as Scrapers from "../typings";
import { App, BDOCodex, Undef } from "../../shared/typings";
import { Queries } from "../../query";
import { Matcher, ContextCache } from "../../shared";
export declare class Generic {
    protected readonly _id: string;
    protected readonly _locale: App.Locales;
    protected readonly _type: Scrapers.Types;
    protected readonly $: CheerioStatic;
    protected readonly _query: Queries.Query;
    protected readonly _scrape: Scrapers.Scrape;
    static get(type: Scrapers.Types, ctg_id: Scrapers.Ctgs): typeof Generic;
    static get type(): string;
    constructor(_id: string, _locale: App.Locales, _type: Scrapers.Types, $: CheerioStatic, _query: Queries.Query, _scrape: Scrapers.Scrape);
    protected readonly cache: ContextCache;
    protected getTableRows(): CheerioElement[];
    protected getTableRow(matcher: Matcher): Undef<CheerioElement>;
    protected getBodyNodes(deep?: boolean): CheerioElement[];
    protected getTextNodeFromCategoryWrapper(matcher: Matcher): Undef<CheerioElement>;
    protected parsePageInfo(): BDOCodex.PageInfo;
    protected ScrapeFactory(shortUrl: string): Scrapers.ScrapeFn;
    protected QueryFactory(type: Queries.Types): Undef<Queries.QueryFn>;
    get icon(): string;
    get name(): string;
    get name_alt(): Undef<string>;
    get category(): string;
    get grade(): number;
    get description(): Undef<string>;
    build(): Promise<Scrapers.Entities.Generic>;
}
