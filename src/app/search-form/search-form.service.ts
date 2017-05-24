import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SearchService {

    querySearchChanged: Subject<string> = new Subject<string>();

    constructor(private http: Http) { }

    header: Headers = new Headers({
        'Content-Type': 'application/json'
    })

    getInfo() {
        return this.http.get('https://sandbox-de210.firebaseio.com/data.json', { headers: this.header })
            .map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
            )
    }

    public storeInfo(data: any) {
        return this.http.put('https://sandbox-de210.firebaseio.com/data.json', data, { headers: this.header });
    }

    // query search params
    updateQuerySearch(value) {
        this.querySearchChanged.next(value);
    }
}
