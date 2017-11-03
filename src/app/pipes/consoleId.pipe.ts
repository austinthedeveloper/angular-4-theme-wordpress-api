import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'consoleId'
})
export class ConsoleIdPipe implements PipeTransform {
  private list = [
    {
      ID: '1',
      Name: 'Mega Drive'
    },
    {
      ID: '2',
      Name: 'Nintendo 64'
    },
    {
      ID: '3',
      Name: 'SNES'
    },
    {
      ID: '4',
      Name: 'Gameboy'
    },
    {
      ID: '5',
      Name: 'Gameboy Advance'
    },
    {
      ID: '6',
      Name: 'Gameboy Color'
    },
    {
      ID: '7',
      Name: 'NES'
    },
    {
      ID: '8',
      Name: 'PC Engine'
    },
    {
      ID: '9',
      Name: 'Sega CD'
    },
    {
      ID: '10',
      Name: '32X'
    },
    {
      ID: '11',
      Name: 'Master System'
    },
    {
      ID: '12',
      Name: 'Xbox 360'
    },
    {
      ID: '13',
      Name: 'Atari'
    },
    {
      ID: '14',
      Name: 'Neo Geo'
    }
  ];

  transform(value: any = '', args?: any): any {
    let res = '';
    if (value) {
      const obj = _.filter(this.list, (i) => {
        return i.Name === value;
      })[0];
      res = obj.ID;
    }
    return res;
  }

}
