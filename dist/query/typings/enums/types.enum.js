"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = void 0;
var Types;
(function (Types) {
    /** Queries for processing recipes where the item is one of the products. */
    Types[Types["PRODUCT_IN_PROCESSING"] = 0] = "PRODUCT_IN_PROCESSING";
    /** Queries for cooking recipes or simple alchemy/cooking where the item is one of the products. */
    Types[Types["PRODUCT_IN_RECIPE"] = 1] = "PRODUCT_IN_RECIPE";
    /** Queries for design recipes where the item is one of the products. */
    Types[Types["PRODUCT_IN_DESIGN"] = 2] = "PRODUCT_IN_DESIGN";
    /** Queries for processing recipes where the item is one of the materials. */
    Types[Types["MATERIAL_IN_PROCESSING"] = 3] = "MATERIAL_IN_PROCESSING";
    /** Queries for cooking or simple alchemy/cooking where the item is one of the materials. */
    Types[Types["MATERIAL_IN_RECIPE"] = 4] = "MATERIAL_IN_RECIPE";
    /** Queries for design recipes where the item is one of the materials. */
    Types[Types["MATERIAL_IN_DESIGN"] = 5] = "MATERIAL_IN_DESIGN";
    /** Queries for npcs that drop the item. */
    Types[Types["NPC_DROPS"] = 6] = "NPC_DROPS";
    /** Queries for nodes that drop the item. */
    Types[Types["DROPPED_IN_NODE"] = 7] = "DROPPED_IN_NODE";
    /** Queries for items that when used can drop the item (e.g, item boxes). */
    Types[Types["OBTAINED_FROM"] = 8] = "OBTAINED_FROM";
    /** Queries for npcs that sell the item. */
    Types[Types["SOLD_BY_NPC"] = 9] = "SOLD_BY_NPC";
    /** Queries for quests where the item is one of the rewards. */
    Types[Types["QUEST_REWARD"] = 10] = "QUEST_REWARD";
})(Types = exports.Types || (exports.Types = {}));
