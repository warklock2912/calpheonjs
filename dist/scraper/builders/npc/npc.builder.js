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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NPC = void 0;
var Builders = __importStar(require("../"));
var AppUtils = __importStar(require("../../../shared/utils"));
var Scrapers = __importStar(require("../../typings"));
var typings_1 = require("../../../shared/typings");
var generic_builder_1 = require("../generic.builder");
var shared_1 = require("../../../shared");
var NPC = /** @class */ (function (_super) {
    __extends(NPC, _super);
    function NPC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NPC.get = function (type, ctg_id) {
        var _a;
        var _b;
        return ((_b = (_a = {},
            _a[Scrapers.Ctgs.WORKER] = Builders.Worker,
            _a)[ctg_id]) === null || _b === void 0 ? void 0 : _b.get(type, ctg_id)) || NPC;
    };
    Object.defineProperty(NPC, "type", {
        get: function () {
            return "npc";
        },
        enumerable: false,
        configurable: true
    });
    NPC.prototype.getTitleCells = function () {
        var ctx = this.cache.for('title_cells');
        if (!ctx.has('nodes')) {
            var nodes = this.$('td.titles_cell')
                .first()
                .contents()
                .toArray();
            ctx.set('nodes', nodes);
        }
        return ctx.get('nodes');
    };
    NPC.prototype.getNumericPropertyFromTitleCell = function (matcher) {
        var _a, _b;
        var str = (_b = (_a = this.getTitleCells()
            .find(function (node) { return matcher.in(node.data); })) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.replace(/\D/g, '');
        return parseInt(str);
    };
    NPC.prototype.getKnowledgeDropChance = function () {
        var node = this.getTitleCells()
            .find(function (node) { return node.tagName === 'b'; });
        if (!node)
            return 0;
        return parseFloat(this.$(node).text().replace('%', ''));
    };
    Object.defineProperty(NPC.prototype, "icon", {
        get: function () {
            return this.$('img.quest_icon').attr('src');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "description", {
        get: function () {
            var _a;
            var _b, _c, _d, _e, _f, _g, _h;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Description:'],
                _a));
            var row = this.getTableRow(matcher);
            var nodes = (row === null || row === void 0 ? void 0 : row.childNodes) || [];
            // Usually there are two "descriptions" inside the NPC body.
            // The first one contains the name of the npc, while the second one is
            // the actual description that we are looking for.
            var startIdx = nodes.findIndex(function (node) { return matcher.in(node.data); }) + 1;
            var startIdx_2 = nodes.slice(startIdx).findIndex(function (node) { return matcher.in(node.data); }) + 1;
            if (startIdx_2 !== -1)
                startIdx += startIdx_2;
            var strs = [];
            for (var i = startIdx; i < nodes.length; i++) {
                if (((_b = nodes[i]) === null || _b === void 0 ? void 0 : _b.tagName) === 'br' && ((_c = nodes[i + 1]) === null || _c === void 0 ? void 0 : _c.tagName) === 'br')
                    break;
                if (['div', 'hr'].includes((_d = nodes[i]) === null || _d === void 0 ? void 0 : _d.tagName))
                    break;
                if (((_e = nodes[i]) === null || _e === void 0 ? void 0 : _e.type) === 'text')
                    if (['-'].includes((_g = (_f = nodes[i]) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.trim()[0]))
                        break;
                var str = this.$(nodes[i]).text();
                if (!str)
                    continue;
                if (strs.length && ((_h = nodes[i - 1]) === null || _h === void 0 ? void 0 : _h.tagName) !== 'br')
                    strs[strs.length - 1] += str;
                else
                    strs.push(str);
            }
            return strs.join('');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "mob_type", {
        get: function () {
            var _a, _b;
            var matchers = {
                awakened_boss: new shared_1.Matcher(this._locale, (_a = {},
                    _a[typings_1.App.Locales.US] = ['<Awakened Boss>'],
                    _a)),
                boss: new shared_1.Matcher(this._locale, (_b = {},
                    _b[typings_1.App.Locales.US] = ['<Boss>'],
                    _b)),
            };
            var nodes = this.getTitleCells();
            for (var i = 0; i < nodes.length; i++) {
                if (matchers.awakened_boss.in(nodes[i].data))
                    return 'awakened_boss';
                if (matchers.boss.in(nodes[i].data))
                    return 'boss';
            }
            return 'normal';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "lvl", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Level'],
                _a));
            return this.getNumericPropertyFromTitleCell(matcher) || 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "hp", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['HP'],
                _a));
            return this.getNumericPropertyFromTitleCell(matcher) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "defense", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Defense'],
                _a));
            return this.getNumericPropertyFromTitleCell(matcher) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "evasion", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Evasion'],
                _a));
            return this.getNumericPropertyFromTitleCell(matcher) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "dmg_reduction", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Damage Reduction'],
                _a));
            return this.getNumericPropertyFromTitleCell(matcher) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "exp", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['XP'],
                _a));
            return this.getNumericPropertyFromTitleCell(matcher) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "exp_skill", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Skill XP'],
                _a));
            return this.getNumericPropertyFromTitleCell(matcher) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "karma", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Karma'],
                _a));
            return this.getNumericPropertyFromTitleCell(matcher) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "knowledge", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Knowledge:'],
                _a));
            var row = this.getTableRow(matcher);
            if (!row)
                return undefined;
            var anchors = this.$(row).find('a').toArray();
            if (!anchors.length)
                return undefined;
            var url = anchors[0].attribs.href;
            return {
                type: 'knowledge',
                id: AppUtils.decomposeShortURL(url).id,
                icon: this.$(anchors[0]).find('img').first().attr('src'),
                name: this.$(anchors[1]).text(),
                shortUrl: url,
                drop_chance: this.getKnowledgeDropChance(),
                scrape: this.ScrapeFactory(url),
            };
        },
        enumerable: false,
        configurable: true
    });
    NPC.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = [{}];
                        return [4 /*yield*/, _super.prototype.build.call(this)];
                    case 1: return [2 /*return*/, __assign.apply(void 0, [__assign.apply(void 0, _a.concat([(_b.sent())])), { mob_type: this.mob_type, category: undefined, lvl: this.lvl, hp: this.hp, defense: this.defense, evasion: this.evasion, dmg_reduction: this.dmg_reduction, exp: this.exp, exp_skill: this.exp_skill, karma: this.karma, knowledge: this.knowledge }])];
                }
            });
        });
    };
    return NPC;
}(generic_builder_1.Generic));
exports.NPC = NPC;
