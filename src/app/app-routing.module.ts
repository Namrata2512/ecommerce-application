import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';


const routes: Routes = [

  {path:'products', component:ProductComponent},
  {path:'cart', component:CartComponent},
  {path:'register',component:RegisterComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'user-dashboard', component:UserDashboardComponent, canActivate : [AuthGuard]},
  {path:'admin-dashboard',component:AdminDashboardComponent,  canActivate : [AuthGuard]},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
