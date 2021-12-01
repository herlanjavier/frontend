import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecureComponent} from './secure.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {VentasComponent} from './ventas/ventas.component';
import {ReservasComponent} from './reservas/reservas.component';
import {InventarioComponent} from './inventario/inventario.component';
import {HistorialComponent} from './historial/historial.component';

const routes: Routes = [
  {
    path: '', component: SecureComponent,
    children: [
      {
        path: '', redirectTo: 'usuarios'
      },
      {
        path: 'usuarios', component: UsuariosComponent
      },
      {
        path: 'ventas', component: VentasComponent
      },
      {
        path: 'reservas', component: ReservasComponent
      },
      {
        path: 'inventario', component: InventarioComponent
      },
      {
        path: 'historial', component: HistorialComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule {
}
