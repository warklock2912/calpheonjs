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
exports.Quest = void 0;
var cheerio_1 = __importDefault(require("cheerio"));
var AppUtils = __importStar(require("../../shared/utils"));
var typings_1 = require("../../shared/typings");
var generic_builder_1 = require("./generic.builder");
var shared_1 = require("../../shared");
var Quest = /** @class */ (function (_super) {
    __extends(Quest, _super);
    function Quest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Quest, "type", {
        get: function () {
            return "quest";
        },
        enumerable: false,
        configurable: true
    });
    Quest.prototype.getRewards = function (raw) {
        var _a, _b;
        var _this = this;
        var matchers = {
            choose: new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Choose'],
                _a)),
            amity: new shared_1.Matcher(this._locale, (_b = {},
                _b[typings_1.App.Locales.US] = ['Amity'],
                _b)),
        };
        var $ = cheerio_1.default.load('<div id="root">' + raw + '</div>');
        var curr;
        return $('#root').contents().toArray().reduce(function (rewards, node) {
            var data = node.data, tagName = node.tagName;
            if (tagName === 'br' || node.parent.attribs.id !== 'root')
                return rewards;
            if (!curr)
                curr = rewards.standard;
            if (matchers.choose.in(data))
                curr = rewards.choose;
            else if (matchers.amity.in(data))
                rewards.amity.push(AppUtils.parseIntValue(data));
            if (tagName !== 'div')
                return rewards;
            var elem = $(node);
            var anchor = elem.find('a');
            var amount = AppUtils.parseIntValue(elem.find('.quantity_small').text(), 1);
            if (anchor.length) {
                var url = anchor.attr('href');
                curr.push({
                    type: 'item',
                    id: AppUtils.decomposeShortURL(url).id,
                    icon: _this.parseIconURL(elem.find('.icon_wrapper').text()),
                    scrape: _this.ScrapeFactory(url),
                    shortUrl: url,
                    amount: amount,
                });
            }
            else {
                curr.push({
                    type: 'exp',
                    icon: elem.find('img').attr('src'),
                    name: elem.attr('title'),
                    amount: amount,
                });
            }
            return rewards;
        }, { standard: [], choose: [], amity: [] });
    };
    Quest.prototype.build = function (data) {
        var _this = this;
        return data.aaData.map(function (arr) {
            var url = _this.parseShortURL(arr[2]);
            return {
                type: Quest.type,
                id: arr[0].display,
                icon: _this.parseIconURL(arr[1]),
                name: _this.parseName(arr[2]),
                lvl: AppUtils.parseIntValue(arr[3]),
                region: arr[4].display,
                exp: AppUtils.parseIntValue(arr[5].display),
                exp_skill: AppUtils.parseIntValue(arr[6].display),
                exp_contribution: AppUtils.parseIntValue(arr[7]),
                rewards: _this.getRewards(arr[8]),
                shortUrl: url,
                scrape: _this.ScrapeFactory(url),
            };
        });
    };
    return Quest;
}(generic_builder_1.Generic));
exports.Quest = Quest;
