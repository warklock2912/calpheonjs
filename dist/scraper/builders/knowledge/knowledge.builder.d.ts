import * as Scrapers from "../../typings";
import { Undef } from "../../../shared/typings";
import { Generic } from "../generic.builder";
export declare class Knowledge extends Generic {
    static get(): typeof Generic;
    static get type(): string;
    get icon(): string;
    get group(): Undef<string>;
    get obtained_from(): Undef<Scrapers.Refs.NPC>;
    get description(): Undef<string>;
    build(): Promise<Scrapers.Entities.Knowledge>;
}
