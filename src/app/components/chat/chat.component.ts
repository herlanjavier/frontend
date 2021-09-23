import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../../interfaces/Mensaje.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public mensaje = '';
  public listaMensajes: Mensaje[] = [];
  public cocoMensaje: Mensaje = {
    autor: 'Coco',
    texto: 'como estas',
  };
  constructor() {}

  ngOnInit(): void {}
  enviarMensaje() {
    let msg: Mensaje = {
      autor: 'Herlan',
      texto: this.mensaje,
    };
    this.listaMensajes.push(msg);
    this.mensaje = '';
  }
  mostrarMensaje() {
    this.listaMensajes.push(this.cocoMensaje);
  }
}
