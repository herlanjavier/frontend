import {Pipe, PipeTransform} from '@angular/core';
import {Medicamento} from '../interfaces/medicamento.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Medicamento[], arg: string): any {
    const resultFilter: Medicamento[] = [];
    value.forEach((item) => {
      if (item.nombre_generico.toLowerCase().includes(arg.toLowerCase())) {
        resultFilter.push(item);
      }
    });
    return resultFilter;
  }
}
