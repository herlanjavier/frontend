import {Component, OnInit} from '@angular/core';
import {
  faChevronLeft,
  faDollyFlatbed,
  faHistory,
  faShoppingCart,
  faStore,
  faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  public iconVenta = faStore;
  public iconUser = faUser;
  public iconReserva = faShoppingCart;
  public iconInventario = faDollyFlatbed;
  public iconHistorial = faHistory;
  public iconBack = faChevronLeft;
  public nombre = sessionStorage.getItem('serviUser');

  constructor() {
  }

  ngOnInit(): void {
  }

  exit(): void {
    sessionStorage.setItem('serviUser', '');
  }
}
