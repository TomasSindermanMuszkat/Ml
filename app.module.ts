import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './shared/header/search/search.component';
import { HeaderbComponent } from './shared/header/headerb/headerb.component';
import { DropdownComponent } from './shared/header/headerb/dropdown/dropdown.component';
import { ModalComponent } from './shared/header/headerb/modal/modal.component';
import { DropdownRightComponent } from './shared/header/headerb/dropdown/dropdown-right/dropdown-right.component';
import { HeaderComponent } from './shared/header/header.component';
import { CarrouselComponent } from './shared/carrousel/carrousel.component';
import { SlickComponent } from './shared/slick/slick.component';
import { AdvertisementComponent } from './shared/advertisement/advertisement.component';
import { StoreComponent } from './shared/store/store.component';
import { CategoriesComponent } from './shared/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderbComponent,
    DropdownComponent,
    ModalComponent,
    DropdownRightComponent,
    HeaderComponent,
    CarrouselComponent,
    SlickComponent,
    AdvertisementComponent,
    StoreComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
