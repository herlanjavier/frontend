import {Component, OnInit} from '@angular/core';
import {faEdit, faPills, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Medicamento} from '../../integration/interfaces/medicamento.interface';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  public createIcon = faPills;
  public updateIcon = faEdit;
  public delIcon = faTrash;
  public medicamentos: Medicamento[] = [];
  public medicamento: Medicamento = {} as Medicamento;
  public inputView = false;
  public createBtn = false;
  public updateBtn = false;

  constructor() {
  }

  ngOnInit(): void {
    const medicamento1: Medicamento = {
      id: '1',
      nombre_generico: 'albus',
      nombre: 'paracetamol',
      laboratorio: 'INTI',
      medida: '500mg',
      tipo: 'tableta',
      precio: '1bs',
      item: '',
      dosis: '8hrs',
      descripcion: '',
      fecha_vencimiento: '10/12/2023',
    };
    const medicamento2: Medicamento = {
      id: '2',
      nombre_generico: '',
      nombre: 'iboprufeno',
      laboratorio: 'VITA',
      medida: '1g',
      tipo: 'tableta',
      precio: '1bs',
      item: '',
      dosis: '8hrs',
      descripcion: '',
      fecha_vencimiento: '17/03/2025',
    };
    this.medicamentos.push(medicamento1);
    this.medicamentos.push(medicamento2);
  }

  agregarView(): void {
    this.inputView = true;
    this.createBtn = true;
    this.updateBtn = false;
  }

  agregar(): void {
    this.medicamentos.push(this.medicamento);
    this.inputView = false;
    this.medicamento = {} as Medicamento;
  }

  editarView(medicamento: Medicamento): void {
    this.inputView = true;
    this.createBtn = false;
    this.updateBtn = true;
    this.medicamento = {...medicamento};
  }

  editar(): void {
    this.medicamentos.forEach(medicamento => {
      if (medicamento.id === this.medicamento.id) {
        medicamento.nombre = this.medicamento.nombre;
        medicamento.laboratorio = this.medicamento.laboratorio;
        medicamento.medida = this.medicamento.medida;
        medicamento.tipo = this.medicamento.tipo;
      }
    });
    this.inputView = false;
    this.medicamento = {} as Medicamento;
  }

  eliminar(medicamento: Medicamento): void {
    const position = this.medicamentos.indexOf(medicamento);
    this.medicamentos.splice(position, 1);
  }

}
