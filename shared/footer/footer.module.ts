// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Components
import { FooterComponent } from './footer.component';
import { PaymentsComponent } from './payments/payments.component';
import { DropdownInfoComponent } from './dropdown-info/dropdown-info.component';

@NgModule({
  declarations: [
    FooterComponent,
    PaymentsComponent,
    DropdownInfoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],

  exports: [
    FooterComponent,
    PaymentsComponent,
    DropdownInfoComponent,
  ],

  providers: [],
  bootstrap: []
})
export class FooterModule { }
