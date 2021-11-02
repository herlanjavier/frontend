import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductsComponent } from './shared/products/products.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";
import { CompraComponent } from './shared/compra/compra.component';



@NgModule({
    declarations: [
        FilterPipe,
        ProductsComponent,
        CompraComponent
    ],
  exports: [
    FilterPipe,
    ProductsComponent,
    CompraComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class IntegrationModule { }
