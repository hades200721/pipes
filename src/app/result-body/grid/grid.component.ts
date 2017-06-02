import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../../search-form/search-form.service';
import { Country } from '../../shared/country.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnDestroy {

  filteredCount = { count: 0 };
  @Input('filter') filterParams;
  countries: Country[] = [];
  resultSubscription: Subscription;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.resultSubscription = this.searchService.resultChanged
      .subscribe(
      (countries: any) => {
        this.countries = countries;
        // set lagnuages array as string
        this.countries.forEach(elm => {
          elm['languages'] = this.concateLanguages(elm);
        })

      },
      (error) => console.info(error)
      );
  }

  concateLanguages(country) {
    let strBuilder = '';
    country.languages.forEach(element => {
      strBuilder = strBuilder + ', ' + element.name;
    });
    return strBuilder.slice(2);
  }

  ngOnDestroy() {
    this.resultSubscription.unsubscribe();
  }

}
