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
import { NewsComponent } from './main-screen/news/news.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { VerticalOfferComponent } from './main-screen/vertical-offer/vertical-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    AppNavbarComponent,
    ContactFormComponent,
    GoogleMapComponent,
    NewsComponent,
    MainScreenComponent,
    VerticalOfferComponent
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
