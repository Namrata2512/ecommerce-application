import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  paymentHandler: any = null;
  public products: any = [];
  public grandTotal!: number;
  constructor(private cartservice: CartService, http: HttpClient) { }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartservice.getTotalPrice();
      this.invokeStripe();
    })
  }
  removeItem(item: any) {
    this.cartservice.removeCartItem(item);
  }
  emptycart() {
    this.cartservice.removeAllCart();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IT0iaABdqo6BYB7pVWpVKkWso1MmnRCUAGlTEfVjUIEsIIzQLF6bZhhK76HOdAnb5dhKLrDE6JGw0aOuQBqABtL00tRRAVxKM',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Company name',
      description: '1st stripe demo with angular13',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51IT0iaABdqo6BYB7pVWpVKkWso1MmnRCUAGlTEfVjUIEsIIzQLF6bZhhK76HOdAnb5dhKLrDE6JGw0aOuQBqABtL00tRRAVxKM',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }


}
