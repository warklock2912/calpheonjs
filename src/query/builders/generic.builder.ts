import cheerio from "cheerio";
import * as AppUtils from "../../utils";
import { Scrapers } from "../../scraper";
import { Undef, App } from "../../typings";

export class Generic {
    constructor(
        protected readonly _locale = App.Locales.US,

        protected readonly _db = App.Dbs.BDO_CODEX,

        protected readonly _scrape: Scrapers.Scrape,
    ) {}

    protected ScrapeFactory(shortUrl: string): Undef<Scrapers.ScrapeFn> {
        const { type, id } = AppUtils.decomposeShortURL(shortUrl);
        
        if (!Object.values(Scrapers.EntityTypes).includes(type))
            return undefined;
        
        return async <T = any>() => this._scrape<T>(id, type, {
            db: this._db,
            locale: this._locale,
        });
    }

    /** Parses the icon url from an html raw string. */
    protected parseIconURL(raw: string): string {
        return AppUtils.splitStr(raw, '[img src="', '"') as string;
    }

    /** Parses an entity short url. */
    protected parseShortURL(raw: string): string {
        return cheerio.load(raw)('a').attr('href') as string;
    }
}