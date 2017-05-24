import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { SearchService } from '../search-form/search-form.service';
import { Country } from '../shared/country.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

  querySearch: string = '';
  countries: Country[];

  constructor(private searchService: SearchService) {
    this.countries = [
      new Country('Israel', 'Jerusalem', 8, 250),
      new Country('United Kingdom', 'London', 70, 8000),
      new Country('France', 'Paris', 65, 10000),
      new Country('Russia', 'Moscow', 150, 180000)
    ];
  }

  ngOnInit() {
    this.searchService.getInfo()
      .subscribe(
      (response: any[]) => {
        console.info(response);
      },
      (error) => console.info(error)
      );

      this.searchService.querySearchChanged
      .subscribe(
        (query: string) => {
          this.querySearch = query;
        }
      )
  }

}
