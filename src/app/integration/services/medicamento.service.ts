import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Medicamento} from 'src/app/integration/interfaces/medicamento.interface';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  constructor(private http: HttpClient) {
  }

  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(
      `${environment.backURL}/medicamentos`
    );
  }

  getMedicamento(id: any): Observable<Medicamento> {
    return this.http.get<Medicamento>(
      `${environment.backURL}/medicamentos/${id}`
    );
  }

  postMedicamento(medicamento: any): Observable<Medicamento> {
    return this.http.post<Medicamento>(
      `${environment.backURL}/medicamentos`, medicamento
    );
  }

  updateMedicamento(id: string, body: Medicamento): Observable<Medicamento> {
    return this.http.put<Medicamento>(
      `${environment.backURL}/medicamentos/${id}`, body
    );
  }

  delMedicamento(id: string): Observable<Medicamento> {
    return this.http.delete<Medicamento>(
      `${environment.backURL}/medicamentos/${id}`
    );
  }

}
