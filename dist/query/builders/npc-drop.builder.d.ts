import * as Queries from "../typings";
import { BDOCodex } from "../../shared/typings";
import { Generic } from "./generic.builder";
export declare class NPCDrop extends Generic {
    static get type(): "npc_drop";
    build(data: BDOCodex.Query.NPCDrop): Queries.Entities.NPCDrop[];
}
