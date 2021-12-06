import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Reserva} from '../interfaces/reserva.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) {
  }

  createReserva(reserva: Reserva): Observable<any> {
    return this.http.post<any>(`${environment.backURL}/reservas`, reserva);
  }

  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${environment.backURL}/reservas`);
  }

  deleteReserva(reserva: Reserva): Observable<any> {
    return this.http.delete<any>(`${environment.backURL}/reservas/${reserva.id}`);
  }

  updateReserva(id: string | undefined, body: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(
      `${environment.backURL}/reservas/${id}`, body
    );
  }
}
