import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Medicamento} from 'src/app/integration/interfaces/medicamento.interface';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  constructor(private http: HttpClient) {
  }

  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(
      'http://127.0.0.1:8000/api/medicamentos'
    );
  }

  getMedicamento(id: any): Observable<Medicamento> {
    return this.http.get<Medicamento>(
      `http://127.0.0.1:8000/api/medicamentos/${id}`
    );
  }

  postMedicamento(medicamento: any): Observable<Medicamento> {
    return this.http.post<Medicamento>(
      `http://127.0.0.1:8000/api/medicamentos`, medicamento
    );
  }

  updateMedicamento(id: string, body: Medicamento): Observable<Medicamento> {
    return this.http.put<Medicamento>(
      `http://127.0.0.1:8000/api/medicamentos/${id}`, body
    );
  }

  delMedicamento(id: string): Observable<Medicamento> {
    return this.http.delete<Medicamento>(
      `http://127.0.0.1:8000/api/medicamentos/${id}`
    );
  }

}
