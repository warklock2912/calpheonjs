import * as Queries from "../typings";
import { BDOCodex } from "../../shared/typings";
import { Generic } from "./generic.builder";
export declare class NPC extends Generic {
    static get type(): "npc";
    build(data: BDOCodex.Query.NPC): Queries.Entities.NPC[];
}
