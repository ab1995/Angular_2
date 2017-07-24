"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var AdvertisementTableComponent_1 = require("./Components/AdvertisementTableComponent");
var AdevrtisementForm_1 = require("./Components/AdevrtisementForm");
var AdvertisementTableComponent_2 = require("./Components/AdvertisementTableComponent");
var Template_Adv_1 = require("./Components/Template_Driven/Template.Adv");
var MDF_adv_1 = require("./Components/Model_Driven_Form/MDF.adv");
var FormBuilder_adv_1 = require("./Components/Form_Builder/FormBuilder.adv");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, AdevrtisementForm_1.AdvertisementFormComponent, AdvertisementTableComponent_2.AdvertisementTableComponent, AdvertisementTableComponent_1.FilterPipe, Template_Adv_1.TemplateAdvFormComponent, MDF_adv_1.MDFAdvFormComponent, FormBuilder_adv_1.FormBuilderAdvFormComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map