import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../../interfaces/usuario.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  public createdUser: Usuario;
  public loginUser: Usuario;

  constructor(private userService: UserService) {
    this.createdUser = {
      email: '',
      nombre: '',
      password: '',
    };
    this.loginUser = {
      email: '',
      nombre: '',
    };
  }

  ngOnInit(): void {}

  crearUsuario() {
    console.log(this.createdUser);

    this.userService.createUser(this.createdUser).subscribe((res) => {
      console.log('usuario creado: ', res);
    });
  }
}
