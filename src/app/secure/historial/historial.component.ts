import {Component, OnInit} from '@angular/core';
import {VentaService} from '../../integration/services/venta.service';
import {Venta} from '../../integration/interfaces/venta.interface';
import {MedicamentoService} from '../../integration/services/medicamento.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  public historialList: Venta[] = [];
  public fechas: any[];
  public selectedDate = 13;
  public selectFactura = false;

  constructor(private historialService: VentaService, private medicamentoService: MedicamentoService) {
    this.historialService.getVentas().subscribe(res => {
      console.log(res);
      this.historialList = [...res];
      this.historialList.forEach(hist => {
        this.medicamentoService.getMedicamento(hist.id_producto).subscribe(med => {
          hist.nombre_producto = med.nombre_generico;
        });
      });
    });

    this.fechas = [
      {mes: 'enero', value: 0},
      {mes: 'febrero', value: 1},
      {mes: 'marzo', value: 2},
      {mes: 'abril', value: 3},
      {mes: 'mayo', value: 4},
      {mes: 'junio', value: 5},
      {mes: 'julio', value: 6},
      {mes: 'agosto', value: 7},
      {mes: 'septiembre', value: 8},
      {mes: 'octubre', value: 9},
      {mes: 'noviembre', value: 10},
      {mes: 'diciembre', value: 11},
    ];
  }

  ngOnInit(): void {
  }

}
