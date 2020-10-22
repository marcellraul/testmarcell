import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { NgxLoadingModule } from 'ngx-loading';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './page/list-users/list-users.component';
import { NavComponent } from './page/nav/nav.component';
import { ViewUserComponent } from './page/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    NavComponent,
    ViewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxLoadingModule.forRoot({}),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
