import * as Scrapers from "../../typings";
import { Item } from "./item.builder";
export declare class Equipment extends Item {
    static get(): typeof Item;
    static get type(): string;
    private parseEnchantmentArray;
    private parseCaphrasData;
    private parseEffects;
    private parseStat;
    private extractStats;
    get stats(): Scrapers.Equipments.Stats;
    get enhancement_stats(): Scrapers.Equipments.Enhancement[];
    get caphras_stats(): Scrapers.Equipments.Caphras.Wrapper;
    get item_effects(): string[];
    get set_effects(): Record<number, string[]>;
    get exclusive_to(): string[];
    get fairy_exp(): number;
    build(): Promise<Scrapers.Entities.Equipment>;
}
