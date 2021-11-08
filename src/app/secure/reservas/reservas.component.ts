import {Component, OnInit} from '@angular/core';
import {Product, Reserva} from '../../integration/interfaces/reserva.interface';
import {ReservaService} from '../../integration/services/reserva.service';
import {MedicamentoService} from '../../integration/services/medicamento.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
  public reservas: Reserva[] = [];
  public medicamentos = [];
  public cantidad = [];

  constructor(private reservaService: ReservaService, private medicamentoService: MedicamentoService) {

  }

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe((res: Reserva[]) => {
      this.reservas = [...res];

      this.reservas.forEach(
        re => {
          const aux: Product[] = [];
          const list = re.id_medicamentos.split(',');
          const cant = re.cantidad.split(',');
          list.forEach(d => {
            this.medicamentoService.getMedicamento(d).subscribe(resp => {
              const product: Product = {product: resp.nombre_generico, cantidad: Number(cant.shift())};
              aux.push(product);
            });
            setTimeout(() => {
              re.producto = [...aux];
            }, 600);
          });
        }
      );

    });
  }

  entregar(reserva: Reserva): void {
    const reser = {entregado: true} as Reserva;
    this.reservaService.updateReserva(reserva.id, reser).subscribe(res => {
      console.log(res);
    });
    reserva.entregado = true;
  }

}
