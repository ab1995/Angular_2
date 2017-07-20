import { Component,NgModule } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector:"myForm",
    template:`  <h1>{{title}}</h1><br>
                <label>Name</label>
                <input type="text" [value]="defaultName" #inputName><br>
                <label>Category</label>
                <select #inputcategory>
                    <option>Furniture</option>
                    <option>Hardware</option>
                    <option>Mobile</option>
                </select> <br>
                <label>Description</label><br><textarea rows="4" #inputDescription></textarea><br>
                <button type="Submit" (click)="postAdvertisement(inputName.value, inputcategory.value,inputDescription.value)">Post</button>`
})

export class AdvertisementForm{
    defaultName:string="xyz";
    title:String="Post Ad"
    categoryList = [
    {id: 1, name:'Furniture'},
    {id: 2, name:'Hardware'},
    {id: 3, name:'Mobile'}
    ];

    advertisements:any=[];

    postAdvertisement()
    {

    }


}

