import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { MaterialModule } from './MaterialModule'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FakeUserRegistrationService } from './services/fake-user-registration.service';
import { SharedDataServiceService } from './services/shared-data-service.service';
import { NavbarServiceService } from './services/navbar-service.service';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { LoginComponent } from './login/login/login.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { UserpageComponent } from './user/userpage/userpage.component';
import { WeeklyMenuComponent } from './user/weekly-menu/weekly-menu.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,

  },
 {
   path:'adminDashboard',
   component: AdminpageComponent
 },
 {
  path:'userDashboard',
  component: UserpageComponent
},
{
  path:'weeklymenu',
  component: WeeklyMenuComponent
}

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    AdminpageComponent,
    UserpageComponent,
    WeeklyMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes, { useHash: true })  // .../#/crisis-center/

  ],
  providers:[SharedDataServiceService,NavbarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
