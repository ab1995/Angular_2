import { Component, EventEmitter } from '@angular/core';
import {AdvertisementForm} from './component/AdvertisementForm/AdvertisementForm.component';
import {AdService} from './services/AdvertisementService'

@Component({
  selector: 'my-app',
  template: `<!--myForm (postedAdEvent)="adArray.push($event)"></myForm-->
            <!--template-adForm></template-adForm-->
            <!--mdf-adForm></mdf-adForm-->
            <!--adtable [ads]="adArray" (deleteAdEvent)="adArray=$event"></adtable-->
            <!--mdf2-adForm (postedAdEvent)="adService.insertAd($event)"></mdf2-adForm-->
            
            <!--h3>
                <nav>
                    <a routerLink="/home" routerLinkActive="active" >Home</a>
                    <a routerLink="/update " routerLinkActive="active" >Edit Ad</a>
                </nav>
            </h3-->
            <router-outlet></router-outlet><br>
            `,

  providers:[AdService]

})
export class AppComponent  {
    public adArray: Array<{ name:String, category:String, description:String }> = [];
    adService:any;
    constructor(adService:AdService)
    {   
        this.adService=adService;
    }
    
}
