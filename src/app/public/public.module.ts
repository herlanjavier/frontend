import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {PublicComponent} from './public.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MapaComponent} from './mapa/mapa.component';
import {InfoComponent} from './info/info.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PublicComponent,
    MapaComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],

})
export class PublicModule {
}
