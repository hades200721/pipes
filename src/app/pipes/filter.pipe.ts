import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // change to false with cuation
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any, filteredCount: any): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    value.forEach(element => {
      let match = true;
      for (const prop in filterString) {
        if (filterString[prop] === '') { continue; }
        if (element[prop].indexOf(filterString[prop]) === -1) {
          match = false;
          break;
        }
      }
      if (match) {
        resultArray.push(element);
      }
    });
    filteredCount.count = resultArray.length;
    return resultArray;
  }

}
