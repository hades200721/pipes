import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../../search-form/search-form.service';
import { Country } from '../../shared/country.model';
import { properties } from '../../shared/variables.const';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit, OnDestroy {

  filterParams: any[] = [];
  countries: Country[] = [];
  itemProperties = [];
  queryParamsSubscription: Subscription;
  resultSubscription: Subscription;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router) {
    this.itemProperties = properties;
  }

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


    this.queryParamsSubscription = this.route.queryParams
      .subscribe(
      (queryParams: Params) => {
        let lang = queryParams['languages'];
        this.filterParams['languages'] = lang || '';
        let region = queryParams['region'];
        this.filterParams['region'] = region || '';
      }
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
    this.queryParamsSubscription.unsubscribe();
    this.resultSubscription.unsubscribe();
  }

}
