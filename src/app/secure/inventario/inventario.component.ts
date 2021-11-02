import {Component, OnInit} from '@angular/core';
import {MedicamentoService} from '../../integration/services/medicamento.service';
import {Medicamento} from '../../integration/interfaces/medicamento.interface';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  public editIcon = faEdit;
  public delIcon = faTrash;
  public medicamentos: Medicamento[] = [];
  public medicamento: Medicamento = {} as Medicamento;

  constructor(private medicamentoService: MedicamentoService) {
    this.getMedicines();
  }

  ngOnInit(): void {
  }

  getMedicines(): void {
    this.medicamentoService.getMedicamentos().subscribe(res => {
      this.medicamentos = [...res];
    });
  }

  fillData(medicamento: Medicamento): void {
    this.medicamento = {...medicamento};
  }

  editData(): void {
    if (this.medicamento.id != null) {
      this.medicamentoService.updateMedicamento(this.medicamento.id, this.medicamento).subscribe(res => {
        this.getMedicines();
      });
    }
  }

  delData(): void {
    if (this.medicamento.id != null) {
      this.medicamentoService.delMedicamento(this.medicamento.id).subscribe(res => {
        console.log('eliminado')
        this.getMedicines();
      });
    }
  }
}
