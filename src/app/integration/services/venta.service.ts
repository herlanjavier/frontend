import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../interfaces/venta.interface';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  constructor(private http: HttpClient) {}

  createVenta(venta: any): Observable<any> {
    return this.http.post<any>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/ventas`,
      venta
    );
  }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/ventas`
    );
  }
}
