import { Component, OnInit } from '@angular/core';
import { faEdit, faPills, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Medicamento } from '../../integration/interfaces/medicamento.interface';
import { VentaService } from '../../integration/services/venta.service';
import { Venta } from '../../integration/interfaces/venta.interface';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {
  public createIcon = faPills;
  public updateIcon = faEdit;
  public delIcon = faTrash;
  public medicamento: Medicamento = {} as Medicamento;
  public ventas: Venta[] = [];
  public venta: Venta = {} as Venta;
  public inputView = false;
  public createBtn = false;
  public updateBtn = false;

  constructor(private ventaService: VentaService) {
    this.ventaService.getVentas().subscribe((venta) => {
      console.log(venta);
      this.ventas = [...venta];
    });
  }

  ngOnInit(): void {}

  agregarView(): void {
    this.inputView = true;
    this.createBtn = true;
    this.updateBtn = false;
  }

  agregar(): void {
    this.ventas.push(this.venta);
    this.inputView = false;
    this.venta = {} as Venta;
  }

  editarView(venta: Venta): void {
    this.inputView = true;
    this.createBtn = false;
    this.updateBtn = true;
    this.venta = { ...venta };
  }

  editar(): void {
    // this.medicamentos.forEach((medicamento) => {
    //   if (medicamento.id === this.medicamento.id) {
    //     medicamento.nombre = this.medicamento.nombre;
    //     medicamento.laboratorio = this.medicamento.laboratorio;
    //     medicamento.medida = this.medicamento.medida;
    //     medicamento.tipo = this.medicamento.tipo;
    //   }
    // });
    // this.inputView = false;
    // this.medicamento = {} as Medicamento;
  }

  eliminar(venta: Venta): void {
    const position = this.ventas.indexOf(venta);
    this.ventas.splice(position, 1);
  }
}
