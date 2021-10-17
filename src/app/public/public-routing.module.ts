import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicComponent} from './public.component';
import {MapaComponent} from './mapa/mapa.component';
import {InfoComponent} from './info/info.component';
import {ProductosComponent} from './productos/productos.component';
import {ShopComponent} from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '', component: InfoComponent
      },
      {
        path: 'mapa', component: MapaComponent
      },
      {
        path: 'products', component: ProductosComponent
      },
      {
        path: 'shop', component: ShopComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {
}
