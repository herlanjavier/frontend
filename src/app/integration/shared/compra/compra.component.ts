import {Component, Input, OnInit} from '@angular/core';
import {Compra} from '../../interfaces/compra.interface';
import {Medicamento} from '../../interfaces/medicamento.interface';
import {MedicamentoService} from '../../services/medicamento.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
  @Input() compras: Compra[] = [];
  public total = 0;

  constructor(private medicamentoService: MedicamentoService, private router: Router) {
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
      this.medicamentoService.getMedicamento(comp.idMedicamento).subscribe(res1 => {
        const medicine = {...res1};
        // @ts-ignore
        medicine.cantidad -= comp.cantidad;
        this.medicamentoService.updateMedicamento(comp.idMedicamento, medicine).subscribe(res => {
          this.router.navigateByUrl('secure');
          console.log(res);
        });
      });
    });
  }

}

