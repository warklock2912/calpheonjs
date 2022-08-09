import * as Queries from "../typings";
import { BDOCodex } from "../../shared/typings";
import { Generic } from "./generic.builder";
export declare class Node extends Generic {
    static get type(): "node";
    build(data: BDOCodex.Query.NodeDrop): Queries.Entities.Node[];
}
