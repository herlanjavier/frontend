import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../integration/interfaces/venta.interface';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  constructor(private http: HttpClient) {}

  createVenta(venta: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/ventas', venta);
  }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>('http://127.0.0.1:8000/api/ventas');
  }
}
