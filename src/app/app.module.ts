import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { AssociatedIndividualsComponent } from './associated-individuals/associated-individuals.component';
import { PersonalAccountDetailsComponent } from './personal-account-details/personal-account-details.component';
import { CorporateAccountDetailsComponent } from './corporate-account-details/corporate-account-details.component';
import { DateFormatPipePipe } from './date-format-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AssociatedIndividualsComponent,
    RegistrationDetailsComponent,
    
    PersonalAccountDetailsComponent,
    CorporateAccountDetailsComponent,
    DateFormatPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
