import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../search-form/search-form.service';
import { Country } from '../shared/country.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  country: Country[];
  searchVal: Subject<string> = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.country = [
      new Country('Israel', 'Jerusalem', 8, 250),
      new Country('United Kingdom', 'London', 70, 8000),
      new Country('France', 'Paris', 65, 10000),
      new Country('Russia', 'Moscow', 150, 180000)      
      ];
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

    setData() {
    this.searchService.storeInfo(this.country)
      .subscribe(
      (response) => console.info(response),
      (error) => console.info(error)
      );
  }

  onKey(val) {
    this.searchService.updateQuerySearch(val);
  }
}
