import {Component, OnInit} from '@angular/core';
import {MedicamentoService} from '../../integration/services/medicamento.service';
import {Medicamento} from '../../integration/interfaces/medicamento.interface';
import {faEdit, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
})
export class InventarioComponent implements OnInit {
  public editIcon = faEdit;
  public delIcon = faTrash;
  public createIcon = faPlus;
  public medicamentos: Medicamento[] = [];
  public medicamento: Medicamento = {} as Medicamento;

  constructor(private medicamentoService: MedicamentoService) {
    this.getMedicines();
  }

  ngOnInit(): void {
  }

  getMedicines(): void {
    this.medicamentoService.getMedicamentos().subscribe((res) => {
      this.medicamentos = [...res];
    });
  }

  fillData(medicamento: Medicamento): void {
    this.medicamento = {...medicamento};
  }

  createData(): void {
    this.medicamento.fecha_vencimiento = new Date(this.medicamento.fecha_vencimiento);
    this.medicamento.nombre = '';
    this.medicamento.item = '';
    this.medicamentoService.postMedicamento(this.medicamento).subscribe((res) => {
      console.log(res);
      if (res) {
        this.getMedicines();
      }
    });
  }

  editData(): void {
    if (this.medicamento.id != null) {
      this.medicamentoService.updateMedicamento(this.medicamento.id, this.medicamento).subscribe((res) => {
        this.getMedicines();
      });
    }
  }

  delData(): void {
    if (this.medicamento.id != null) {
      this.medicamentoService.delMedicamento(this.medicamento.id).subscribe((res) => {
        this.getMedicines();
      });
    }
  }

  alerta(medicamento: Medicamento): string {
    if (medicamento.cantidad && medicamento.cantidad < 10) {
      return 'agotado';
    }
    const hoy = new Date();
    const venc = new Date(medicamento.fecha_vencimiento);
    const res = venc.getTime() - hoy.getTime();
    if ((res / (1000 * 60 * 60 * 24)) < 10) {
      return 'vencido';
    }
    return '';
  }
}
