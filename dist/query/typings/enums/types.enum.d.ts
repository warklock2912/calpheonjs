export declare enum Types {
    /** Queries for processing recipes where the item is one of the products. */
    PRODUCT_IN_PROCESSING = 0,
    /** Queries for cooking recipes or simple alchemy/cooking where the item is one of the products. */
    PRODUCT_IN_RECIPE = 1,
    /** Queries for design recipes where the item is one of the products. */
    PRODUCT_IN_DESIGN = 2,
    /** Queries for processing recipes where the item is one of the materials. */
    MATERIAL_IN_PROCESSING = 3,
    /** Queries for cooking or simple alchemy/cooking where the item is one of the materials. */
    MATERIAL_IN_RECIPE = 4,
    /** Queries for design recipes where the item is one of the materials. */
    MATERIAL_IN_DESIGN = 5,
    /** Queries for npcs that drop the item. */
    NPC_DROPS = 6,
    /** Queries for nodes that drop the item. */
    DROPPED_IN_NODE = 7,
    /** Queries for items that when used can drop the item (e.g, item boxes). */
    OBTAINED_FROM = 8,
    /** Queries for npcs that sell the item. */
    SOLD_BY_NPC = 9,
    /** Queries for quests where the item is one of the rewards. */
    QUEST_REWARD = 10
}
