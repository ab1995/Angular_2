import { Component,NgModule, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector:"template-adForm",
    templateUrl: './TemplateAdForm.component.html',
})


export class TemplateAdForm{
    title:String="Post Ad";
    items:String[];

    constructor(){
        this.items=['Furniture', 'Hardware', 'Mobile' ];
    }

    onSubmit(formContent:any)
    {

    }

}

