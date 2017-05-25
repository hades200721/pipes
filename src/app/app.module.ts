import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortAlphabeticalPipe } from './pipes/sort-alphabetical.pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import { DropdownBoxComponent } from './dropdown-box/dropdown-box.component';
import { DropwdownToggle } from './shared/dropdown.directive';
import { SearchInputComponent } from './search-input/search-input.component';
import { ResultItemComponent } from './search-form/result-item/result-item.component';
import { SearchService } from './search-form/search-form.service';

const appRoutes: Routes = [
 { path: '**', component: SearchFormComponent }, 
]
@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
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
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
