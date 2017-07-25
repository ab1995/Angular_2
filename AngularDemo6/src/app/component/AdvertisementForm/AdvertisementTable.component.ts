import { Component,NgModule, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AdService} from '../../services/AdvertisementService'
import { Router } from '@angular/router';   



@Component({
    selector:"adtable",
    templateUrl: './AdvertisementTable.component.html',
    //outputs:['deleteAdEvent']
})

export class AdvertisementTable {


    ads: Array<{ name:String, category:String, description:String }> =[];//this.adService.getAdArray();
   
    constructor(private adService:AdService, private router: Router)
    {
      //  this.getAdArrayFromService();
        //this.ads=this.adService.getAdArray();
    }
    
    
    //public deleteAdEvent=new EventEmitter<{ name:String, category:String, description:String }[]>();
    
    deleteAd(ad:{ name:String, category:String, description:String }){
        this.adService.deleteAd(ad);
       // this.deleteAdEvent.emit(this.ads);
    } 
    
    editAd(ad:any){
        this.adService.addObjToupdate(ad);
        this.router.navigate(['/update']);
    }

    getAdArrayFromService()
    {
        //this.ads=this.adService.getAdArray();
        return this.adService.getAdArray();
    }
}

@Pipe({
    name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

    transform(value: Array<any>, input: string) {
        let filterAds:  Array<any> = [];
        if (input.length>2) {   
                input = input.toLowerCase();
                 value.filter(function (ad) {
                    if(ad.name.indexOf(input)>-1)
                    {
                        console.log(ad.name);
                        filterAds.push(ad);
                    }
                })
            return filterAds;
        }
        else
            return value;
            
        
    }
}