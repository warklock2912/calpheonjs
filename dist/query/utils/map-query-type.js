"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapQueryType = void 0;
var Queries = __importStar(require("../typings"));
var map = function (group, itemAs) { return ({ group: group, itemAs: itemAs }); };
/**
 * Mops a query type to the BDOCodex query parameters.
 *
 * @param type - The query type to be mapped.
 * @returns    - A query descriptor.
 */
exports.mapQueryType = function (type) {
    switch (type) {
        case Queries.Types.MATERIAL_IN_PROCESSING:
            return map(Queries.Groups.PROCESSING, Queries.ItemAs.MATERIAL);
        case Queries.Types.MATERIAL_IN_RECIPE:
            return map(Queries.Groups.RECIPE, Queries.ItemAs.MATERIAL);
        case Queries.Types.MATERIAL_IN_DESIGN:
            return map(Queries.Groups.DESIGN, Queries.ItemAs.MATERIAL);
        case Queries.Types.PRODUCT_IN_PROCESSING:
            return map(Queries.Groups.PROCESSING, Queries.ItemAs.PRODUCT);
        case Queries.Types.PRODUCT_IN_RECIPE:
            return map(Queries.Groups.RECIPE, Queries.ItemAs.PRODUCT);
        case Queries.Types.PRODUCT_IN_DESIGN:
            return map(Queries.Groups.DESIGN, Queries.ItemAs.PRODUCT);
        case Queries.Types.NPC_DROPS:
            return map(Queries.Groups.DROP, Queries.ItemAs.NPC_DROP);
        case Queries.Types.DROPPED_IN_NODE:
            return map(Queries.Groups.NODE, Queries.ItemAs.NODE_DROP);
        case Queries.Types.OBTAINED_FROM:
            return map(Queries.Groups.ITEM, Queries.ItemAs.CONTAINER);
        case Queries.Types.SOLD_BY_NPC:
            return map(Queries.Groups.NPC, Queries.ItemAs.SELL_SPECIAL_ITEM);
        case Queries.Types.QUEST_REWARD:
            return map(Queries.Groups.QUEST, Queries.ItemAs.QUEST_REWARD);
    }
};
