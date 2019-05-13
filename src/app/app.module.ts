import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { AssociatedIndividualsComponent } from './associated-individuals/associated-individuals.component';
import { PersonalAccountDetailsComponent } from './personal-account-details/personal-account-details.component';
import { CorporateAccountDetailsComponent } from './corporate-account-details/corporate-account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationDetailsComponent,
    AssociatedIndividualsComponent,
    PersonalAccountDetailsComponent,
    CorporateAccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
