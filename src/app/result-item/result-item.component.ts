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
  filterParams: any[] = [];
  countries: Country[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getInfo()
      .subscribe(
      (response: Country[]) => {
        this.countries = response;
      },
      (error) => console.info(error)
      );

      this.searchService.querySearchChanged
      .subscribe(
        (query: any) => {
          this.querySearch = query;
        }
      )      
      this.searchService.filterParamsChanged
      .subscribe(
        (filterParams: any) => {
          this.filterParams = filterParams;
        }
      )
  }

}
