import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AdvertisementForm} from './component/AdvertisementForm/AdvertisementForm.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AdvertisementForm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
