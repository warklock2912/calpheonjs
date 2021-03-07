import { StatsEnum } from './stats'

/**
 * The enhancement data for each upgrade level (+1, +2, etc) done
 * through black stones.
 */
export interface Level extends Record<StatsEnum, string> {
    /** The chance of a successful enhancement. */
    readonly enchant_chance: string;
    /** The final max durability of the item after enhancement. */
    readonly durability: string;
    /** The number of cron stones required to enhance the current level. */
    readonly cron_value: string;
    /** The total number of cron stones required to enhance up to the current level. */
    readonly cron_tvalue: string;
    /** The in-game description of the stats provided by the enhancement. */
    readonly edescription: string;
    /** The id of the item required for enhancing. */
    readonly need_enchant_item_id: string;
    /** The icon of the item required for enhancing. */
    readonly need_enchant_item_icon: string;
    /** The name of the item required for enhancing. */
    readonly need_enchant_item_name: string;
    /** The amount of items required for enhancing. */
    readonly enchant_item_counter: string;
    readonly pe_item_counter: string;
    /** How much durability will be lost if failed attempt. */
    readonly fail_dura_dec: string;
    readonly pe_dura_dec: string;
}

/**
 * All enhancement levels data for a given item.
 */
export interface Data extends Record<number, Level> {
    /** Localized translation for "Not Available". */
    readonly na: string
    /** Maximum enhancing level. */
    readonly max_enchant: string
}