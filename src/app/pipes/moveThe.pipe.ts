import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moveThe'
})
export class MoveThePipe implements PipeTransform {
  private pattern: RegExp = /(.)+, The/g;

  transform(value: any, args?: any): any {
    if (value && this.pattern.test(value)) {
      value = value.replace(', The', '');
      value = `The ${value}`;
    }
    return value;
  }
}
