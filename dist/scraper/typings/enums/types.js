"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = void 0;
/**
 * Supported entity types that can be scrapped.
 *
 * Maps an entity type to its url (e.g, `/item/9203`).
 */
var Types;
(function (Types) {
    Types["ITEM"] = "item";
    Types["RECIPE"] = "recipe";
    Types["QUEST"] = "quest";
    Types["NPC"] = "npc";
    Types["MATERIAL_GROUP"] = "materialgroup";
    Types["KNOWLEDGE"] = "theme";
})(Types = exports.Types || (exports.Types = {}));
