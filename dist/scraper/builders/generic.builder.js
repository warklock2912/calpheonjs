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
exports.Generic = void 0;
var Builders = __importStar(require("./"));
var AppUtils = __importStar(require("../../shared/utils"));
var Scrapers = __importStar(require("../typings"));
var typings_1 = require("../../shared/typings");
var query_1 = require("../../query");
var shared_1 = require("../../shared");
var Generic = /** @class */ (function () {
    function Generic(_id, _locale, _type, $, _query, _scrape) {
        this._id = _id;
        this._locale = _locale;
        this._type = _type;
        this.$ = $;
        this._query = _query;
        this._scrape = _scrape;
        this.cache = new shared_1.ContextCache();
    }
    Generic.get = function (type, ctg_id) {
        var _a;
        var _b;
        var Types = Scrapers.Types;
        return ((_b = (_a = {},
            _a[Types.ITEM] = Builders.Item,
            _a[Types.KNOWLEDGE] = Builders.Knowledge,
            _a[Types.MATERIAL_GROUP] = Builders.MaterialGroup,
            _a[Types.NPC] = Builders.NPC,
            _a[Types.QUEST] = Builders.Quest,
            _a[Types.RECIPE] = Builders.Recipe,
            _a)[type]) === null || _b === void 0 ? void 0 : _b.get(type, ctg_id)) || Generic;
    };
    Object.defineProperty(Generic, "type", {
        get: function () {
            return "unknown";
        },
        enumerable: false,
        configurable: true
    });
    Generic.prototype.getTableRows = function () {
        var ctx = this.cache.for('table_rows');
        if (!ctx.has('rows')) {
            var rows = this.$('.smallertext > tbody > tr > td').toArray();
            ctx.set('rows', rows);
        }
        return ctx.get('rows');
    };
    Generic.prototype.getTableRow = function (matcher) {
        var _this = this;
        return this.getTableRows()
            .find(function (node) { return matcher.in(_this.$(node).text()); });
    };
    Generic.prototype.getBodyNodes = function (deep) {
        var ctx = this.cache.for('body_nodes');
        if (!ctx.has('flat')) {
            var nodes = this.$('table.smallertext > tbody > tr > td')
                .contents()
                .toArray();
            ctx.set('flat', nodes);
        }
        if (deep && !ctx.has('deep')) {
            var nodes = ctx.get('flat');
            var i = -1;
            while (++i < nodes.length)
                if (nodes[i].children)
                    nodes.splice.apply(nodes, __spreadArrays([i + 1, 0], nodes[i].children));
            ctx.set('deep', nodes);
        }
        return deep ? ctx.get('deep') : ctx.get('flat');
    };
    Generic.prototype.getTextNodeFromCategoryWrapper = function (matcher) {
        var _this = this;
        var ctx = this.cache.for('category_nodes');
        if (!ctx.has('nodes')) {
            var nodes = this.$('.category_text')
                .parent()
                .contents()
                .toArray();
            ctx.set('nodes', nodes);
        }
        return ctx.get('nodes')
            .find(function (node) { return matcher.in(_this.$(node).text()); });
    };
    Generic.prototype.parsePageInfo = function () {
        var ctx = this.cache.for('page_info');
        if (!ctx.has('data')) {
            var raw = this.$('script[type="application/ld+json"]')
                .first()
                .html();
            var data = raw ? JSON.parse(raw.trim()) : {};
            ctx.set('data', data);
        }
        return ctx.get('data');
    };
    Generic.prototype.ScrapeFactory = function (shortUrl) {
        var _this = this;
        var _a = AppUtils.decomposeShortURL(shortUrl), type = _a.type, id = _a.id;
        return function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._scrape(id, type, {
                        locale: this._locale
                    })];
            });
        }); };
    };
    Generic.prototype.QueryFactory = function (type) {
        var _a, _b;
        var _this = this;
        var QTypes = query_1.Queries.Types;
        var ids = (_a = {},
            _a[typings_1.App.Locales.US] = (_b = {},
                _b[QTypes.PRODUCT_IN_PROCESSING] = 'mproductofrecipe',
                _b[QTypes.PRODUCT_IN_RECIPE] = 'productofrecipe',
                _b[QTypes.PRODUCT_IN_DESIGN] = 'productofdesign',
                _b[QTypes.MATERIAL_IN_PROCESSING] = 'mrecipematerial',
                _b[QTypes.MATERIAL_IN_RECIPE] = 'recipematerial',
                _b[QTypes.MATERIAL_IN_DESIGN] = 'designmaterial',
                _b[QTypes.NPC_DROPS] = 'droppedbynpc',
                _b[QTypes.DROPPED_IN_NODE] = 'nodedrop',
                _b[QTypes.OBTAINED_FROM] = 'itempacksource',
                _b[QTypes.SOLD_BY_NPC] = 'specialsoldbynpc',
                _b[QTypes.QUEST_REWARD] = 'questreward',
                _b),
            _a)[this._locale];
        if (!this.$("a[href=\"#tabs-" + ids[type] + "\"]").length)
            return undefined;
        return function () { return _this._query(_this._id, type, { locale: _this._locale }); };
    };
    Object.defineProperty(Generic.prototype, "icon", {
        get: function () {
            return this.$('.item_icon').attr('src');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Generic.prototype, "name", {
        get: function () {
            return AppUtils.cleanStr(this.$('.item_title').text());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Generic.prototype, "name_alt", {
        get: function () {
            return this.$('.item_sub_title').text() || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Generic.prototype, "category", {
        get: function () {
            return AppUtils.cleanStr(this.$('.category_text').text());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Generic.prototype, "grade", {
        get: function () {
            var _a;
            return parseInt((_a = this.$('.item_title')
                .attr('class')) === null || _a === void 0 ? void 0 : _a.replace(/\D/g, '')) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Generic.prototype, "description", {
        get: function () {
            var _a;
            var _b, _c, _d, _e, _f, _g, _h;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Description:'],
                _a));
            var nodes = ((_b = this.getTableRow(matcher)) === null || _b === void 0 ? void 0 : _b.childNodes) || [];
            var i = nodes.findIndex(function (node) { return matcher.in(node.data); });
            if (i === -1)
                return undefined;
            var strs = [];
            while (++i < nodes.length) {
                if (((_c = nodes[i]) === null || _c === void 0 ? void 0 : _c.tagName) === 'br' && ((_d = nodes[i + 1]) === null || _d === void 0 ? void 0 : _d.tagName) === 'br')
                    break;
                if (['div', 'hr'].includes((_e = nodes[i]) === null || _e === void 0 ? void 0 : _e.tagName))
                    break;
                if (((_f = nodes[i]) === null || _f === void 0 ? void 0 : _f.type) === 'text')
                    if (['-'].includes((_g = nodes[i].data) === null || _g === void 0 ? void 0 : _g.trim()[0]))
                        break;
                var str = this.$(nodes[i]).text();
                if (!str)
                    continue;
                if (strs.length && ((_h = nodes[i - 1]) === null || _h === void 0 ? void 0 : _h.tagName) !== 'br')
                    strs[strs.length - 1] += str;
                else
                    strs.push(str);
            }
            return strs.join('\n').trim();
        },
        enumerable: false,
        configurable: true
    });
    Generic.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        id: this._id,
                        icon: this.icon,
                        name: this.name,
                        name_alt: this.name_alt,
                        type: this._type,
                        category: this.category,
                        description: this.description,
                    }];
            });
        });
    };
    return Generic;
}());
exports.Generic = Generic;
