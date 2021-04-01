import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import  { AdminComponent } from './admin/admin.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  { path : '', component : WelcomeComponent},
  { path : 'sign-up', component : SignupComponent},
  { path : 'admin', component : AdminComponent},
  { path : 'userdetails', component : UserdetailComponent},
  { path : 'update', component : UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
