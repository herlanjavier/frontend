import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../../interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  public createdUser: Usuario;
  public loginUser: Usuario;

  constructor(private userService: UserService, private router: Router) {
    this.createdUser = {
      email: '',
      nombre: '',
      password: '',
    };
    this.loginUser = {
      email: '',
      nombre: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  crearUsuario() {
    this.userService.createUser(this.createdUser).subscribe((res) => {
      console.log('usuario creado: ', res);
    });
  }

  login(): void {
    this.userService.getUsers().subscribe((res) => {
      if (res) {
        for (const user of res) {
          if (
            this.verificarUsuario(
              user,
              this.loginUser.email,
              this.loginUser.password
            )
          ) {
            localStorage.setItem('userName', user.nombre);
            localStorage.setItem('userId', user.id + '');
            this.router.navigateByUrl('/servicio');
          }
        }
      }
    });
  }

  verificarUsuario(user: Usuario, email: string, password: string): boolean {
    return user.email === email && user.password === password;
  }
}
