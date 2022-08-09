import * as Queries from "../typings";
import { BDOCodex } from "../../shared/typings";
import { Generic } from "./generic.builder";
export declare class Item extends Generic {
    static get type(): "item";
    build(data: BDOCodex.Query.Item): Queries.Entities.Item[];
}
