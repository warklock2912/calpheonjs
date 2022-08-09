import * as Queries from "../typings";
import { BDOCodex } from "../../shared/typings";
import { Generic } from "./generic.builder";
export declare class Quest extends Generic {
    static get type(): "quest";
    getRewards(raw: string): Queries.Quests.Rewards;
    build(data: BDOCodex.Query.Quest): Queries.Entities.Quest[];
}
