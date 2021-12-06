import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Venta} from '../interfaces/venta.interface';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  constructor(private http: HttpClient) {
  }

  createVenta(venta: any): Observable<any> {
    return this.http.post<any>(`${environment.backURL}/ventas`, venta);
  }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${environment.backURL}/ventas`);
  }
}
