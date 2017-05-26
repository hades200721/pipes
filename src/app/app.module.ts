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
import { ResultItemComponent } from './result-body/result-item/result-item.component';
import { SearchService } from './search-form/search-form.service';
import { EmptyContentComponent } from './empty-content/empty-content.component';
import { ResultBodyComponent } from './result-body/result-body.component';

const appRoutes: Routes = [
  { path: 'no-countries', component: EmptyContentComponent },
  { path: '**', component: ResultBodyComponent },
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
    ResultItemComponent,
    EmptyContentComponent,
    ResultBodyComponent
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
