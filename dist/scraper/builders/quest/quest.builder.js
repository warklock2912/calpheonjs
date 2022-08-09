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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quest = void 0;
var AppUtils = __importStar(require("../../../shared/utils"));
var typings_1 = require("../../../shared/typings");
var generic_builder_1 = require("../generic.builder");
var shared_1 = require("../../../shared");
var Quest = /** @class */ (function (_super) {
    __extends(Quest, _super);
    function Quest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quest.get = function () {
        return Quest;
    };
    Object.defineProperty(Quest, "type", {
        get: function () {
            return "quest";
        },
        enumerable: false,
        configurable: true
    });
    Quest.prototype.getQuestNPC = function (matcher) {
        var _a;
        // Find the table row that contains the start/end npcs.
        var row = this.getTableRow(matcher);
        if (!row)
            return undefined;
        // The anchor node that maps to the NPC icon is two nodes
        // after the matched node.
        var i = row.childNodes.findIndex(function (node) { return matcher.in(node.data); }) + 2;
        if (!((_a = row.childNodes) === null || _a === void 0 ? void 0 : _a[i]))
            return undefined;
        var node = row.childNodes[i];
        var img = node.childNodes.find(function (node) { return node.name === 'img'; });
        var url = node.attribs.href;
        return {
            type: 'npc',
            id: url.split('/').filter(function (e) { return e; }).slice(2).join('/'),
            icon: img === null || img === void 0 ? void 0 : img.attribs.src,
            name: this.$(row).find("a[href=\"" + url + "\"]").last().text(),
            shortUrl: url,
            scrape: this.ScrapeFactory(url),
        };
    };
    Object.defineProperty(Quest.prototype, "icon", {
        get: function () {
            return this.$('img.quest_icon').attr('src');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "stage", {
        get: function () {
            var _this = this;
            if (!this.quest_chain.length)
                return undefined;
            return this.quest_chain.findIndex(function (node) { return node.id === _this._id; }) + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "region", {
        get: function () {
            var _a;
            var _b, _c, _d, _e;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Region'],
                _a));
            return (_e = (_d = (_c = (_b = this.getTextNodeFromCategoryWrapper(matcher)) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.slice(matcher.indexIn(matcher.last, true) + 1)) === null || _d === void 0 ? void 0 : _d.replace(/[^a-zA-Z0-9 ]/g, '')) === null || _e === void 0 ? void 0 : _e.trim();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "q_category", {
        get: function () {
            var _a;
            var _b, _c, _d, _e;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Category'],
                _a));
            return (_e = (_d = (_c = (_b = this.getTextNodeFromCategoryWrapper(matcher)) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.slice(matcher.indexIn(matcher.last, true) + 1)) === null || _d === void 0 ? void 0 : _d.replace(/[^a-zA-Z0-9 ]/g, '')) === null || _e === void 0 ? void 0 : _e.trim();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "q_type", {
        get: function () {
            var _a;
            var _b, _c, _d, _e;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Type'],
                _a));
            return (_e = (_d = (_c = (_b = this.getTextNodeFromCategoryWrapper(matcher)) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.slice(matcher.indexIn(matcher.last, true) + 1)) === null || _d === void 0 ? void 0 : _d.replace(/[^a-zA-Z0-9 ]/g, '')) === null || _e === void 0 ? void 0 : _e.trim();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "lvl", {
        get: function () {
            var _a;
            var _b, _c, _d, _e;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Level'],
                _a));
            return parseInt((_e = (_d = (_c = (_b = this.getTextNodeFromCategoryWrapper(matcher)) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.slice(matcher.indexIn(matcher.last, true) + 1)) === null || _d === void 0 ? void 0 : _d.replace(/[^a-zA-Z0-9 ]/g, '')) === null || _e === void 0 ? void 0 : _e.trim());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "exclusive_to", {
        get: function () {
            var _a;
            var _b, _c;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Exclusive'],
                _a));
            var str = (_b = this.getTextNodeFromCategoryWrapper(matcher)) === null || _b === void 0 ? void 0 : _b.data;
            return (str === null || str === void 0 ? void 0 : str.substr(0, str.length - (((_c = matcher.matchIn(str)) === null || _c === void 0 ? void 0 : _c.length) || 0)).split(',').map(function (str) { return AppUtils.cleanStr(str); })) || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "quest_chain", {
        get: function () {
            var _this = this;
            var ctx = this.cache.for('quest_chain');
            if (!ctx.has('quests')) {
                var quests = this.$('#full_quest_chain > a')
                    .toArray()
                    .map(function (node) { return ({
                    type: 'quest',
                    id: node.attribs.href.split('quest/')[1],
                    icon: _this.$(node).find('img').attr('src'),
                    name: AppUtils.cleanStr(_this.$(node).text()),
                    shortUrl: node.attribs.href,
                    scrape: _this.ScrapeFactory(node.attribs.href),
                }); });
                ctx.set('quests', quests);
            }
            return ctx.get('quests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "npc_start", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Start NPC'],
                _a));
            return this.getQuestNPC(matcher);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "npc_end", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['End NPC'],
                _a));
            return this.getQuestNPC(matcher);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "description", {
        get: function () {
            var _a;
            var _b;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Description:'],
                _a));
            var nodes = ((_b = this.getTableRow(matcher)) === null || _b === void 0 ? void 0 : _b.childNodes) || [];
            return nodes
                .slice(nodes.findIndex(function (node) { return matcher.in(node.data); }) + 1)
                .filter(function (_a) {
                var data = _a.data;
                return data && data[0] !== '※';
            })
                .map(function (node) { return node.data; })
                .join('\n');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "text", {
        get: function () {
            var _this = this;
            var nodes = this.$('#full_quest_text')
                .contents()
                .toArray();
            return nodes.reduce(function (text, node, i) {
                var _a, _b;
                if (node.tagName === 'br' && ((_a = nodes[i - 1]) === null || _a === void 0 ? void 0 : _a.tagName) === 'br')
                    return __spreadArrays(text, ['\n']);
                var str = _this.$(node).text();
                if (!str)
                    return text;
                if (i !== 0 && ((_b = nodes[i - 1]) === null || _b === void 0 ? void 0 : _b.tagName) !== 'br')
                    text[text.length - 1] += str;
                else
                    text.push(str);
                return text;
            }, []);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "rewards", {
        get: function () {
            var _a, _b;
            var _this = this;
            var matchers = {
                standard: new shared_1.Matcher(this._locale, (_a = {},
                    _a[typings_1.App.Locales.US] = ['Standard'],
                    _a)),
                choose: new shared_1.Matcher(this._locale, (_b = {},
                    _b[typings_1.App.Locales.US] = ['Choose'],
                    _b)),
            };
            var curr;
            var rows = this.getTableRows();
            var nodes = rows[rows.length - 1].childNodes;
            return nodes.reduce(function (rewards, node, i, arr) {
                var _a;
                var data = node.data, tagName = node.tagName;
                if (!curr || matchers.standard.in(data))
                    curr = rewards.standard;
                else if (matchers.choose.in(data))
                    curr = rewards.choose;
                if (tagName !== 'div')
                    return rewards;
                var elem = _this.$(node);
                var anchor = elem.find('a').first();
                var img = elem.find('img').first();
                var url = anchor.attr('href');
                var type = (url === null || url === void 0 ? void 0 : url.split('/').filter(function (e) { return e; })[1]) || 'exp';
                if (type === 'item') {
                    curr.push({
                        type: 'item',
                        id: AppUtils.decomposeShortURL(url).id,
                        icon: img.attr('src'),
                        name: _this.$(arr[i + 2]).text(),
                        shortUrl: url,
                        amount: parseInt(elem.text().replace(/\D/g, '')) || 1,
                        scrape: _this.ScrapeFactory(url),
                    });
                }
                else if (type === 'exp') {
                    var txt = AppUtils.cleanStr(arr[i + 1].data);
                    curr.push({
                        type: 'exp',
                        icon: img.attr('src'),
                        name: txt.split('(')[0].trim(),
                        amount: parseInt(txt.replace(/\D/g, '')) || 1,
                    });
                }
                else if (type === 'npc') {
                    curr.push({
                        type: 'npc',
                        id: AppUtils.decomposeShortURL(url).id,
                        icon: img.attr('src'),
                        name: _this.$(arr[i + 2]).text(),
                        shortUrl: url,
                        scrape: _this.ScrapeFactory(url),
                        amity_gained: parseInt((_a = arr[i - 1].data) === null || _a === void 0 ? void 0 : _a.replace(/\D/g, '')) || 0,
                    });
                }
                else if (type === 'theme') {
                    curr.push({
                        type: 'knowledge',
                        id: AppUtils.decomposeShortURL(url).id,
                        icon: img.attr('src'),
                        name: _this.$(arr[i + 2]).text(),
                        shortUrl: url,
                        scrape: _this.ScrapeFactory(url),
                    });
                }
                return rewards;
            }, {
                standard: [],
                choose: [],
            });
        },
        enumerable: false,
        configurable: true
    });
    Quest.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = [{}];
                        return [4 /*yield*/, _super.prototype.build.call(this)];
                    case 1: return [2 /*return*/, __assign.apply(void 0, [__assign.apply(void 0, _a.concat([(_b.sent())])), { stage: this.stage, region: this.region, q_category: this.q_category, q_type: this.q_type, lvl: this.lvl, exclusive_to: this.exclusive_to, quest_chain: this.quest_chain, npc_start: this.npc_start, npc_end: this.npc_end, text: this.text, rewards: this.rewards }])];
                }
            });
        });
    };
    return Quest;
}(generic_builder_1.Generic));
exports.Quest = Quest;
