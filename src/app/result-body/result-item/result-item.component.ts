import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../../search-form/search-form.service';
import { properties } from '../../shared/variables.const';
import { Country } from '../../shared/country.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit, OnDestroy {

  @Input('data') country: Country;
  itemProperties = [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router) {
    this.itemProperties = properties;
  }

  ngOnInit() {}

  ngOnDestroy() {
  }

}
