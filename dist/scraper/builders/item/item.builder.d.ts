import * as Scrapers from "../../typings";
import { Pricings } from "../../typings";
import { Generic } from "../generic.builder";
export declare class Item extends Generic {
    static get(type: Scrapers.Types, ctg_id: Scrapers.Ctgs): typeof Generic;
    static get type(): string;
    get grade(): number;
    get weight(): number;
    get prices(): Pricings;
    build(): Promise<Scrapers.Entities.Item>;
}
