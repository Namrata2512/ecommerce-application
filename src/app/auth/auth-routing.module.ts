import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../component/pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 
  {path:'', redirectTo:'auth/signup',pathMatch:'full'},
  {path:'auth/signup', component:SignupComponent},
  {path:'auth/signin', component:SigninComponent},

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
