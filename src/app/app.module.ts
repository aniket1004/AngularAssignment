import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    WelcomeComponent,
    AdminComponent,
    UserdetailComponent,
    UpdateuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
