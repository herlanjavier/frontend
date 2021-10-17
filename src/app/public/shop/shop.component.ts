import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  paymentHandler: any = null;

  constructor() {
  }

  ngOnInit(): void {
    this.invokeStripe();
  }

  makePayment(amount: any): void {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JlEo8J5l66bZ49COvFvH4GktHP3Ws8i7UFW46VTSkRkhNT0biNnHqfSFocQuf9lfqfmndlAfpp5efRxUS5kKDy400Zo6BNiyO',
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    paymentHandler.open({
      name: 'Servifarma',
      description: 'paga tu reserva',
      amount: amount * 100
    });
  }

  invokeStripe(): void {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51JlEo8J5l66bZ49COvFvH4GktHP3Ws8i7UFW46VTSkRkhNT0biNnHqfSFocQuf9lfqfmndlAfpp5efRxUS5kKDy400Zo6BNiyO',
          locale: 'auto',
          token: (stripeToken: any) => {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      };

      window.document.body.appendChild(script);
    }
  }
}
