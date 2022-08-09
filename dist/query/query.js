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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var Queries = __importStar(require("./typings"));
var Builders = __importStar(require("./builders"));
var typings_1 = require("../shared/typings");
var Query = /** @class */ (function () {
    function Query(_id, _group, _itemAs, _locale, fetch, _scrape) {
        if (_locale === void 0) { _locale = typings_1.App.Locales.US; }
        this._id = _id;
        this._group = _group;
        this._itemAs = _itemAs;
        this._locale = _locale;
        this.fetch = fetch;
        this._scrape = _scrape;
    }
    Object.defineProperty(Query.prototype, "url", {
        get: function () {
            var _a;
            var idKey = [
                Queries.ItemAs.NPC_DROP,
                Queries.ItemAs.NODE_DROP,
                Queries.ItemAs.CONTAINER,
                Queries.ItemAs.QUEST_REWARD,
            ].includes(this._itemAs) ? 'id' : 'item_id';
            return typings_1.App.BASE_URL + '/query.php?' + Object.entries((_a = {
                    a: this._group,
                    type: this._itemAs
                },
                _a[idKey] = this._id,
                _a.l = this._locale,
                _a))
                .map(function (entry) { return entry.join('='); })
                .join('&');
        },
        enumerable: false,
        configurable: true
    });
    Query.prototype.parse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, obj, builder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch(this.url)];
                    case 1:
                        res = _a.sent();
                        if (!res) {
                            return [2 /*return*/, { url: this.url, type: null, data: [] }];
                        }
                        obj = JSON.parse(res.trim());
                        builder = this.getBuilder();
                        return [2 /*return*/, {
                                url: this.url,
                                type: builder.type,
                                data: new builder(this._locale, this._scrape).build(obj),
                            }];
                }
            });
        });
    };
    Query.prototype.getBuilder = function () {
        var Groups = Queries.Groups, ItemAs = Queries.ItemAs;
        var _a = this, g = _a._group, a = _a._itemAs;
        if ([Groups.PROCESSING, Groups.RECIPE, Groups.DESIGN].includes(g))
            return Builders.Recipe;
        if ([ItemAs.NPC_DROP].includes(a))
            return Builders.NPCDrop;
        if ([ItemAs.NODE_DROP].includes(a))
            return Builders.Node;
        if ([ItemAs.CONTAINER].includes(a))
            return Builders.Item;
        if ([Groups.NPC].includes(g))
            return Builders.NPC;
        if ([Groups.QUEST].includes(g))
            return Builders.Quest;
        return Builders.Generic;
    };
    return Query;
}());
exports.Query = Query;
