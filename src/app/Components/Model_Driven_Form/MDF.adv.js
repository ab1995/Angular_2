"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MDFAdvFormComponent = (function () {
    function MDFAdvFormComponent() {
        this.YourName = "Aishwarya";
        this.Category = ["Car", "Mobile", "Bike", "Real Estate", "Camera", "Books", "Laptops"];
        this.AdForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]),
            desc: new forms_1.FormControl()
        });
        this.childEvent = new core_1.EventEmitter();
    }
    MDFAdvFormComponent.prototype.onsubmit = function () {
        console.log(this.AdForm.value);
    };
    MDFAdvFormComponent.prototype.AdDetails_All = function (name, cat, desc) {
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
    MDFAdvFormComponent.prototype.onChange = function (name, cat, desc) {
        var newobj = {
            newName: name,
            newCat: cat,
            newDesc: desc
        };
        this.childEvent.emit(newobj);
    };
    return MDFAdvFormComponent;
}());
MDFAdvFormComponent = __decorate([
    core_1.Component({
        selector: 'my-ad-mdf',
        templateUrl: "./MDF.html",
        outputs: ['childEvent']
    })
], MDFAdvFormComponent);
exports.MDFAdvFormComponent = MDFAdvFormComponent;
//# sourceMappingURL=MDF.adv.js.map