import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/country.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

  country: Country
  constructor() {
    this.country = new Country('Israel', 'Jerusalem', 8, 250);
   }

  ngOnInit() {
  }

}
