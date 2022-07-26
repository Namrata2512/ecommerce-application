import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FooterComponent } from './component/footer/footer.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AuthModule } from './auth/auth.module';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    FooterComponent,
    CheckoutComponent,
    WishlistComponent,
    UserDashboardComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    // RouterModule.forChild([
    //   {
    //     path:'**',
    //     component:PagenotfoundComponent
    //   }
    // ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
