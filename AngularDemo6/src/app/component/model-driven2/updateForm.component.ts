import { Component, NgModule, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {AdService} from '../../services/AdvertisementService'


@Component({
    selector: 'updateForm-comp',
    template:"hello"
    //templateUrl: './updateForm.component.html'
})

export class UpdateFormComponent{
    title:String="Post Ad";
    items:String[];
    adService:any;
    adForm: FormGroup;
    public postedAdEvent=new EventEmitter<{ name:String, category:String, description:String }>();


    constructor(private formBuilder: FormBuilder, adService:AdService)
    {
        this.adService=adService;
        this.items=adService.getCategories();
        this.adForm = this.formBuilder.group({ name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]], category: [this.items[0],[]], description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]] }); 
    }

    onSubmit() 
    {
        //console.log(this.adForm.value);
      //  this.adService.insertAd(this.adForm.value);
        //console.log(this.adForm.value);
      //  this.postedAdEvent.emit(this.adForm.value);   

    } 

    onClickCancel(){
        
    }
}