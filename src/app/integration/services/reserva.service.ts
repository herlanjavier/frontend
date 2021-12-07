import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../interfaces/reserva.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  constructor(private http: HttpClient) {}

  createReserva(reserva: Reserva): Observable<any> {
    return this.http.post<any>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/reservas`,
      reserva
    );
  }

  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/reservas`
    );
  }

  deleteReserva(reserva: Reserva): Observable<any> {
    return this.http.delete<any>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/reservas/${reserva.id}`
    );
  }

  updateReserva(id: string | undefined, body: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/reservas/${id}`,
      body
    );
  }
}
