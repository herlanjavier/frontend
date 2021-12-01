import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterPipe} from './pipes/filter.pipe';
import {ProductsComponent} from './shared/products/products.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";
import {CompraComponent} from './shared/compra/compra.component';
import {FechaPipe} from './pipes/fecha.pipe';
import {FacturaPipe} from './pipes/factura.pipe';


@NgModule({
  declarations: [
    FilterPipe,
    ProductsComponent,
    CompraComponent,
    FechaPipe,
    FacturaPipe
  ],
  exports: [
    FilterPipe,
    ProductsComponent,
    CompraComponent,
    FechaPipe,
    FacturaPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class IntegrationModule {
}
