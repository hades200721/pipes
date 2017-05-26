import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormsModule } from '@angular/forms';
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
  val: string = '';
  queryParamsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams
      .subscribe(
      (queryParams: Params) => {
        this.val = queryParams[this.prop] || '';
      }
      );
  }

  onChange(event) {
    this.searchService.updateFilterParams(this.prop, event.target.value);
  }

}
