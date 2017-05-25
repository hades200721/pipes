import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { SearchService } from '../search-form/search-form.service';

@Component({
  selector: 'app-dropdown-box',
  templateUrl: './dropdown-box.component.html',
  styleUrls: ['./dropdown-box.component.css']
})
export class DropdownBoxComponent implements OnInit {

  @Input('title') title: string;
  @Input('data') list: string[];
  @Input('property') prop: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onChange(event) {
    this.searchService.updateFilterParams(this.prop, event.target.value);
  }

}
