import { 
  Component, 
  OnInit,
  Input
 } from '@angular/core';

@Component({
  selector: 'app-dropdown-box',
  templateUrl: './dropdown-box.component.html',
  styleUrls: ['./dropdown-box.component.css']
})
export class DropdownBoxComponent implements OnInit {

  @Input('title') title: string;
  @Input('data') list: string[];
  constructor() { }

  ngOnInit() {
  }

}
