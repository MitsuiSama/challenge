import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UserService } from './components/users/user.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { MockUserService } from './components/users/mock-user.service';



@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    MockUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
