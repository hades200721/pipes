import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  languages = ['es', 'en', 'fr', 'he'];
  geners = ['comedy', 'drama', 'sci-fi', 'horror'];

  constructor() { }

  ngOnInit() {
  }

}
