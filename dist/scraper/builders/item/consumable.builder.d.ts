import * as Scrapers from "../../typings";
import { Item } from "./item.builder";
export declare class Consumable extends Item {
    static get(): typeof Item;
    static get type(): string;
    private normalizeTimeUnit;
    get effects(): string[];
    get duration(): number;
    get cooldown(): number;
    build(): Promise<Scrapers.Entities.Consumable>;
}
