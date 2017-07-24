import { Component,NgModule } from '@angular/core';

@Component({
    selector:"myForm",
    templateUrl: './AdForm.component.html',
})


export class AdvertisementForm{
    defaultName:string="xyz";
    title:String="Post Ad";
    items:String[];
    ads: Array<{ name:String, category:String, description:String }> = [];

    constructor(){
        this.items=['Furniture', 'Hardware', 'Mobile' ];
    }

    postAdvertisement(inputName:String, inputcategory:String, inputDescription:String)
    {
        console.log(inputName, inputcategory, inputDescription );
        this.ads.push(
            {name:inputName, category:inputcategory, description:inputDescription}
        );
    }

}

