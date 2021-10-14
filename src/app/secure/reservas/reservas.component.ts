import {Component, OnInit} from '@angular/core';
import {Reserva} from '../../integration/interfaces/reserva.interface';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
  public reservas: Reserva[] = [
    {
      usuario: 'pepe gonzales',
      products: [{product: 'pasta dental', cantidad: 1}, {product: 'paracetamol', cantidad: 5}],
      fecha: '19/02/2021 15:30',
      entregado: true
    }, {
      usuario: 'fernando martinez',
      products: [{product: 'iboprufeno', cantidad: 3}, {product: 'tapsin', cantidad: 1}],
      fecha: '21/03/2021 12:05'
      , entregado: true
    }, {
      usuario: 'mariana perez',
      products: [{product: 'amoxicilina', cantidad: 4}],
      fecha: '15/06/2021 13:30',
      entregado: false
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  entregar(reserva: Reserva): void {
    reserva.entregado = true;
  }

}
