import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  paymentHandler: any = null;


  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
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
      name: 'Ecommerce project',
      description: '1st angular ecommerce',
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

