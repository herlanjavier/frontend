import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: Usuario): Observable<any> {
    user.password = user.nombre + user.paterno;
    return this.http.post<any>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/usuarios`,
      user
    );
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/usuarios`
    );
  }

  deleteUser(user: Usuario): Observable<any> {
    return this.http.delete<any>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/usuarios/${user.id}`
    );
  }

  updateUser(id: any, body: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/usuarios/${id}`,
      body
    );
  }

  login(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/usuarios/login`,
      user
    );
  }
}
