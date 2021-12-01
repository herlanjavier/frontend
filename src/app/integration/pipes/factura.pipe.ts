import {Pipe, PipeTransform} from '@angular/core';
import {Venta} from '../interfaces/venta.interface';

@Pipe({
  name: 'factura'
})
export class FacturaPipe implements PipeTransform {
  transform(value: Venta[], args: boolean): any {
    const resultFilter: Venta[] = [];
    if (args) {
      value.forEach((item) => {
        if (item.costo > 5) {
          resultFilter.push(item);
        }
      });
    } else {
      value.forEach((item) => {
        if (item.costo < 5) {
          resultFilter.push(item);
        }
      });
    }
    return resultFilter;
  }

}
