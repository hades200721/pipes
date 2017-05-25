import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  languages = ['english', 'spanish', 'french', 'hebrew', 'russian'];
  continent = ['europe', 'asia', 'euro-asia', 'america', 'africa'];

  constructor() { }

  ngOnInit() {
  }

}
