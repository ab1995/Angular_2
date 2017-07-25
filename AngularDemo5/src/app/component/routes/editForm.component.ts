import { Component, NgModule, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {AdService} from '../../services/AdvertisementService'
import {UpdateFormComponent} from '../model-driven2/updateForm.component'
import {ActivatedRoute, Router} from '@angular/router'



@Component({
    selector: 'editForm-comp',
    templateUrl:'./editForm.component.html'

})

export class EditFormComponent{
    title:String="Post Ad";
    items:String[];
    msg:string;
    adService:any;
    adForm: FormGroup;
    public postedAdEvent=new EventEmitter<{ name:String, category:String, description:String }>();
    ad: any;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, adService:AdService) {
        this.adService=adService;
        this.items=adService.getCategories();
        this.adForm = this.formBuilder.group({ name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]], category: [this.items[0],[]], description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]] }); 
       
        //this.ad=this.activatedRoute.snapshot.params['ad'];
        //var myJSON = JSON.stringify(this.ad);
        this.ad=adService.getObjToUpdate();
        console.log("in editComponent",this.ad);
    }

        onSubmit() 
    {
        // console.log(this.adForm.value);
        // this.adService.insertAd(this.adForm.value);
        // console.log(this.adForm.value);
        // this.postedAdEvent.emit(this.adForm.value);   
        this.adService.updateAd(this.adForm.value);
        this.router.navigate(['']);
    } 

    onClickCancel(){
        this.router.navigate(['']);
    }
}