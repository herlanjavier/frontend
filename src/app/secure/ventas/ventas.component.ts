import {Component, OnInit} from '@angular/core';
import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Compra} from '../../integration/interfaces/compra.interface';
import {Medicamento} from "../../integration/interfaces/medicamento.interface";
import {MedicamentoService} from "../../integration/services/medicamento.service";


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {
  public filtro = '';
  public searchIcon = faSearch;
  public buyIcon = faShoppingCart;
  public items = 0;
  public compras: Compra[] = [];
  public swCompra = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  addItem(compra: Compra): void {
    this.compras.push(compra);
    this.items += compra.cantidad;
  }

  buy(): void {
    this.swCompra = true;
  }


}
