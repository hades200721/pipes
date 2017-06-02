import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../search-form/search-form.service';
import { Country } from '../shared/country.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  val: string = '';
  country: Country[];
  searchVal: Subject<string> = new Subject<string>();
  fragmentSubscription: Subscription;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // this.searchInput.nativeElement.value = this.route.snapshot.params['name'];

    this.fragmentSubscription = this.route.fragment
      .subscribe(
      (fragment: string) => {
        this.val = fragment;
        if (this.val) {
          this.onSearch();
        }
      }
      );
  }

  onKeyUp() {
    this.router.navigate([''], { fragment: this.val });
  }

  onSearch() {
    this.searchService.getInfo(this.val)
      .subscribe(
      (response: Country[]) => {
        this.searchService.setCountries(response);
      },
      (error) => {
        console.warn(error.json());
        this.router.navigate(['no-countries']);
      }
      );
  }

  ngOnDestroy() {
    this.fragmentSubscription.unsubscribe();
  }

}
