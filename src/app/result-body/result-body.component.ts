import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../search-form/search-form.service';
import { Country } from '../shared/country.model';

@Component({
  selector: 'app-result-body',
  templateUrl: './result-body.component.html',
  styleUrls: ['./result-body.component.css']
})
export class ResultBodyComponent implements OnInit, OnDestroy {

  filteredCount = { count: 0 };
  countries: Country[] = [];
  languages: string[] = [];
  regions: string[] = [];
  langSubscription: Subscription;
  regionSubscription: Subscription;
  resultSubscription: Subscription;
  queryParamsSubscription: Subscription;
  filterParams: any[] = [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router) { }

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


    // subscribing languages whenever languages list has been changes, we update data sent to dropdown component
    this.langSubscription =
      this.searchService.languagesChanged
        .subscribe(
        (languages: string[]) => {
          this.languages = languages;
        }
        )

    // subscribing continentes whenever continentes list has been changes, we update data sent to dropdown component
    this.regionSubscription =
      this.searchService.regionsChanged
        .subscribe(
        (regions: string[]) => {
          this.regions = regions;
        }
        )
  }

  concateLanguages(country) {
    let strBuilder = '';
    country.languages.forEach(element => {
      strBuilder = strBuilder + ', ' + element.name;
    });
    return strBuilder.slice(2);
  }

  // unsubscribing from our custom subject/observable
  ngOnDestroy() {
    this.langSubscription.unsubscribe();
    this.regionSubscription.unsubscribe();
    this.resultSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

}
