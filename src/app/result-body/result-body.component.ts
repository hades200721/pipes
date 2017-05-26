import { Component, OnInit, OnDestroy } from '@angular/core';;
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../search-form/search-form.service';

@Component({
  selector: 'app-result-body',
  templateUrl: './result-body.component.html',
  styleUrls: ['./result-body.component.css']
})
export class ResultBodyComponent implements OnInit, OnDestroy {

  languages: string[] = [];
  regions: string[] = [];
  langSubscription: Subscription;
  regionSubscription: Subscription;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
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
  }

}
