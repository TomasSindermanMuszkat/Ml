// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Components
import { CarrouselComponent } from './carrousel/carrousel.component';
import { SlickComponent } from './slick/slick.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { StoreComponent } from './store/store.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    CarrouselComponent,
    SlickComponent,
    AdvertisementComponent,
    StoreComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],

  exports: [
    CarrouselComponent,
    SlickComponent,
    AdvertisementComponent,
    StoreComponent,
    CategoriesComponent,
  ],

  providers: [],
  bootstrap: []
})
export class SharedModule { }
