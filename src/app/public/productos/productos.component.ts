import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft, faPills, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Medicamento } from '../../integration/interfaces/medicamento.interface';
import { MedicamentoService } from '../../integration/services/medicamento.service';

@Component({
	selector: 'app-productos',
	templateUrl: './productos.component.html',
	styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
	public medicamentos: Medicamento[] = [];
	public pillIcon = faPills;
	public backIcon = faChevronCircleLeft;
	public shopIcon = faShoppingCart;
	public item = '';
	public buyItems: Medicamento[] = [];
	public cantidad = 0;
	public comprarSW = false;

	constructor(private medicamentoService: MedicamentoService) {}

	ngOnInit(): void {
		this.medicamentoService.getMedicamentos().subscribe((res) => {
			this.medicamentos = [...res];
		});
	}

	addToCart(medicamento: Medicamento): void {
		this.buyItems.push(medicamento);
		this.cantidad = this.buyItems.length;
	}

	comprar(): void {
		this.comprarSW = true;
	}
}
