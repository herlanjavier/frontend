import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../interfaces/usuario.interface';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  createUser(user: Usuario): Observable<any> {
    user.password = user.nombre + user.paterno;
    return this.http.post<any>(`${environment.backURL}/usuarios`, user);
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.backURL}/usuarios`);
  }

  deleteUser(user: Usuario): Observable<any> {
    return this.http.delete<any>(`${environment.backURL}/usuarios/${user.id}`);
  }

  updateUser(id: any, body: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${environment.backURL}/usuarios/${id}`, body
    );
  }

  login(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.backURL}/usuarios/login`, user);
  }
}
