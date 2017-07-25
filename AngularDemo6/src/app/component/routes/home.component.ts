import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Mdf2AdForm} from '../model-driven2/mdf2AdForm.component'
import {AdService} from '../../services/AdvertisementService'


@Component({
    selector: 'home-comp',
    template: `<mdf2-adForm (postedAdEvent)="adService.insertAd($event)"></mdf2-adForm><br>
            <adtable></adtable>`
})

export class HomeComponent {

    constructor(private router: Router, private adService:AdService) {
    }

}