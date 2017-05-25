import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../search-form/search-form.service';
import { Country } from '../shared/country.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('input') searchInput: ElementRef;
  country: Country[];
  searchVal: Subject<string> = new Subject<string>();

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // http://localhost:4200/canada?language=russian&continent=europe
    // console.info('query params: ' + this.route.snapshot.queryParams);
    // console.info('query params: ' + this.route.snapshot.params);
    // setTimeout(
    //   () => {
    //     for (let param in this.route.snapshot.queryParams) {
    //       if (param === 'search') {
    //         this.searchInput.nativeElement.value = this.route.snapshot.queryParams[param];
    //         this.onKey();
    //       }
    //     }
    //   }, 2000);
  }

  onSearch() {
    this.searchService.getInfo(this.searchInput.nativeElement.value)
      .subscribe(
      (response: Country[]) => {
        this.searchService.setCountries(response);
      },
      (error) => console.info(error)
      );
  }

}
