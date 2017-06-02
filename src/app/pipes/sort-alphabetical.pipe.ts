import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortAlphabetical'
})
export class SortAlphabeticalPipe implements PipeTransform {

    transform(value: string[]): any {
        return value.sort((a, b) => {
            if (a < b)
                return -1;
            return 1;
        });
    }

}