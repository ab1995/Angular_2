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
var AdvertisementTableComponent_1 = require("./Components/AdvertisementTableComponent");
var AdvService_1 = require("./Services/AdvService");
var AppComponent = (function () {
    function AppComponent(advService) {
        this.advService = advService;
    }
    AppComponent.prototype.appFun = function (newAd) {
        //console.log(newAd);
        //this.atc.advPush(newAd);
        //this.advService.advPush1(newAd);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(AdvertisementTableComponent_1.AdvertisementTableComponent),
    __metadata("design:type", AdvertisementTableComponent_1.AdvertisementTableComponent)
], AppComponent.prototype, "atc", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<my-ad (childEvent)=advService.advPush1($event);></my-ad> \n  <my-adv-table></my-adv-table> ",
        providers: [AdvService_1.AdvService],
    }),
    __metadata("design:paramtypes", [AdvService_1.AdvService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map