import * as Scrapers from "../../typings";
import { Undef } from "../../../shared/typings";
import { Generic } from "../generic.builder";
export declare class Quest extends Generic {
    static get(): typeof Generic;
    static get type(): string;
    private getQuestNPC;
    get icon(): string;
    get stage(): Undef<number>;
    get region(): string;
    get q_category(): string;
    get q_type(): string;
    get lvl(): number;
    get exclusive_to(): string[];
    get quest_chain(): Scrapers.Refs.Quest[];
    get npc_start(): Undef<Scrapers.Refs.NPC>;
    get npc_end(): Undef<Scrapers.Refs.NPC>;
    get description(): string;
    get text(): string[];
    get rewards(): {
        standard: Scrapers.Quests.Reward[];
        choose: Scrapers.Quests.Reward[];
    };
    build(): Promise<Scrapers.Entities.Quest>;
}
