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
var forms_1 = require("@angular/forms");
var FormBuilderAdvFormComponent = (function () {
    function FormBuilderAdvFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.YourName = "Aishwarya";
        this.Category = ["Car", "Mobile", "Bike", "Real Estate", "Camera", "Books", "Laptops"];
        this.childEvent = new core_1.EventEmitter();
        this.AdForm = this.formBuilder.group({
            name: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(8)]],
            description: []
        });
    }
    FormBuilderAdvFormComponent.prototype.onsubmit = function () {
        console.log(this.AdForm.value);
    };
    FormBuilderAdvFormComponent.prototype.AdDetails_All = function (name, cat, desc) {
        console.log("name: ", name, "cat: ", cat, "description: ", desc);
        this.obj.push({ Name: name,
            Category: cat,
            Description: desc,
        });
        console.log("Object", this.obj);
        for (var i = 0; i < this.obj.length; i++) {
            console.log(this.obj[i]);
        }
    };
    FormBuilderAdvFormComponent.prototype.onChange = function (name, cat, desc) {
        var newobj = {
            newName: name,
            newCat: cat,
            newDesc: desc
        };
        this.childEvent.emit(newobj);
    };
    return FormBuilderAdvFormComponent;
}());
FormBuilderAdvFormComponent = __decorate([
    core_1.Component({
        selector: 'my-ad-fb',
        templateUrl: "./FormBuilder.html",
        outputs: ['childEvent']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormBuilderAdvFormComponent);
exports.FormBuilderAdvFormComponent = FormBuilderAdvFormComponent;
//# sourceMappingURL=FormBuilder.adv.js.map