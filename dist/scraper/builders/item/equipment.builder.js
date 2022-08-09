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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
var cheerio_1 = __importDefault(require("cheerio"));
var AppUtils = __importStar(require("../../../shared/utils"));
var Scrapers = __importStar(require("../../typings"));
var typings_1 = require("../../../shared/typings");
var item_builder_1 = require("./item.builder");
var shared_1 = require("../../../shared");
var Equipment = /** @class */ (function (_super) {
    __extends(Equipment, _super);
    function Equipment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Equipment.get = function () {
        return Equipment;
    };
    Object.defineProperty(Equipment, "type", {
        get: function () {
            return "equipment";
        },
        enumerable: false,
        configurable: true
    });
    Equipment.prototype.parseEnchantmentArray = function () {
        var ctx = this.cache.for('enchantment_array');
        if (!ctx.has('data')) {
            ctx.set('data', JSON.parse(this.$('#enchantment_array').text()));
        }
        return ctx.get('data');
    };
    Equipment.prototype.parseCaphrasData = function () {
        var ctx = this.cache.for('caphras_data');
        if (!ctx.has('data')) {
            var node = this.$('.item_title')
                .first()
                .parent()
                .find('script')
                .first();
            if (!node.is('script'))
                return ctx.set('data', {});
            var raw = node.html() || '';
            var str = raw.substring(raw.indexOf('=') + 1);
            ctx.set('data', JSON.parse(AppUtils.cleanStr(str, ';\t')));
        }
        return ctx.get('data');
    };
    Equipment.prototype.parseEffects = function (raw, matcher) {
        var _a;
        var $ = cheerio_1.default.load('<div>' + raw + '</div>');
        var strs = ((_a = $('div').html()) === null || _a === void 0 ? void 0 : _a.split('<br>')) || [];
        var i = strs.findIndex(function (str) { return matcher.in(str); });
        if (!matcher.length)
            return [];
        var effects = [];
        while (i++ < strs.length) {
            if (strs[i] === '')
                break;
            var effect = AppUtils.cleanStr($(strs[i]).text());
            if (effect)
                effects.push(effect);
        }
        return effects;
    };
    Equipment.prototype.parseStat = function (value) {
        if (value === undefined || value === '')
            return undefined;
        var nums = value.toString().split(' ~ ')
            .map(function (str) { return parseInt(str); })
            .filter(function (num) { return num || num === 0; });
        if (nums.length === 1 || nums[0] === nums[1])
            return nums[0];
        return nums;
    };
    Equipment.prototype.extractStats = function (obj) {
        var _a;
        var Stats = Scrapers.Stats;
        var toStat = this.parseStat.bind(this);
        return AppUtils.filterObj((_a = {},
            _a[Stats.HP] = toStat(obj.hp),
            _a[Stats.MP] = toStat(obj.mp),
            _a[Stats.DAMAGE] = toStat(obj.damage),
            _a[Stats.DEFENSE] = toStat(obj.defense),
            _a[Stats.ACCURACY] = toStat(obj.accuracy),
            _a[Stats.EVASION] = toStat(obj.evasion),
            _a[Stats.DMG_REDUCTION] = toStat(obj.dreduction),
            _a[Stats.H_DAMAGE] = toStat(obj.hdamage),
            _a[Stats.H_DEFENSE] = toStat(obj.hdefense),
            _a[Stats.H_ACCURACY] = toStat(obj.haccuracy),
            _a[Stats.H_EVASION] = toStat(obj.hevasion),
            _a[Stats.H_DMG_REDUCTION] = toStat(obj.hdreduction),
            _a));
    };
    Object.defineProperty(Equipment.prototype, "stats", {
        get: function () {
            return this.enhancement_stats[0].stats;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Equipment.prototype, "enhancement_stats", {
        get: function () {
            var _this = this;
            var data = this.parseEnchantmentArray();
            var maxLvl = parseInt(data.max_enchant) || 0;
            return Array(maxLvl + 1).fill(0).map(function (_, lvl) {
                var _a, _b;
                var _c;
                var curr = data[lvl];
                var raw = curr.edescription;
                var effects = {
                    enhancement: _this.parseEffects(raw, new shared_1.Matcher(_this._locale, (_a = {},
                        _a[typings_1.App.Locales.US] = ['Enhancement Effect'],
                        _a))),
                    item: _this.parseEffects(raw, new shared_1.Matcher(_this._locale, (_b = {},
                        _b[typings_1.App.Locales.US] = ['Item Effect'],
                        _b))),
                };
                var url = AppUtils.composeShortURL(curr.need_enchant_item_id, 'item', _this._locale);
                return AppUtils.filterObj({
                    stats: _this.extractStats(curr),
                    success_rate: parseFloat(curr.enchant_chance),
                    durability: parseInt((_c = curr.durability) === null || _c === void 0 ? void 0 : _c.split('/')[0]),
                    cron_values: {
                        next_lvl: parseInt(curr.cron_value),
                        total: parseInt(curr.cron_tvalue),
                    },
                    effects: effects,
                    required_enhancement_item: (lvl >= maxLvl) ? undefined : {
                        type: 'item',
                        id: curr.need_enchant_item_id,
                        icon: '/' + curr.need_enchant_item_icon,
                        name: curr.need_enchant_item_name,
                        shortUrl: url,
                        amount: parseInt(curr.enchant_item_counter),
                        durability_loss_on_failure: parseInt(curr.fail_dura_dec),
                        scrape: _this.ScrapeFactory(url),
                    },
                    perfect_enhancement: (lvl >= maxLvl) ? undefined : {
                        amount: parseInt(curr.pe_item_counter),
                        durability_loss_on_failure: parseInt(curr.pe_dura_dec),
                    },
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Equipment.prototype, "caphras_stats", {
        get: function () {
            var _this = this;
            var data = this.parseCaphrasData();
            return [18, 19, 20].reduce(function (caphras, eLvl) {
                var _a;
                var values = (data[eLvl] || []).map(function (cLvl) {
                    return AppUtils.filterObj({
                        stats: _this.extractStats(cLvl.stats),
                        count_next: parseInt(cLvl.count),
                        count_total: parseInt(cLvl.tcount),
                    });
                });
                return __assign(__assign({}, caphras), (_a = {}, _a[eLvl] = values, _a));
            }, {});
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Equipment.prototype, "item_effects", {
        get: function () {
            var _a;
            var data = this.parseEnchantmentArray()[0].edescription;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Item Effect'],
                _a));
            return this.parseEffects(data, matcher);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Equipment.prototype, "set_effects", {
        get: function () {
            var _this = this;
            var data = this.parseEnchantmentArray()[0].edescription;
            return [2, 3, 4, 5].reduce(function (effects, set) {
                var _a, _b;
                var matcher = new shared_1.Matcher(_this._locale, (_a = {},
                    _a[typings_1.App.Locales.US] = [set + "-Set Effect"],
                    _a));
                if (!matcher.in(data))
                    return effects;
                return __assign(__assign({}, effects), (_b = {}, _b[set] = _this.parseEffects(data, matcher), _b));
            }, {});
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Equipment.prototype, "exclusive_to", {
        get: function () {
            var _a;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Exclusive'],
                _a));
            this.getBodyNodes(true).find(function (node) { return matcher.in(node.data); });
            if (!matcher.length)
                return [];
            return matcher.last
                .substring(matcher.indexIn(matcher.last, true))
                .split(',')
                .map(function (s) { return AppUtils.cleanStr(s, ':'); })
                .filter(function (e) { return e; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Equipment.prototype, "fairy_exp", {
        get: function () {
            var _a;
            var _b;
            var matcher = new shared_1.Matcher(this._locale, (_a = {},
                _a[typings_1.App.Locales.US] = ['Used as Fairy growth item'],
                _a));
            this.getBodyNodes(true).find(function (node) { return matcher.in(node.data); });
            if (!matcher.length)
                return 0;
            return parseInt(((_b = matcher.last) === null || _b === void 0 ? void 0 : _b.replace(/\D/g, '')) || '0');
        },
        enumerable: false,
        configurable: true
    });
    Equipment.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = [{}];
                        return [4 /*yield*/, _super.prototype.build.call(this)];
                    case 1: return [2 /*return*/, __assign.apply(void 0, [__assign.apply(void 0, _a.concat([(_b.sent())])), { stats: this.stats, enhancement_stats: this.enhancement_stats, caphras_stats: this.caphras_stats, item_effects: this.item_effects, set_effects: this.set_effects, exclusive_to: this.exclusive_to, fairy_exp: this.fairy_exp }])];
                }
            });
        });
    };
    return Equipment;
}(item_builder_1.Item));
exports.Equipment = Equipment;
