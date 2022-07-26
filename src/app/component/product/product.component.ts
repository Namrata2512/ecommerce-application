import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { FilterPipe } from 'src/app/shared/filter.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy{
  public productList: any;
  public filterCategory: any;
  searchKey: string = "";



  constructor(private api: ApiService, private cartservice: CartService, private wishlist: WishlistService) { }



  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a: any) => {
        if (a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = "fashion"
        }
        Object.assign(a, { quantity: 1, total: a.price })

      });
      console.log(this.productList);
    });
    this.cartservice.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
 
  addtoCart(item: any) {
    this.cartservice.addtoCart(item);
    console.log('test', item);

  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;


      }
    })
  }
  addtoWishlist(item: any) {
    this.wishlist.addtoWishlist(item);
    console.log('wwtest', item);
  }

  ngOnDestroy(): void {
  }

}
