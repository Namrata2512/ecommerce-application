import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: any;
  public wtotalItem: any;
  public SearchTerm: string = '';
  Date1: Date = new Date();
  localDate: string = new Date().toLocaleString();
  @Input() name: string;
  msgfromservice: string;
  logindata: any;
  res: any;
  totalitem1: any | null;
  cartvalue: any;
  title: any;
  totalItemwishlist: any;
  role_is_admin: any;
  role_is_user: any;
  wishlist_from_local:any;
  wtotalItem1:any;
  wishlistvalue_local:any;

  constructor(private cartservice: CartService, private apiservice: ApiService, private router: Router, private wishlist: WishlistService) {
     localStorage.setItem('cart', JSON.stringify(this.totalItem));
    this.apiservice.setTitle('');
 
  }

  email_from_local = localStorage.getItem("Email");
  cartvalue_from_local = JSON.parse(localStorage.getItem("cart") || '{}');
  role_is: any = localStorage.getItem("role");

 
    


  ngOnInit(): void {

    this.apiservice.currentmsg.subscribe(
      (data: string) => {
        this.msgfromservice = data;
      }
    )

    this.cartservice.getProducts().subscribe(res => {
      this.totalItem = res.length;

      console.log("cartnumber is:", this.totalItem);
     

      localStorage.setItem('cart', JSON.stringify(this.totalItem));
      this.totalitem1 = localStorage[this.totalItem];
     this.cartvalue_from_local = JSON.parse(localStorage.getItem("cart") || '{}');
      if(localStorage.getItem('userlogin')=='true'){
        this.role_is_user = true;
      }
    
      if(localStorage.getItem('alogin')=='true'){
        this.role_is_admin = true;
      }


    })
    this.wishlist.wgetProducts().subscribe(res => {
      this.wtotalItem = res.length;
      // console.log("products in wishlist", this.wtotalItem );
      this.wishlist_from_local = localStorage.setItem('wishlist', JSON.stringify(this.wtotalItem));
      this.wtotalItem1=localStorage[this.wtotalItem];
      this.wishlistvalue_local= JSON.parse(localStorage.getItem("wishlist") || '{}');
      console.log('products in wishlistlocal', this.wishlistvalue_local);

    })


  }

  search(event: any) {
    this.SearchTerm = (event.target as HTMLInputElement).value;
    console.log(this.SearchTerm);
    this.cartservice.search.next(this.SearchTerm);
  }
  logout() {
    console.log('logout');
    this.apiservice.logout();
    this.router.navigate(['auth/signin']);
    this.cartservice.removeAllCart();
    this.wishlist.removeAllwishlist();
  }

}



