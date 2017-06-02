import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../search-form/search-form.service';

@Component({
  selector: 'app-result-body',
  templateUrl: './result-body.component.html',
  styleUrls: ['./result-body.component.css']
})
export class ResultBodyComponent implements OnInit, OnDestroy {

  filteredCount = { count: 0 };
  languages: string[] = [];
  regions: string[] = [];
  langSubscription: Subscription;
  regionSubscription: Subscription;
  queryParamsSubscription: Subscription;
  filterParams: any[] = [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.queryParamsSubscription = this.route.queryParams
      .subscribe(
      (queryParams: Params) => {
        let lang = queryParams['languages'];
        this.filterParams['languages'] = lang || ''; // if no language passed then default (empty string)
        let region = queryParams['region'];
        this.filterParams['region'] = region || ''; // if no region passed then default (empty string)
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

  // unsubscribing from our custom subject/observable
  ngOnDestroy() {
    this.langSubscription.unsubscribe();
    this.regionSubscription.unsubscribe();    
    this.queryParamsSubscription.unsubscribe();
  }

}
