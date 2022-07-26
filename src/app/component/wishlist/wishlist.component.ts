import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public wproducts: any = [];
  constructor(private wishlist: WishlistService) { }

  ngOnInit(): void {
    this.wishlist.wgetProducts().subscribe(res => {
      this.wproducts = res;
    })
  }
  removeItem(item: any) {
    this.wishlist.removeWishlistItem(item);
  }

}
