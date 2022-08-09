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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scraper = void 0;
var cheerio_1 = __importDefault(require("cheerio"));
var Scrapers = __importStar(require("./typings"));
var typings_1 = require("../shared/typings");
var builders_1 = require("./builders");
var Scraper = /** @class */ (function () {
    function Scraper(_id, _locale, _type, _fetch, _query, _scrape) {
        this._id = _id;
        this._locale = _locale;
        this._type = _type;
        this._fetch = _fetch;
        this._query = _query;
        this._scrape = _scrape;
    }
    Object.defineProperty(Scraper.prototype, "url", {
        get: function () {
            return [
                typings_1.App.BASE_URL,
                this._locale,
                this._type,
                this._id,
            ].join('/') + '/';
        },
        enumerable: false,
        configurable: true
    });
    Scraper.prototype.getCategoryId = function ($) {
        var _a;
        var ctg_id = $('.category_text').text()
            .replace(/[^a-zA-Z ]/g, '')
            .toLowerCase()
            .trim()
            .split(' ')
            .join('_');
        return (_a = {},
            _a[typings_1.App.Locales.US] = {
                'equipment': Scrapers.Ctgs.EQUIPMENT,
                'crafting_materials': Scrapers.Ctgs.CRAFTING_MATERIAL,
                'consumable': Scrapers.Ctgs.CONSUMABLE,
                'installable_object': Scrapers.Ctgs.INSTALLABLE_OBJECT,
                'special_items': Scrapers.Ctgs.SPECIAL_ITEM,
                'recipe': Scrapers.Ctgs.RECIPE,
                'quest': Scrapers.Ctgs.QUEST,
                'worker': Scrapers.Ctgs.WORKER,
                'item_group': Scrapers.Ctgs.MATERIAL_GROUP,
            },
            _a)[this._locale][ctg_id] || Scrapers.Ctgs.UNKNOWN;
    };
    Scraper.prototype.exists = function ($) {
        return $('table.smallertext').length !== 0;
    };
    Scraper.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._fetch(this.url)];
            });
        });
    };
    Scraper.prototype.parse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, $, ctg_id, builder, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch()];
                    case 1:
                        res = _a.sent();
                        $ = cheerio_1.default.load(res);
                        if (!this.exists($)) {
                            return [2 /*return*/, { url: this.url, type: null, data: null }];
                        }
                        ctg_id = this.getCategoryId($);
                        builder = builders_1.Generic.get(this._type, ctg_id);
                        return [4 /*yield*/, new builder(this._id, this._locale, this._type, $, this._query, this._scrape).build()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, { url: this.url, type: builder.type, data: data }];
                }
            });
        });
    };
    return Scraper;
}());
exports.Scraper = Scraper;
