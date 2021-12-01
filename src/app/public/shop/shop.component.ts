import { Component, Input, OnInit } from '@angular/core';
import { Medicamento } from '../../integration/interfaces/medicamento.interface';
import { ReservaService } from '../../integration/services/reserva.service';
import { Reserva } from '../../integration/interfaces/reserva.interface';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
	paymentHandler: any = null;
	@Input() buyItems: Medicamento[] = [];
	public total = 0;
	public reserva = { id_medicamentos: '' } as Reserva;
	public nombre = '';
	public paterno = '';
	public ci = '';

	constructor(private reservaService: ReservaService) {}

	ngOnInit(): void {
		for (const med of this.buyItems) {
			this.total = this.total + Number(med.precio);
		}
		this.invokeStripe();
	}

	makePayment(amount: any): void {
		this.pagar();
		// const paymentHandler = (<any>window).StripeCheckout.configure({
		// 	key: 'pk_test_51JlEo8J5l66bZ49COvFvH4GktHP3Ws8i7UFW46VTSkRkhNT0biNnHqfSFocQuf9lfqfmndlAfpp5efRxUS5kKDy400Zo6BNiyO',
		// 	locale: 'auto',
		// 	token: (stripeToken: any) => {
		// 		console.log(stripeToken);
		// 		alert('Stripe token generated!');
		// 	},
		// });

		// paymentHandler.open({
		//   name: 'Servifarma',
		//   description: 'paga tu reserva',
		//   amount: amount * 100
		// });
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
						console.log(stripeToken);
						alert('Payment has been successfull!');
					},
				});
			};

			window.document.body.appendChild(script);
		}
	}

	pagar(): void {
		console.log('PAGOO', this.reserva);
		this.buyItems.forEach((medicine) => {
			this.reserva.id_medicamentos += medicine.id + ' ';
		});
		const medicamentos = this.reserva.id_medicamentos.split(' ');
		const unicosList = [...new Set(medicamentos)];
		let cantidad = '';
		unicosList.pop();
		for (const elem of unicosList) {
			let c = 0;
			medicamentos.forEach((med) => {
				if (elem === med && elem !== ' ' && med !== ' ') {
					c++;
				}
			});
			cantidad += c + ' ';
		}
		const cantidadList = cantidad.split(' ');
		cantidadList.pop();
		this.reserva.id_medicamentos = unicosList.join();
		this.reserva.cantidad = cantidadList.join();
		this.reserva.nombre = this.nombre;
		this.reserva.paterno = this.paterno;
		this.reserva.ci = this.ci;
		this.reserva.entregado = false;
		this.reservaService.createReserva(this.reserva).subscribe((res) => {});
	}
}
