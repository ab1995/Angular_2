import { Component,NgModule } from '@angular/core';

@Component({
    selector:"myForm",
    template:`  <h1>{{title}}</h1><br>
                <label>Name</label>
                <input type="text" [value]="defaultName" #inputName><br>
                <label>Category</label>
                <select  #inputCategory>
                    <option *ngFor="let item of items; let i=index" >{{item}}</option>
                </select> <br>
                <label>Description</label><br><textarea rows="4" #inputDescription></textarea><br>
                <button type="Submit" (click)="postAdvertisement(inputName.value,inputCategory.value,inputDescription.value)">Post</button>
                <br><br>
                    <table>
        <thead>
            <th>Name</th>
        </thead>
        <tbody>
            <tr *ngFor="let hero of heroes; trackBy: trackHero" >
                <td>{{hero.name}}</td>
            </tr>
        </tbody>
    </table>`
})

export class AdvertisementForm{
    defaultName:string="xyz";
    title:String="Post Ad";
    
    items:String[];
    constructor(){
        this.items=['Furniture', 'Hardware', 'Mobile' ];
    }

    postAdvertisement(inputName:String, inputcategory:String,inputDescription:String)
    {
        console.log(inputName, inputcategory, inputDescription );
    }


}

