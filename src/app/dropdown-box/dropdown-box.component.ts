import { 
  Component, 
  OnInit,
  Input
 } from '@angular/core';
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
    this.searchService.updateQuerySearch(event.target.value);
  }

}
