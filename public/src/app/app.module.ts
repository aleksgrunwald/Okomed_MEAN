import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ContactFormComponent } from './kontakt/contact-form/contact-form.component';
import { GoogleMapComponent } from './kontakt/google-map/google-map.component';
import { MessageService } from "./kontakt/message.service";

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    AppNavbarComponent,
    ContactFormComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
