import {Component, OnInit} from '@angular/core';
import {MedicamentoService} from '../../integration/services/medicamento.service';
import {Medicamento} from '../../integration/interfaces/medicamento.interface';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  public medicamentos: Medicamento[] = [];

  constructor(private medicamentoService: MedicamentoService) {
    this.medicamentoService.getMedicamentos().subscribe(res => {
      this.medicamentos = [...res];
    });
  }

  ngOnInit(): void {
  }

}
