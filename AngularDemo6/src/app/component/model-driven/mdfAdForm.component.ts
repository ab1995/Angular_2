import { Component, NgModule, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector:"mdf-adForm",
    templateUrl: './mdfAdForm.component.html',
})


export class mdfAdForm{
    title:String="Post Ad";
    items:String[];

    constructor(){
        this.items=['Furniture', 'Hardware', 'Mobile' ];
    }

    adForm = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
        category:new FormControl(),
        description:new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(50)])
    });

    onSubmit() 
    {
        console.log(this.adForm.value); 
    } 

}

