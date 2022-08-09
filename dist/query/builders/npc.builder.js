"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.NPC = void 0;
var AppUtils = __importStar(require("../../shared/utils"));
var generic_builder_1 = require("./generic.builder");
var NPC = /** @class */ (function (_super) {
    __extends(NPC, _super);
    function NPC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NPC, "type", {
        get: function () {
            return "npc";
        },
        enumerable: false,
        configurable: true
    });
    NPC.prototype.build = function (data) {
        var _this = this;
        return data.aaData.map(function (arr) {
            var url = _this.parseShortURL(arr[2]);
            return {
                type: NPC.type,
                id: arr[0].display,
                icon: _this.parseIconURL(arr[1]),
                name: _this.parseName(arr[2]),
                lvl: AppUtils.parseIntValue(arr[3], 1),
                hp: AppUtils.parseIntValue(arr[4]),
                defense: AppUtils.parseIntValue(arr[5]),
                evasion: AppUtils.parseIntValue(arr[6]),
                exp: AppUtils.parseIntValue(arr[7]),
                exp_skill: AppUtils.parseIntValue(arr[8]),
                karma: AppUtils.parseIntValue(arr[9]),
                shortUrl: url,
                scrape: _this.ScrapeFactory(url),
            };
        });
    };
    return NPC;
}(generic_builder_1.Generic));
exports.NPC = NPC;
