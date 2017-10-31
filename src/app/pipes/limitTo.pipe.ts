import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any[], args: number = 10): any {
    const res = [];
    _.forEach(value, (item, index) => {
      if (index < args) {
        res.push(item);
      }
    });

    return res;
  }

}
