import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamento } from 'src/app/integration/interfaces/medicamento.interface';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  constructor(private http: HttpClient) {}

  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/medicamentos`
    );
  }

  getMedicamento(id: any): Observable<Medicamento> {
    return this.http.get<Medicamento>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/medicamentos/${id}`
    );
  }

  postMedicamento(medicamento: any): Observable<Medicamento> {
    return this.http.post<Medicamento>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/medicamentos`,
      medicamento
    );
  }

  updateMedicamento(id: string, body: Medicamento): Observable<Medicamento> {
    return this.http.put<Medicamento>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/medicamentos/${id}`,
      body
    );
  }

  delMedicamento(id: string): Observable<Medicamento> {
    return this.http.delete<Medicamento>(
      `https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api/medicamentos/${id}`
    );
  }
}
