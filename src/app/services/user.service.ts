import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/usuarios', user);
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://127.0.0.1:8000/api/usuarios');
  }
}
