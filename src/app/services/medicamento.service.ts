import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamento } from 'src/interfaces/medicamento.interface';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  constructor(private http: HttpClient) {}

  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(
      'http://127.0.0.1:8000/api/medicamentos'
    );
  }
}
