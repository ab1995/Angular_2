"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TemplateAdvFormComponent = (function () {
    function TemplateAdvFormComponent() {
        //arrName =new Array();
        //arrCat =new Array();
        //arrDesc =new Array();
        this.YourName = "Aishwarya";
        this.Category = ["Car", "Mobile", "Bike", "Real Estate", "Camera", "Books", "Laptops"];
        this.childEvent = new core_1.EventEmitter();
    }
    TemplateAdvFormComponent.prototype.AdDetails_All = function (name, cat, desc) {
        console.log("name: ", name, "cat: ", cat, "description: ", desc);
        //this.arrName.push(name);
        //this.arrCat.push(cat);
        //this.arrDesc.push(desc);
        /*this.name2=name;
        this.cat2=cat;
        this.desc2=desc;*/
        this.obj.push({ Name: name,
            Category: cat,
            Description: desc,
        });
        console.log("Object", this.obj);
        for (var i = 0; i < this.obj.length; i++) {
            console.log(this.obj[i]);
        }
    };
    TemplateAdvFormComponent.prototype.onChange = function (name, cat, desc) {
        var newobj = {
            newName: name,
            newCat: cat,
            newDesc: desc
        };
        this.childEvent.emit(newobj);
    };
    return TemplateAdvFormComponent;
}());
TemplateAdvFormComponent = __decorate([
    core_1.Component({
        selector: 'my-ad-template',
        templateUrl: "./TemplateAd.html",
        outputs: ['childEvent']
    })
], TemplateAdvFormComponent);
exports.TemplateAdvFormComponent = TemplateAdvFormComponent;
//# sourceMappingURL=Template.Adv.js.map