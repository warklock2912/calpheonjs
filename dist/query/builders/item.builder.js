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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var generic_builder_1 = require("./generic.builder");
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Item, "type", {
        get: function () {
            return "item";
        },
        enumerable: false,
        configurable: true
    });
    Item.prototype.build = function (data) {
        var _this = this;
        return data.aaData.map(function (arr) {
            var url = _this.parseShortURL(arr[2]);
            return {
                type: Item.type,
                id: arr[0],
                icon: _this.parseIconURL(arr[1]),
                name: _this.parseName(arr[2]),
                lvl: arr[3],
                shortUrl: url,
                scrape: _this.ScrapeFactory(url),
            };
        });
    };
    return Item;
}(generic_builder_1.Generic));
exports.Item = Item;
