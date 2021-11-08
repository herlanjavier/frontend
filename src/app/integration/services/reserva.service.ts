import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Reserva} from '../interfaces/reserva.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) {
  }

  createReserva(reserva: Reserva): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/reservas', reserva);
  }

  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>('http://127.0.0.1:8000/api/reservas');
  }

  deleteReserva(reserva: Reserva): Observable<any> {
    return this.http.delete<any>(`http://127.0.0.1:8000/api/reservas/${reserva.id}`);
  }

  updateReserva(id: string | undefined, body: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(
      `http://127.0.0.1:8000/api/reservas/${id}`, body
    );
  }
}
