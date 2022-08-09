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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
var cheerio_1 = __importDefault(require("cheerio"));
var AppUtils = __importStar(require("../../shared/utils"));
var scraper_1 = require("../../scraper");
var generic_builder_1 = require("./generic.builder");
var Recipe = /** @class */ (function (_super) {
    __extends(Recipe, _super);
    function Recipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Recipe, "type", {
        get: function () {
            return "recipe";
        },
        enumerable: false,
        configurable: true
    });
    Recipe.prototype.getProcess = function (raw) {
        return raw || undefined;
    };
    Recipe.prototype.getSkillLvl = function (raw) {
        return {
            mastery: raw.replace(/\d/g, '').trim(),
            lvl: AppUtils.parseIntValue(raw),
        };
    };
    Recipe.prototype.getMaterials = function (raw) {
        var _this = this;
        var $ = cheerio_1.default.load('<div>' + raw + '</div>');
        return $('div > div.iconset_wrapper_medium').toArray().map(function (node) {
            var elem = $(node);
            var anchor = elem.find('a');
            var txt = elem.find('.quantity_small');
            var img = elem.find('.icon_wrapper');
            var url = anchor.attr('href');
            var type = AppUtils.decomposeShortURL(url).type;
            switch (type) {
                case scraper_1.Scrapers.Types.ITEM:
                    return {
                        type: 'item',
                        id: AppUtils.decomposeShortURL(url).id,
                        amount: parseInt(txt.text()) || 1,
                        icon: _this.parseIconURL(img.text()),
                        shortUrl: url,
                        scrape: _this.ScrapeFactory(url),
                    };
                default:
                    return {
                        type: 'material_group',
                        id: AppUtils.decomposeShortURL(url).id,
                        amount: parseInt(txt.text()) || 1,
                        icon: _this.parseIconURL(img.text()),
                        shortUrl: url,
                        scrape: _this.ScrapeFactory(url),
                    };
            }
        });
    };
    Recipe.prototype.build = function (data) {
        var _this = this;
        return data.aaData.map(function (arr) {
            var url = _this.parseShortURL(arr[2]);
            return {
                type: Recipe.type,
                id: arr[0],
                icon: _this.parseIconURL(arr[1]),
                name: _this.parseName(arr[2]),
                process: _this.getProcess(arr[3]),
                exp: AppUtils.parseIntValue(arr[5]),
                skill_lvl: _this.getSkillLvl(arr[4].display),
                materials: _this.getMaterials(arr[6]),
                products: _this.getMaterials(arr[7]),
                shortUrl: url,
                scrape: _this.ScrapeFactory(url),
            };
        });
    };
    return Recipe;
}(generic_builder_1.Generic));
exports.Recipe = Recipe;
