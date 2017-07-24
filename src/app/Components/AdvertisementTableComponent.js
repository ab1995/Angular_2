"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AdvService_1 = require("../Services/AdvService");
var AdvertisementTableComponent = (function () {
    function AdvertisementTableComponent(advService) {
        this.advService = advService;
        this.advList = [];
    }
    AdvertisementTableComponent.prototype.advPush = function (childAd) {
        this.advList.push(childAd);
    };
    AdvertisementTableComponent.prototype.deleteAd = function (delAd) {
        var index = delAd.index;
        this.advList.splice(index, 1);
    };
    AdvertisementTableComponent.prototype.getAdFromService = function () {
        return this.advService.getAllAdvertises();
    };
    return AdvertisementTableComponent;
}());
AdvertisementTableComponent = __decorate([
    core_1.Component({
        selector: 'my-adv-table',
        templateUrl: "./AdvTableForm.html",
    }),
    __metadata("design:paramtypes", [AdvService_1.AdvService])
], AdvertisementTableComponent);
exports.AdvertisementTableComponent = AdvertisementTableComponent;
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input) {
        var filterAds = [];
        if (input.length > 2) {
            input = input.toLowerCase();
            value.filter(function (ad) {
                if (ad.newCat.match(input)) {
                    console.log(ad.newCat);
                    filterAds.push(ad);
                    console.log(input);
                }
            });
            return filterAds;
        }
        else
            return value;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({
        name: 'FilterPipe'
    })
], FilterPipe);
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=AdvertisementTableComponent.js.map