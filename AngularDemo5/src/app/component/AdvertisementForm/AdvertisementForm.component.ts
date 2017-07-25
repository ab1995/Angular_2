import { Component,NgModule, EventEmitter } from '@angular/core';

@Component({
    selector:"myForm",
    templateUrl: './AdForm.component.html',
    outputs:['postedAdEvent']
})


export class AdvertisementForm{
    title:String="Post Ad";
    items:String[];

    constructor(){
        this.items=['Furniture', 'Hardware', 'Mobile' ];
    }

    public postedAdEvent=new EventEmitter<{ name:String, category:String, description:String }>();

    postAdvertisement(inputName:String, inputcategory:String, inputDescription:String)
    {
        let obj={name:inputName, category:inputcategory, description:inputDescription};
        this.postedAdEvent.emit(obj);   
    }

}

