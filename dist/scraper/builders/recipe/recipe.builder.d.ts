import * as Scrapers from "../../typings";
import { Generic } from "../generic.builder";
export declare class Recipe extends Generic {
    static get(): typeof Generic;
    static get type(): string;
    private getMaterials;
    get process(): string;
    get exp(): number;
    get skill_lvl(): {
        mastery: string;
        lvl: number;
    };
    get materials(): Scrapers.Recipes.Material[];
    get products(): Scrapers.Recipes.Material[];
    build(): Promise<Scrapers.Entities.Recipe>;
}
