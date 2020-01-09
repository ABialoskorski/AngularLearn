import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './components/http/http.component';
import {HttpServiceService} from './components/Service/http-service.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
