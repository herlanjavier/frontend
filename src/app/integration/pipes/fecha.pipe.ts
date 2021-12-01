import {Pipe, PipeTransform} from '@angular/core';
import {Venta} from '../interfaces/venta.interface';

@Pipe({
  name: 'fecha',
})
export class FechaPipe implements PipeTransform {
  transform(value: Venta[], arg: number): any {
    const resultFilter: Venta[] = [];
    if (Number(arg) === 13) {
      return value;
    }
    value.forEach((item) => {
      const fecha = new Date(item.fecha_venta);
      if (fecha.getMonth() === Number(arg)) {
        resultFilter.push(item);
      }
    });
    return resultFilter;
  }
}
