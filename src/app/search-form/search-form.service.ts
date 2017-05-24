import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SearchService {
    constructor(private http: Http) { }

    getInfo() {
        const header = new Headers({
            'Content-Type': 'application/json'
        })
        return this.http.get('https://sandbox-de210.firebaseio.com/data.json', { headers: header });
    }

    public storeInfo(info: any) {
        // return this.http.put('https://sandbox-de210.firebaseio.com/data.json', info);
    }
}