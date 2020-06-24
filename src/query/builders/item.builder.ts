import * as Queries from "../typings";
import { BDOCodex } from "../../typings";
import { Generic } from "./generic.builder";

export class Item extends Generic {
    static type = 'item';

    build(data: BDOCodex.Query.Item): Queries.Entities.Item[] {
        return data.aaData.map(arr => {
            const url = this.parseShortURL(arr[2]);

            return {
                type: 'item',
                id: arr[0],
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                lvl: arr[3],
                shortUrl: url,
                scrape: this.ScrapeFactory(url) as any,
            };
        })
    }
}