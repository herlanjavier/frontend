import {Component, Input, OnInit} from '@angular/core';
import {Compra} from '../../interfaces/compra.interface';
import {Medicamento} from '../../interfaces/medicamento.interface';
import {MedicamentoService} from '../../services/medicamento.service';
import {Router} from '@angular/router';
import {Venta} from '../../interfaces/venta.interface';
import {VentaService} from '../../services/venta.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
  @Input() compras: Compra[] = [];
  private venta: Venta = {} as Venta;
  public total = 0;

  constructor(private medicamentoService: MedicamentoService, private router: Router, private historyService: VentaService) {
  }

  ngOnInit(): void {
    this.compras.forEach(item => {
      this.medicamentoService.getMedicamento(item.idMedicamento).subscribe((res: Medicamento) => {
        item.total = item.cantidad * Number(res.precio);
        this.total += item.total;
        item.nombre = res.nombre_generico;
      });
    });

  }

  pagar(compras: Compra[]): void {
    compras.forEach(comp => {
      this.venta = {
        nombre_producto: comp.nombre,
        cantidad: comp.cantidad,
        fecha_venta: (new Date()).toString(),
        costo: Number(comp.total),
        id_producto: comp.idMedicamento
      };
      this.historyService.createVenta(this.venta).subscribe(res => console.log);

      this.medicamentoService.getMedicamento(comp.idMedicamento).subscribe(res1 => {
        const medicine = {...res1};
        // @ts-ignore
        medicine.cantidad -= comp.cantidad;
        this.medicamentoService.updateMedicamento(comp.idMedicamento, medicine).subscribe(res => {
          this.router.navigateByUrl('secure');
        });
      });
    });
  }

}

