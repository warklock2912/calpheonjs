import * as Scrapers from "../../typings";
import { Undef } from "../../../shared/typings";
import { Generic } from "../generic.builder";
export declare class NPC extends Generic {
    static get(type: Scrapers.Types, ctg_id: Scrapers.Ctgs): typeof Generic;
    static get type(): string;
    private getTitleCells;
    private getNumericPropertyFromTitleCell;
    private getKnowledgeDropChance;
    get icon(): string;
    get description(): string;
    get mob_type(): Scrapers.NPCs.Type;
    get lvl(): number;
    get hp(): number;
    get defense(): number;
    get evasion(): number;
    get dmg_reduction(): number;
    get exp(): number;
    get exp_skill(): number;
    get karma(): number;
    get knowledge(): Undef<Scrapers.NPCs.Knowledge>;
    build(): Promise<Scrapers.Entities.NPC>;
}
