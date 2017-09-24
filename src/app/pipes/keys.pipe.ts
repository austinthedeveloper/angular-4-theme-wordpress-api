import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value, args: string[]): any {
    _.map(value, (item) => {
      console.log('item', item);
      return item;
    });

    return value;
  }

}
