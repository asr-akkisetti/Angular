import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParkinglotFormComponent } from './parkinglot-form/parkinglot-form.component';
import { ParkFormComponent } from './park-form/park-form.component';
import { UnParkFormComponent } from './un-park-form/un-park-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ParkingRequestComponent } from './parking-request/parking-request.component';
import { ParkingLotsComponent } from './parking-lots/parking-lots.component';


@NgModule({
  declarations: [
    AppComponent,
    ParkinglotFormComponent,
    ParkFormComponent,
    UnParkFormComponent,
    LoginFormComponent,
    ParkingRequestComponent,
    ParkingLotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
