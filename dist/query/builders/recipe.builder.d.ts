import * as Queries from "../typings";
import { BDOCodex, Undef } from "../../shared/typings";
import { Generic } from "./generic.builder";
export declare class Recipe extends Generic {
    static get type(): "recipe";
    getProcess(raw: string): Undef<string>;
    getSkillLvl(raw: string): Queries.Recipes.SkillLvl;
    getMaterials(raw: string): Queries.Recipes.Material[];
    build(data: BDOCodex.Query.Recipe): Queries.Entities.Recipe[];
}
