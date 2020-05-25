import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DropdownRightComponent } from './headerb/dropdown/dropdown-right/dropdown-right.component';
import { SearchComponent } from './search/search.component';
import { HeaderbComponent } from './headerb/headerb.component';
import { DropdownComponent } from './headerb/dropdown/dropdown.component';
import { ModalComponent } from './headerb/modal/modal.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    SearchComponent,
    HeaderbComponent,
    DropdownComponent,
    ModalComponent,
    HeaderComponent,
    DropdownRightComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],

  exports: [
    SearchComponent,
    HeaderbComponent,
    DropdownComponent,
    ModalComponent,
    HeaderComponent,
    DropdownRightComponent
  ],

  providers: [],
  bootstrap: []
})
export class HeaderModule { }
