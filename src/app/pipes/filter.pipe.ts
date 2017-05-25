import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      let match = true;
      for (const prop in filterString) {
        if (item[prop] !== filterString[prop]) {
          match = false;
          break;
        }
      }
      if (match) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
