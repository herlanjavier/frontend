import {Component, OnInit} from '@angular/core';
import {faCapsules, faMapMarked, faRobot, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {Mensaje} from '../../integration/interfaces/Mensaje.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public capsulesIcon = faCapsules;
  public mapIcon = faMapMarked;
  public robotIcon = faRobot;
  public exitIcon = faTimesCircle;
  public mensaje = '';
  public listaMensajes: Mensaje[] = [];
  public cocoMensaje: Mensaje = {
    autor: 'Coco',
    texto: 'como estas',
  };
  public botActive = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  activeBot(): void {
    this.botActive = !this.botActive;
  }

  enviarMensaje(): void {
    const msg: Mensaje = {
      autor: 'Herlan',
      texto: this.mensaje,
    };
    this.listaMensajes.push(msg);
    this.mensaje = '';
  }
}
