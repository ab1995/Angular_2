"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AdvService = (function () {
    function AdvService() {
        this.serviceAdvList = [];
    }
    AdvService.prototype.advPush1 = function (childAd) {
        //console.log("Child Ad ", childAd);
        this.serviceAdvList.push(childAd);
        console.log(this.serviceAdvList);
    };
    AdvService.prototype.getAllAdvertises = function () {
        return this.serviceAdvList;
    };
    AdvService.prototype.deleteAdvertisement = function (delAd) {
        var index = delAd.index;
        this.serviceAdvList.splice(index, 1);
        //console.log(this.advList);
        return this.serviceAdvList;
    };
    return AdvService;
}());
AdvService = __decorate([
    core_1.Injectable()
], AdvService);
exports.AdvService = AdvService;
//# sourceMappingURL=AdvService.js.map