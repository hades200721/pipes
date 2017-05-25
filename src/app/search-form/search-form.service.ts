import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SearchService {

    querySearchChanged: Subject<string> = new Subject<string>();
    filterParamsChanged: Subject<string> = new Subject<string>();
    languagesChanged: Subject<string[]> = new Subject<string[]>();
    continentesChanged: Subject<string[]> = new Subject<string[]>();
    searchQuery: any = {};
    filterParams: any = {};
    languages: string[];
    continentes: string[];

    constructor(private http: Http) { }

    header: Headers = new Headers({
        'Content-Type': 'application/json'
    })

    getInfo() {
        return this.http.get('https://sandbox-de210.firebaseio.com/data.json', { headers: this.header })
            .map(
            (response: Response) => {
                const data = response.json();
                this.setLanguages(data);
                this.languagesChanged.next(this.languages);
                this.setContinentes(data);
                this.continentesChanged.next(this.continentes);
                return data;
            }
            )
    }

    public storeInfo(data: any) {
        return this.http.put('https://sandbox-de210.firebaseio.com/data.json', data, { headers: this.header });
    }

    setLanguages(data) {
        const languages = data.map( country => country.language );
        this.languages = data.map(country => country.language).filter(function (item, pos) {
            return languages.indexOf(item) == pos;
        });
    }
    
    setContinentes(data) {
        const continentes = data.map( country => country.continent );
        this.continentes = data.map(country => country.continent).filter(function (item, pos) {
            return continentes.indexOf(item) == pos;
        });
    }

    // query search params
    updateQuerySearch(value) {
        this.searchQuery = value
        this.querySearchChanged.next(this.searchQuery);
    }

    // query search params
    updateFilterParams(propName, value) {
        this.filterParams[propName] = value
        this.filterParamsChanged.next(this.filterParams);
    }
}
