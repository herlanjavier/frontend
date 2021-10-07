import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../integration/interfaces/usuario.interface';
import {faEdit, faTrash, faUserPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  public createIcon = faUserPlus;
  public updateIcon = faEdit;
  public delIcon = faTrash;
  public usuarios: Usuario[] = [];
  public user: Usuario = {} as Usuario;
  public inputView = false;
  public createBtn = false;
  public updateBtn = false;

  constructor() {
  }

  ngOnInit(): void {
    const user1: Usuario = {
      id: 1,
      email: 'herlan@gmail.com',
      nombre: 'herlan',
      paterno: 'castro',
      materno: 'acero',
      password: 'dasd',
    };
    const user2: Usuario = {
      id: 2,
      email: 'mario@gmail.com',
      nombre: 'mario',
      paterno: 'bros',
      materno: 'delgado',
      password: 'daassd',
    };
    this.usuarios.push(user1);
    this.usuarios.push(user2);
  }

  agregarView(): void {
    this.inputView = true;
    this.createBtn = true;
    this.updateBtn = false;
  }

  agregar(): void {
    this.usuarios.push(this.user);
    this.inputView = false;
    this.user = {} as Usuario;
  }

  editarView(user: Usuario): void {
    this.inputView = true;
    this.createBtn = false;
    this.updateBtn = true;
    this.user = {...user};
  }

  editar(): void {
    this.usuarios.forEach(user => {
      if (user.id === this.user.id) {
        user.nombre = this.user.nombre;
        user.paterno = this.user.paterno;
        user.materno = this.user.materno;
        user.email = this.user.email;
      }
    });
    this.inputView = false;
    this.user = {} as Usuario;
  }

  eliminar(usuario: Usuario): void {
    const position = this.usuarios.indexOf(usuario);
    this.usuarios.splice(position, 1);
  }

}
