import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../../services/medicamento.service';
import { Medicamento } from '../../integration/interfaces/medicamento.interface';
import { faPills } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  public medicamentos: Medicamento[] = [];
  public pillIcon = faPills;

  constructor(private medicamentoService: MedicamentoService) {}

  ngOnInit(): void {
    this.medicamentoService.getMedicamentos().subscribe((res) => {
      this.medicamentos = [...res];
    });
  }
}
