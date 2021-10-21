import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Medicamento} from '../integration/interfaces/medicamento.interface';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  private buyItem: Subject<Medicamento[]>;

  constructor() {
    this.buyItem = new Subject<Medicamento[]>();
  }

  getUpdatedData$(): Observable<Medicamento[]> {
    return this.buyItem.asObservable();
  }

  setUpdatedData$(action: Medicamento[]): void {
    this.buyItem.next(action);
  }
}
