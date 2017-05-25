import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: any, querySearch: any): any {
    if (value.length === 0 || querySearch === '') {
      return value;
    }
    const resultArray = [];
    value.forEach(element => {
      if ((<string>element.name).toLowerCase().indexOf(querySearch.toLowerCase()) !== -1) {
        resultArray.push(element);
      }
    });
    return resultArray;
  }

}
