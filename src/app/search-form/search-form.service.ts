import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { properties } from '../shared/variables.const';
import 'rxjs/Rx';

@Injectable()
export class SearchService {

    querySearchChanged: Subject<string> = new Subject<string>();
    filterParamsChanged: Subject<string> = new Subject<string>();
    languagesChanged: Subject<string[]> = new Subject<string[]>();
    regionsChanged: Subject<string[]> = new Subject<string[]>();
    resultChanged: Subject<string[]> = new Subject<string[]>();
    searchQuery: any = {};
    filterParams: any = {};
    languages: string[];
    regions: string[];

    constructor(
        private http: Http,
        private router: Router,
        private route: ActivatedRoute) {
        for (let param in this.route.snapshot.queryParams) {
            if (param !== 'search') {
                this.filterParams[param] = route.snapshot.queryParams[param];
            }
            this.filterParamsChanged.next(this.filterParams);
        }
    }

    header: Headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    })

    getInfo(name) {
        return this.http.get('https://restcountries.eu/rest/v2/name/' + name, { headers: this.header })
            .map(
            (response: Response) => {
                const data = response.json();
                // subset the response data to out properties
                let subsetData = [];
                data.forEach((element) => {
                    const subset = properties.reduce((a, e) => (a[e] = element[e], a), {});
                    subsetData.push(subset);
                })
                this.setLanguages(subsetData);
                this.languagesChanged.next(this.languages);
                this.setRegions(subsetData);
                this.regionsChanged.next(this.regions);
                return subsetData;
            }
            )
    }

    public setCountries(countries: any) {
        this.resultChanged.next(countries);
    }

    setLanguages(data) {
        const languages = data.map(country => country.language);
        this.languages = data.map(country => country.language).filter(function (item, pos) {
            return languages.indexOf(item) == pos;
        });
    }

    setRegions(data) {
        const regions = data.map(country => country.region);
        this.regions = data.map(country => country.region).filter(function (item, pos) {
            return regions.indexOf(item) == pos;
        });
    }

    // query search params
    updateQuerySearch(value) {
        this.searchQuery = value
        this.querySearchChanged.next(this.searchQuery);
    }

    // query search params
    updateFilterParams(propName, value) {
        this.filterParams[propName] = value;
        this.filterParamsChanged.next(this.filterParams);
        // this.router.navigate([''], { relativeTo: this.route, queryParams: this.filterParams });
    }
}
