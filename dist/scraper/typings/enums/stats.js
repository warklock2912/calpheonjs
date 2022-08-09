"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
var Stats;
(function (Stats) {
    // The base stat value.
    Stats["DAMAGE"] = "damage";
    Stats["DEFENSE"] = "defense";
    Stats["ACCURACY"] = "accuracy";
    Stats["EVASION"] = "evasion";
    Stats["DMG_REDUCTION"] = "dmg_reduction";
    // The stat bonus value (inside the parenthesis).
    Stats["H_DAMAGE"] = "h_damage";
    Stats["H_DEFENSE"] = "h_defense";
    Stats["H_ACCURACY"] = "h_accuracy";
    Stats["H_EVASION"] = "h_evasion";
    Stats["H_DMG_REDUCTION"] = "h_dmg_reduction";
    // Extra stats.
    Stats["HP"] = "hp";
    Stats["MP"] = "mp";
})(Stats = exports.Stats || (exports.Stats = {}));
