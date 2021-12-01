import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecureRoutingModule} from './secure-routing.module';
import {SecureComponent} from './secure.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {VentasComponent} from './ventas/ventas.component';
import {ReservasComponent} from './reservas/reservas.component';
import {InventarioComponent} from './inventario/inventario.component';
import {FormsModule} from '@angular/forms';
import {IntegrationModule} from "../integration/integration.module";
import { HistorialComponent } from './historial/historial.component';


@NgModule({
  declarations: [
    SecureComponent,
    UsuariosComponent,
    VentasComponent,
    ReservasComponent,
    InventarioComponent,
    HistorialComponent
  ],
    imports: [
        CommonModule,
        SecureRoutingModule,
        FontAwesomeModule,
        FormsModule,
        IntegrationModule
    ]
})
export class SecureModule {
}
