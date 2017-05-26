import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { SearchService } from '../../search-form/search-form.service';
import { Country } from '../../shared/country.model';
import { properties } from '../../shared/variables.const';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

  querySearch: string = '';
  filterParams: any[] = [];
  countries: Country[] = [];
  params = []

  constructor(private searchService: SearchService) { 
    this.params = properties;
  }

  ngOnInit() {
    this.searchService.resultChanged
      .subscribe(
      (countries: any) => {
        this.countries = countries;
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
