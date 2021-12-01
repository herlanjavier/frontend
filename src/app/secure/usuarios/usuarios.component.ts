import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../integration/interfaces/usuario.interface';
import {faEdit, faTrash, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../../integration/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
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

  constructor(private userService: UserService) {
    this.getUsers();
  }

  ngOnInit(): void {
  }


  getUsers(): void {
    this.userService.getUsers().subscribe((usr) => {
      this.usuarios = [...usr];
    });
  }

  agregarView(): void {
    this.inputView = true;
    this.createBtn = true;
    this.updateBtn = false;
  }

  agregar(): void {
    this.userService.createUser(this.user).subscribe(res => {
      this.getUsers();
    });
    this.inputView = false;
    this.user = {} as Usuario;
  }

  editarView(user: Usuario): void {
    this.inputView = true;
    this.createBtn = false;
    this.updateBtn = true;
    this.user = {...user};
  }

  editar(usuario: Usuario): void {
    this.userService.updateUser(usuario.id, usuario).subscribe(res => {
      if (res) {
        this.getUsers();
      }
    });
    this.inputView = false;
  }

  eliminar(usuario: Usuario): void {
    this.userService.deleteUser(usuario).subscribe(res => {
      if (res) {
        this.getUsers();
      }
    });
  }
}
