import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  createUser(user: Usuario): Observable<any> {
    user.password = user.nombre + user.paterno;
    return this.http.post<any>('http://127.0.0.1:8000/api/usuarios', user);
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://127.0.0.1:8000/api/usuarios');
  }

  deleteUser(user: Usuario): Observable<any> {
    return this.http.delete<any>(`http://127.0.0.1:8000/api/usuarios/${user.id}`);
  }

  updateUser(id: any, body: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `http://127.0.0.1:8000/api/usuarios/${id}`, body
    );
  }

  login(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8000/api/usuarios/login', user);
  }
}
