import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-form/search-form.service';
// import { Country } from '../shared/country.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  // country: Country;

  constructor(private searchService: SearchService) {
    // this.country = new Country('Israel', 'Jerusalem', 8, 250);
  }

  ngOnInit() {
  }

  onSearch(input) {
    const params = { 'search': input.value };
    this.searchService.getInfo()
      .subscribe(
      (response) => console.info(response),
      (error) => console.info(error)
      );
  }

  //   onSearch(value) {
  //   const data = { 'search': value };
  //   this.searchService.getInfo()
  //     .subscribe(
  //     (response) => console.info(response),
  //     (error) => console.info(error)
  //     );
  // }
}
