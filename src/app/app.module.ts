import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortAlphabeticalPipe } from './pipes/sort-alphabetical.pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import { DropdownBoxComponent } from './dropdown-box/dropdown-box.component';
import { DropwdownToggle } from './shared/dropdown.directive';
import { SearchInputComponent } from './search-input/search-input.component';
import { ResultItemComponent } from './result-item/result-item.component';
import { SearchService } from './search-form/search-form.service';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortAlphabeticalPipe,
    SearchFormComponent,
    DropdownBoxComponent,
    DropwdownToggle,
    SearchInputComponent,
    ResultItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
