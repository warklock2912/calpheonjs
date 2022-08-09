import * as Scrapers from "../../typings";
import { Undef } from "../../../shared/typings";
import { Generic } from "../generic.builder";
export declare class Worker extends Generic {
    static get(): typeof Generic;
    static get type(): string;
    private getUpgradesArray;
    get icon(): string;
    get sellable(): boolean;
    get max_base_stats(): Scrapers.NPCs.Workers.Stats;
    get levels(): Scrapers.NPCs.Workers.Level[];
    get growth(): Scrapers.NPCs.Workers.Growth;
    get obtained_from(): Undef<Scrapers.Refs.NPC>;
    build(): Promise<Scrapers.Entities.Worker>;
}
