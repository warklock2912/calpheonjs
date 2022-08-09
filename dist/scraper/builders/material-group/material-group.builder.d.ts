import * as Scrapers from "../../typings";
import { Generic } from "../generic.builder";
export declare class MaterialGroup extends Generic {
    static get(): typeof Generic;
    static get type(): string;
    get items(): Scrapers.Refs.Item[];
    build(): Promise<Scrapers.Entities.MaterialGroup>;
}
