import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { SearchComponent } from './shared/header/search/search.component';
import { HeaderbComponent } from './shared/header/headerb/headerb.component';
import { DropdownComponent } from './shared/header/headerb/dropdown/dropdown.component';
import { ModalComponent } from './shared/header/headerb/modal/modal.component';
import { HeaderComponent } from './shared/header/header.component';
import { CarrouselComponent } from './shared/carrousel/carrousel.component';
import { SlickComponent } from './shared/slick/slick.component';
import { AdvertisementComponent } from './shared/advertisement/advertisement.component';
import { StoreComponent } from './shared/store/store.component';
import { CategoriesComponent } from './shared/categories/categories.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaymentsComponent } from './shared/footer/payments/payments.component';
import { DropdownInfoComponent } from './shared/footer/dropdown-info/dropdown-info.component';
import { DropdownRightComponent } from './shared/header/headerb/dropdown/dropdown-right/dropdown-right.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderbComponent,
    DropdownComponent,
    ModalComponent,
    HeaderComponent,
    CarrouselComponent,
    SlickComponent,
    AdvertisementComponent,
    StoreComponent,
    CategoriesComponent,
    FooterComponent,
    PaymentsComponent,
    DropdownInfoComponent,
    DropdownRightComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
