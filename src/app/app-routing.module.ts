import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: 'servicio', component: ServicioComponent },
  { path: 'oferta', component: OfertaComponent },
  { path: 'producto', component: ProductosComponent },
  { path: 'consulta', component: ConsultasComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'servicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
