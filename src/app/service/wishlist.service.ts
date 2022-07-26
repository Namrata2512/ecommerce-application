import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlistItems: any = [];
  public productList = new BehaviorSubject<any>([]);


  constructor() { }
  wgetProducts() {
    return this.productList.asObservable();
  }
  setproduct(product: any) {
    this.wishlistItems.push(...product);
    this.productList.next(product);
  }
  addtoWishlist(product: any) {

    this.wishlistItems.push(product);
    this.productList.next(this.wishlistItems);
  }
  removeWishlist(product: any) {
    this.wishlistItems.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.wishlistItems.splice(index, 1);
      }
      this.productList.next(this.wishlistItems);

    })

  }
  removeAllwishlist() {
    this.wishlistItems = [];
    this.productList.next(this.wishlistItems);

  }
  removeWishlistItem(product: any) {
    this.wishlistItems.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.wishlistItems.splice(index, 1)
      }

    })
    this.productList.next(this.wishlistItems)
  }
}
