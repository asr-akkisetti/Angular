import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ParkingRequestComponent } from './parking-request/parking-request.component';
import { ParkingLotsComponent } from './parking-lots/parking-lots.component';

import { ParkFormComponent } from './park-form/park-form.component';
import { UnParkFormComponent } from './un-park-form/un-park-form.component';
import { ParkinglotFormComponent } from './parkinglot-form/parkinglot-form.component';

const appRoutes: Routes = [
  { path: 'home',      component: LoginFormComponent },
  { path: 'parking-request', component: ParkingRequestComponent },
  { path: 'parking-lots',      component: ParkingLotsComponent },
  { path: 'park-form',      component: ParkFormComponent },
  { path: 'un-park-form',      component: UnParkFormComponent },
  { path: 'parkinglot-form',      component: ParkinglotFormComponent },
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
