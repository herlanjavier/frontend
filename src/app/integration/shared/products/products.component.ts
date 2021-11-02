import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Medicamento} from '../../interfaces/medicamento.interface';
import {Compra} from '../../interfaces/compra.interface';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {MedicamentoService} from '../../services/medicamento.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() filtro = '';
  @Output() compra = new EventEmitter<Compra>();
  public medicamentos: Medicamento[] = [];
  public addIcon = faPlus;

  constructor(private medicamentoService: MedicamentoService) {
    this.medicamentoService.getMedicamentos().subscribe(res => this.medicamentos = [...res]);
  }

  ngOnInit(): void {
  }

  addItem(medicamento: Medicamento): void {
    const compra = {idMedicamento: medicamento.id, cantidad: medicamento.cant_compra} as Compra;
    if (medicamento.cant_compra && medicamento.cant_compra > 0) {
      this.compra.emit(compra);
    }
  }
}
