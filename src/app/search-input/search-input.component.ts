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
    // this.country = [
    //   new Country('Israel', 'asia', 'hebrew', 'Jerusalem', 8, 250),
    //   new Country('United Kingdom', 'europe', 'english', 'London', 70, 8000),
    //   new Country('France', 'europe', 'french', 'Paris', 65, 10000),
    //   new Country('Spain', 'europe', 'spanish', 'Madrid', 150, 15000),
    //   new Country('Chile', 'america', 'spanish', 'Santiago', 120, 20000),
    //   new Country('Russia', 'euro-asia', 'russian', 'Moscow', 150, 180000),
    //   new Country('Canada', 'america', 'english', 'Ottawa', 30, 150000),
    //   new Country('United states of america', 'america', 'english', 'Washington', 300, 110000),
    //   new Country('Estonia', 'europe', 'russian', 'Tallinn', 30, 30000),
    //   new Country('South Africa', 'africa', 'english', 'Pretoria', 55, 50000) 
    //   ];
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
    // To be changed, not filter but http service setting param
    this.searchService.updateQuerySearch(val);
  }
}
